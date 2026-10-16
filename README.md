# Terminator: Liquid Metal

A single-file arcade fan game inspired by Terminator 2: Judgment Day. Sneak through crowds, protect John Connor, or hunt him as the T-1000 across the Galleria, storm drain, Pescadero, and steel mill.

**[Play in your browser](https://mstefanko.github.io/terminator-game/)**

Use a desktop browser with a mouse and keyboard. The layout fits phone-sized screens, but full touch gameplay controls are not implemented yet. Click or press a key to start and enable audio. The game draws its own pixel art, embeds the cinematic portraits, and synthesizes its soundtrack; no installation or asset downloads are needed.

## Controls

Each level's briefing shows the controls for that character and encounter.

| Action | Control |
| --- | --- |
| Move / aim | Mouse |
| Main attack | Left mouse button |
| Special ability | Right mouse button |
| T-800 shove in crowd levels | Q |
| Use held item | E |
| Cycle John's items | Q |
| Context action (call, slide, surge) | Space |
| Pause / ability help | P |
| Mute / unmute | N |
| Skip a cinematic | Hold Enter or Escape |

Crowd levels spell out **RIGHT CLICK** in the briefing and show a four-second reminder above the action. The reminder fades away or disappears as soon as the ability is used. Press **P** to check its action and remaining uses; there is no permanent special-ability box over the game.

On the storm drain, the T-800 has unlimited M79 grenades on right click, E, or Space, with a short reload. Hold left click to brake and aim; hit the truck during an attack for double damage.

The cardboard box protects John from enemy attacks. A standing T-1000 can break it on contact; frozen, downed, or reforming enemies cannot. Breaking or expiring shows a warning and gives one second to escape. Steel-mill fire and environmental hazards still hurt through the box.

Sarah unlocks after completing the game. Progress and high scores are saved in your browser on that device; opening a local copy and the hosted game uses separate saves.

## Run locally

Open `index.html` in a modern browser. The game is self-contained, with no build step, packages, server, or API keys.

## Publish updates

Edit `index.html`, commit, and push to `main`. GitHub Pages publishes from the root of that branch. `.nojekyll` keeps the deployment as plain static files.

This is an unofficial fan project, unaffiliated with the Terminator rights holders.
