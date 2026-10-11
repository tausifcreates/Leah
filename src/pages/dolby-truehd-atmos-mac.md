---
layout: ../layouts/Page.astro
title: Dolby TrueHD and Atmos on Mac
seoTitle: "Play Dolby TrueHD and Atmos on Mac: Lossless MKV Audio"
description: "How to play Dolby TrueHD and Dolby Atmos audio from MKV files on a Mac: lossless 7.1 sound, what happens to Atmos, and why TrueHD can be silent."
---

# How to play Dolby TrueHD and Atmos on a Mac

Dolby TrueHD is the lossless surround sound on Blu-ray discs, often with Dolby Atmos on top. Blu-ray rips in MKV files usually keep it. QuickTime Player doesn't open MKV files, and macOS's built-in video player doesn't decode TrueHD, so on a Mac you need a player that decodes TrueHD itself.

## What plays in Leah

| TrueHD track | In Leah |
|---|---|
| Dolby TrueHD, stereo to 7.1 | Plays in up to 7.1 channels, exactly as it was recorded |
| Dolby TrueHD with Dolby Atmos | Plays as 7.1, with sounds from above mixed into the other channels |
| A track that switches between 5.1 and 7.1, as some discs do between the studio logos and the film | Keeps playing as the layout changes |

TrueHD is lossless: the sound Leah plays is the same, sample for sample, as the sound that was encoded.

## About Dolby Atmos

A TrueHD track with Atmos carries a full 7.1 mix, plus extra information that places sounds above you. Leah plays the 7.1 mix. The overhead sounds are mixed into its channels, so you still hear them, from the 7.1 speakers instead of from above.

## Play a TrueHD track in Leah

Open the MKV file in [Leah](/). Leah decodes TrueHD itself, so there's nothing to install or set up. It plays the sound through your Mac's sound output as decoded audio. It doesn't pass the TrueHD stream through to an AV receiver to decode.

If the file has more than one audio track, Leah plays the one the file marks as the default. To make a different track the default, you can change the file's track settings with a tool such as MKVToolNix.

## If there's no sound

- **Check the track's format.** A tool such as MediaInfo shows each track's format. If the default track is Vorbis or a DTS Express commentary, Leah plays the video without sound. See [Formats Leah plays](formats).
- **Check the output.** Make sure your Mac's volume is up and sound is going to the speakers or headphones you expect in System Settings > Sound.

See also [MKV has no sound on Mac](mkv-no-sound-mac) and [DTS audio on Mac](dts-on-mac).

## Get Leah

Leah is a video player for Macs with Apple silicon and macOS 15 or later. It also plays DTS, Dolby Digital and Dolby Digital Plus, and Blu-ray PGS subtitles. Get it on the [Mac App Store](https://apps.apple.com/app/id6816698102).
