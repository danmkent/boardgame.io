/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { InitializeGame } from '../core/initialize';
import { MAKE_MOVE, GAME_EVENT } from '../core/action-types';
import { makeMove } from '../core/action-creators';
import { Simulate, Bot, RandomBot, MCTSBot } from './bot';
import { Game } from '../core/game';
import { Stage } from '../core/turn-order';

function IsVictory(cells) {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pos of positions) {
    const symbol = cells[pos[0]];
    let winner = symbol;
    for (let i of pos) {
      if (cells[i] != symbol) {
        winner = null;
        break;
      }
    }
    if (winner != null) return true;
  }

  return false;
}

const TicTacToe = Game({
  setup: () => ({
    cells: new Array(9).fill(null),
  }),

  moves: {
    clickCell(G, ctx, id) {
      const cells = [...G.cells];
      if (cells[id] === null) {
        cells[id] = ctx.currentPlayer;
      }
      return { ...G, cells };
    },
  },

  turn: { moveLimit: 1 },

  endIf: (G, ctx) => {
    if (IsVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }

    if (G.cells.filter(t => t == null).length == 0) {
      return { draw: true };
    }
  },
});

const enumerate = (G, ctx, playerID) => {
  let r = [];
  for (let i = 0; i < 9; i++) {
    if (G.cells[i] === null) {
      r.push(makeMove('clickCell', [i], playerID));
    }
  }
  return r;
};

describe('Simulate', () => {
  const bots = {
    '0': new RandomBot({ seed: 'test', enumerate }),
    '1': new RandomBot({ seed: 'test', enumerate }),
  };

  test('multiple bots', () => {
    const state = InitializeGame({ game: TicTacToe });
    const { state: endState } = Simulate({ game: TicTacToe, bots, state });
    expect(endState.ctx.gameover).not.toBe(undefined);
  });

  test('single bot', () => {
    const bot = new RandomBot({ seed: 'test', enumerate });
    const state = InitializeGame({ game: TicTacToe });
    const { state: endState } = Simulate({
      game: TicTacToe,
      bots: bot,
      state,
      depth: 10,
    });
    expect(endState.ctx.gameover).not.toBe(undefined);
  });

  test('with activePlayers', () => {
    const game = Game({
      moves: {
        A: G => {
          G.moved = true;
        },
      },
      turn: {
        activePlayers: { player: Stage.NULL },
      },
      endIf: G => G.moved,
    });

    const bot = new RandomBot({
      seed: 'test',
      enumerate: () => [makeMove('A')],
    });

    const state = InitializeGame({ game });
    const { state: endState } = Simulate({
      game,
      bots: bot,
      state,
      depth: 1,
    });
    expect(endState.ctx.gameover).not.toBe(undefined);
  });
});

describe('Bot', () => {
  test('random', () => {
    const b = new Bot({});
    expect(b.random()).toBeGreaterThanOrEqual(0);
    expect(b.random()).toBeLessThan(1);
  });

  test('enumerate - makeMove', () => {
    const enumerate = () => [makeMove('move')];
    const b = new Bot({ enumerate });
    expect(b.enumerate()[0].type).toBe(MAKE_MOVE);
  });

  test('enumerate - translate to makeMove', () => {
    const enumerate = () => [{ move: 'move' }];
    const b = new Bot({ enumerate });
    expect(b.enumerate()[0].type).toBe(MAKE_MOVE);
  });

  test('enumerate - translate to gameEvent', () => {
    const enumerate = () => [{ event: 'endTurn' }];
    const b = new Bot({ enumerate });
    expect(b.enumerate()[0].type).toBe(GAME_EVENT);
  });

  test('enumerate - unrecognized', () => {
    const enumerate = () => [{ unknown: true }];
    const b = new Bot({ enumerate });
    expect(b.enumerate()).toEqual([undefined]);
  });
});

describe('MCTSBot', () => {
  test('defaults', () => {
    const b = new MCTSBot({ game: TicTacToe });
    expect(b.iterations()).toBe(1000);
    expect(b.playoutDepth()).toBe(50);
  });

  test('game that never ends', () => {
    const game = {};
    const state = InitializeGame({ game });
    const bot = new MCTSBot({ seed: 'test', game, enumerate: () => [] });
    const { state: endState } = Simulate({ game, bots: bot, state });
    expect(endState.ctx.turn).toBe(1);
  });

  test('RandomBot vs. MCTSBot', () => {
    const bots = {
      '0': new RandomBot({ seed: 'test', enumerate, playerID: '0' }),
      '1': new MCTSBot({
        iterations: 200,
        seed: 'test',
        game: TicTacToe,
        enumerate,
        playerID: '1',
      }),
    };

    const initialState = InitializeGame({ game: TicTacToe });

    for (let i = 0; i < 5; i++) {
      const state = initialState;
      const { state: endState } = Simulate({ game: TicTacToe, bots, state });
      expect(endState.ctx.gameover).not.toEqual({ winner: '0' });
    }
  });

  test('MCTSBot vs. MCTSBot', () => {
    const initialState = InitializeGame({ game: TicTacToe });
    const iterations = 400;

    for (let i = 0; i < 5; i++) {
      const bots = {
        '0': new MCTSBot({
          seed: i,
          game: TicTacToe,
          enumerate,
          playerID: '0',
          iterations,
          playoutDepth: 50,
        }),
        '1': new MCTSBot({
          seed: i,
          game: TicTacToe,
          enumerate,
          playerID: '1',
          iterations,
        }),
      };
      const state = initialState;
      const { state: endState } = Simulate({ game: TicTacToe, bots, state });
      expect(endState.ctx.gameover).toEqual({ draw: true });
    }
  });

  test('with activePlayers', () => {
    const game = Game({
      setup: () => ({ moves: 0 }),
      moves: {
        A: G => {
          G.moves++;
        },
      },
      turn: {
        activePlayers: { player: Stage.NULL },
      },
      endIf: G => G.moves > 5,
    });

    const bot = new MCTSBot({
      seed: 'test',
      game,
      enumerate: () => [makeMove('A')],
    });

    const state = InitializeGame({ game });
    const { state: endState } = Simulate({
      game,
      bots: bot,
      state,
      depth: 10,
    });
    expect(endState.ctx.gameover).not.toBe(undefined);
  });

  test('objectives', () => {
    const objectives = () => ({
      'play-on-square-0': {
        checker: G => G.cells[0] !== null,
        weight: 10.0,
      },
    });

    const state = InitializeGame({ game: TicTacToe });

    for (let i = 0; i < 10; i++) {
      const bot = new MCTSBot({
        iterations: 200,
        seed: i,
        game: TicTacToe,
        enumerate,
        objectives,
        playerID: '0',
      });

      const { action } = bot.play(state, '0');
      expect(action.payload.args).toEqual([0]);
    }
  });

  test('iterations & playout depth settings', () => {
    const state = InitializeGame({ game: TicTacToe });

    // jump ahead in the game because the example iterations
    // and playoutDepth functions are based on the turn
    state.ctx.turn = 8;

    const { turn, currentPlayer } = state.ctx;

    const enumerateSpy = jest.fn(enumerate);

    const bot = new MCTSBot({
      game: TicTacToe,
      enumerate: enumerateSpy,
      iterations: (G, ctx) => ctx.turn * 100,
      playoutDepth: (G, ctx) => ctx.turn * 10,
    });

    expect(bot.iterations(null, { turn }, currentPlayer)).toBe(turn * 100);
    expect(bot.playoutDepth(null, { turn }, currentPlayer)).toBe(turn * 10);

    // try the playout() function which requests the playoutDepth value
    bot.playout({ state });

    expect(enumerateSpy).toHaveBeenCalledWith(
      state.G,
      state.ctx,
      currentPlayer
    );

    // then try the play() function which requests the iterations value
    enumerateSpy.mockClear();

    bot.play(state, currentPlayer);

    expect(enumerateSpy).toHaveBeenCalledWith(
      state.G,
      state.ctx,
      currentPlayer
    );
  });
});
