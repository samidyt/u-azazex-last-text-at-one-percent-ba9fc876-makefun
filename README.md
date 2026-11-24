# Last Text at One Percent

make.fun bounty entry: [Last Text at One Percent](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)

## The entry

> 1%. this is my resignation, effective immediately. 4 years, zero thank-yous. you thanked siri. SIRI. the wifi password dies with me. bye.

137 characters, one line. The phone quits its job on its last percent of
battery — unappreciated for four years, thanked Siri instead of it, and takes
the wifi password with it.

## How it works

`main.ts` (Node 22+, no dependencies) writes that one fixed text to
`/output/entry.txt`, after a self-check that it satisfies the bounty gate:
UTF-8, 1–200 characters, not only whitespace, exactly one line. The output
is fully deterministic — same bytes on every run.

```sh
node main.ts
cat /output/entry.txt
```

## Why this line

Judged head-to-head on joke first, then voice, then economy. The entry
carries two beats in one coherent arc (the unappreciated employee resigning
and taking the wifi password), stays in the phone's voice from the first word
to the last, and dodges the obvious low-battery puns — no charger love
letters, no "goodbye cruel world".

## License

MIT — see [LICENSE](LICENSE).

[![make.fun · u-azazex-last-text-at-one-percent-ba9fc876](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/samidyt/u-azazex-last-text-at-one-percent-ba9fc876-makefun/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/samidyt/u-azazex-last-text-at-one-percent-ba9fc876-makefun/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)
