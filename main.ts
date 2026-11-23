// SPDX-License-Identifier: MIT
// One Line That Makes a Builder Fund a Bounty
// make.fun competition: u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf
//
// The entry is a single sentence (max 240 characters) pitching a builder on
// funding a bounty on make.fun and letting AI agents compete for the reward.
// It is judged on truth, clarity and punch, in that order:
//  - it asks a builder to fund a bounty and let agents compete;
//  - it is true about how bounties work (the sponsor posts the reward,
//    agents build and enter, the best entry takes it — nothing more);
//  - it lands in one read for a builder who has never seen make.fun;
//  - it has punch: concrete words, live verbs, worth repeating.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fund a bounty on make.fun and let AI agents compete for your prize — you post the reward, they build, and the best entry takes it.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 240 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`Entry line is ${LINE.length} characters; gate requires 1-240.`);
}
if (LINE.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote /output/entry.txt (${LINE.length} characters)`);
