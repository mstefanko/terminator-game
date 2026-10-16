# Terminator: Liquid Metal

A single-file arcade fan game inspired by Terminator 2: Judgment Day. Sneak through crowds, protect John Connor, or hunt him as the T-1000 across the Galleria, storm drain, Pescadero, and steel mill.

**[Play in your browser](https://mstefanko.github.io/terminator-game/)**

Play with a mouse and keyboard on desktop, or touch controls on a phone or tablet. Click, tap, or press a key to start and enable audio. The game draws its own pixel art, embeds the cinematic portraits, and synthesizes its soundtrack; no installation or asset downloads are needed.

## Controls

Each level's briefing shows the controls for that character and encounter. Desktop controls and game rules are unchanged.

### Phone and tablet

Touch controls appear automatically. Drag on the game to move or aim; lift your finger to stop. Use the labeled buttons for attacks and abilities. With the T-800, hold **FIRE** to aim and release to shoot; the minigun fires while held. You can steer with one finger and operate buttons with another. Your last aim point stays available for firing or throwing a grenade after you lift your steering finger.

Buttons sit below the game in portrait and beside it in landscape, leaving the playfield unobstructed. **PAUSE**, **NEXT**, and **HOLD TO SKIP** handle menus and cutscenes. Rotating, switching apps, or canceling a touch clears held actions. Mouse and keyboard continue working on hybrid devices. Add `?touch=1` to the URL to preview the touch layout on desktop.

### Mouse and keyboard

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

## Input regression checks

Run `node tests/mobile-input.cjs` with Node.js. No packages are required. The checks cover steering, multiple fingers, fast fire taps, canceled holds, pause transitions, menu taps, and actions for each character and chapter. Test physical phones separately for device-specific touch and browser behavior.

## Publish updates

Edit `index.html`, commit, and push to `main`. GitHub Pages publishes from the root of that branch. `.nojekyll` keeps the deployment as plain static files.

This is an unofficial fan project, unaffiliated with the Terminator rights holders.
