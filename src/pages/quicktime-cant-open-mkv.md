---
layout: ../layouts/Page.astro
title: QuickTime Can't Open MKV
seoTitle: "QuickTime Can't Open MKV Files on Mac: What to Do"
description: "Why QuickTime Player can't open MKV files on a Mac, and three ways to watch them: use a player that plays MKV, remux the file to MP4, or convert it."
---

# QuickTime can't open MKV files: what to do

QuickTime Player plays MP4, MOV and M4V files, but it doesn't open MKV (Matroska) files. MKV is a container: one file that holds a video track, one or more audio tracks and subtitles. Movies and TV episodes, especially Blu-ray and DVD rips, often come as MKV files.

There are three ways to watch an MKV file on a Mac.

## 1. Open it in a player that plays MKV

This is the quickest way, and it keeps every audio and subtitle track as it is.

[Leah](/) is a video player for the Mac that plays MKV and WebM files with H.264, HEVC, MPEG-2, VP9 and AV1 video, Dolby TrueHD, DTS and Dolby Digital audio, and SRT, ASS, PGS and VobSub subtitles. See [Formats Leah plays](formats). IINA and VLC, two free players, also open MKV files. See [Leah vs IINA](leah-vs-iina) and [Leah vs VLC](leah-vs-vlc).

## 2. Remux it to MP4

Remuxing moves the tracks from the MKV file into an MP4 file without re-encoding them, so it's fast and keeps the quality. Tools such as ffmpeg and Subler can do it.

It only helps if QuickTime can play the formats inside. Audio such as DTS and Dolby TrueHD, and Blu-ray PGS subtitles, still won't play in QuickTime after remuxing.

## 3. Convert it

A converter such as HandBrake re-encodes the video and audio into formats QuickTime plays. It works with almost any file, but it takes time, the result loses some quality, and surround sound or picture subtitles may not carry over.

## Make MKV files open in Leah

To have videos open in Leah when you double-click them, click **Make Leah your default video player** at the bottom of the Leah window and confirm. You can also select an MKV file in the Finder, choose File > Get Info, choose Leah under Open with, then click Change All.

## Get Leah

Leah is a video player for Macs with Apple silicon and macOS 15 or later, on the [Mac App Store](https://apps.apple.com/app/id6816698102).
