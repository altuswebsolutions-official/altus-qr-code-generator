![Altus QR Code Generator — Free WordPress Plugin](banner.png)

# Altus QR Code Generator — Free WordPress Plugin

**A free QR code generator for WordPress: turn any website link, text, email, phone number, SMS or Wi-Fi login into a scannable QR code — in your brand colours, with PNG + SVG downloads and an honest contrast warning before you print, all generated in the visitor's browser with no account needed.**

> **⬇️ Download now:** get the latest release zip from the [**Releases page**](../../releases) → WordPress → Plugins → Add New → Upload Plugin → Install Now → Activate → add the shortcode `[altus_qr_generator]` to any page.

![License: GPLv2 or later](https://img.shields.io/badge/License-GPLv2%20or%20later-blue.svg)
![WordPress 5.8+](https://img.shields.io/badge/WordPress-5.8%2B-blue.svg)
![PHP 7.4+](https://img.shields.io/badge/PHP-7.4%2B-blue.svg)
![No account needed](https://img.shields.io/badge/Account-not%20needed-brightgreen.svg)

**Keywords people search for:** free qr code generator, qr code generator wordpress plugin, make qr code free, qr code maker online, wifi qr code generator, qr code for small business, free qr code generator uk, qr code generator png svg, scan qr code wifi, custom colour qr code.

## What it does

A QR code is the shortest distance between the physical world and your website. A customer points their phone at a little square on your counter, your van or your flyer — and they are on your booking page, your menu or your reviews. No typing a web address, no spelling your Wi-Fi password letter by letter, no "find us on Google".

Altus QR Code Generator makes that square properly. A visitor picks what the code should contain — a website link, plain text, an email address, a phone number, an SMS with a pre-written message, or full Wi-Fi login details — and the preview updates live as they type. They style it in their own colours, choose a print-ready PNG size or an infinitely scalable SVG, and download it. The tool even warns them when their chosen colours are too similar to scan reliably — the trap most free generators never mention, discovered only after printing 500 flyers.

Everything is generated inside the visitor's browser using a bundled, MIT-licensed QR encoding engine. No CDNs, no uploads, and — in this open-source version — no email gate: the full result is shown on screen, free.

## Who it is for

- **Small-business owners** who want QR codes for their shop window, till, menu, van, business card or flyer — without paying for a generator or signing up anywhere.
- **Cafés, restaurants, salons and waiting rooms** — one QR code on the counter and guests join the Wi-Fi without asking for the password.
- **Trades and mobile businesses** — one code on the van and people land straight on the quote form or reviews page.
- **Freelancers, web designers and agencies** who want a free, embeddable QR tool for their own site or a client's site.

## The problem it solves

Most business QR codes are an afterthought: tiny, grey, linking to a homepage nobody asked for — or worse, printed in brand colours with so little contrast that phones simply cannot read them. A QR code that does not scan is worse than no QR code: the customer tries once, nothing happens, and they never scan your codes again.

Paid generators solve this by charging a monthly fee, watermarking downloads, or holding the high-resolution file hostage behind an account. This plugin gives you the whole job free, on your own WordPress site: six content types, brand colours with a real contrast check, print-ready PNG up to 2048 px and a designer-friendly SVG, with nothing leaving the visitor's browser.

## Features — and why each one matters

### Six content types, one tool

- **Website** — paste a link; the tool adds the `https://` if you forget it and validates the address. Why it matters: a link is the most common QR use, and a mistyped or incomplete URL is the easiest way to print a dead code.
- **Text** — any message, address or discount code, up to 2,000 characters. Why it matters: not every QR code needs to open a web page — a plain-text code on a ticket, label or notice does the job with no website at all.
- **Email** — scanning opens a new email already addressed to you. Why it matters: perfect for menus, receipts and "contact us" cards, where the customer should reach you in one tap.
- **Phone** — scanning offers to call the number straight away. Why it matters: on a van, a site board or a business card, a tap-to-call code removes the one step between seeing your number and ringing you.
- **SMS** — a mobile number plus an optional pre-written message ("Hi! I'd like to book…"). Why it matters: customers texting first is often the lowest-friction enquiry a small business can offer, and the message is already written for them.
- **Wi-Fi** — network name, password, security type (WPA / WPA2, WEP, or open network) and a hidden-network option, encoded to the standard Wi-Fi QR format with proper escaping of `;`, `:`, `,` and `\`. Why it matters: guests scan and join instantly — no typing the password, no framed card by the till, no staff interrupted every ten minutes.

### Live preview that updates as you type

- **Instant preview** — the QR code redraws about 160 ms after each keystroke. Why it matters: you see exactly what you are getting, mistakes and all, before you download anything.
- **Info line under the preview** — shows the QR version, module count and character count (for example "Version 3 · 29×29 modules · 29 characters"). Why it matters: it tells you at a glance how dense the code is — a denser code needs to be printed larger to scan reliably.
- **Plain-English validation** — empty fields, invalid addresses, bad phone numbers and over-long content are rejected with a clear message instead of producing a broken code. Why it matters: a broken QR code is worse than no code — the customer taps, nothing works, and the code is lost for good.

### Brand colours — with an honest contrast warning

- **Colour pickers plus one-click presets** — QR colour presets in dark navy, black, Altus blue and dark brown; background presets in white, light grey, dark navy and black. Why it matters: a QR code that looks like part of your brand gets printed and displayed; a default black square gets forgotten in a drawer.
- **Real WCAG contrast check** — the tool computes the relative contrast ratio of your two colours as you work and warns you when it drops below 2. Why it matters: this is the trap most generators never mention. Dark code on a light background scans; light grey on white, or brand colours that are too close together, often does not — and you only find out after the print run.
- **Quiet-zone toggle** — the plain white border scanners need to find the code's edges, kept on by default. Why it matters: cropping the quiet zone is one of the five classic reasons a printed code will not scan. Turn it off only if your designer insists.

### Print-ready downloads

- **Download PNG** — at 512 px for the web, 1024 px for crisp print, or 2048 px for large print. Why it matters: print runs need a real high-resolution file, not a screenshot — flyers, signage, van livery and packaging all work from the PNG.
- **Download SVG** — a hand-built vector export that stays perfectly sharp at any size. Why it matters: give the SVG to your designer or printer and they can scale it to a shop window without a single jagged edge.
- **Error correction, L to H** — Low (smaller code), Medium (recommended), High (survives damage) and Maximum (for print wear). Why it matters: higher levels let the code still scan even if part of it is scratched, dirty or covered by a sticker — essential for anything that lives outdoors or gets handled.

### Private by design

- **100% client-side generation** — the QR encoding engine (qrcode-generator 1.4.4 by Kazuhiko Arase, MIT licence) is bundled in the plugin; there are no CDNs and nothing is uploaded. Why it matters: your links, Wi-Fi passwords and phone numbers never leave the visitor's device. In this open-source version there is no server endpoint at all — no database table, no email, no file written on the server.

## How it works

1. Add the shortcode `[altus_qr_generator]` to a page.
2. A visitor picks a tab — Website, Text, Email, Phone, SMS or Wi-Fi — and fills in the boxes. The preview updates live as they type.
3. They set their brand colours (watching the contrast warning), choose a PNG size, set the error-correction level, and keep the quiet zone on.
4. They download the PNG (up to 2048 px) or the SVG — and print one test copy and scan it with their own phone before the full print run.

Everything happens in the browser. No account, no email address, no data sent anywhere.

## Installation (2 minutes, from the release zip)

1. Download the latest `altus-qr-code-generator-v1.0.1.zip` from the [**Releases page**](../../releases).
2. In WordPress, go to **Plugins → Add New → Upload Plugin**, choose the zip, click **Install Now**, then **Activate**.
3. Create or edit a page and add the shortcode: `[altus_qr_generator]`
4. Publish the page. Done — visitors can generate QR codes from it.

## Frequently asked questions

**Is the QR Code Generator really free?**
Yes. Every QR code, every download (PNG and SVG) and every colour combination is free, with no account needed.

**What can I put in a QR code?**
Website links, plain text, email addresses, phone numbers, SMS messages and Wi-Fi login details. Pick the tab that matches, fill in the boxes, and the preview updates as you type.

**Will my QR code expire?**
No. A QR code is just your information encoded as a pattern — there is no account, no subscription and nothing to renew. It works as long as the thing it points to works, so link to pages you plan to keep.

**What size should I print my QR code?**
Bigger than you think. As a rule of thumb, do not go smaller than 2 × 2 cm, and scale up with scanning distance — a code on a van needs to be much larger than one on a business card, because people scan it from metres away. When in doubt, print a test and scan it with your own phone first.

**Why won't my QR code scan?**
The usual culprits, in order: colours without enough contrast (dark on light wins), printed too small, the quiet zone (border) cropped off, or a damaged or blurry print. This generator warns you about the contrast problem before you download — test-scan every print run with your phone before committing.

**Can I put my logo in the middle of a QR code?**
This tool does not add a logo — and for good reason: a logo covers data modules and damages readability. If you must overlay one, use the highest error-correction setting and test-scan extensively. For most small businesses, a clean code next to your logo works better than a compromised code under it.

**How do I track scans?**
The code itself does not count scans. The practical workaround: point it at a dedicated landing page (for example `yoursite.co.uk/scan-offer`) and watch that page's visits in your analytics — you will know exactly how the code is performing.

**Is my information uploaded to your servers?**
No. The QR code is generated entirely inside your browser on your own device. Your links, passwords and details never leave the device.

## Honest limits

- A QR code is only as good as its destination: link to pages you plan to keep — a printed code cannot be edited later, so never point one at a limited-time offer page you will delete.
- The tool does not embed logos in the centre of codes, and it does not count scans. Point codes at dedicated landing pages if you want scan numbers.
- Very long content makes denser codes that need to be printed larger; the tool caps input at 2,000 characters and warns you when a code is getting hard to scan.
- A code printed too small, with weak contrast, without its quiet zone, or from a blurry image will not scan reliably — always test-scan a printed copy with your own phone, in real light, at real distance, before a big print run.
- This plugin generates codes; it does not host, redirect or manage them after they are printed.

## Changelog

### 1.0.1

First public release (stripped open-source version). Six content types (Website, Text, Email, Phone, SMS, Wi-Fi); live preview with version/module/character info; brand colours with WCAG contrast warning; quiet-zone toggle; error correction L–H; PNG downloads at 512/1024/2048 px and SVG download; plain-English validation; bundled qrcode-generator 1.4.4 engine. Email gate, lead storage and email sending removed — the full result is shown on screen. Small fix vs the Altus original: the sample phone placeholder now uses a neutral example number.

## What data does this tool handle?

This GitHub version contains NO lead capture, NO email sending, and NO data storage — results are shown on screen only. The version hosted on altuswebsolutions.com may offer email delivery; this open-source version does not. The visitor's links, text, phone numbers and Wi-Fi details never leave their browser: there is no server endpoint in this version, no database table is created, no file is written on the server, and nothing is transmitted to any external service. The QR encoding engine is bundled locally in the plugin — no CDN is contacted.

## Disclaimer

This software is provided free of charge, "as is", WITHOUT warranty of any kind, express or implied, including but not limited to the warranties of merchantability and fitness for a particular purpose. The authors are NOT liable for any loss, damage or cost arising from the use of this software, including but not limited to wasted printing costs, unscannable codes, or lost business. Always back up your WordPress site before installing any plugin, and test new plugins on a staging site where possible. Always test-scan a printed QR code with your own phone before committing to a large print run.

## Licence

GPLv2 or later. See [LICENSE](LICENSE).
