---
layout: ../layouts/Page.astro
title: Formats Leah Plays
description: "Leah, a Mac video player, plays MKV and WebM with HEVC, VP9 and AV1 video, Dolby TrueHD, DTS and Dolby Digital audio, and PGS, VobSub and SRT subtitles."
---

# Formats Leah plays

Leah is a video player for the Mac. It plays MP4, MOV and M4V files, and every other video file your Mac can play. It also plays MKV (Matroska) and WebM files, which [QuickTime Player can't open](quicktime-cant-open-mkv).

## MKV and WebM at a glance

| Kind | Formats Leah plays in MKV and WebM |
|---|---|
| Video | H.264, HEVC (H.265), MPEG-2, MPEG-1, VP9, AV1 |
| Lossless audio | Dolby TrueHD (up to 7.1), FLAC, Apple Lossless (ALAC), PCM |
| Surround audio | Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), DTS (up to 5.1) |
| Other audio | AAC, Opus, MP3, MP2 |
| Subtitles in the file | SRT, ASS/SSA, WebVTT, Blu-ray PGS, DVD VobSub |
| Subtitle files | SRT, ASS, SSA, WebVTT (.vtt) |

## Video

| Format | Plays in Leah | Notes |
|---|---|---|
| H.264 (AVC) | Yes | Including interlaced video, deinterlaced as it plays |
| HEVC (H.265) | Yes | Including 10-bit and HDR |
| MPEG-2 | Yes | Video from DVDs and TV recordings |
| MPEG-1 | Yes | |
| VP9 | Yes | On Macs with Apple silicon |
| AV1 | Yes | On Macs with Apple M3 or later, which decode AV1 in hardware |
| VP8 | No | |
| MPEG-4 Part 2 (Xvid, DivX) | No | |

## Audio

| Format | Plays in Leah | Notes |
|---|---|---|
| Dolby TrueHD | Yes | Up to 7.1 channels, exactly as recorded. Dolby Atmos tracks play as 7.1, with sounds from above mixed into the other channels |
| Dolby Digital (AC-3) | Yes | 5.1 surround |
| Dolby Digital Plus (E-AC-3) | Yes | |
| DTS | Yes | Up to 5.1 channels. DTS-HD and DTS:X tracks play their 5.1 DTS core |
| DTS Express | No | Commentary tracks with no DTS core |
| FLAC, Apple Lossless, PCM | Yes | Lossless |
| AAC, Opus, MP3, MP2 | Yes | |
| Vorbis | No | The video plays without sound |

If an MKV file has more than one audio track, Leah plays the one the file marks as the default.

## Subtitles

| Format | Plays in Leah | Notes |
|---|---|---|
| SRT | Yes | In the file, or as a separate .srt file |
| ASS/SSA | Yes | Keeps italic, bold and underlined text and the subtitle's position, but not fonts, colors or animation |
| WebVTT | Yes | In the file, or as a separate .vtt file |
| PGS (Blu-ray) | Yes | Picture subtitles |
| VobSub (DVD) | Yes | Picture subtitles |
| MP4 text subtitles | Yes | |

A subtitle file next to the video with the same name, such as Movie.srt next to Movie.mkv, shows up on its own. Drag any other subtitle file onto the video to add it. Leah picks subtitles in your Mac's preferred language.

## Interlaced video

Video from DVDs, TV recordings and older camcorders is often interlaced. Leah deinterlaces it as it plays, so moving edges stay smooth instead of showing comb-like lines.

## Which Macs

Leah needs a Mac with Apple silicon and macOS 15 or later. It's on the [Mac App Store](https://apps.apple.com/app/id6816698102).

If a video won't play or has no sound, see [MKV has no sound on Mac](mkv-no-sound-mac) or [Leah Support](support).
