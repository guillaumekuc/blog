// Copies the Music Notebook engine (the music-notebook package's dist-lib/)
// to assets/js/music-notebook/, where posts load it. Runs after npm install;
// the copy is committed, so GitHub Pages builds without npm.
//   node _scripts/copy-music-notebook.mjs [source dir]
import { cpSync, existsSync, rmSync } from 'node:fs';

const from = process.argv[2] ?? 'node_modules/music-notebook/dist-lib';
const to = 'assets/js/music-notebook';

if (!existsSync(from)) {
  console.error(`No ${from}: run npm install first.`);
  process.exit(1);
}
rmSync(to, { recursive: true, force: true });
cpSync(from, to, { recursive: true });
console.log(`Copied ${from} to ${to}`);
