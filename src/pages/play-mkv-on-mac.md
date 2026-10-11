---
layout: ../layouts/Page.astro
title: How to Play MKV Files on Mac
seoTitle: "How to Play MKV Files on Mac: Video, Audio and Subtitles"
description: "Everything about playing MKV files on a Mac: why QuickTime can't open them, which player to use, and how to get the video, surround sound and subtitles working."
---

# How to play MKV files on a Mac

MKV files are common for movies and TV episodes, especially rips of Blu-ray discs and DVDs. A Mac can play them, but not with QuickTime Player, and not every player handles everything an MKV file can hold. This guide covers what's inside an MKV file, how to open one, and how to get each part working.

## What an MKV file is

MKV (Matroska) is a container: one file that holds several tracks. A typical movie in MKV has:

- **A video track**, such as H.264, HEVC (H.265), MPEG-2, VP9 or AV1.
- **One or more audio tracks**, such as Dolby TrueHD, DTS, Dolby Digital or AAC, often in several languages, plus commentaries.
- **Subtitle tracks**, as text (SRT, ASS/SSA, WebVTT) or as pictures (Blu-ray PGS, DVD VobSub).
- **Chapters and other details**, such as track names and languages, and which tracks play by default.

Whether a file plays well depends on the formats of these tracks, not on the .mkv extension. WebM is a close relative of MKV and works the same way.

## Why QuickTime can't open it

QuickTime Player plays MP4, MOV and M4V files, but it doesn't open MKV files. macOS's built-in video player also doesn't decode the surround sound formats most Blu-ray rips use, such as Dolby TrueHD and DTS. See [QuickTime can't open MKV](quicktime-cant-open-mkv) for every way around it.

## Step 1: Open the file in a player that plays MKV

The quickest way to watch an MKV file is a player that opens it as it is, keeping every audio and subtitle track.

[Leah](/) is a video player for the Mac that plays MKV and WebM files. Open a file by double-clicking it once Leah is your default video player, by dragging it onto the Leah window, or with File > Open. Leah needs a Mac with Apple silicon and macOS 15 or later.

IINA and VLC are two free players that also open MKV files. See [Leah vs IINA](leah-vs-iina) and [Leah vs VLC](leah-vs-vlc) for how they compare.

## Step 2: Check the video plays

| Video format | In Leah |
|---|---|
| H.264, HEVC (H.265), MPEG-2, MPEG-1 | Plays |
| VP9 | Plays on Macs with Apple silicon |
| AV1 | Plays on Macs with Apple M3 or later, which decode AV1 in hardware |
| VP8, MPEG-4 Part 2 (Xvid, DivX) | Doesn't play |

Video from DVDs, TV recordings and older camcorders is often interlaced. Leah deinterlaces it as it plays, so moving edges stay smooth instead of showing comb-like lines.

If Leah shows "This file can't be played," the file may use a video format Leah doesn't support, or it may be damaged or incomplete, for example if it didn't finish downloading.

## Step 3: Get the sound working

An MKV file that plays without sound almost always has audio in a format the player can't decode. In Leah:

| Audio format | In Leah | Guide |
|---|---|---|
| Dolby TrueHD, with or without Atmos | Plays in up to 7.1 channels, lossless. Atmos plays as 7.1 | [TrueHD and Atmos on Mac](dolby-truehd-atmos-mac) |
| DTS, DTS-HD Master Audio, DTS:X | Plays in up to 5.1 channels (the DTS core) | [DTS audio on Mac](dts-on-mac) |
| Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3) | Plays | |
| AAC, FLAC, Opus, Apple Lossless, PCM, MP3, MP2 | Plays | |
| Vorbis, DTS Express | Doesn't play; the video plays without sound | |

If a file has more than one audio track, Leah plays the one the file marks as the default. If there's still no sound, see [MKV has no sound on Mac](mkv-no-sound-mac).

## Step 4: Turn on subtitles

To choose a subtitle track in Leah, click the Subtitles button in the controls, or choose Playback > Subtitles. When a video opens, Leah shows the subtitles the file marks to be shown, or else subtitles in your Mac's preferred language.

- **Text subtitles** (SRT, ASS/SSA, WebVTT) inside the file show as text. Styled ASS subtitles keep their italic, bold and underlined text and their place on the screen.
- **Picture subtitles** from Blu-ray (PGS) and DVD (VobSub) inside the file show as the disc drew them. See [PGS and VobSub subtitles on Mac](pgs-vobsub-subtitles-mac).
- **Subtitle files** beside the video, such as Movie.srt next to Movie.mkv, show up on their own when they have the same name. Drag any other SRT, WebVTT, ASS or SSA file onto the video to add it.

## Step 5: Make MKV files open in your player

To have MKV files open in Leah when you double-click them, click **Make Leah your default video player** at the bottom of the Leah window and confirm. You can also select an MKV file in the Finder, choose File > Get Info, choose Leah under Open with, then click Change All.

## Other ways: remux or convert

If you need the file in QuickTime or another app that doesn't open MKV, you can remux it to MP4, which moves the tracks without re-encoding, or convert it with a tool such as HandBrake, which re-encodes it and takes longer. Formats QuickTime can't play, such as DTS and TrueHD audio and PGS subtitles, won't play there even after remuxing. See [QuickTime can't open MKV](quicktime-cant-open-mkv).

## All formats

For the full list of video, audio and subtitle formats Leah plays, see [Formats Leah plays](formats). For other questions, see the [Leah FAQ](faq).

## Get Leah

Leah is a fast video player for Macs with Apple silicon and macOS 15 or later, built for instant seeking, with a preview above the timeline. Get it on the [Mac App Store](https://apps.apple.com/app/id6816698102).
