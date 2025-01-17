## v0.33.2

#### Features

- [[18d9be5](https://github.com/nicolodavis/boardgame.io/commit/18d9be5)] Allowing support for both numbers and functions for MCTS bot iterations and playoutDepth (#475)
- [[901c746](https://github.com/nicolodavis/boardgame.io/commit/901c746)] feat: Apply `value` argument last in `setActivePlayers` (#489)

#### Bugfixes

- [[bed18ce](https://github.com/nicolodavis/boardgame.io/commit/bed18ce)] reintroduce InitializeGame in boardgame.io/core

## v0.33.1

#### Features

- [[6eb4ebd](https://github.com/nicolodavis/boardgame.io/commit/6eb4ebd)] rewrite one of the snippets in Svelte
- [[86e65fe](https://github.com/nicolodavis/boardgame.io/commit/86e65fe)] fix: Move player to “next” stage on `endStage` (#484)

## v0.33.0

Huge release with a more streamlined API and the much
awaited feature: Stages!

Check out this [migration guide](https://nicolodavis.com/blog/boardgame.io-0.33/).

#### Features

- [[6762219](https://github.com/nicolodavis/boardgame.io/commit/6762219)] refactor: Change moveLimit syntax in setActivePlayers (#481)
- [[64971ee](https://github.com/nicolodavis/boardgame.io/commit/64971ee)] Disallow game names with spaces (#474)
- [[d43d239](https://github.com/nicolodavis/boardgame.io/commit/d43d239)] short form syntax for literal value in setActivePlayers
- [[462f452](https://github.com/nicolodavis/boardgame.io/commit/462f452)] allow all players to call events
- [[2409729](https://github.com/nicolodavis/boardgame.io/commit/2409729)] enable all events by default
- [[1261475](https://github.com/nicolodavis/boardgame.io/commit/1261475)] remove UI toolkit
- [[b2f5160](https://github.com/nicolodavis/boardgame.io/commit/b2f5160)] feat: Add `endStage` and `setStage` events (#458)
- [[ca61bf6](https://github.com/nicolodavis/boardgame.io/commit/ca61bf6)] feat: Support move limits in `setActivePlayers` (#452)
- [[ec15ad2](https://github.com/nicolodavis/boardgame.io/commit/ec15ad2)] TurnOrder.RESET
- [[d251f4a](https://github.com/nicolodavis/boardgame.io/commit/d251f4a)] set phase to null instead of empty string
- [[9c6f55d](https://github.com/nicolodavis/boardgame.io/commit/9c6f55d)] set currentPlayer to null instead of empty string
- [[da2f0ea](https://github.com/nicolodavis/boardgame.io/commit/da2f0ea)] add stages
- [[d5e2b55](https://github.com/nicolodavis/boardgame.io/commit/d5e2b55)] start turn at 1
- [[35a34a0](https://github.com/nicolodavis/boardgame.io/commit/35a34a0)] nest turns inside phases
- [[cff284b](https://github.com/nicolodavis/boardgame.io/commit/cff284b)] convert startingPhase into boolean option
- [[b9ce7f1](https://github.com/nicolodavis/boardgame.io/commit/b9ce7f1)] move event disablers inside separate section in config
- [[61eb8d8](https://github.com/nicolodavis/boardgame.io/commit/61eb8d8)] rename movesPerTurn to moveLimit
- [[3a97a16](https://github.com/nicolodavis/boardgame.io/commit/3a97a16)] make optimistic an option in long-form move syntax
- [[10ef457](https://github.com/nicolodavis/boardgame.io/commit/10ef457)] retire Game(). call it internally instead.
- [[3d46a4a](https://github.com/nicolodavis/boardgame.io/commit/3d46a4a)] rename endGameIf to endIf
- [[33ac684](https://github.com/nicolodavis/boardgame.io/commit/33ac684)] retire flow section
- [[d75fe44](https://github.com/nicolodavis/boardgame.io/commit/d75fe44)] move undoableMoves into boolean inside long form move syntax
- [[8924e84](https://github.com/nicolodavis/boardgame.io/commit/8924e84)] move redactedMoves into a boolean option in the long form move syntax
- [[4b202ee](https://github.com/nicolodavis/boardgame.io/commit/4b202ee)] long form move syntax
- [[f00e736](https://github.com/nicolodavis/boardgame.io/commit/f00e736)] rename some hooks
- [[19ca21f](https://github.com/nicolodavis/boardgame.io/commit/19ca21f)] move onTurnBegin/onTurnEnd/endTurnIf/movesPerTurn into turn object
- [[53b7ac7](https://github.com/nicolodavis/boardgame.io/commit/53b7ac7)] convert turnOrder into a turn object
- [[fa58e5b](https://github.com/nicolodavis/boardgame.io/commit/fa58e5b)] retire allowedMoves
- [[7a411c9](https://github.com/nicolodavis/boardgame.io/commit/7a411c9)] introduce namespaced moves that are defined within phases
- [[a0d5f36](https://github.com/nicolodavis/boardgame.io/commit/a0d5f36)] Surface game metadata and player nicknames in client / react props (#436)
- [[221b0d5](https://github.com/nicolodavis/boardgame.io/commit/221b0d5)] add benchmark

#### Bugfixes

- [[fd70ed5](https://github.com/nicolodavis/boardgame.io/commit/fd70ed5)] No payload is not an authentic player (#430)

## v0.32.1

#### Features

- [[9cff03e](https://github.com/nicolodavis/boardgame.io/commit/9cff03e)] Create play again endpoint (#428)

#### Bugfixes

- [[0a75e4b](https://github.com/nicolodavis/boardgame.io/commit/0a75e4b)] fix: Fix join/leave a room when playerID is 0 (#425)

## v0.32.0

#### Features

- [[2b98fb6](https://github.com/nicolodavis/boardgame.io/commit/2b98fb6)] change custom client transport to a constructor (#417)
- [[89faece](https://github.com/nicolodavis/boardgame.io/commit/89faece)] Rename playerCredentials to credentials for /leave endpoint, update src/lobby/connection.js accordingly (#416)
- [[25c2263](https://github.com/nicolodavis/boardgame.io/commit/25c2263)] Fix #345; restrict undo/redo to currentPlayer (#408)
- [[6de7b64](https://github.com/nicolodavis/boardgame.io/commit/6de7b64)] Add /rename endpoint for lobby (#414)

## v0.31.7

#### Features

- [[febb1c0](https://github.com/nicolodavis/boardgame.io/commit/febb1c0)] Check if required parameters are passed to API (#407)

#### Bugfixes

- [[a6145a5](https://github.com/nicolodavis/boardgame.io/commit/a6145a5)] upgrade koa and koa-body

## v0.31.6

#### Bugfixes

- [[5ad5c3f](https://github.com/nicolodavis/boardgame.io/commit/5ad5c3f)] Remove some secrets from client in multiplayer game (#400)
- [[3e50dca](https://github.com/nicolodavis/boardgame.io/commit/3e50dca)] Get specific instance of a room by its ID (#405)
- [[4964e3f](https://github.com/nicolodavis/boardgame.io/commit/4964e3f)] Creating lobby API config and making the UUID customizable (#396)
- [[efece0c](https://github.com/nicolodavis/boardgame.io/commit/efece0c)] Auto-add trailing slash to server only if needed (#403)
- [[f289379](https://github.com/nicolodavis/boardgame.io/commit/f289379)] Rename gameInstances to rooms (#402)
- [[1d5586c](https://github.com/nicolodavis/boardgame.io/commit/1d5586c)] export FlatFile in server.js
- [[eda9728](https://github.com/nicolodavis/boardgame.io/commit/eda9728)] update undo to reflect current ctx (#393)
- [[e46f195](https://github.com/nicolodavis/boardgame.io/commit/e46f195)] add turn and phase to log entries

## v0.31.5

#### Features

- [[3982150](https://github.com/nicolodavis/boardgame.io/commit/3982150)] synchronous mode for game master
- [[8732d9f](https://github.com/nicolodavis/boardgame.io/commit/8732d9f)] Add adminClient option for Firebase storage (#386)

#### Bugfixes

- [[8ed812e](https://github.com/nicolodavis/boardgame.io/commit/8ed812e)] handle default number of players bigger than 2 for 1st game of the list (#392)
- [[ec7dde5](https://github.com/nicolodavis/boardgame.io/commit/ec7dde5)] Don't leak undefined ctx properties from turnOrder.actionPlayers (#382)

## v0.31.4

#### Features

- [[3bde0ca](https://github.com/nicolodavis/boardgame.io/commit/3bde0ca)] Adding step props to the Board (#376)
- [[4c3056c](https://github.com/nicolodavis/boardgame.io/commit/4c3056c)] Making step accept a Promise from bot.play() (#375)

#### Bugfixes

- [[c24e0cd](https://github.com/nicolodavis/boardgame.io/commit/c24e0cd)] upgrade Expo and fix React Native example
- [[c1ee6f3](https://github.com/nicolodavis/boardgame.io/commit/c1ee6f3)] python bot: fix #379 (#380)

## v0.31.3

#### Features

- [[94b1d65](https://github.com/nicolodavis/boardgame.io/commit/94b1d65)] Add flatfile database with node-persist (#372)
- [[f6e70fd](https://github.com/nicolodavis/boardgame.io/commit/f6e70fd)] Add custom renderer parameter to lobby + clean up code (#353)

## v0.31.2

#### Features

- [[01a7e79](https://github.com/nicolodavis/boardgame.io/commit/01a7e79)] 3D Grid and Token (#352)
- [[1f33d43](https://github.com/nicolodavis/boardgame.io/commit/1f33d43)] Serve API and Game Server on same port with option to split (#343)

#### Bugfixes

- [[87d1e5b](https://github.com/nicolodavis/boardgame.io/commit/87d1e5b)] Changed default Firebase return value to undefined (#361)
- [[d7d6b44](https://github.com/nicolodavis/boardgame.io/commit/d7d6b44)] Fix lobby example (#351)
- [[a285fbf](https://github.com/nicolodavis/boardgame.io/commit/a285fbf)] Allow https urls to be passed to lobby (#350)

## v0.31.1

#### Bugfixes

- [[4a796dc](https://github.com/nicolodavis/boardgame.io/commit/4a796dc)] remove three from minified rollup bundle

## v0.31.0

#### Features

- [[a32d3d5](https://github.com/nicolodavis/boardgame.io/commit/a32d3d5)] Generic lobby (#294)
- [[fb19e9b](https://github.com/nicolodavis/boardgame.io/commit/fb19e9b)] move examples into a create-react-app package (#335)
- [[1f71bbd](https://github.com/nicolodavis/boardgame.io/commit/1f71bbd)] Upgrade Babel 7 (#332)

#### Bugfixes

- [[3334d38](https://github.com/nicolodavis/boardgame.io/commit/3334d38)] fix race condition in game instantiation inside onSync
- [[f544511](https://github.com/nicolodavis/boardgame.io/commit/f544511)] Allow result of onPhaseBegin to influence turn order (#341)
- [[e1c1f6b](https://github.com/nicolodavis/boardgame.io/commit/e1c1f6b)] fail integration test if any subcommand fails

## v0.30.0

#### Features

- [[6cf81e8](https://github.com/nicolodavis/boardgame.io/commit/6cf81e8)] create initial game state outside reducer
- [[8d08381](https://github.com/nicolodavis/boardgame.io/commit/8d08381)] add a loading component for multiplayer clients

#### Bugfixes

- [[d20d26c](https://github.com/nicolodavis/boardgame.io/commit/d20d26c)] make master write to proper namepspaced keys

## v0.29.5

#### Features

- [[7188222](https://github.com/nicolodavis/boardgame.io/commit/7188222)] add plugin.onPhaseBegin

## v0.29.4

#### Features

- [[c1b4a03](https://github.com/nicolodavis/boardgame.io/commit/c1b4a03)] add playerSetup option to PluginPlayer

## v0.29.3

#### Features

- [[da1eac6](https://github.com/nicolodavis/boardgame.io/commit/da1eac6)] rename plugin api functions
- [[659007a](https://github.com/nicolodavis/boardgame.io/commit/659007a)] pass game object to plugins

## v0.29.2

#### Bugfixes

- [[5d74c95](https://github.com/nicolodavis/boardgame.io/commit/5d74c95)] fix immer plugin order

## v0.29.1

#### Features

- [[ff749e3](https://github.com/nicolodavis/boardgame.io/commit/ff749e3)] add addTo / removeFrom to plugin API
- [[9df8145](https://github.com/nicolodavis/boardgame.io/commit/9df8145)] split plugin.setup into setupG and setupCtx
- [[d2d44f9](https://github.com/nicolodavis/boardgame.io/commit/d2d44f9)] rename plugin.wrapper to plugin.fnWrap
- [[ca5da32](https://github.com/nicolodavis/boardgame.io/commit/ca5da32)] Passing arbitrary data to game setup (#315)

## v0.29.0

#### Features

- [[d1bd1d1](https://github.com/nicolodavis/boardgame.io/commit/d1bd1d1)] Plugin API

## v0.28.1

#### Features

- [[10de6f8](https://github.com/nicolodavis/boardgame.io/commit/10de6f8)] Turn order active player changes (#320)
- [[58cbd1e](https://github.com/nicolodavis/boardgame.io/commit/58cbd1e)] Redact Log Events (#268)
- [[ed165a8](https://github.com/nicolodavis/boardgame.io/commit/ed165a8)] Add a server sync status field (#307)

#### Bugfixes

- [[b8ec845](https://github.com/nicolodavis/boardgame.io/commit/b8ec845)] package refactor
- [[2b5920f](https://github.com/nicolodavis/boardgame.io/commit/2b5920f)] Add Immer to other events (#327)
- [[873e1f5](https://github.com/nicolodavis/boardgame.io/commit/873e1f5)] server: fix name of property 'credentials' in server API handler for 'leave' (#326)

## v0.28.0

We now support an alternative style for moves that allows modifying `G` directly.
The old style is still supported.

#### Features

- [[6bdfb11](https://github.com/nicolodavis/boardgame.io/commit/6bdfb11)] add immer

#### Breaking Changes

`undefined` is no longer used to indicate invalid moves. Use the new `INVALID_MOVE`
constant to accomplish this.

```js
import { INVALID_MOVE } from 'boardgame.io/core';

const TicTacToe = Game({
  moves: {
    clickCell: (G, ctx, id) => {
      if (G.cells[id] !== null) {
        return INVALID_MOVE;
      }
      G.cells[id] = ctx.currentPlayer;
    },
  },
});
```

## v0.27.1

#### Features

- [[2d02558](https://github.com/nicolodavis/boardgame.io/commit/2d02558)] add TurnOrder.CUSTOM and TurnOrder.CUSTOM_FROM

#### Bugfixes

- [[8699350](https://github.com/nicolodavis/boardgame.io/commit/8699350)] Prohibit second log event during Update (#303)

## v0.27.0

This is a pretty exciting release with lots of goodies but
with some breaking changes, so make sure to read the section
at the end with tips on migration. The main theme in this
release is the reworking of Phases and Turn Orders to support
more complex game types and other common patterns like the
ability to quickly pop into a phase and back.

#### Features

- [[b7abc57](https://github.com/nicolodavis/boardgame.io/commit/b7abc57)] more turn orders
- [[5fb663a](https://github.com/nicolodavis/boardgame.io/commit/5fb663a)] allow calling setActionPlayers via TurnOrder objects
- [[53473ef](https://github.com/nicolodavis/boardgame.io/commit/53473ef)] change semantics of enabling/disabling events
- [[992416a](https://github.com/nicolodavis/boardgame.io/commit/992416a)] change format of args to endPhase and endTurn
- [[0568857](https://github.com/nicolodavis/boardgame.io/commit/0568857)] change phases syntax

#### Bugfixes

- [[96def53](https://github.com/nicolodavis/boardgame.io/commit/96def53)] add MONGO_DATABASE env variable (#290)

#### Breaking Changes

1. The syntax for phases has changed:

```
// old
phases: [
{ name: 'A', ...opts },
{ name: 'B', ...opts },
]

// new
phases: {
'A': { ...opts },
'B': { ...opts },
}
```

2. There is no implicit ordering of phases. You can specify an
   explicit order via `next` (optional). Note that this allows you to create
   more complex graphs of phases compared to the previous linear
   approach.

```
phases: {
'A': { next: 'B' },
'B': { next: 'A' },
}
```

Take a look at [phases.md](phases.md) to see how `endPhase`
determines which phase to move to.

3. A phase called `default` is always created. This is the phase
   that the game begins in. This is also the phase that the
   game reverts to in case it detects an infinite loop of
   `endPhase` events caused by a cycle.

You can have the game start in a phase different from `default`
using `startingPhase`:

```
flow: {
startingPhase: 'A',
phases: {
A: {},
B: {},
}
}
```

4. The format of the argument to `endPhase` or the return
   value of `endPhaseIf` is now an object of type `{ next: 'phase name' }`

```
// old
endPhase('new phase')
endPhaseIf: () => 'new phase'

// new
endPhase({ next: 'new phase' })
endPhaseIf: () => ({ next: 'new phase' })
```

5. The format of the argument to `endTurn` or the return
   value of `endTurnIf` is now an object of type `{ next: playerID }`

```
// old
endTurn(playerID)
endTurnIf: () => playerID

// new
endTurn({ next: playerID })
endTurnIf: () => ({ next: playerID })
```

6. The semantics of enabling / disabling events has changed
   a bit: see https://boardgame.io/#/events for more details.

7. TurnOrder objects now support `setActionPlayers` args.
   Instead of returning `actionPlayers` in `first` / `next`,
   add an `actionPlayers` section instead.

```
// old
{
first: (G, ctx) => {
playOrderPos: 0,
actionPlayers: [...ctx.playOrder],
}

next: (G, ctx) => {
playOrderPos: ctx.playOrderPos + 1,
actionPlayers: [...ctx.playOrder],
},
}

// new
{
first: (G, ctx) => 0,
next: (G, ctx) => ctx.playOrderPos + 1,
actionPlayers: { all: true },
}
```

## v0.26.3

#### Features

- [[d50015d](https://github.com/nicolodavis/boardgame.io/commit/d50015d)] turn order simulator

#### Bugfixes

- [[58e135b](https://github.com/nicolodavis/boardgame.io/commit/58e135b)] fix bug that was causing ctx.events to be undefined
- [[ea3754b](https://github.com/nicolodavis/boardgame.io/commit/ea3754b)] player needs to be in actionPlayers in order to call events

## v0.26.2

#### Features

- [[a352d1e](https://github.com/nicolodavis/boardgame.io/commit/a352d1e)] decouple once and allOthers

## v0.26.1

#### Bugfixes

- [[aa5f2cf](https://github.com/nicolodavis/boardgame.io/commit/aa5f2cf)] added the useNewUrlParser option to the Mongo connect() (#285)

## v0.26.0

#### Features

- [[e8f165a](https://github.com/nicolodavis/boardgame.io/commit/e8f165a)] server: add new API endpoints 'list' and 'leave' (#276)
- [[8ff4745](https://github.com/nicolodavis/boardgame.io/commit/8ff4745)] drag-n-drop for cards and decks
- [[a558092](https://github.com/nicolodavis/boardgame.io/commit/a558092)] return state as first argument to client.subscribe callback
- [[965f9b7](https://github.com/nicolodavis/boardgame.io/commit/965f9b7)] Allow to set payload onto a log event (#267)
- [[2efdbc1](https://github.com/nicolodavis/boardgame.io/commit/2efdbc1)] utils for working with hexagonal boards (#271)
- [[137dd7c](https://github.com/nicolodavis/boardgame.io/commit/137dd7c)] allow overriding client-side transport
- [[63311ac](https://github.com/nicolodavis/boardgame.io/commit/63311ac)] local game master
- [[0b7a0a0](https://github.com/nicolodavis/boardgame.io/commit/0b7a0a0)] add allOthers option to setActionPlayers (#269)

#### Bugfixes

- [[d1a1a8a](https://github.com/nicolodavis/boardgame.io/commit/d1a1a8a)] shouldEndPhase can see the results of onTurnEnd
- [[b4874a6](https://github.com/nicolodavis/boardgame.io/commit/b4874a6)] call the client subscribe callback after LogMiddleware has run
- [[9b9d735](https://github.com/nicolodavis/boardgame.io/commit/9b9d735)] reset deltalog properly

## v0.25.5

#### Features

- [[4ed6b94](https://github.com/nicolodavis/boardgame.io/commit/4ed6b94)] add server startup message
- [[1688639](https://github.com/nicolodavis/boardgame.io/commit/1688639)] decouple transport layer from server logic

## v0.25.4

#### Bugfixes

- Fixed babelHelpers error in npm.

## v0.25.3

Broken, do not use (complains about babelHelpers missing).

#### Bugfixes

- [[ebf7e73](https://github.com/nicolodavis/boardgame.io/commit/ebf7e73)] fix bug that was preventing playerID from being overriden by the debug ui

## v0.25.2

#### Bugfixes

- [[a42e07b](https://github.com/nicolodavis/boardgame.io/commit/a42e07b)] npm audit fix --only=prod
- [[cfe7296](https://github.com/nicolodavis/boardgame.io/commit/cfe7296)] update koa and socket.io

## v0.25.1

#### Bugfixes

- [[09b523e](https://github.com/nicolodavis/boardgame.io/commit/09b523e)] require mongo and firebase only if used

## v0.25.0

#### Features

- [[fe8a9d0](https://github.com/nicolodavis/boardgame.io/commit/fe8a9d0)] Added ability to specify server protocol (#247)
- [[43dcaac](https://github.com/nicolodavis/boardgame.io/commit/43dcaac)] write turn / phase stats in ctx.stats
- [[bd8208a](https://github.com/nicolodavis/boardgame.io/commit/bd8208a)] fabricate playerID in singleplayer mode
- [[b4e3e09](https://github.com/nicolodavis/boardgame.io/commit/b4e3e09)] { all: true } option for setActionPlayers
- [[5d3a34d](https://github.com/nicolodavis/boardgame.io/commit/5d3a34d)] { once: true } option for setActionPlayers
- [[75a274c](https://github.com/nicolodavis/boardgame.io/commit/75a274c)] rename changeActionPlayers to setActionPlayers
- [[4ec3a61](https://github.com/nicolodavis/boardgame.io/commit/4ec3a61)] end phase when a turn order runs out
- [[cb6111b](https://github.com/nicolodavis/boardgame.io/commit/cb6111b)] retire the string constant 'any'
- [[36fc47f](https://github.com/nicolodavis/boardgame.io/commit/36fc47f)] basic support for objective-based AI
- [[d1f0a3e](https://github.com/nicolodavis/boardgame.io/commit/d1f0a3e)] improved rendering of turns and phases in the log
- [[0bc31d6](https://github.com/nicolodavis/boardgame.io/commit/0bc31d6)] better MCTS visualization
- [[14a5ad7](https://github.com/nicolodavis/boardgame.io/commit/14a5ad7)] update redux to 4.0.0

#### Bugfixes

- [[84f07c6](https://github.com/nicolodavis/boardgame.io/commit/84f07c6)] Do not fabricate playerID for playerView
- [[c4a11a7](https://github.com/nicolodavis/boardgame.io/commit/c4a11a7)] ignore events from all but currentPlayer
- [[6a8b657](https://github.com/nicolodavis/boardgame.io/commit/6a8b657)] move mongodb and firebase deps to devDependencies
- [[239f8dd](https://github.com/nicolodavis/boardgame.io/commit/239f8dd)] Use parse/stringify from flatted lib to support circular structures (fixes #222) (#240)
- [[edd1df0](https://github.com/nicolodavis/boardgame.io/commit/edd1df0)] Differentiate automatic game events in the log
- [[570f40e](https://github.com/nicolodavis/boardgame.io/commit/570f40e)] don't render AI metadata if visualize is not specified
- [[a8431c7](https://github.com/nicolodavis/boardgame.io/commit/a8431c7)] set default RNG seed once per game, not game type
- [[5090429](https://github.com/nicolodavis/boardgame.io/commit/5090429)] API: check secret _before_ handling the request (#231)
- [[1a24791](https://github.com/nicolodavis/boardgame.io/commit/1a24791)] attach events API early so that it can be used on the first onTurnBegin
- [[acb9d8c](https://github.com/nicolodavis/boardgame.io/commit/acb9d8c)] enable events API in initial onTurnBegin/onPhaseBegin

#### Breaking Changes

- `changeActionPlayers` is now `setActionPlayers`. It also supports more advanced [options](http://boardgame.io/#/events?id=setactionplayers).
- Returning `undefined` from a `TurnOrder` results in the phase ending, not setting `currentPlayer` to `any`.
- Only the `currentPlayer` can call events (`endTurn`, `endPhase` etc.).

## v0.24.0

#### Features

- [[b28ee74](https://github.com/nicolodavis/boardgame.io/commit/b28ee74)] ability to change playerID from Debug UI
- [[fe1230e](https://github.com/nicolodavis/boardgame.io/commit/fe1230e)] Firebase integration (#223)

## v0.23.3

#### Bugfixes

- [[6194986](https://github.com/nicolodavis/boardgame.io/commit/6194986)] remove async/await from client code

## v0.23.2

#### Bugfixes

- [[7a61f09](https://github.com/nicolodavis/boardgame.io/commit/7a61f09)] make Random API present in first onTurnBegin and onPhaseBegin

#### Features

- [[99b9844](https://github.com/nicolodavis/boardgame.io/commit/99b9844)] Python Bots
- [[a7134a5](https://github.com/nicolodavis/boardgame.io/commit/a7134a5)] List available games API

## v0.23.1

#### Bugfixes

- [[f26328c](https://github.com/nicolodavis/boardgame.io/commit/f26328c)] add ai.js to rollup config

# v0.23

#### Features

- [[dda540a](https://github.com/nicolodavis/boardgame.io/commit/dda540a)] AI framework
- [[8e2f8c4](https://github.com/nicolodavis/boardgame.io/commit/8e2f8c4)] lobby API support (#189)

#### Bugfixes

- [[7a80f66](https://github.com/nicolodavis/boardgame.io/commit/7a80f66)] make changeActionPlayers an opt-in event
- [[40cd4b8](https://github.com/nicolodavis/boardgame.io/commit/40cd4b8)] Add config update on phase change Fixes #211 (#212)

## v0.22.1

#### Bugfixes

- [[bb39ca7](https://github.com/nicolodavis/boardgame.io/commit/bb39ca7)] fix bug that was causing isActive to return false
- [[81ed088](https://github.com/nicolodavis/boardgame.io/commit/81ed088)] ensure endTurn is called only once after a move
- [[ca9f6ca](https://github.com/nicolodavis/boardgame.io/commit/ca9f6ca)] disable move if playerID is null

# v0.22.0

#### Features

- [[5362955](https://github.com/nicolodavis/boardgame.io/commit/5362955)] React Native Client (#128)
- [[b329df2](https://github.com/nicolodavis/boardgame.io/commit/b329df2)] Pass through props (#173)

## v0.21.5

#### Bugfixes

- [[55715c9](https://github.com/nicolodavis/boardgame.io/commit/55715c9)] Fix undefined ctx in onPhaseBegin

## v0.21.4

#### Features

- [[387d413](https://github.com/nicolodavis/boardgame.io/commit/387d413)] Debug UI CSS improvements
- [[2105f46](https://github.com/nicolodavis/boardgame.io/commit/2105f46)] call endTurnIf inside endPhase
- [[9b0324c](https://github.com/nicolodavis/boardgame.io/commit/9b0324c)] allow setting the next player via endTurn
- [[f76f97e](https://github.com/nicolodavis/boardgame.io/commit/f76f97e)] correct isMultiplayer

#### Bugfixes

- [[278b369](https://github.com/nicolodavis/boardgame.io/commit/278b369)] Fix bug that was ending phase incorrectly (#176)

## v0.21.3

#### Features

- [[dc31a66](https://github.com/nicolodavis/boardgame.io/commit/dc31a66)] expose allowedMoves in ctx
- [[da4711a](https://github.com/nicolodavis/boardgame.io/commit/da4711a)] make allowedMoves both global and phase-specific
- [[9324c58](https://github.com/nicolodavis/boardgame.io/commit/9324c58)] Allowed moves as function (#164)

#### Bugfixes

- [[5e49448](https://github.com/nicolodavis/boardgame.io/commit/5e49448)] convert multiplayer move whitelist to blacklist

## v0.21.2

#### Bugfixes

- [[27705d5](https://github.com/nicolodavis/boardgame.io/commit/27705d5)] pass Events API correctly inside events.update

## v0.21.1

#### Bugfixes

- [[87e77c1](https://github.com/nicolodavis/boardgame.io/commit/87e77c1)] correctly detach APIs from ctx in startTurn

# v0.21

#### Features

- [[2ee244e](https://github.com/nicolodavis/boardgame.io/commit/2ee244e)] Reset Game (#155)
- [[9cd3fdf](https://github.com/nicolodavis/boardgame.io/commit/9cd3fdf)] allow to modify actionPlayers via Events (#157)
- [[767362f](https://github.com/nicolodavis/boardgame.io/commit/767362f)] endGame event
- [[78634ee](https://github.com/nicolodavis/boardgame.io/commit/78634ee)] Events API
- [[a240e45](https://github.com/nicolodavis/boardgame.io/commit/a240e45)] undoableMoves implementation (#149)
- [[c12e911](https://github.com/nicolodavis/boardgame.io/commit/c12e911)] Process only known moves (#151)
- [[7fcdbfe](https://github.com/nicolodavis/boardgame.io/commit/7fcdbfe)] Custom turn order (#130)
- [[748f36f](https://github.com/nicolodavis/boardgame.io/commit/748f36f)] UI: add mouse hover action props to grid, hex, and token (#153)
- [[f664237](https://github.com/nicolodavis/boardgame.io/commit/f664237)] Add notion of actionPlayers (#145)

## v0.20.2

#### Features

- [[43ba0ff](https://github.com/nicolodavis/boardgame.io/commit/43ba0ff)] allow optional redux enhancer (#139)
- [[dd6c110](https://github.com/nicolodavis/boardgame.io/commit/dd6c110)] Run endPhase event (analogue to endTurn) when game ends (#144)

#### Bugfixes

- [[8969433](https://github.com/nicolodavis/boardgame.io/commit/8969433)] Fix bug that was causing Random code to return the same numbers.

#### Breaking Changes

- The `Random` API is different. There is no longer a `Random` package
  that you need to import. The API is attached to the `ctx` parameter that
  is passed to the moves. Take a look at http://boardgame.io/#/random for
  more details.

## v0.20.1

#### Bugfixes

- [[06d78e2](https://github.com/nicolodavis/boardgame.io/commit/06d78e2)] Enable SSR
- [[ed09f51](https://github.com/nicolodavis/boardgame.io/commit/ed09f51)] Allow calling Random during setup
- [[c50d5ea](https://github.com/nicolodavis/boardgame.io/commit/c50d5ea)] fix log rendering of phases

# v0.20

#### Features

- [[eec8896](https://github.com/nicolodavis/boardgame.io/commit/eec8896)] undo/redo

# v0.19

#### Features

- MongoDB connector
  - [[eaa372f](https://github.com/nicolodavis/boardgame.io/commit/eaa372f)] add Mongo to package
  - [[63c3cdf](https://github.com/nicolodavis/boardgame.io/commit/63c3cdf)] mongo race condition checks
  - [[65cefdf](https://github.com/nicolodavis/boardgame.io/commit/65cefdf)] allow setting Mongo location using MONGO_URI
  - [[557b66c](https://github.com/nicolodavis/boardgame.io/commit/557b66c)] add run() to Server
  - [[2a85b40](https://github.com/nicolodavis/boardgame.io/commit/2a85b40)] replace lru-native with lru-cache
  - [[003fe46](https://github.com/nicolodavis/boardgame.io/commit/003fe46)] MongoDB connector

#### Breaking Changes

- `boardgame.io/server` no longer has a default export, but returns
  `Server` and `Mongo`.

```
// v0.19
const Server = require('boardgame.io/server').Server;
```

```
// v0.18
const Server = require('boardgame.io/server');
```

## v0.18.1

#### Bugfixes

[[0c894bd](https://github.com/nicolodavis/boardgame.io/commit/0c894bd)] add react.js to rollup config

# v0.18

#### Features

- [[4b90e84](https://github.com/nicolodavis/boardgame.io/commit/4b90e84)] decouple client from React

This adds a new package `boardgame.io/react`. Migrate all your
calls from:

```
import { Client } from 'boardgame.io/client'
```

to:

```
import { Client } from 'boardgame.io/react'
```

`boardgame.io/client` exposes a raw JS client that isn't tied
to any particular UI framework.

- Random API:

  - [[ebe7758](https://github.com/nicolodavis/boardgame.io/commit/ebe7758)] allow to throw multiple dice (#120)
  - [[8c88b70](https://github.com/nicolodavis/boardgame.io/commit/8c88b70)] Simplify Random API (#119)
  - [[45599e5](https://github.com/nicolodavis/boardgame.io/commit/45599e5)] Server-side array shuffling. (#116)
  - [[d296b36](https://github.com/nicolodavis/boardgame.io/commit/d296b36)] Random API (#103)

- [[f510b69](https://github.com/nicolodavis/boardgame.io/commit/f510b69)] onTurnBegin (#109)

#### Bugfixes

- [[6a010c8](https://github.com/nicolodavis/boardgame.io/commit/6a010c8)] Debug UI: fixes related to errors in arguments (#123)

## v0.17.2

#### Features

- [[0572210](https://github.com/nicolodavis/boardgame.io/commit/0572210)] Exposing Client connection status to board. (#97)
- [[c2ea197](https://github.com/nicolodavis/boardgame.io/commit/c2ea197)] make db interface async (#86)
- [[9e507ce](https://github.com/nicolodavis/boardgame.io/commit/9e507ce)] exclude dependencies from package

#### Bugfixes

- [[a768f1f](https://github.com/nicolodavis/boardgame.io/commit/a768f1f)] remove entries from clientInfo and roomInfo on disconnect

## v0.17.1

#### Features

- [[f23c5dd](https://github.com/nicolodavis/boardgame.io/commit/f23c5dd)] Card and Deck (#74)
- [[a21c1dd](https://github.com/nicolodavis/boardgame.io/commit/a21c1dd)] prevent endTurn when movesPerTurn have not been made

#### Bugfixes

- [[11e215e](https://github.com/nicolodavis/boardgame.io/commit/11e215e)] fix bug that was using the wrong playerID when calculating playerView

# v0.17.0

#### Features

- [[0758c7e](https://github.com/nicolodavis/boardgame.io/commit/0758c7e)] cascade endPhase
- [[cc7d44f](https://github.com/nicolodavis/boardgame.io/commit/cc7d44f)] retire triggers and introduce onMove instead
- [[17e88ce](https://github.com/nicolodavis/boardgame.io/commit/17e88ce)] convert events whitelist to boolean options
- [[e315b9e](https://github.com/nicolodavis/boardgame.io/commit/e315b9e)] add ui to NPM package
- [[5b34c5d](https://github.com/nicolodavis/boardgame.io/commit/5b34c5d)] remove pass event and make it a standard move
- [[f3da742](https://github.com/nicolodavis/boardgame.io/commit/f3da742)] make playerID available in ctx
- [[cb09d9a](https://github.com/nicolodavis/boardgame.io/commit/cb09d9a)] make turnOrder a globally configurable option

## v0.16.8

#### Features

- [[a482469](https://github.com/nicolodavis/boardgame.io/commit/a482469b2f6a317a50fb25f23b7ffc0c2f597c1e)] ability to specify socket server

#### Bugfixes

- [[2ab3dfc](https://github.com/nicolodavis/boardgame.io/commit/2ab3dfc6928eb8f0bfdf1ce319ac53021a2f905b)] end turn automatically when game ends

## v0.16.7

#### Bugfixes

- [[c65580d](https://github.com/nicolodavis/boardgame.io/commit/c65580d)] Fix bug introduced in af3a7b5.

## v0.16.6

#### Bugfixes

- [[af3a7b5](https://github.com/nicolodavis/boardgame.io/commit/af3a7b5)] Only process move reducers (on the client) and nothing else when in multiplayer mode.

Buggy fix (fixed in 0.16.7).

#### Features

- [[2721ad4](https://github.com/nicolodavis/boardgame.io/commit/2721ad4)] Allow overriding `db` implementation in Server.

## v0.16.5

#### Features

- `PlayerView.STRIP_SECRETS`

## v0.16.4

#### Bugfixes

- `endPhaseIf` is called after each move (in addition to at the end of a turn).
- `gameID` is namespaced on the server so that there are no clashes across game types.

#### Breaking Changes

- `props.game` is now `props.events` (to avoid confusing it with the `game` object).

```
// OLD
onClick() {
this.props.game.endTurn();
}

// NEW
onClick() {
this.props.events.endTurn();
}
```

## v0.16.3

#### Features

- Multiple game types per server!

#### Breaking Changes

- `Server` now accepts an array `games`, and no longer takes `game` and `numPlayers`.

```
const app = Server({
games: [ TicTacToe, Chess ]
};
```

## v0.16.2

#### Bugfixes

- [[a61ceca](https://github.com/nicolodavis/boardgame.io/commit/a61ceca8cc8e973d786678e1bcc7ec50739ebeaa)]: Log turn ends correctly (even when triggered automatically by `endTurnIf`)

#### Features

- [[9ce42b2](https://github.com/nicolodavis/boardgame.io/commit/9ce42b297372160f3ece4203b4c92000334d85e0)]: Change color in `GameLog` based on the player that made the move.

## v0.16.1

#### Bugfixes

- [[23d9726](https://github.com/nicolodavis/boardgame.io/commit/23d972677c6ff43b77d5c30352dd9959b517a93c)]: Fix bug that was causing `log` to be erased after `flow.processMove`.

#### Features

- [Triggers](https://github.com/nicolodavis/boardgame.io/commit/774e540b20d7402184a00abdb7c512d7c8e85995)
- [movesPerTurn](https://github.com/nicolodavis/boardgame.io/commit/73d5b73d00eaba9aaf73a3576dfcfb25fc2b311d)

# v0.16.0

#### Features

- [Phases](http://boardgame.io/#/phases)

#### Breaking Changes

- `boardgame.io/game` is now `boardgame.io/core`, and does not have a default export.
- `boardgame.io/client` no longer has a default export.

```
// v0.16
import { Game } from 'boardgame.io/core'
import { Client } from 'boardgame.io/client'
```

```
// v0.15
import Game from 'boardgame.io/game'
import Client from 'boardgame.io/client'
```

- `victory` is now `endGameIf`, and goes inside a `flow` section.
- The semantics of `endGameIf` are subtly different. The game ends if
  the function returns anything at all.
- `ctx.winner` is now `ctx.gameover`, and contains the return value of `endGameIf`.
- `props.endTurn` is now `props.game.endTurn`.

```

```

```

```
