import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I skipped that corner on purpose. It looked at me funny, and frankly, I don't clean for people who judge my suction.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
