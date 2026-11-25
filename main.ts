// The Robot Vacuum's Best Excuse — one-line excuse for missing a spot (max 140 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "That spot was not dirt, it was a crime scene, and I will not tamper with the evidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
