---
layout: ../layouts/Page.astro
title: MKV Has No Sound on Mac
description: "Why an MKV video has no sound on a Mac, and how to fix it. The audio is usually Dolby TrueHD, DTS or Dolby Digital, which many players can't decode."
---

# MKV has no sound on Mac: why it happens and how to fix it

An MKV file plays without sound on a Mac when the app playing it can't decode the file's audio format. The picture and the sound are separate tracks inside an MKV file, so a player can show the video while skipping audio it doesn't understand.

## The usual cause: the audio format

Movies and TV episodes in MKV files often carry surround sound in formats that macOS's built-in player doesn't decode inside MKV:

- **Dolby TrueHD**, the lossless surround format from Blu-ray discs, often with Dolby Atmos.
- **DTS**, including the DTS core of DTS-HD Master Audio and DTS:X tracks.
- **Dolby Digital (AC-3)** and **Dolby Digital Plus (E-AC-3)**.

[QuickTime Player doesn't open MKV files](quicktime-cant-open-mkv) on its own. Other players may open the file but play it silently, or play only some of these formats.

## How to check the audio format

A player that shows track details, or a tool such as MediaInfo, shows the audio format of each track. Look for the audio track's format: TrueHD, DTS, AC-3, E-AC-3, AAC, FLAC, Opus or Vorbis.

## How to fix it

1. **Use a player that decodes the format.** [Leah](/) plays Dolby TrueHD in up to 7.1 channels exactly as recorded, DTS in up to 5.1, and Dolby Digital, Dolby Digital Plus, AAC, FLAC, Opus, MP3 and Apple Lossless. See [Formats Leah plays](formats).
2. **Check the audio track.** Some files have more than one audio track, such as a main track and a commentary. A DTS Express commentary track, for example, has no DTS core and plays silently in Leah. See [DTS audio on Mac](dts-on-mac).
3. **Check the output.** Make sure your Mac's volume is up, the app isn't muted, and sound is going to the speakers or headphones you expect in System Settings > Sound.

## Formats that won't play in Leah

Vorbis audio, used in some MKV and WebM files, isn't supported. Leah plays such a video without sound. DTS Express commentary tracks don't play either.

## Get Leah

Leah is a video player for Macs with Apple silicon and macOS 15 or later, on the [Mac App Store](https://apps.apple.com/app/id6816698102).
