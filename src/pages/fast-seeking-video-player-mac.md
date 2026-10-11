---
layout: ../layouts/Page.astro
title: A video player for Mac with fast seeking
seoTitle: "Fast Seeking Video Player for Mac: Skip and Scrub Instantly"
description: "Leah is a video player for Mac built for fast seeking: a 5-second skip shows the new picture in about 30 ms, and the picture follows as you drag the timeline."
---

# A video player for Mac with fast seeking

Leah is a video player for the Mac built from the ground up for fast seeking. Skip, hold an arrow key or drag along the timeline, and the picture keeps up with you while the video plays. In Leah's own tests, a 5-second skip shows the new picture in about 30 milliseconds.

## How fast Leah seeks

In Leah's own tests on 1080p to 4K videos, on a Mac with Apple M1 Pro, a 5-second skip shows the new picture in about 30 milliseconds (the median), while the video keeps playing. At 60 frames per second, that's about two frames.

Files with long gaps between keyframes, as in some 4K recordings, can take longer. The next section explains why.

## Why seeking can be slow

Most videos store only some frames, called keyframes, as whole pictures. The frames between them are stored as changes from the frames around them. To show a point in the middle, a player has to start at the keyframe before it and decode every frame up to that point. The further apart the keyframes, the more work each jump takes.

Seeking fast means doing that work quickly and showing the new picture the moment it's ready, without stopping the video or the sound for longer than needed.

## Ways to move through a video in Leah

| To | Do this |
|---|---|
| Skip 5 seconds | Press the Left Arrow or Right Arrow key |
| Keep skipping | Hold the arrow key down. The sound comes back when you let go |
| Jump to any point | Drag along the timeline at the bottom of the window |
| Preview a point first | Hold the pointer over the timeline |
| Play or pause | Click the video, or press the Space bar |
| Skip from anywhere | Use Now Playing in Control Center |

All of these work while the video plays. You don't have to pause first.

## Compared with QuickTime Player

QuickTime Player, the player built into macOS, treats the arrow keys and gestures differently. According to [Apple's QuickTime Player guide](https://support.apple.com/guide/quicktime-player/keyboard-shortcuts-and-gestures-qtpa4808515d/mac):

- The Left Arrow and Right Arrow keys stop playback and step one frame.
- Swiping two fingers on a trackpad scrubs only while the video is paused. While it plays, the swipe skips instead.

QuickTime Player also can't open MKV files. See [QuickTime can't open MKV](quicktime-cant-open-mkv).

## Formats

Leah plays MP4, MOV and M4V files, and MKV and WebM files, including Blu-ray rips with Dolby TrueHD or DTS sound and PGS subtitles. Interlaced video from DVDs and TV recordings is deinterlaced as it plays. See [Formats Leah plays](formats) and [How to play MKV files on Mac](play-mkv-on-mac).

## What Leah needs

Leah needs a Mac with Apple silicon and macOS 15 or later. It costs $9.99, once, on the Mac App Store, and it never connects to the internet.

## Get Leah

Leah is on the [Mac App Store](https://apps.apple.com/app/id6816698102). See also [Features](features), [Leah vs IINA](leah-vs-iina) and [Leah vs VLC](leah-vs-vlc).

*QuickTime Player details are from Apple's QuickTime Player User Guide as of October 2026.*
