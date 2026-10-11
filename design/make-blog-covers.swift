// Makes the blog's cover pictures, static/blog/covers/<page>.webp, from the
// players' official icons in design/blog-icons/: flat background, icons at
// one size, labels in the system font. Needs cwebp (brew install webp).
//
// Run from the repository folder:  swift design/make-blog-covers.swift
//
// Icons: vlc.png from VideoLAN's VLC source, mpv.svg from mpv's source,
// infuse.png and elmedia.png from the App Store, movist-pro.png from
// movistprime.com, iina.png and leah.png saved from the installed apps with
// design/export-app-icon.swift. Dolby, DTS, Matroska and Apple logos are
// licensed trademarks, so those guides get Leah's icon and a text label.
import AppKit

let width = 1280.0, height = 720.0
let background = NSColor(srgbRed: 0xf6 / 255, green: 0xf8 / 255, blue: 0xfa / 255, alpha: 1)
let ink = NSColor(srgbRed: 0x24 / 255, green: 0x29 / 255, blue: 0x2e / 255, alpha: 1)
let muted = NSColor(srgbRed: 0x6a / 255, green: 0x73 / 255, blue: 0x7d / 255, alpha: 1)

/// An icon and how it fills its square: macOS app icons carry their own
/// margin, while plain logos (VLC's cone, mpv's disc) are drawn inside one.
struct Icon {
  let image: NSImage
  let inset: Double
  let squareArt: Bool
}

func load(_ name: String, inset: Double = 0, squareArt: Bool = false) -> Icon {
  guard let image = NSImage(contentsOfFile: "design/blog-icons/\(name)") else { fatalError("Missing design/blog-icons/\(name)") }
  return Icon(image: image, inset: inset, squareArt: squareArt)
}

let leah = load("leah.png")
let iina = load("iina.png")
let elmedia = load("elmedia.png")
let movist = load("movist-pro.png", inset: 0.03)
let infuse = load("infuse.png", squareArt: true)
let vlc = load("vlc.png", inset: 0.12)
let mpv = load("mpv.svg", inset: 0.12)

/// Draws an icon in a square. Square App Store artwork (Infuse) gets the
/// rounded shape, margin and shadow macOS gives app icons.
func draw(_ icon: Icon, x: Double, y: Double, size: Double) {
  let rect = NSRect(x: x, y: y, width: size, height: size)
  if icon.squareArt {
    let art = rect.insetBy(dx: size * 100 / 1024, dy: size * 100 / 1024)
    let shape = NSBezierPath(roundedRect: art, xRadius: art.width * 0.225, yRadius: art.width * 0.225)
    NSGraphicsContext.saveGraphicsState()
    let shadow = NSShadow()
    shadow.shadowColor = NSColor.black.withAlphaComponent(0.22)
    shadow.shadowBlurRadius = size * 0.03
    shadow.shadowOffset = NSSize(width: 0, height: -size * 0.01)
    shadow.set()
    NSColor.white.setFill()
    shape.fill()
    NSGraphicsContext.restoreGraphicsState()
    NSGraphicsContext.saveGraphicsState()
    shape.addClip()
    icon.image.draw(in: art)
    NSGraphicsContext.restoreGraphicsState()
  } else {
    icon.image.draw(in: rect.insetBy(dx: size * icon.inset, dy: size * icon.inset))
  }
}

func text(_ string: String, size: Double, weight: NSFont.Weight, color: NSColor) -> NSAttributedString {
  NSAttributedString(string: string, attributes: [.font: NSFont.systemFont(ofSize: size, weight: weight), .foregroundColor: color])
}

enum Cover {
  case versus(Icon, Icon)
  case labelled(String)
  case grid([Icon])
}

func render(_ cover: Cover) -> NSBitmapImageRep {
  let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: Int(width), pixelsHigh: Int(height), bitsPerSample: 8,
                             samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
                             colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
  NSGraphicsContext.saveGraphicsState()
  NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)
  NSGraphicsContext.current?.imageInterpolation = .high
  background.setFill()
  NSRect(x: 0, y: 0, width: width, height: height).fill()

  switch cover {
  case let .versus(a, b):
    let size = 320.0, gap = 150.0
    let left = (width - size * 2 - gap) / 2, y = (height - size) / 2
    draw(a, x: left, y: y, size: size)
    draw(b, x: left + size + gap, y: y, size: size)
    let vs = text("vs", size: 56, weight: .medium, color: muted)
    let s = vs.size()
    vs.draw(at: NSPoint(x: (width - s.width) / 2, y: (height - s.height) / 2))
  case let .labelled(label):
    let size = 300.0, gap = 48.0
    var fontSize = 96.0
    var label = text(label, size: fontSize, weight: .semibold, color: ink)
    while label.size().width > width - size - gap - 160 {
      fontSize -= 4
      label = text(label.string, size: fontSize, weight: .semibold, color: ink)
    }
    let s = label.size()
    let left = (width - size - gap - s.width) / 2
    draw(leah, x: left, y: (height - size) / 2, size: size)
    label.draw(at: NSPoint(x: left + size + gap, y: (height - s.height) / 2))
  case let .grid(icons):
    let size = 240.0, gapX = 70.0, gapY = 40.0, columns = 3
    let rows = (icons.count + columns - 1) / columns
    let top = (height + Double(rows) * size + Double(rows - 1) * gapY) / 2
    let left = (width - Double(columns) * size - Double(columns - 1) * gapX) / 2
    for (i, icon) in icons.enumerated() {
      let column = Double(i % columns), row = Double(i / columns)
      draw(icon, x: left + column * (size + gapX), y: top - size - row * (size + gapY), size: size)
    }
  }
  NSGraphicsContext.restoreGraphicsState()
  return rep
}

let covers: [String: Cover] = [
  "leah-vs-vlc": .versus(leah, vlc),
  "leah-vs-iina": .versus(leah, iina),
  "leah-vs-infuse": .versus(leah, infuse),
  "leah-vs-elmedia": .versus(leah, elmedia),
  "iina-alternatives": .grid([vlc, infuse, elmedia, movist, mpv, leah]),
  "play-mkv-on-mac": .labelled("MKV"),
  "mkv-no-sound-mac": .labelled("MKV audio"),
  "quicktime-cant-open-mkv": .labelled("Open MKV"),
  "dolby-truehd-atmos-mac": .labelled("TrueHD · Atmos"),
  "dts-on-mac": .labelled("DTS"),
  "pgs-vobsub-subtitles-mac": .labelled("PGS · VobSub"),
  "fast-seeking-video-player-mac": .labelled("Fast seeking"),
]

let out = URL(fileURLWithPath: "static/blog/covers", isDirectory: true)
try FileManager.default.createDirectory(at: out, withIntermediateDirectories: true)
let temp = FileManager.default.temporaryDirectory
for (slug, cover) in covers.sorted(by: { $0.key < $1.key }) {
  let png = temp.appendingPathComponent("\(slug).png")
  try render(cover).representation(using: .png, properties: [:])!.write(to: png)
  let cwebp = Process()
  cwebp.executableURL = URL(fileURLWithPath: "/usr/bin/env")
  cwebp.arguments = ["cwebp", "-quiet", "-q", "88", png.path, "-o", out.appendingPathComponent("\(slug).webp").path]
  try cwebp.run()
  cwebp.waitUntilExit()
  print("static/blog/covers/\(slug).webp")
}
