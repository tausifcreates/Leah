---
layout: ../layouts/Page.astro
title: PGS and VobSub Subtitles on Mac
seoTitle: "PGS and VobSub Subtitles on Mac: Blu-ray and DVD Subtitles"
description: "How to show Blu-ray PGS and DVD VobSub subtitles on a Mac: which players show them, how to choose a track, and what to do with separate .sup and .idx files."
---

# How to show PGS and VobSub subtitles on a Mac

Blu-ray discs carry their subtitles as PGS, and DVDs as VobSub. Both are pictures of the text rather than text, so a player has to draw them as images. Blu-ray and DVD rips in MKV files usually keep these subtitle tracks, and many players don't show them.

## PGS and VobSub at a glance

| | PGS | VobSub |
|---|---|---|
| Comes from | Blu-ray discs | DVDs |
| Inside an MKV file | A subtitle track | A subtitle track |
| As separate files | `.sup` | `.idx` and `.sub`, as a pair |
| Text or picture | Picture | Picture |

Because they're pictures, their font, size and color are set by the disc and can't be changed by the player.

## Show them in Leah

Open the MKV file in [Leah](/). To choose a subtitle track, click the Subtitles button in the controls, or choose Playback > Subtitles. Choose Off to hide subtitles.

When a video opens, Leah shows the subtitles the file marks to be shown, such as subtitles for scenes in another language. Otherwise, if the file has subtitles in your Mac's preferred language, Leah shows those. While the controls are showing, subtitles move up so the controls don't cover them.

Leah also shows SRT, ASS/SSA and WebVTT subtitles. See [Formats Leah plays](formats).

## Separate .sup, .idx and .sub files

Leah shows PGS and VobSub subtitles that are inside the MKV file. It doesn't open them as separate files; the subtitle files it opens beside a video are SRT, WebVTT, ASS and SSA.

To use a separate `.sup` file, or an `.idx` and `.sub` pair, with Leah, add it to the MKV file with a tool such as MKVToolNix. To turn picture subtitles into an SRT text file, use a tool that reads the text from the pictures (OCR), such as Subler.

## Other players

VLC and IINA, two free players, also show PGS and VobSub subtitles. See [Leah vs IINA](leah-vs-iina) and [Leah vs VLC](leah-vs-vlc).

For the rest of an MKV file, see [How to play MKV files on Mac](play-mkv-on-mac).

## Get Leah

Leah is a video player for Macs with Apple silicon and macOS 15 or later. It also plays Dolby TrueHD in up to 7.1 channels and DTS. Get it on the [Mac App Store](https://apps.apple.com/app/id6816698102).
