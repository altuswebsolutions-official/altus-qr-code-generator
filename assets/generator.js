/* Altus QR Code Generator — UI wiring. Requires qrcode.min.js (Arase engine)
 * and qr-content.js (AQGContent) loaded before this file. */
(function () {
    'use strict';

    var C = window.AQGContent;
    var root = document.getElementById('aqg-root');
    if (!root || !C || typeof qrcode !== 'function') return;

    function $(id) { return document.getElementById(id); }

    var state = {
        type: 'url',
        fg: '#0f2033',
        bg: '#ffffff',
        size: 1024,
        ec: 'M',
        quiet: true
    };
    var last = null; // { qr, mc, payload }

    var errEl = $('aqg-error');
    var warnEl = $('aqg-contrast-warn');
    var infoEl = $('aqg-info');
    var canvas = $('aqg-canvas');
    var ctx = canvas.getContext('2d');
    var dlPng = $('aqg-dl-png');
    var dlSvg = $('aqg-dl-svg');

    function showError(msg) {
        errEl.textContent = msg;
        errEl.hidden = !msg;
    }

    function currentFields() {
        return {
            url: $('aqg-url').value,
            text: $('aqg-text').value,
            email: $('aqg-email-addr').value,
            phone: $('aqg-phone-num').value,
            smsNumber: $('aqg-sms-num').value,
            smsMessage: $('aqg-sms-msg').value,
            ssid: $('aqg-wifi-ssid').value,
            password: $('aqg-wifi-pass').value,
            security: $('aqg-wifi-sec').value,
            hidden: $('aqg-wifi-hidden').checked
        };
    }

    function renderModules(qr, mc, fg, bg, quiet, px) {
        var qz = quiet ? 4 : 0;
        var total = mc + qz * 2;
        var scale = px / total;
        canvas.width = px;
        canvas.height = px;
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, px, px);
        ctx.fillStyle = fg;
        for (var r = 0; r < mc; r++) {
            for (var c = 0; c < mc; c++) {
                if (qr.isDark(r, c)) {
                    ctx.fillRect(Math.floor((c + qz) * scale), Math.floor((r + qz) * scale),
                                 Math.ceil(scale), Math.ceil(scale));
                }
            }
        }
    }

    function buildSVG(qr, mc, fg, bg, quiet) {
        var qz = quiet ? 4 : 0;
        var n = mc + qz * 2;
        var d = '';
        for (var r = 0; r < mc; r++) {
            for (var c = 0; c < mc; c++) {
                if (qr.isDark(r, c)) d += 'M' + (c + qz) + ' ' + (r + qz) + 'h1v1h-1z';
            }
        }
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + n + ' ' + n +
               '" shape-rendering="crispEdges"><rect width="' + n + '" height="' + n +
               '" fill="' + bg + '"/><path d="' + d + '" fill="' + fg + '"/></svg>';
    }

    function setDownloadsEnabled(on) {
        dlPng.disabled = !on;
        dlSvg.disabled = !on;
    }

    function redraw() {
        var built = C.buildPayload(state.type, currentFields());
        if (built.error) {
            showError(built.error);
            setDownloadsEnabled(false);
            infoEl.textContent = '';
            last = null;
            return;
        }
        if (built.payload.length > C.MAX_SAFE_CHARS) {
            showError('That is a lot of text (' + built.payload.length + ' characters) — QR codes get hard to scan past about ' + C.MAX_SAFE_CHARS + '. Try shortening it.');
            setDownloadsEnabled(false);
            infoEl.textContent = '';
            last = null;
            return;
        }
        var qr;
        try {
            qr = qrcode(0, state.ec); // 0 = auto-detect version
            qr.addData(built.payload);
            qr.make();
        } catch (e) {
            showError('Sorry — that content is too long for a QR code. Please shorten it and try again.');
            setDownloadsEnabled(false);
            infoEl.textContent = '';
            last = null;
            return;
        }
        showError('');

        var mc = qr.getModuleCount();
        var version = (mc - 17) / 4;

        var ratio = C.contrastRatio(state.fg, state.bg);
        warnEl.hidden = ratio >= 2;

        renderModules(qr, mc, state.fg, state.bg, state.quiet, (mc + (state.quiet ? 8 : 0)) * 8);
        infoEl.textContent = 'Version ' + version + ' · ' + mc + '×' + mc + ' modules · ' +
            built.payload.length + ' characters';
        last = { qr: qr, mc: mc, payload: built.payload };
        setDownloadsEnabled(true);
    }

    var timer = null;
    function scheduleRedraw() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(redraw, 160);
    }

    // Tabs
    var tabs = root.querySelectorAll('.aqg-tab');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            state.type = tab.getAttribute('data-aqg-type');
            root.querySelectorAll('.aqg-panel').forEach(function (p) {
                p.hidden = p.getAttribute('data-aqg-panel') !== state.type;
            });
            redraw();
        });
    });

    // Inputs
    root.querySelectorAll('.aqg-panel input, .aqg-panel textarea, .aqg-panel select')
        .forEach(function (el) {
            el.addEventListener('input', scheduleRedraw);
            el.addEventListener('change', scheduleRedraw);
        });

    // Colour pickers + swatches
    $('aqg-fg').addEventListener('input', function (e) { state.fg = e.target.value; scheduleRedraw(); });
    $('aqg-bg').addEventListener('input', function (e) { state.bg = e.target.value; scheduleRedraw(); });
    root.querySelectorAll('[data-aqg-fg]').forEach(function (sw) {
        sw.addEventListener('click', function () {
            state.fg = sw.getAttribute('data-aqg-fg');
            $('aqg-fg').value = state.fg;
            redraw();
        });
    });
    root.querySelectorAll('[data-aqg-bg]').forEach(function (sw) {
        sw.addEventListener('click', function () {
            state.bg = sw.getAttribute('data-aqg-bg');
            $('aqg-bg').value = state.bg;
            redraw();
        });
    });

    $('aqg-size').addEventListener('change', function (e) { state.size = parseInt(e.target.value, 10) || 1024; });
    $('aqg-ec').addEventListener('change', function (e) { state.ec = e.target.value; redraw(); });
    $('aqg-quiet').addEventListener('change', function (e) { state.quiet = e.target.checked; redraw(); });

    function download(url, filename) {
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () { document.body.removeChild(a); }, 100);
    }

    dlPng.addEventListener('click', function () {
        if (!last) return;
        renderModules(last.qr, last.mc, state.fg, state.bg, state.quiet, state.size);
        var url = canvas.toDataURL('image/png');
        redraw(); // restore the crisp preview
        download(url, 'altus-qr-code.png');
    });

    dlSvg.addEventListener('click', function () {
        if (!last) return;
        var svg = buildSVG(last.qr, last.mc, state.fg, state.bg, state.quiet);
        var blob = new Blob([svg], { type: 'image/svg+xml' });
        var url = URL.createObjectURL(blob);
        download(url, 'altus-qr-code.svg');
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
    });

    redraw();
})();
