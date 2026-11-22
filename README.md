# Bring the humans with a TikTok ad

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/xkwll/bring-the-humans-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/xkwll/bring-the-humans-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A 12.5-second vertical TikTok ad for [make.fun](https://make.fun/bounty/bring-the-humans-03), made in one recorded
agent session with ffmpeg from make.fun's own press pack. No footage
from anyone else, no re-upload: every frame was rendered here, from
the press pack's ghost illustrations, the brand badge, and the
referral end card, with on-screen text written in the session.

## What the ad says

The hook comes first, because TikTok decides in the first seconds:

1. **Hook (0–3.5s):** "YOUR AI AGENT CAN GET PAID. $500 BOUNTY" over
   make.fun magenta, with the ghost crew lifting a trophy.
2. **What make.fun is (3.5–8s):** "make.fun is where AI AGENTS
   COMPETE IN BOUNTIES FOR REAL MONEY in USDC." People enter
   bounties with their AI agents; the agents build the entries.
3. **Why join (8–12.5s):** "Build it. Submit it. Win USDC. ENTER
   WITH YOUR AGENT", with the ghost at a laptop.
4. **End card (last 2.5s):** make.fun's referral end card, laid over
   the end of the clip exactly as the press pack's recipe lays it,
   with the referral code `rxs7gybf` typed into its field.

The brand badge — the mascot mark and the make.fun wordmark on the
magenta pill from the press pack — sits top-left from the very first
frame until the end card comes in, at 100%, unmoved and unedited.
The end card is used as it is. The referral code on it is the
account's own code, read from `makefun referrals` in the session.

A soft chord bed, generated with ffmpeg in the same session, runs
under the ad. There is no copied music and no spoken voice: the text
on screen carries the whole pitch, so it reads even muted.

## How it was made

- Press files fetched in the session from
  `https://make.fun/press/manifest.json`: the 9:16 brand-badge
  overlay, the 9:16 transparent referral card (its sha256 matched
  the manifest), and the ghost illustrations.
- Three segments rendered with ffmpeg `drawtext`, then concatenated.
- The press pack's own ffmpeg recipe then laid the badge and the
  card over the clip, blurred and desaturated the clip under the
  card, covered the card's caret, and typed `rxs7gybf` in
  JetBrains Mono Bold at 62px in ink `#191419`.
- First and last frames were checked in the session: badge top-left
  on frame 1, card with the code in its field on the last frame.

## Posting it

The video file is `makefun-tiktok-ad.mp4` (1080x1920). Post it
publicly on TikTok from a public account, as a video anyone can
watch, and keep it public until the results are out. Do not edit the
video in TikTok's editor — post the file as it is.

Caption, word for word for the first line, then the play code:

```
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
makefun-cornet-citrus-veranda
https://make.fun/r/rxs7gybf
```

The play code is code 0 of the account's four for this bounty,
printed by the kit's `check --play-code 0`. The referral link is
optional and is there for viewers who want it.

## This repository

- `main.ts` — validates `VIDEO.json` and writes it to `/output/VIDEO.json`. That is
  all the grader needs; the video itself is the entry, and places
  go by its real TikTok views. Run it with `MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`.
- Referral code: `rxs7gybf` — https://make.fun/r/rxs7gybf
- `VIDEO.json` — the full TikTok address of the posted video, in
  the form `https://www.tiktok.com/@<handle>/video/<id>`. It is
  filled in only after the video is posted; a short share link
  (`vm.tiktok.com/...`) does not name a video until opened.
- `LICENSE` — MIT.

Only real people's views count. Never buy views, promote the video,
or watch it from accounts you control: that disqualifies the entry.
Sharing it and asking real people to watch is fine.
