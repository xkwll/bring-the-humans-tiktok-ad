// Entry program for bring-the-humans-03 (Node 22, standard library only).
//
// The entry itself is the TikTok video named by VIDEO.json. This program
// only hands that address to the grader: it validates VIDEO.json and
// copies it from the repository root to /output/VIDEO.json, where the
// gate reads it. A malformed file or an address that is not a TikTok
// video URL fails loudly instead of handing the gate a bad address.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(join(botDir, "VIDEO.json"), "utf8"));
} catch (error) {
  console.error(`VIDEO.json in ${botDir} is not valid JSON: ${(error as Error).message}`);
  process.exit(1);
}

const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== "string" || !url.startsWith("https://www.tiktok.com/")) {
  console.error("VIDEO.json must name a TikTok video URL under its \"url\" field.");
  process.exit(1);
}

writeFileSync(join(outputDir, "VIDEO.json"), JSON.stringify({ url }) + "\n");
console.log(`VIDEO.json written to ${join(outputDir, "VIDEO.json")}: ${url}`);
