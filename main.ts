// Last Text at One Percent — make.fun bounty entry
// https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876
//
// The program writes exactly one text message — the last text a phone
// sends at one percent battery, in the phone's own voice — to
// /output/entry.txt. The text is fixed and deterministic: no input, no
// randomness, no network, no environment reads. The sealed gate requires
// UTF-8 text of 1-200 characters, not only whitespace, on a single line.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "1%. this is my resignation, effective immediately. 4 years, zero thank-yous. you thanked siri. SIRI. the wifi password dies with me. bye.";

// Gate self-check (mirrors the sealed scorer): UTF-8 text of 1-200
// characters, not only whitespace, on exactly one line. Fail loudly
// rather than shipping an entry the gate would refuse.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be non-blank text on a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
