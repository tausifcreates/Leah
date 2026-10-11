---
layout: ../layouts/Page.astro
title: DTS Audio on Mac
seoTitle: "DTS Audio on Mac: Play DTS, DTS-HD and DTS:X in MKV"
description: "How to play DTS audio on a Mac: DTS, DTS-HD Master Audio and DTS:X tracks in MKV files, what plays and what doesn't, and why a DTS track can be silent."
---

# How to play DTS audio on a Mac

Movies and TV episodes in MKV files, especially Blu-ray rips, often carry DTS surround sound. QuickTime Player doesn't open MKV files, and macOS's built-in video player doesn't decode DTS, so on a Mac you need a player that decodes DTS itself.

## The kinds of DTS, and what plays in Leah

| DTS track | What it is | In Leah |
|---|---|---|
| DTS | Surround sound in up to 5.1 channels | Plays in up to 5.1 channels |
| DTS-HD Master Audio | Lossless audio built on a DTS core | Plays its 5.1 DTS core |
| DTS:X | Object-based audio built on a DTS core | Plays its 5.1 DTS core |
| DTS Express | A low-bitrate format used for commentary tracks, with no DTS core | Doesn't play |

DTS-HD and DTS:X tracks carry a regular DTS track inside them, called the core. Leah plays that core, without the extra channels or lossless detail the track adds on top.

## Play a DTS track in Leah

Open the MKV file in [Leah](/). Leah decodes DTS itself, so there's nothing to install or set up.

If the file has more than one audio track, Leah plays the one the file marks as the default. To make a different track the default, you can change the file's track settings with a tool such as MKVToolNix.

## If a DTS track plays without sound

- **It may be DTS Express.** Commentary tracks in DTS Express have no DTS core, so Leah plays the video without sound. Check the track's format with a tool such as MediaInfo.
- **It may not be DTS at all.** Leah doesn't play Vorbis audio, which some MKV and WebM files use. See [Formats Leah plays](formats).
- **Check the output.** Make sure your Mac's volume is up and sound is going to the speakers or headphones you expect in System Settings > Sound.

See also [MKV has no sound on Mac](mkv-no-sound-mac).

## Get Leah

Leah is a video player for Macs with Apple silicon and macOS 15 or later. It also plays Dolby TrueHD in up to 7.1 channels, Dolby Digital and Dolby Digital Plus. Get it on the [Mac App Store](https://apps.apple.com/app/id6816698102).
