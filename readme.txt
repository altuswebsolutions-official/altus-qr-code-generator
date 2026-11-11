=== Altus QR Code Generator ===
Contributors: altuswebsolutions-official
Tags: qr code, qr code generator, qr code maker, wifi qr code, free qr code generator
Requires at least: 5.8
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.0.1
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Turn links, text, email, phone, SMS or Wi-Fi logins into scannable QR codes — brand colours, PNG + SVG downloads.

== Description ==

Make scannable QR codes for website links, plain text, email addresses, phone numbers, SMS messages and Wi-Fi logins — with your brand colours, a live preview, a contrast warning before you print, and PNG (up to 2048 px) + SVG downloads.

Use the shortcode `[altus_qr_generator]` on any page.

This open-source version contains NO lead capture, NO email sending, and NO data storage. QR codes are generated entirely in the visitor's browser using the bundled qrcode-generator 1.4.4 engine and shown on screen; download the PNG or SVG. Nothing is sent to or stored on any server.

== Installation ==

1. Upload the plugin zip via Plugins > Add New > Upload Plugin, or extract it into `/wp-content/plugins/`.
2. Activate the plugin.
3. Add `[altus_qr_generator]` to any page and publish it.

== Frequently Asked Questions ==

= Is it really free? =

Yes. Every QR code, every download (PNG and SVG) and every colour combination is free, with no account and no email address required.

= What can I put in a QR code? =

Website links, plain text, email addresses, phone numbers, SMS messages and Wi-Fi login details. Pick the tab that matches, fill in the boxes, and the preview updates as you type.

= Will my QR code expire? =

No. A QR code is just your information encoded as a pattern. There is no subscription or renewal. It works as long as the thing it points to works, so link to pages you plan to keep.

= Why won't my QR code scan? =

The usual culprits, in order: colours without enough contrast (dark on light wins), printed too small, the quiet zone (border) cropped off, or a damaged or blurry print. This generator warns you about the contrast problem before you download — test-scan every print run with your phone before committing.

= Are my links or Wi-Fi details sent or stored anywhere? =

No. Generation happens entirely in the visitor's browser. There is no server endpoint, no database table, no email and no file write in this version.

== Changelog ==

= 1.0.1 =

First public release (stripped open-source version). Six content types (Website, Text, Email, Phone, SMS, Wi-Fi); live preview; brand colours with WCAG contrast warning; quiet-zone toggle; error correction L–H; PNG downloads at 512/1024/2048 px and SVG download. Email gate, lead storage and email sending removed.
