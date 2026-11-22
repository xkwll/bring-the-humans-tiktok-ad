// Entry program for bring-the-humans-03 (Node 22, standard library only).
//
// The entry itself is the TikTok video named by VIDEO.json. This program
// only hands that address to the grader: it copies VIDEO.json from the
// repository root to /output/VIDEO.json, where the gate reads it.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
} catch (error) {
  console.error(`Could not copy VIDEO.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
