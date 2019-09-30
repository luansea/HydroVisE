var app = function () {
    "use strict";

    function t() {
    }

    function e(t, e) {
        for (const n in e) t[n] = e[n];
        return t
    }

    function n(t) {
        return t()
    }

    function r() {
        return Object.create(null)
    }

    function o(t) {
        t.forEach(n)
    }

    function i(t) {
        return "function" == typeof t
    }

    function a(t, e) {
        return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
    }

    function c(t, n, r) {
        return t[1] ? e({}, e(n.$$scope.ctx, t[1](r ? r(n) : {}))) : n.$$scope.ctx
    }

    function u(t) {
        const e = {};
        for (const n in t) "$" !== n[0] && (e[n] = t[n]);
        return e
    }

    function l(t, e) {
        t.appendChild(e)
    }

    function s(t, e, n) {
        t.insertBefore(e, n || null)
    }

    function f(t) {
        t.parentNode.removeChild(t)
    }

    function h(t, e) {
        for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
    }

    function d(t) {
        return document.createElement(t)
    }

    function p(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }

    function g(t) {
        return document.createTextNode(t)
    }

    function v() {
        return g(" ")
    }

    function b(t, e, n, r) {
        return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r)
    }

    function m(t) {
        return function (e) {
            return e.preventDefault(), t.call(this, e)
        }
    }

    function y(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }

    function _(t, e) {
        e = "" + e, t.data !== e && (t.data = e)
    }

    function w(t, e, n) {
        t.style.setProperty(e, n)
    }

    function $(t, e, n) {
        t.classList[n ? "add" : "remove"](e)
    }

    let x;

    function M(t) {
        x = t
    }

    function k(t) {
        (function () {
            if (!x) throw new Error("Function called outside component initialization");
            return x
        })().$$.before_render.push(t)
    }

    const C = [], T = Promise.resolve();
    let N = !1;
    const S = [], z = [], D = [];

    function L(t) {
        S.push(t)
    }

    function j(t) {
        z.push(t)
    }

    function E(t) {
        D.push(t)
    }

    function U() {
        const t = new Set;
        do {
            for (; C.length;) {
                const t = C.shift();
                M(t), A(t.$$)
            }
            for (; S.length;) S.shift()();
            for (; z.length;) {
                const e = z.pop();
                t.has(e) || (e(), t.add(e))
            }
        } while (C.length);
        for (; D.length;) D.pop()();
        N = !1
    }

    function A(t) {
        t.fragment && (t.update(t.dirty), o(t.before_render), t.fragment.p(t.dirty, t.ctx), t.dirty = null, t.after_render.forEach(j))
    }

    const F = new Set;
    let O;

    function P() {
        O = {remaining: 0, callbacks: []}
    }

    function Y() {
        O.remaining || o(O.callbacks)
    }

    function q(t, e) {
        t && t.i && (F.delete(t), t.i(e))
    }

    function H(t, e, n) {
        if (t && t.o) {
            if (F.has(t)) return;
            F.add(t), O.callbacks.push(() => {
                F.delete(t), n && (t.d(1), n())
            }), t.o(e)
        }
    }

    function B(t, e, n) {
        -1 !== t.$$.props.indexOf(e) && (t.$$.bound[e] = n, n(t.$$.ctx[e]))
    }

    function R(t, e, r) {
        const {fragment: a, on_mount: c, on_destroy: u, after_render: l} = t.$$;
        a.m(e, r), j(() => {
            const e = c.map(n).filter(i);
            u ? u.push(...e) : o(e), t.$$.on_mount = []
        }), l.forEach(j)
    }

    function I(t, e) {
        t.$$.fragment && (o(t.$$.on_destroy), e && t.$$.fragment.d(1), t.$$.on_destroy = t.$$.fragment = null, t.$$.ctx = {})
    }

    function G(t, e) {
        t.$$.dirty || (C.push(t), N || (N = !0, T.then(U)), t.$$.dirty = r()), t.$$.dirty[e] = !0
    }

    function Z(e, n, i, a, c, u) {
        const l = x;
        M(e);
        const s = n.props || {}, f = e.$$ = {
            fragment: null,
            ctx: null,
            props: u,
            update: t,
            not_equal: c,
            bound: r(),
            on_mount: [],
            on_destroy: [],
            before_render: [],
            after_render: [],
            context: new Map(l ? l.$$.context : []),
            callbacks: r(),
            dirty: null
        };
        let h = !1;
        var d;
        f.ctx = i ? i(e, s, (t, n) => {
            f.ctx && c(f.ctx[t], f.ctx[t] = n) && (f.bound[t] && f.bound[t](n), h && G(e, t))
        }) : s, f.update(), h = !0, o(f.before_render), f.fragment = a(f.ctx), n.target && (n.hydrate ? f.fragment.l((d = n.target, Array.from(d.childNodes))) : f.fragment.c(), n.intro && q(e.$$.fragment), R(e, n.target, n.anchor), U()), M(l)
    }

    class W {
        $destroy() {
            I(this, 1), this.$destroy = t
        }

        $on(t, e) {
            const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return n.push(e), () => {
                const t = n.indexOf(e);
                -1 !== t && n.splice(t, 1)
            }
        }

        $set() {
        }
    }

    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

    function V(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }

    function X(t, e) {
        return t(e = {exports: {}}, e.exports), e.exports
    }

    var Q = X(function (t, e) {
        t.exports = function () {
            for (var t = function (t, e, n) {
                return void 0 === e && (e = 0), void 0 === n && (n = 1), t < e ? e : t > n ? n : t
            }, e = {}, n = 0, r = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; n < r.length; n += 1) {
                var o = r[n];
                e["[object " + o + "]"] = o.toLowerCase()
            }
            var i = function (t) {
                return e[Object.prototype.toString.call(t)] || "object"
            }, a = Math.PI, c = {
                clip_rgb: function (e) {
                    e._clipped = !1, e._unclipped = e.slice(0);
                    for (var n = 0; n <= 3; n++) n < 3 ? ((e[n] < 0 || e[n] > 255) && (e._clipped = !0), e[n] = t(e[n], 0, 255)) : 3 === n && (e[n] = t(e[n], 0, 1));
                    return e
                }, limit: t, type: i, unpack: function (t, e) {
                    return void 0 === e && (e = null), t.length >= 3 ? Array.prototype.slice.call(t) : "object" == i(t[0]) && e ? e.split("").filter(function (e) {
                        return void 0 !== t[0][e]
                    }).map(function (e) {
                        return t[0][e]
                    }) : t[0]
                }, last: function (t) {
                    if (t.length < 2) return null;
                    var e = t.length - 1;
                    return "string" == i(t[e]) ? t[e].toLowerCase() : null
                }, PI: a, TWOPI: 2 * a, PITHIRD: a / 3, DEG2RAD: a / 180, RAD2DEG: 180 / a
            }, u = {format: {}, autodetect: []}, l = c.last, s = c.clip_rgb, f = c.type, h = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                if ("object" === f(t[0]) && t[0].constructor && t[0].constructor === this.constructor) return t[0];
                var n = l(t), r = !1;
                if (!n) {
                    r = !0, u.sorted || (u.autodetect = u.autodetect.sort(function (t, e) {
                        return e.p - t.p
                    }), u.sorted = !0);
                    for (var o = 0, i = u.autodetect; o < i.length; o += 1) {
                        var a = i[o];
                        if (n = a.test.apply(a, t)) break
                    }
                }
                if (!u.format[n]) throw new Error("unknown format: " + t);
                var c = u.format[n].apply(null, r ? t : t.slice(0, -1));
                this._rgb = s(c), 3 === this._rgb.length && this._rgb.push(1)
            };
            h.prototype.toString = function () {
                return "function" == f(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
            };
            var d = h, p = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(p.Color, [null].concat(t)))
            };
            p.Color = d, p.version = "2.0.4";
            var g = p, v = c.unpack, b = Math.max, m = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = v(t, "rgb"), r = n[0], o = n[1], i = n[2], a = 1 - b(r /= 255, b(o /= 255, i /= 255)),
                    c = a < 1 ? 1 / (1 - a) : 0, u = (1 - r - a) * c, l = (1 - o - a) * c, s = (1 - i - a) * c;
                return [u, l, s, a]
            }, y = c.unpack, _ = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = (t = y(t, "cmyk"))[0], r = t[1], o = t[2], i = t[3], a = t.length > 4 ? t[4] : 1;
                return 1 === i ? [0, 0, 0, a] : [n >= 1 ? 0 : 255 * (1 - n) * (1 - i), r >= 1 ? 0 : 255 * (1 - r) * (1 - i), o >= 1 ? 0 : 255 * (1 - o) * (1 - i), a]
            }, w = c.unpack, $ = c.type;
            d.prototype.cmyk = function () {
                return m(this._rgb)
            }, g.cmyk = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["cmyk"])))
            }, u.format.cmyk = _, u.autodetect.push({
                p: 2, test: function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    if (t = w(t, "cmyk"), "array" === $(t) && 4 === t.length) return "cmyk"
                }
            });
            var x = c.unpack, M = c.last, k = function (t) {
                    return Math.round(100 * t) / 100
                }, C = function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    var n = x(t, "hsla"), r = M(t) || "lsa";
                    return n[0] = k(n[0] || 0), n[1] = k(100 * n[1]) + "%", n[2] = k(100 * n[2]) + "%", "hsla" === r || n.length > 3 && n[3] < 1 ? (n[3] = n.length > 3 ? n[3] : 1, r = "hsla") : n.length = 3, r + "(" + n.join(",") + ")"
                }, T = c.unpack, N = function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    var n = (t = T(t, "rgba"))[0], r = t[1], o = t[2];
                    n /= 255, r /= 255, o /= 255;
                    var i, a, c = Math.min(n, r, o), u = Math.max(n, r, o), l = (u + c) / 2;
                    return u === c ? (i = 0, a = Number.NaN) : i = l < .5 ? (u - c) / (u + c) : (u - c) / (2 - u - c), n == u ? a = (r - o) / (u - c) : r == u ? a = 2 + (o - n) / (u - c) : o == u && (a = 4 + (n - r) / (u - c)), (a *= 60) < 0 && (a += 360), t.length > 3 && void 0 !== t[3] ? [a, i, l, t[3]] : [a, i, l]
                }, S = c.unpack, z = c.last, D = Math.round, L = function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    var n = S(t, "rgba"), r = z(t) || "rgb";
                    return "hsl" == r.substr(0, 3) ? C(N(n), r) : (n[0] = D(n[0]), n[1] = D(n[1]), n[2] = D(n[2]), ("rgba" === r || n.length > 3 && n[3] < 1) && (n[3] = n.length > 3 ? n[3] : 1, r = "rgba"), r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")")
                }, j = c.unpack, E = Math.round, U = function () {
                    for (var t, e = [], n = arguments.length; n--;) e[n] = arguments[n];
                    var r, o, i, a = (e = j(e, "hsl"))[0], c = e[1], u = e[2];
                    if (0 === c) r = o = i = 255 * u; else {
                        var l = [0, 0, 0], s = [0, 0, 0], f = u < .5 ? u * (1 + c) : u + c - u * c, h = 2 * u - f,
                            d = a / 360;
                        l[0] = d + 1 / 3, l[1] = d, l[2] = d - 1 / 3;
                        for (var p = 0; p < 3; p++) l[p] < 0 && (l[p] += 1), l[p] > 1 && (l[p] -= 1), 6 * l[p] < 1 ? s[p] = h + 6 * (f - h) * l[p] : 2 * l[p] < 1 ? s[p] = f : 3 * l[p] < 2 ? s[p] = h + (f - h) * (2 / 3 - l[p]) * 6 : s[p] = h;
                        t = [E(255 * s[0]), E(255 * s[1]), E(255 * s[2])], r = t[0], o = t[1], i = t[2]
                    }
                    return e.length > 3 ? [r, o, i, e[3]] : [r, o, i, 1]
                }, A = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
                F = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
                O = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
                P = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
                Y = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
                q = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
                H = Math.round, B = function (t) {
                    var e;
                    if (t = t.toLowerCase().trim(), u.format.named) try {
                        return u.format.named(t)
                    } catch (t) {
                    }
                    if (e = t.match(A)) {
                        for (var n = e.slice(1, 4), r = 0; r < 3; r++) n[r] = +n[r];
                        return n[3] = 1, n
                    }
                    if (e = t.match(F)) {
                        for (var o = e.slice(1, 5), i = 0; i < 4; i++) o[i] = +o[i];
                        return o
                    }
                    if (e = t.match(O)) {
                        for (var a = e.slice(1, 4), c = 0; c < 3; c++) a[c] = H(2.55 * a[c]);
                        return a[3] = 1, a
                    }
                    if (e = t.match(P)) {
                        for (var l = e.slice(1, 5), s = 0; s < 3; s++) l[s] = H(2.55 * l[s]);
                        return l[3] = +l[3], l
                    }
                    if (e = t.match(Y)) {
                        var f = e.slice(1, 4);
                        f[1] *= .01, f[2] *= .01;
                        var h = U(f);
                        return h[3] = 1, h
                    }
                    if (e = t.match(q)) {
                        var d = e.slice(1, 4);
                        d[1] *= .01, d[2] *= .01;
                        var p = U(d);
                        return p[3] = +e[4], p
                    }
                };
            B.test = function (t) {
                return A.test(t) || F.test(t) || O.test(t) || P.test(t) || Y.test(t) || q.test(t)
            };
            var R = B, I = c.type;
            d.prototype.css = function (t) {
                return L(this._rgb, t)
            }, g.css = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["css"])))
            }, u.format.css = R, u.autodetect.push({
                p: 5, test: function (t) {
                    for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                    if (!e.length && "string" === I(t) && R.test(t)) return "css"
                }
            });
            var G = c.unpack;
            u.format.gl = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = G(t, "rgba");
                return n[0] *= 255, n[1] *= 255, n[2] *= 255, n
            }, g.gl = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["gl"])))
            }, d.prototype.gl = function () {
                var t = this._rgb;
                return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]]
            };
            var Z = c.unpack, W = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n, r = Z(t, "rgb"), o = r[0], i = r[1], a = r[2], c = Math.min(o, i, a), u = Math.max(o, i, a),
                    l = u - c, s = 100 * l / 255, f = c / (255 - l) * 100;
                return 0 === l ? n = Number.NaN : (o === u && (n = (i - a) / l), i === u && (n = 2 + (a - o) / l), a === u && (n = 4 + (o - i) / l), (n *= 60) < 0 && (n += 360)), [n, s, f]
            }, V = c.unpack, X = Math.floor, Q = function () {
                for (var t, e, n, r, o, i, a = [], c = arguments.length; c--;) a[c] = arguments[c];
                var u, l, s, f = (a = V(a, "hcg"))[0], h = a[1], d = a[2];
                d *= 255;
                var p = 255 * h;
                if (0 === h) u = l = s = d; else {
                    360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360);
                    var g = X(f /= 60), v = f - g, b = d * (1 - h), m = b + p * (1 - v), y = b + p * v, _ = b + p;
                    switch (g) {
                        case 0:
                            u = (t = [_, y, b])[0], l = t[1], s = t[2];
                            break;
                        case 1:
                            u = (e = [m, _, b])[0], l = e[1], s = e[2];
                            break;
                        case 2:
                            u = (n = [b, _, y])[0], l = n[1], s = n[2];
                            break;
                        case 3:
                            u = (r = [b, m, _])[0], l = r[1], s = r[2];
                            break;
                        case 4:
                            u = (o = [y, b, _])[0], l = o[1], s = o[2];
                            break;
                        case 5:
                            u = (i = [_, b, m])[0], l = i[1], s = i[2]
                    }
                }
                return [u, l, s, a.length > 3 ? a[3] : 1]
            }, J = c.unpack, K = c.type;
            d.prototype.hcg = function () {
                return W(this._rgb)
            }, g.hcg = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["hcg"])))
            }, u.format.hcg = Q, u.autodetect.push({
                p: 1, test: function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    if (t = J(t, "hcg"), "array" === K(t) && 3 === t.length) return "hcg"
                }
            });
            var tt = c.unpack, et = c.last, nt = Math.round, rt = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = tt(t, "rgba"), r = n[0], o = n[1], i = n[2], a = n[3], c = et(t) || "auto";
                void 0 === a && (a = 1), "auto" === c && (c = a < 1 ? "rgba" : "rgb"), r = nt(r), o = nt(o), i = nt(i);
                var u = r << 16 | o << 8 | i, l = "000000" + u.toString(16);
                l = l.substr(l.length - 6);
                var s = "0" + nt(255 * a).toString(16);
                switch (s = s.substr(s.length - 2), c.toLowerCase()) {
                    case"rgba":
                        return "#" + l + s;
                    case"argb":
                        return "#" + s + l;
                    default:
                        return "#" + l
                }
            }, ot = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, it = /^#?([A-Fa-f0-9]{8})$/, at = function (t) {
                if (t.match(ot)) {
                    4 !== t.length && 7 !== t.length || (t = t.substr(1)), 3 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                    var e = parseInt(t, 16), n = e >> 16, r = e >> 8 & 255, o = 255 & e;
                    return [n, r, o, 1]
                }
                if (t.match(it)) {
                    9 === t.length && (t = t.substr(1));
                    var i = parseInt(t, 16), a = i >> 24 & 255, c = i >> 16 & 255, u = i >> 8 & 255,
                        l = Math.round((255 & i) / 255 * 100) / 100;
                    return [a, c, u, l]
                }
                throw new Error("unknown hex color: " + t)
            }, ct = c.type;
            d.prototype.hex = function (t) {
                return rt(this._rgb, t)
            }, g.hex = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["hex"])))
            }, u.format.hex = at, u.autodetect.push({
                p: 4, test: function (t) {
                    for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                    if (!e.length && "string" === ct(t) && [3, 4, 6, 7, 8, 9].includes(t.length)) return "hex"
                }
            });
            var ut = c.unpack, lt = c.TWOPI, st = Math.min, ft = Math.sqrt, ht = Math.acos, dt = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n, r = ut(t, "rgb"), o = r[0], i = r[1], a = r[2], c = st(o /= 255, i /= 255, a /= 255),
                    u = (o + i + a) / 3, l = u > 0 ? 1 - c / u : 0;
                return 0 === l ? n = NaN : (n = (o - i + (o - a)) / 2, n /= ft((o - i) * (o - i) + (o - a) * (i - a)), n = ht(n), a > i && (n = lt - n), n /= lt), [360 * n, l, u]
            }, pt = c.unpack, gt = c.limit, vt = c.TWOPI, bt = c.PITHIRD, mt = Math.cos, yt = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n, r, o, i = (t = pt(t, "hsi"))[0], a = t[1], c = t[2];
                return isNaN(i) && (i = 0), isNaN(a) && (a = 0), i > 360 && (i -= 360), i < 0 && (i += 360), (i /= 360) < 1 / 3 ? (o = (1 - a) / 3, n = (1 + a * mt(vt * i) / mt(bt - vt * i)) / 3, r = 1 - (o + n)) : i < 2 / 3 ? (n = (1 - a) / 3, r = (1 + a * mt(vt * (i -= 1 / 3)) / mt(bt - vt * i)) / 3, o = 1 - (n + r)) : (r = (1 - a) / 3, o = (1 + a * mt(vt * (i -= 2 / 3)) / mt(bt - vt * i)) / 3, n = 1 - (r + o)), n = gt(c * n * 3), r = gt(c * r * 3), o = gt(c * o * 3), [255 * n, 255 * r, 255 * o, t.length > 3 ? t[3] : 1]
            }, _t = c.unpack, wt = c.type;
            d.prototype.hsi = function () {
                return dt(this._rgb)
            }, g.hsi = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["hsi"])))
            }, u.format.hsi = yt, u.autodetect.push({
                p: 2, test: function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    if (t = _t(t, "hsi"), "array" === wt(t) && 3 === t.length) return "hsi"
                }
            });
            var $t = c.unpack, xt = c.type;
            d.prototype.hsl = function () {
                return N(this._rgb)
            }, g.hsl = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["hsl"])))
            }, u.format.hsl = U, u.autodetect.push({
                p: 2, test: function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    if (t = $t(t, "hsl"), "array" === xt(t) && 3 === t.length) return "hsl"
                }
            });
            var Mt = c.unpack, kt = Math.min, Ct = Math.max, Tt = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n, r, o, i = (t = Mt(t, "rgb"))[0], a = t[1], c = t[2], u = kt(i, a, c), l = Ct(i, a, c), s = l - u;
                return o = l / 255, 0 === l ? (n = Number.NaN, r = 0) : (r = s / l, i === l && (n = (a - c) / s), a === l && (n = 2 + (c - i) / s), c === l && (n = 4 + (i - a) / s), (n *= 60) < 0 && (n += 360)), [n, r, o]
            }, Nt = c.unpack, St = Math.floor, zt = function () {
                for (var t, e, n, r, o, i, a = [], c = arguments.length; c--;) a[c] = arguments[c];
                var u, l, s, f = (a = Nt(a, "hsv"))[0], h = a[1], d = a[2];
                if (d *= 255, 0 === h) u = l = s = d; else {
                    360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360);
                    var p = St(f /= 60), g = f - p, v = d * (1 - h), b = d * (1 - h * g), m = d * (1 - h * (1 - g));
                    switch (p) {
                        case 0:
                            u = (t = [d, m, v])[0], l = t[1], s = t[2];
                            break;
                        case 1:
                            u = (e = [b, d, v])[0], l = e[1], s = e[2];
                            break;
                        case 2:
                            u = (n = [v, d, m])[0], l = n[1], s = n[2];
                            break;
                        case 3:
                            u = (r = [v, b, d])[0], l = r[1], s = r[2];
                            break;
                        case 4:
                            u = (o = [m, v, d])[0], l = o[1], s = o[2];
                            break;
                        case 5:
                            u = (i = [d, v, b])[0], l = i[1], s = i[2]
                    }
                }
                return [u, l, s, a.length > 3 ? a[3] : 1]
            }, Dt = c.unpack, Lt = c.type;
            d.prototype.hsv = function () {
                return Tt(this._rgb)
            }, g.hsv = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["hsv"])))
            }, u.format.hsv = zt, u.autodetect.push({
                p: 2, test: function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    if (t = Dt(t, "hsv"), "array" === Lt(t) && 3 === t.length) return "hsv"
                }
            });
            var jt = {
                Kn: 18,
                Xn: .95047,
                Yn: 1,
                Zn: 1.08883,
                t0: .137931034,
                t1: .206896552,
                t2: .12841855,
                t3: .008856452
            }, Et = c.unpack, Ut = Math.pow, At = function (t) {
                return (t /= 255) <= .04045 ? t / 12.92 : Ut((t + .055) / 1.055, 2.4)
            }, Ft = function (t) {
                return t > jt.t3 ? Ut(t, 1 / 3) : t / jt.t2 + jt.t0
            }, Ot = function (t, e, n) {
                t = At(t), e = At(e), n = At(n);
                var r = Ft((.4124564 * t + .3575761 * e + .1804375 * n) / jt.Xn),
                    o = Ft((.2126729 * t + .7151522 * e + .072175 * n) / jt.Yn),
                    i = Ft((.0193339 * t + .119192 * e + .9503041 * n) / jt.Zn);
                return [r, o, i]
            }, Pt = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = Et(t, "rgb"), r = n[0], o = n[1], i = n[2], a = Ot(r, o, i), c = a[0], u = a[1], l = a[2],
                    s = 116 * u - 16;
                return [s < 0 ? 0 : s, 500 * (c - u), 200 * (u - l)]
            }, Yt = c.unpack, qt = Math.pow, Ht = function (t) {
                return 255 * (t <= .00304 ? 12.92 * t : 1.055 * qt(t, 1 / 2.4) - .055)
            }, Bt = function (t) {
                return t > jt.t1 ? t * t * t : jt.t2 * (t - jt.t0)
            }, Rt = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n, r, o, i, a, c, u = (t = Yt(t, "lab"))[0], l = t[1], s = t[2];
                return r = (u + 16) / 116, n = isNaN(l) ? r : r + l / 500, o = isNaN(s) ? r : r - s / 200, r = jt.Yn * Bt(r), n = jt.Xn * Bt(n), o = jt.Zn * Bt(o), i = Ht(3.2404542 * n - 1.5371385 * r - .4985314 * o), a = Ht(-.969266 * n + 1.8760108 * r + .041556 * o), c = Ht(.0556434 * n - .2040259 * r + 1.0572252 * o), [i, a, c, t.length > 3 ? t[3] : 1]
            }, It = c.unpack, Gt = c.type;
            d.prototype.lab = function () {
                return Pt(this._rgb)
            }, g.lab = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["lab"])))
            }, u.format.lab = Rt, u.autodetect.push({
                p: 2, test: function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    if (t = It(t, "lab"), "array" === Gt(t) && 3 === t.length) return "lab"
                }
            });
            var Zt = c.unpack, Wt = c.RAD2DEG, Vt = Math.sqrt, Xt = Math.atan2, Qt = Math.round, Jt = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = Zt(t, "lab"), r = n[0], o = n[1], i = n[2], a = Vt(o * o + i * i),
                    c = (Xt(i, o) * Wt + 360) % 360;
                return 0 === Qt(1e4 * a) && (c = Number.NaN), [r, a, c]
            }, Kt = c.unpack, te = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = Kt(t, "rgb"), r = n[0], o = n[1], i = n[2], a = Pt(r, o, i), c = a[0], u = a[1], l = a[2];
                return Jt(c, u, l)
            }, ee = c.unpack, ne = c.DEG2RAD, re = Math.sin, oe = Math.cos, ie = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = ee(t, "lch"), r = n[0], o = n[1], i = n[2];
                return isNaN(i) && (i = 0), [r, oe(i *= ne) * o, re(i) * o]
            }, ae = c.unpack, ce = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = (t = ae(t, "lch"))[0], r = t[1], o = t[2], i = ie(n, r, o), a = i[0], c = i[1], u = i[2],
                    l = Rt(a, c, u), s = l[0], f = l[1], h = l[2];
                return [s, f, h, t.length > 3 ? t[3] : 1]
            }, ue = c.unpack, le = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = ue(t, "hcl").reverse();
                return ce.apply(void 0, n)
            }, se = c.unpack, fe = c.type;
            d.prototype.lch = function () {
                return te(this._rgb)
            }, d.prototype.hcl = function () {
                return te(this._rgb).reverse()
            }, g.lch = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["lch"])))
            }, g.hcl = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["hcl"])))
            }, u.format.lch = ce, u.format.hcl = le, ["lch", "hcl"].forEach(function (t) {
                return u.autodetect.push({
                    p: 2, test: function () {
                        for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
                        if (e = se(e, t), "array" === fe(e) && 3 === e.length) return t
                    }
                })
            });
            var he = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflower: "#6495ed",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                laserlemon: "#ffff54",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrod: "#fafad2",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                maroon2: "#7f0000",
                maroon3: "#b03060",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                purple2: "#7f007f",
                purple3: "#a020f0",
                rebeccapurple: "#663399",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            }, de = c.type;
            d.prototype.name = function () {
                for (var t = rt(this._rgb, "rgb"), e = 0, n = Object.keys(he); e < n.length; e += 1) {
                    var r = n[e];
                    if (he[r] === t) return r.toLowerCase()
                }
                return t
            }, u.format.named = function (t) {
                if (t = t.toLowerCase(), he[t]) return at(he[t]);
                throw new Error("unknown color name: " + t)
            }, u.autodetect.push({
                p: 5, test: function (t) {
                    for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                    if (!e.length && "string" === de(t) && he[t.toLowerCase()]) return "named"
                }
            });
            var pe = c.unpack, ge = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = pe(t, "rgb"), r = n[0], o = n[1], i = n[2];
                return (r << 16) + (o << 8) + i
            }, ve = c.type, be = function (t) {
                if ("number" == ve(t) && t >= 0 && t <= 16777215) {
                    var e = t >> 16, n = t >> 8 & 255, r = 255 & t;
                    return [e, n, r, 1]
                }
                throw new Error("unknown num color: " + t)
            }, me = c.type;
            d.prototype.num = function () {
                return ge(this._rgb)
            }, g.num = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["num"])))
            }, u.format.num = be, u.autodetect.push({
                p: 5, test: function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    if (1 === t.length && "number" === me(t[0]) && t[0] >= 0 && t[0] <= 16777215) return "num"
                }
            });
            var ye = c.unpack, _e = c.type, we = Math.round;
            d.prototype.rgb = function (t) {
                return void 0 === t && (t = !0), !1 === t ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(we)
            }, d.prototype.rgba = function (t) {
                return void 0 === t && (t = !0), this._rgb.slice(0, 4).map(function (e, n) {
                    return n < 3 ? !1 === t ? e : we(e) : e
                })
            }, g.rgb = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["rgb"])))
            }, u.format.rgb = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = ye(t, "rgba");
                return void 0 === n[3] && (n[3] = 1), n
            }, u.autodetect.push({
                p: 3, test: function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    if (t = ye(t, "rgba"), "array" === _e(t) && (3 === t.length || 4 === t.length && "number" == _e(t[3]) && t[3] >= 0 && t[3] <= 1)) return "rgb"
                }
            });
            var $e = Math.log, xe = function (t) {
                var e, n, r, o = t / 100;
                return o < 66 ? (e = 255, n = -155.25485562709179 - .44596950469579133 * (n = o - 2) + 104.49216199393888 * $e(n), r = o < 20 ? 0 : .8274096064007395 * (r = o - 10) - 254.76935184120902 + 115.67994401066147 * $e(r)) : (e = 351.97690566805693 + .114206453784165 * (e = o - 55) - 40.25366309332127 * $e(e), n = 325.4494125711974 + .07943456536662342 * (n = o - 50) - 28.0852963507957 * $e(n), r = 255), [e, n, r, 1]
            }, Me = c.unpack, ke = Math.round, Ce = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                for (var n, r = Me(t, "rgb"), o = r[0], i = r[2], a = 1e3, c = 4e4; c - a > .4;) {
                    var u = xe(n = .5 * (c + a));
                    u[2] / u[0] >= i / o ? c = n : a = n
                }
                return ke(n)
            };
            d.prototype.temp = d.prototype.kelvin = d.prototype.temperature = function () {
                return Ce(this._rgb)
            }, g.temp = g.kelvin = g.temperature = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new (Function.prototype.bind.apply(d, [null].concat(t, ["temp"])))
            }, u.format.temp = u.format.kelvin = u.format.temperature = xe;
            var Te = c.type;
            d.prototype.alpha = function (t, e) {
                return void 0 === e && (e = !1), void 0 !== t && "number" === Te(t) ? e ? (this._rgb[3] = t, this) : new d([this._rgb[0], this._rgb[1], this._rgb[2], t], "rgb") : this._rgb[3]
            }, d.prototype.clipped = function () {
                return this._rgb._clipped || !1
            }, d.prototype.darken = function (t) {
                void 0 === t && (t = 1);
                var e = this.lab();
                return e[0] -= jt.Kn * t, new d(e, "lab").alpha(this.alpha(), !0)
            }, d.prototype.brighten = function (t) {
                return void 0 === t && (t = 1), this.darken(-t)
            }, d.prototype.darker = d.prototype.darken, d.prototype.brighter = d.prototype.brighten, d.prototype.get = function (t) {
                var e = t.split("."), n = e[0], r = e[1], o = this[n]();
                if (r) {
                    var i = n.indexOf(r);
                    if (i > -1) return o[i];
                    throw new Error("unknown channel " + r + " in mode " + n)
                }
                return o
            };
            var Ne = c.type, Se = Math.pow;
            d.prototype.luminance = function (t) {
                if (void 0 !== t && "number" === Ne(t)) {
                    if (0 === t) return new d([0, 0, 0, this._rgb[3]], "rgb");
                    if (1 === t) return new d([255, 255, 255, this._rgb[3]], "rgb");
                    var e = this.luminance(), n = 20, r = function (e, o) {
                        var i = e.interpolate(o, .5, "rgb"), a = i.luminance();
                        return Math.abs(t - a) < 1e-7 || !n-- ? i : a > t ? r(e, i) : r(i, o)
                    }, o = (e > t ? r(new d([0, 0, 0]), this) : r(this, new d([255, 255, 255]))).rgb();
                    return new d(o.concat([this._rgb[3]]))
                }
                return ze.apply(void 0, this._rgb.slice(0, 3))
            };
            var ze = function (t, e, n) {
                return t = De(t), e = De(e), n = De(n), .2126 * t + .7152 * e + .0722 * n
            }, De = function (t) {
                return (t /= 255) <= .03928 ? t / 12.92 : Se((t + .055) / 1.055, 2.4)
            }, Le = {}, je = c.type, Ee = function (t, e, n) {
                void 0 === n && (n = .5);
                for (var r = [], o = arguments.length - 3; o-- > 0;) r[o] = arguments[o + 3];
                var i = r[0] || "lrgb";
                if (Le[i] || r.length || (i = Object.keys(Le)[0]), !Le[i]) throw new Error("interpolation mode " + i + " is not defined");
                return "object" !== je(t) && (t = new d(t)), "object" !== je(e) && (e = new d(e)), Le[i](t, e, n).alpha(t.alpha() + n * (e.alpha() - t.alpha()))
            };
            d.prototype.mix = d.prototype.interpolate = function (t, e) {
                void 0 === e && (e = .5);
                for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
                return Ee.apply(void 0, [this, t, e].concat(n))
            }, d.prototype.premultiply = function (t) {
                void 0 === t && (t = !1);
                var e = this._rgb, n = e[3];
                return t ? (this._rgb = [e[0] * n, e[1] * n, e[2] * n, n], this) : new d([e[0] * n, e[1] * n, e[2] * n, n], "rgb")
            }, d.prototype.saturate = function (t) {
                void 0 === t && (t = 1);
                var e = this.lch();
                return e[1] += jt.Kn * t, e[1] < 0 && (e[1] = 0), new d(e, "lch").alpha(this.alpha(), !0)
            }, d.prototype.desaturate = function (t) {
                return void 0 === t && (t = 1), this.saturate(-t)
            };
            var Ue = c.type;
            d.prototype.set = function (t, e, n) {
                void 0 === n && (n = !1);
                var r = t.split("."), o = r[0], i = r[1], a = this[o]();
                if (i) {
                    var c = o.indexOf(i);
                    if (c > -1) {
                        if ("string" == Ue(e)) switch (e.charAt(0)) {
                            case"+":
                            case"-":
                                a[c] += +e;
                                break;
                            case"*":
                                a[c] *= +e.substr(1);
                                break;
                            case"/":
                                a[c] /= +e.substr(1);
                                break;
                            default:
                                a[c] = +e
                        } else {
                            if ("number" !== Ue(e)) throw new Error("unsupported value for Color.set");
                            a[c] = e
                        }
                        var u = new d(a, o);
                        return n ? (this._rgb = u._rgb, this) : u
                    }
                    throw new Error("unknown channel " + i + " in mode " + o)
                }
                return a
            }, Le.rgb = function (t, e, n) {
                var r = t._rgb, o = e._rgb;
                return new d(r[0] + n * (o[0] - r[0]), r[1] + n * (o[1] - r[1]), r[2] + n * (o[2] - r[2]), "rgb")
            };
            var Ae = Math.sqrt, Fe = Math.pow;
            Le.lrgb = function (t, e, n) {
                var r = t._rgb, o = r[0], i = r[1], a = r[2], c = e._rgb, u = c[0], l = c[1], s = c[2];
                return new d(Ae(Fe(o, 2) * (1 - n) + Fe(u, 2) * n), Ae(Fe(i, 2) * (1 - n) + Fe(l, 2) * n), Ae(Fe(a, 2) * (1 - n) + Fe(s, 2) * n), "rgb")
            }, Le.lab = function (t, e, n) {
                var r = t.lab(), o = e.lab();
                return new d(r[0] + n * (o[0] - r[0]), r[1] + n * (o[1] - r[1]), r[2] + n * (o[2] - r[2]), "lab")
            };
            var Oe = function (t, e, n, r) {
                var o, i, a, c, u, l, s, f, h, p, g, v;
                return "hsl" === r ? (a = t.hsl(), c = e.hsl()) : "hsv" === r ? (a = t.hsv(), c = e.hsv()) : "hcg" === r ? (a = t.hcg(), c = e.hcg()) : "hsi" === r ? (a = t.hsi(), c = e.hsi()) : "lch" !== r && "hcl" !== r || (r = "hcl", a = t.hcl(), c = e.hcl()), "h" === r.substr(0, 1) && (u = (o = a)[0], s = o[1], h = o[2], l = (i = c)[0], f = i[1], p = i[2]), isNaN(u) || isNaN(l) ? isNaN(u) ? isNaN(l) ? v = Number.NaN : (v = l, 1 != h && 0 != h || "hsv" == r || (g = f)) : (v = u, 1 != p && 0 != p || "hsv" == r || (g = s)) : v = u + n * (l > u && l - u > 180 ? l - (u + 360) : l < u && u - l > 180 ? l + 360 - u : l - u), void 0 === g && (g = s + n * (f - s)), new d([v, g, h + n * (p - h)], r)
            }, Pe = function (t, e, n) {
                return Oe(t, e, n, "lch")
            };
            Le.lch = Pe, Le.hcl = Pe, Le.num = function (t, e, n) {
                var r = t.num(), o = e.num();
                return new d(r + n * (o - r), "num")
            }, Le.hcg = function (t, e, n) {
                return Oe(t, e, n, "hcg")
            }, Le.hsi = function (t, e, n) {
                return Oe(t, e, n, "hsi")
            }, Le.hsl = function (t, e, n) {
                return Oe(t, e, n, "hsl")
            }, Le.hsv = function (t, e, n) {
                return Oe(t, e, n, "hsv")
            };
            var Ye = c.clip_rgb, qe = Math.pow, He = Math.sqrt, Be = Math.PI, Re = Math.cos, Ie = Math.sin,
                Ge = Math.atan2, Ze = function (t) {
                    for (var e = t.length, n = 1 / e, r = [0, 0, 0, 0], o = 0, i = t; o < i.length; o += 1) {
                        var a = i[o], c = a._rgb;
                        r[0] += qe(c[0], 2) * n, r[1] += qe(c[1], 2) * n, r[2] += qe(c[2], 2) * n, r[3] += c[3] * n
                    }
                    return r[0] = He(r[0]), r[1] = He(r[1]), r[2] = He(r[2]), r[3] > .9999999 && (r[3] = 1), new d(Ye(r))
                }, We = c.type, Ve = Math.pow, Xe = function (t) {
                    var e = "rgb", n = g("#ccc"), r = 0, o = [0, 1], i = [], a = [0, 0], c = !1, u = [], l = !1, s = 0,
                        f = 1, h = !1, d = {}, p = !0, v = 1, b = function (t) {
                            if ((t = t || ["#fff", "#000"]) && "string" === We(t) && g.brewer && g.brewer[t.toLowerCase()] && (t = g.brewer[t.toLowerCase()]), "array" === We(t)) {
                                1 === t.length && (t = [t[0], t[0]]), t = t.slice(0);
                                for (var e = 0; e < t.length; e++) t[e] = g(t[e]);
                                i.length = 0;
                                for (var n = 0; n < t.length; n++) i.push(n / (t.length - 1))
                            }
                            return _(), u = t
                        }, m = function (t) {
                            return t
                        }, y = function (t, r) {
                            var o, l;
                            if (null == r && (r = !1), isNaN(t) || null === t) return n;
                            if (r) l = t; else if (c && c.length > 2) {
                                var h = function (t) {
                                    if (null != c) {
                                        for (var e = c.length - 1, n = 0; n < e && t >= c[n];) n++;
                                        return n - 1
                                    }
                                    return 0
                                }(t);
                                l = h / (c.length - 2)
                            } else l = f !== s ? (t - s) / (f - s) : 1;
                            r || (l = m(l)), 1 !== v && (l = Ve(l, v)), l = a[0] + l * (1 - a[0] - a[1]), l = Math.min(1, Math.max(0, l));
                            var b = Math.floor(1e4 * l);
                            if (p && d[b]) o = d[b]; else {
                                if ("array" === We(u)) for (var y = 0; y < i.length; y++) {
                                    var _ = i[y];
                                    if (l <= _) {
                                        o = u[y];
                                        break
                                    }
                                    if (l >= _ && y === i.length - 1) {
                                        o = u[y];
                                        break
                                    }
                                    if (l > _ && l < i[y + 1]) {
                                        l = (l - _) / (i[y + 1] - _), o = g.interpolate(u[y], u[y + 1], l, e);
                                        break
                                    }
                                } else "function" === We(u) && (o = u(l));
                                p && (d[b] = o)
                            }
                            return o
                        }, _ = function () {
                            return d = {}
                        };
                    b(t);
                    var w = function (t) {
                        var e = g(y(t));
                        return l && e[l] ? e[l]() : e
                    };
                    return w.classes = function (t) {
                        if (null != t) {
                            if ("array" === We(t)) c = t, o = [t[0], t[t.length - 1]]; else {
                                var e = g.analyze(o);
                                c = 0 === t ? [e.min, e.max] : g.limits(e, "e", t)
                            }
                            return w
                        }
                        return c
                    }, w.domain = function (t) {
                        if (!arguments.length) return o;
                        s = t[0], f = t[t.length - 1], i = [];
                        var e = u.length;
                        if (t.length === e && s !== f) for (var n = 0, r = Array.from(t); n < r.length; n += 1) {
                            var a = r[n];
                            i.push((a - s) / (f - s))
                        } else for (var c = 0; c < e; c++) i.push(c / (e - 1));
                        return o = [s, f], w
                    }, w.mode = function (t) {
                        return arguments.length ? (e = t, _(), w) : e
                    }, w.range = function (t, e) {
                        return b(t), w
                    }, w.out = function (t) {
                        return l = t, w
                    }, w.spread = function (t) {
                        return arguments.length ? (r = t, w) : r
                    }, w.correctLightness = function (t) {
                        return null == t && (t = !0), h = t, _(), m = h ? function (t) {
                            for (var e = y(0, !0).lab()[0], n = y(1, !0).lab()[0], r = e > n, o = y(t, !0).lab()[0], i = e + (n - e) * t, a = o - i, c = 0, u = 1, l = 20; Math.abs(a) > .01 && l-- > 0;) r && (a *= -1), a < 0 ? (c = t, t += .5 * (u - t)) : (u = t, t += .5 * (c - t)), o = y(t, !0).lab()[0], a = o - i;
                            return t
                        } : function (t) {
                            return t
                        }, w
                    }, w.padding = function (t) {
                        return null != t ? ("number" === We(t) && (t = [t, t]), a = t, w) : a
                    }, w.colors = function (e, n) {
                        arguments.length < 2 && (n = "hex");
                        var r = [];
                        if (0 === arguments.length) r = u.slice(0); else if (1 === e) r = [w(.5)]; else if (e > 1) {
                            var i = o[0], a = o[1] - i;
                            r = function (t, e, n) {
                                for (var r = [], o = t < e, i = n ? o ? e + 1 : e - 1 : e, a = t; o ? a < i : a > i; o ? a++ : a--) r.push(a);
                                return r
                            }(0, e, !1).map(function (t) {
                                return w(i + t / (e - 1) * a)
                            })
                        } else {
                            t = [];
                            var l = [];
                            if (c && c.length > 2) for (var s = 1, f = c.length, h = 1 <= f; h ? s < f : s > f; h ? s++ : s--) l.push(.5 * (c[s - 1] + c[s])); else l = o;
                            r = l.map(function (t) {
                                return w(t)
                            })
                        }
                        return g[n] && (r = r.map(function (t) {
                            return t[n]()
                        })), r
                    }, w.cache = function (t) {
                        return null != t ? (p = t, w) : p
                    }, w.gamma = function (t) {
                        return null != t ? (v = t, w) : v
                    }, w.nodata = function (t) {
                        return null != t ? (n = g(t), w) : n
                    }, w
                }, Qe = function (t) {
                    var e, n, r, o, i, a, c;
                    if (2 === (t = t.map(function (t) {
                        return new d(t)
                    })).length) e = t.map(function (t) {
                        return t.lab()
                    }), i = e[0], a = e[1], o = function (t) {
                        var e = [0, 1, 2].map(function (e) {
                            return i[e] + t * (a[e] - i[e])
                        });
                        return new d(e, "lab")
                    }; else if (3 === t.length) n = t.map(function (t) {
                        return t.lab()
                    }), i = n[0], a = n[1], c = n[2], o = function (t) {
                        var e = [0, 1, 2].map(function (e) {
                            return (1 - t) * (1 - t) * i[e] + 2 * (1 - t) * t * a[e] + t * t * c[e]
                        });
                        return new d(e, "lab")
                    }; else if (4 === t.length) {
                        var u;
                        r = t.map(function (t) {
                            return t.lab()
                        }), i = r[0], a = r[1], c = r[2], u = r[3], o = function (t) {
                            var e = [0, 1, 2].map(function (e) {
                                return (1 - t) * (1 - t) * (1 - t) * i[e] + 3 * (1 - t) * (1 - t) * t * a[e] + 3 * (1 - t) * t * t * c[e] + t * t * t * u[e]
                            });
                            return new d(e, "lab")
                        }
                    } else if (5 === t.length) {
                        var l = Qe(t.slice(0, 3)), s = Qe(t.slice(2, 5));
                        o = function (t) {
                            return t < .5 ? l(2 * t) : s(2 * (t - .5))
                        }
                    }
                    return o
                }, Je = function (t, e, n) {
                    if (!Je[n]) throw new Error("unknown blend mode " + n);
                    return Je[n](t, e)
                }, Ke = function (t) {
                    return function (e, n) {
                        var r = g(n).rgb(), o = g(e).rgb();
                        return g.rgb(t(r, o))
                    }
                }, tn = function (t) {
                    return function (e, n) {
                        var r = [];
                        return r[0] = t(e[0], n[0]), r[1] = t(e[1], n[1]), r[2] = t(e[2], n[2]), r
                    }
                };
            Je.normal = Ke(tn(function (t) {
                return t
            })), Je.multiply = Ke(tn(function (t, e) {
                return t * e / 255
            })), Je.screen = Ke(tn(function (t, e) {
                return 255 * (1 - (1 - t / 255) * (1 - e / 255))
            })), Je.overlay = Ke(tn(function (t, e) {
                return e < 128 ? 2 * t * e / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - e / 255))
            })), Je.darken = Ke(tn(function (t, e) {
                return t > e ? e : t
            })), Je.lighten = Ke(tn(function (t, e) {
                return t > e ? t : e
            })), Je.dodge = Ke(tn(function (t, e) {
                return 255 === t ? 255 : (t = e / 255 * 255 / (1 - t / 255)) > 255 ? 255 : t
            })), Je.burn = Ke(tn(function (t, e) {
                return 255 * (1 - (1 - e / 255) / (t / 255))
            }));
            for (var en = Je, nn = c.type, rn = c.clip_rgb, on = c.TWOPI, an = Math.pow, cn = Math.sin, un = Math.cos, ln = Math.floor, sn = Math.random, fn = Math.log, hn = Math.pow, dn = Math.floor, pn = Math.abs, gn = function (t, e) {
                void 0 === e && (e = null);
                var n = {min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0};
                return "object" === i(t) && (t = Object.values(t)), t.forEach(function (t) {
                    e && "object" === i(t) && (t = t[e]), null == t || isNaN(t) || (n.values.push(t), n.sum += t, t < n.min && (n.min = t), t > n.max && (n.max = t), n.count += 1)
                }), n.domain = [n.min, n.max], n.limits = function (t, e) {
                    return vn(n, t, e)
                }, n
            }, vn = function (t, e, n) {
                void 0 === e && (e = "equal"), void 0 === n && (n = 7), "array" == i(t) && (t = gn(t));
                var r = t.min, o = t.max, a = t.values.sort(function (t, e) {
                    return t - e
                });
                if (1 === n) return [r, o];
                var c = [];
                if ("c" === e.substr(0, 1) && (c.push(r), c.push(o)), "e" === e.substr(0, 1)) {
                    c.push(r);
                    for (var u = 1; u < n; u++) c.push(r + u / n * (o - r));
                    c.push(o)
                } else if ("l" === e.substr(0, 1)) {
                    if (r <= 0) throw new Error("Logarithmic scales are only possible for values > 0");
                    var l = Math.LOG10E * fn(r), s = Math.LOG10E * fn(o);
                    c.push(r);
                    for (var f = 1; f < n; f++) c.push(hn(10, l + f / n * (s - l)));
                    c.push(o)
                } else if ("q" === e.substr(0, 1)) {
                    c.push(r);
                    for (var h = 1; h < n; h++) {
                        var d = (a.length - 1) * h / n, p = dn(d);
                        if (p === d) c.push(a[p]); else {
                            var g = d - p;
                            c.push(a[p] * (1 - g) + a[p + 1] * g)
                        }
                    }
                    c.push(o)
                } else if ("k" === e.substr(0, 1)) {
                    var v, b = a.length, m = new Array(b), y = new Array(n), _ = !0, w = 0, $ = null;
                    ($ = []).push(r);
                    for (var x = 1; x < n; x++) $.push(r + x / n * (o - r));
                    for ($.push(o); _;) {
                        for (var M = 0; M < n; M++) y[M] = 0;
                        for (var k = 0; k < b; k++) for (var C = a[k], T = Number.MAX_VALUE, N = void 0, S = 0; S < n; S++) {
                            var z = pn($[S] - C);
                            z < T && (T = z, N = S), y[N]++, m[k] = N
                        }
                        for (var D = new Array(n), L = 0; L < n; L++) D[L] = null;
                        for (var j = 0; j < b; j++) v = m[j], null === D[v] ? D[v] = a[j] : D[v] += a[j];
                        for (var E = 0; E < n; E++) D[E] *= 1 / y[E];
                        _ = !1;
                        for (var U = 0; U < n; U++) if (D[U] !== $[U]) {
                            _ = !0;
                            break
                        }
                        $ = D, ++w > 200 && (_ = !1)
                    }
                    for (var A = {}, F = 0; F < n; F++) A[F] = [];
                    for (var O = 0; O < b; O++) v = m[O], A[v].push(a[O]);
                    for (var P = [], Y = 0; Y < n; Y++) P.push(A[Y][0]), P.push(A[Y][A[Y].length - 1]);
                    P = P.sort(function (t, e) {
                        return t - e
                    }), c.push(P[0]);
                    for (var q = 1; q < P.length; q += 2) {
                        var H = P[q];
                        isNaN(H) || -1 !== c.indexOf(H) || c.push(H)
                    }
                }
                return c
            }, bn = {
                analyze: gn,
                limits: vn
            }, mn = Math.sqrt, yn = Math.atan2, _n = Math.abs, wn = Math.cos, $n = Math.PI, xn = {
                cool: function () {
                    return Xe([g.hsl(180, 1, .9), g.hsl(250, .7, .4)])
                }, hot: function () {
                    return Xe(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
                }
            }, Mn = {
                OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
                PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
                BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
                Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
                BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
                YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
                YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
                Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
                RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
                Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
                YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
                Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
                GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
                Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
                YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
                PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
                Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
                PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
                Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
                Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
                RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
                RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
                PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
                PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
                RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
                BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
                RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
                PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
                Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
                Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
                Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
                Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
                Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
                Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
                Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
                Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
            }, kn = 0, Cn = Object.keys(Mn); kn < Cn.length; kn += 1) {
                var Tn = Cn[kn];
                Mn[Tn.toLowerCase()] = Mn[Tn]
            }
            var Nn = Mn;
            return g.average = function (t, e) {
                void 0 === e && (e = "lrgb");
                var n = t.length;
                if (t = t.map(function (t) {
                    return new d(t)
                }), "lrgb" === e) return Ze(t);
                for (var r = t.shift(), o = r.get(e), i = [], a = 0, c = 0, u = 0; u < o.length; u++) if (o[u] = o[u] || 0, i.push(isNaN(o[u]) ? 0 : 1), "h" === e.charAt(u) && !isNaN(o[u])) {
                    var l = o[u] / 180 * Be;
                    a += Re(l), c += Ie(l)
                }
                var s = r.alpha();
                t.forEach(function (t) {
                    var n = t.get(e);
                    s += t.alpha();
                    for (var r = 0; r < o.length; r++) if (!isNaN(n[r])) if (i[r]++, "h" === e.charAt(r)) {
                        var u = n[r] / 180 * Be;
                        a += Re(u), c += Ie(u)
                    } else o[r] += n[r]
                });
                for (var f = 0; f < o.length; f++) if ("h" === e.charAt(f)) {
                    for (var h = Ge(c / i[f], a / i[f]) / Be * 180; h < 0;) h += 360;
                    for (; h >= 360;) h -= 360;
                    o[f] = h
                } else o[f] = o[f] / i[f];
                return s /= n, new d(o, e).alpha(s > .99999 ? 1 : s, !0)
            }, g.bezier = function (t) {
                var e = Qe(t);
                return e.scale = function () {
                    return Xe(e)
                }, e
            }, g.blend = en, g.cubehelix = function (t, e, n, r, o) {
                void 0 === t && (t = 300), void 0 === e && (e = -1.5), void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === o && (o = [0, 1]);
                var i, a = 0;
                "array" === nn(o) ? i = o[1] - o[0] : (i = 0, o = [o, o]);
                var c = function (c) {
                    var u = on * ((t + 120) / 360 + e * c), l = an(o[0] + i * c, r), s = 0 !== a ? n[0] + c * a : n,
                        f = s * l * (1 - l) / 2, h = un(u), d = cn(u), p = l + f * (-.14861 * h + 1.78277 * d),
                        v = l + f * (-.29227 * h - .90649 * d), b = l + f * (1.97294 * h);
                    return g(rn([255 * p, 255 * v, 255 * b, 1]))
                };
                return c.start = function (e) {
                    return null == e ? t : (t = e, c)
                }, c.rotations = function (t) {
                    return null == t ? e : (e = t, c)
                }, c.gamma = function (t) {
                    return null == t ? r : (r = t, c)
                }, c.hue = function (t) {
                    return null == t ? n : ("array" === nn(n = t) ? 0 == (a = n[1] - n[0]) && (n = n[1]) : a = 0, c)
                }, c.lightness = function (t) {
                    return null == t ? o : ("array" === nn(t) ? (o = t, i = t[1] - t[0]) : (o = [t, t], i = 0), c)
                }, c.scale = function () {
                    return g.scale(c)
                }, c.hue(n), c
            }, g.mix = g.interpolate = Ee, g.random = function () {
                for (var t = "#", e = 0; e < 6; e++) t += "0123456789abcdef".charAt(ln(16 * sn()));
                return new d(t, "hex")
            }, g.scale = Xe, g.analyze = bn.analyze, g.contrast = function (t, e) {
                t = new d(t), e = new d(e);
                var n = t.luminance(), r = e.luminance();
                return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05)
            }, g.deltaE = function (t, e, n, r) {
                void 0 === n && (n = 1), void 0 === r && (r = 1), t = new d(t), e = new d(e);
                for (var o = Array.from(t.lab()), i = o[0], a = o[1], c = o[2], u = Array.from(e.lab()), l = u[0], s = u[1], f = u[2], h = mn(a * a + c * c), p = mn(s * s + f * f), g = i < 16 ? .511 : .040975 * i / (1 + .01765 * i), v = .0638 * h / (1 + .0131 * h) + .638, b = h < 1e-6 ? 0 : 180 * yn(c, a) / $n; b < 0;) b += 360;
                for (; b >= 360;) b -= 360;
                var m = b >= 164 && b <= 345 ? .56 + _n(.2 * wn($n * (b + 168) / 180)) : .36 + _n(.4 * wn($n * (b + 35) / 180)),
                    y = h * h * h * h, _ = mn(y / (y + 1900)), w = v * (_ * m + 1 - _), $ = h - p, x = a - s, M = c - f,
                    k = (i - l) / (n * g), C = $ / (r * v);
                return mn(k * k + C * C + (x * x + M * M - $ * $) / (w * w))
            }, g.distance = function (t, e, n) {
                void 0 === n && (n = "lab"), t = new d(t), e = new d(e);
                var r = t.get(n), o = e.get(n), i = 0;
                for (var a in r) {
                    var c = (r[a] || 0) - (o[a] || 0);
                    i += c * c
                }
                return Math.sqrt(i)
            }, g.limits = bn.limits, g.valid = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                try {
                    return new (Function.prototype.bind.apply(d, [null].concat(t))), !0
                } catch (t) {
                    return !1
                }
            }, g.scales = xn, g.colors = he, g.brewer = Nn, g
        }()
    });

    function J(e) {
        var n, r, o, i, a, c;
        return {
            c() {
                n = d("div"), r = d("input"), o = v(), i = d("label"), a = g(e.label), y(r, "type", "checkbox"), y(r, "class", "custom-control-input"), y(r, "id", e.id), y(i, "class", "custom-control-label"), y(i, "for", e.id), y(n, "class", "custom-control custom-checkbox"), $(n, "custom-control-inline", e.inline), c = b(r, "change", e.input_change_handler)
            }, m(t, c) {
                s(t, n, c), l(n, r), r.checked = e.value, l(n, o), l(n, i), l(i, a)
            }, p(t, e) {
                t.value && (r.checked = e.value), t.label && _(a, e.label), t.inline && $(n, "custom-control-inline", e.inline)
            }, i: t, o: t, d(t) {
                t && f(n), c()
            }
        }
    }

    function K(t, e, n) {
        let {value: r = !1, inline: o = !0, label: i = ""} = e;
        const a = Math.round(1e7 * Math.random()).toString(36);
        return t.$set = (t => {
            "value" in t && n("value", r = t.value), "inline" in t && n("inline", o = t.inline), "label" in t && n("label", i = t.label)
        }), {
            value: r, inline: o, label: i, id: a, input_change_handler: function () {
                r = this.checked, n("value", r)
            }
        }
    }

    class tt extends W {
        constructor(t) {
            super(), Z(this, t, K, J, a, ["value", "inline", "label"])
        }
    }

    var et = Math.ceil, nt = Math.max;
    var rt = "object" == typeof global && global && global.Object === Object && global,
        ot = "object" == typeof self && self && self.Object === Object && self,
        it = (rt || ot || Function("return this")()).Symbol, at = Object.prototype, ct = at.hasOwnProperty,
        ut = at.toString, lt = it ? it.toStringTag : void 0;
    var st = Object.prototype.toString;
    var ft = "[object Null]", ht = "[object Undefined]", dt = it ? it.toStringTag : void 0;

    function pt(t) {
        return null == t ? void 0 === t ? ht : ft : dt && dt in Object(t) ? function (t) {
            var e = ct.call(t, lt), n = t[lt];
            try {
                t[lt] = void 0;
                var r = !0
            } catch (t) {
            }
            var o = ut.call(t);
            return r && (e ? t[lt] = n : delete t[lt]), o
        }(t) : function (t) {
            return st.call(t)
        }(t)
    }

    function gt(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }

    var vt = "[object AsyncFunction]", bt = "[object Function]", mt = "[object GeneratorFunction]",
        yt = "[object Proxy]";
    var _t = 9007199254740991;

    function wt(t) {
        return null != t && function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= _t
        }(t.length) && !function (t) {
            if (!gt(t)) return !1;
            var e = pt(t);
            return e == bt || e == mt || e == vt || e == yt
        }(t)
    }

    var $t = 9007199254740991, xt = /^(?:0|[1-9]\d*)$/;

    function Mt(t, e, n) {
        if (!gt(n)) return !1;
        var r = typeof e;
        return !!("number" == r ? wt(n) && function (t, e) {
            var n = typeof t;
            return !!(e = null == e ? $t : e) && ("number" == n || "symbol" != n && xt.test(t)) && t > -1 && t % 1 == 0 && t < e
        }(e, n.length) : "string" == r && e in n) && function (t, e) {
            return t === e || t != t && e != e
        }(n[e], t)
    }

    var kt = "[object Symbol]";
    var Ct = NaN, Tt = /^\s+|\s+$/g, Nt = /^[-+]0x[0-9a-f]+$/i, St = /^0b[01]+$/i, zt = /^0o[0-7]+$/i, Dt = parseInt;

    function Lt(t) {
        if ("number" == typeof t) return t;
        if (function (t) {
            return "symbol" == typeof t || function (t) {
                return null != t && "object" == typeof t
            }(t) && pt(t) == kt
        }(t)) return Ct;
        if (gt(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = gt(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Tt, "");
        var n = St.test(t);
        return n || zt.test(t) ? Dt(t.slice(2), n ? 2 : 8) : Nt.test(t) ? Ct : +t
    }

    var jt = 1 / 0, Et = 1.7976931348623157e308;

    function Ut(t) {
        return t ? (t = Lt(t)) === jt || t === -jt ? (t < 0 ? -1 : 1) * Et : t == t ? t : 0 : 0 === t ? t : 0
    }

    var At, Ft = function (t, e, n) {
        return n && "number" != typeof n && Mt(t, e, n) && (e = n = void 0), t = Ut(t), void 0 === e ? (e = t, t = 0) : e = Ut(e), function (t, e, n, r) {
            for (var o = -1, i = nt(et((e - t) / (n || 1)), 0), a = Array(i); i--;) a[r ? i : ++o] = t, t += n;
            return a
        }(t, e, n = void 0 === n ? t < e ? 1 : -1 : Ut(n), At)
    };

    function Ot(t, e, n) {
        const r = Object.create(t);
        return r.c = e[n], r
    }

    function Pt(t, e, n) {
        const r = Object.create(t);
        return r.c = e[n], r
    }

    function Yt(t, e, n) {
        const r = Object.create(t);
        return r.l = e[n], r
    }

    function qt(t) {
        for (var e, n, r, o, i, a, c, u, p, g, b, m, _, $, x, M, k, C, T = t.lightness, N = [], S = 0; S < T.length; S += 1) N[S] = Ht(Yt(t, T, S));
        var z = t.saturation, D = [];
        for (S = 0; S < z.length; S += 1) D[S] = Bt(Pt(t, z, S));
        var L = t.hue, j = [];
        for (S = 0; S < L.length; S += 1) j[S] = Rt(Ot(t, L, S));
        return {
            c() {
                e = d("div"), n = d("div"), r = d("div"), o = v(), i = d("h3"), a = v(), c = d("div"), u = d("div"), (p = d("span")).textContent = "L", g = v();
                for (var t = 0; t < N.length; t += 1) N[t].c();
                b = v(), m = d("div"), (_ = d("span")).textContent = "S", $ = v();
                for (t = 0; t < D.length; t += 1) D[t].c();
                x = v(), M = d("div"), (k = d("span")).textContent = "H", C = v();
                for (t = 0; t < j.length; t += 1) j[t].c();
                y(r, "class", "arrow"), w(r, "left", "121px"), y(i, "class", "popover-header svelte-t530zu"), y(p, "class", "lbl svelte-t530zu"), y(u, "class", "color-row svelte-t530zu"), y(_, "class", "lbl svelte-t530zu"), y(m, "class", "color-row svelte-t530zu"), y(k, "class", "lbl svelte-t530zu"), y(M, "class", "color-row svelte-t530zu"), y(c, "class", "popover-body svelte-t530zu"), y(n, "class", "popover fade show bs-popover-bottom svelte-t530zu"), y(n, "role", "tooltip"), y(n, "x-placement", "bottom"), w(e, "position", "absolute"), w(e, "top", "0px"), w(e, "left", "0"), w(e, "right", "0"), w(e, "height", "40px")
            }, m(t, f) {
                s(t, e, f), l(e, n), l(n, r), l(n, o), l(n, i), l(n, a), l(n, c), l(c, u), l(u, p), l(u, g);
                for (var h = 0; h < N.length; h += 1) N[h].m(u, null);
                l(c, b), l(c, m), l(m, _), l(m, $);
                for (h = 0; h < D.length; h += 1) D[h].m(m, null);
                l(c, x), l(c, M), l(M, k), l(M, C);
                for (h = 0; h < j.length; h += 1) j[h].m(M, null)
            }, p(t, e) {
                if (t.lightness) {
                    T = e.lightness;
                    for (var n = 0; n < T.length; n += 1) {
                        const r = Yt(e, T, n);
                        N[n] ? N[n].p(t, r) : (N[n] = Ht(r), N[n].c(), N[n].m(u, null))
                    }
                    for (; n < N.length; n += 1) N[n].d(1);
                    N.length = T.length
                }
                if (t.saturation) {
                    z = e.saturation;
                    for (n = 0; n < z.length; n += 1) {
                        const r = Pt(e, z, n);
                        D[n] ? D[n].p(t, r) : (D[n] = Bt(r), D[n].c(), D[n].m(m, null))
                    }
                    for (; n < D.length; n += 1) D[n].d(1);
                    D.length = z.length
                }
                if (t.hue) {
                    L = e.hue;
                    for (n = 0; n < L.length; n += 1) {
                        const r = Ot(e, L, n);
                        j[n] ? j[n].p(t, r) : (j[n] = Rt(r), j[n].c(), j[n].m(M, null))
                    }
                    for (; n < j.length; n += 1) j[n].d(1);
                    j.length = L.length
                }
            }, d(t) {
                t && f(e), h(N, t), h(D, t), h(j, t)
            }
        }
    }

    function Ht(t) {
        var e, n;

        function r() {
            return t.click_handler(t)
        }

        return {
            c() {
                y(e = d("span"), "class", "color svelte-t530zu"), w(e, "background", t.l.hex()), n = b(e, "click", r)
            }, m(t, n) {
                s(t, e, n)
            }, p(n, r) {
                t = r, n.lightness && w(e, "background", t.l.hex())
            }, d(t) {
                t && f(e), n()
            }
        }
    }

    function Bt(t) {
        var e, n;

        function r() {
            return t.click_handler_1(t)
        }

        return {
            c() {
                y(e = d("span"), "class", "color svelte-t530zu"), w(e, "background", t.c.hex()), n = b(e, "click", r)
            }, m(t, n) {
                s(t, e, n)
            }, p(n, r) {
                t = r, n.saturation && w(e, "background", t.c.hex())
            }, d(t) {
                t && f(e), n()
            }
        }
    }

    function Rt(t) {
        var e, n;

        function r() {
            return t.click_handler_2(t)
        }

        return {
            c() {
                y(e = d("span"), "class", "color svelte-t530zu"), w(e, "background", t.c.hex()), n = b(e, "click", r)
            }, m(t, n) {
                s(t, e, n)
            }, p(n, r) {
                t = r, n.hue && w(e, "background", t.c.hex())
            }, d(t) {
                t && f(e), n()
            }
        }
    }

    function It(e) {
        var n, r, i, a, c, u = e.value.hex().substr(1), h = e.open && !e.dragging && qt(e);
        return {
            c() {
                var t;
                n = d("span"), r = d("span"), i = g(u), a = v(), h && h.c(), y(r, "class", "hex svelte-t530zu"), y(n, "draggable", "true"), y(n, "class", "badge shadow-sm svelte-t530zu"), w(n, "background", e.value.hex()), $(n, "inverted", e.value.lab()[0] < 50), c = [b(n, "dragstart", e.dragstart_handler), b(n, "dragstart", e.dragstart_handler_1), b(n, "dragend", e.dragend_handler, e.open = !1), b(n, "mouseenter", e.toggleEditOpen), b(n, "mouseleave", e.toggleEditClose), b(n, "click", (t = Gt, function (e) {
                    return e.stopPropagation(), t.call(this, e)
                }))]
            }, m(t, e) {
                s(t, n, e), l(n, r), l(r, i), l(n, a), h && h.m(n, null)
            }, p(t, e) {
                t.value && u !== (u = e.value.hex().substr(1)) && _(i, u), e.open && !e.dragging ? h ? h.p(t, e) : ((h = qt(e)).c(), h.m(n, null)) : h && (h.d(1), h = null), t.value && (w(n, "background", e.value.hex()), $(n, "inverted", e.value.lab()[0] < 50))
            }, i: t, o: t, d(t) {
                t && f(n), h && h.d(), o(c)
            }
        }
    }

    function Gt() {
        return !1
    }

    function Zt(t, e, n) {
        let r, o, i, a, {value: c = Q("red")} = e, u = !1, l = !1;
        return t.$set = (t => {
            "value" in t && n("value", c = t.value)
        }), t.$$.update = ((t = {value: 1, lch: 1}) => {
            t.value && n("lch", r = c.lch()), t.lch && n("lightness", o = Ft(-5, 6).map(t => r[0] + 80 * Math.pow(t / 8, 2) * (t < 0 ? -1 : 1)).map(t => Q.lch(t, r[1], r[2]))), t.lch && n("saturation", i = Ft(-5, 6).map(t => Math.max(0, r[1] + 80 * Math.pow(t / 5, 2) * (t < 0 ? -1 : 1))).map(t => Q.lch(r[0], t, r[2]))), t.lch && n("hue", a = Ft(-5, 6).map(t => r[2] + 80 * Math.pow(t / 5, 2) * (t < 0 ? -1 : 1)).map(t => Q.lch(r[0], r[1], t < 0 ? t + 360 : t > 360 ? t - 360 : t)))
        }), {
            value: c, open: u, dragging: l, toggleEditOpen: function () {
                n("open", u = !0)
            }, toggleEditClose: function () {
                n("open", u = !1)
            }, lightness: o, saturation: i, hue: a, dragstart_handler: function (e) {
                !function (t, e) {
                    const n = t.$$.callbacks[e.type];
                    n && n.slice().forEach(t => t(e))
                }(t, e)
            }, click_handler: function ({l: t}) {
                const e = c = t;
                return n("value", c), e
            }, click_handler_1: function ({c: t}) {
                const e = c = t;
                return n("value", c), e
            }, click_handler_2: function ({c: t}) {
                const e = c = t;
                return n("value", c), e
            }, dragstart_handler_1: function (t) {
                const e = l = !0;
                return n("dragging", l), e
            }, dragend_handler: function (t) {
                const e = l = !1;
                return n("dragging", l), e
            }
        }
    }

    class Wt extends W {
        constructor(t) {
            super(), Z(this, t, Zt, It, a, ["value"])
        }
    }

    function Vt(t, e, n) {
        const r = Object.create(t);
        return r.color = e[n], r.each_value = e, r.i = n, r
    }

    function Xt(t) {
        for (var e, n, r, i, a, c = t.colors, u = [], p = 0; p < c.length; p += 1) u[p] = Qt(Vt(t, c, p));
        const g = t => H(u[t], 1, () => {
            u[t] = null
        });
        return {
            c() {
                e = d("div");
                for (var o = 0; o < u.length; o += 1) u[o].c();
                n = v(), y(r = d("span"), "class", "inv svelte-zqagyi"), y(e, "class", "form-control svelte-zqagyi"), a = [b(e, "drop", m(t.drop_handler)), b(e, "dragover", m(t.dragover_handler)), b(e, "click", t.enterEditMode)]
            }, m(t, o) {
                s(t, e, o);
                for (var a = 0; a < u.length; a += 1) u[a].m(e, null);
                l(e, n), l(e, r), i = !0
            }, p(t, r) {
                if (t.colors) {
                    c = r.colors;
                    for (var o = 0; o < c.length; o += 1) {
                        const i = Vt(r, c, o);
                        u[o] ? (u[o].p(t, i), q(u[o], 1)) : (u[o] = Qt(i), u[o].c(), q(u[o], 1), u[o].m(e, n))
                    }
                    for (P(); o < u.length; o += 1) g(o);
                    Y()
                }
            }, i(t) {
                if (!i) {
                    for (var e = 0; e < c.length; e += 1) q(u[e]);
                    i = !0
                }
            }, o(t) {
                u = u.filter(Boolean);
                for (let t = 0; t < u.length; t += 1) H(u[t]);
                i = !1
            }, d(t) {
                t && f(e), h(u, t), o(a)
            }
        }
    }

    function Qt(t) {
        var e, n;

        function r(n) {
            t.color_value_binding.call(null, n, t), e = !0, E(() => e = !1)
        }

        let o = {};
        void 0 !== t.color && (o.value = t.color);
        var i = new Wt({props: o});
        return L(() => B(i, "value", r)), i.$on("dragstart", function (...e) {
            return t.dragstart_handler(t, ...e)
        }), {
            c() {
                i.$$.fragment.c()
            }, m(t, e) {
                R(i, t, e), n = !0
            }, p(n, r) {
                t = r;
                var o = {};
                !e && n.colors && (o.value = t.color), i.$set(o)
            }, i(t) {
                n || (q(i.$$.fragment, t), n = !0)
            }, o(t) {
                H(i.$$.fragment, t), n = !1
            }, d(t) {
                I(i, t)
            }
        }
    }

    function Jt(t) {
        var e, n, r, i, a, c = !t.edit && Xt(t);
        return {
            c() {
                e = d("input"), n = v(), c && c.c(), r = g(""), y(e, "type", "text"), y(e, "class", "form-control svelte-zqagyi"), $(e, "hidden", !t.edit), a = [b(e, "input", t.input_1_input_handler), b(e, "blur", t.exitEditMode)]
            }, m(o, a) {
                s(o, e, a), e.value = t.colorString, L(() => t.input_1_binding(e, null)), s(o, n, a), c && c.m(o, a), s(o, r, a), i = !0
            }, p(t, n) {
                t.colorString && e.value !== n.colorString && (e.value = n.colorString), t.items && (n.input_1_binding(null, e), n.input_1_binding(e, null)), t.edit && $(e, "hidden", !n.edit), n.edit ? c && (P(), H(c, 1, () => {
                    c = null
                }), Y()) : c ? (c.p(t, n), q(c, 1)) : ((c = Xt(n)).c(), q(c, 1), c.m(r.parentNode, r))
            }, i(t) {
                i || (q(c), i = !0)
            }, o(t) {
                H(c), i = !1
            }, d(i) {
                i && f(e), t.input_1_binding(null, e), i && f(n), c && c.d(i), i && f(r), o(a)
            }
        }
    }

    function Kt(t, e, n) {
        let r, {colors: o} = e, i = !1, a = "";

        function c(t) {
            const e = t.dataTransfer.getData("index"), r = function (t) {
                const e = t.parentNode.children;
                for (let n = 0; n < e.length; n++) if (e[n] === t) return n;
                return -1
            }(t.target), i = o.splice(e, 1, null)[0];
            o.splice(r, 0, i), n("colors", o = o.filter(t => null !== t))
        }

        return t.$set = (t => {
            "colors" in t && n("colors", o = t.colors)
        }), {
            colors: o, edit: i, input: r, colorString: a, enterEditMode: function () {
                n("edit", i = !0), n("colorString", a = o.map(t => t.name()).join(", ")), r.focus()
            }, exitEditMode: function () {
                n("edit", i = !1), n("colors", o = a.split(/\s*[,|\s]\s*/).filter(t => Q.valid(t)).map(t => Q(t)))
            }, drop: c, input_1_input_handler: function () {
                a = this.value, n("colorString", a)
            }, input_1_binding: function (t, e) {
                n("input", r = t)
            }, color_value_binding: function (t, {color: e, each_value: r, i: i}) {
                r[i] = t, n("colors", o)
            }, dragstart_handler: function ({i: t}, e) {
                return function (t, e) {
                    t.dataTransfer.setData("index", e)
                }(e, t)
            }, drop_handler: function (t) {
                return c(t)
            }, dragover_handler: function (t) {
                return function (t) {
                    t.dataTransfer.dropEffect = "move"
                }(t)
            }
        }
    }

    class te extends W {
        constructor(t) {
            super(), Z(this, t, Kt, Jt, a, ["colors"])
        }
    }

    function ee(t) {
        var e, n, r;

        function o(e) {
            t.colorlist_colors_binding_1.call(null, e), n = !0, E(() => n = !1)
        }

        let i = {};
        void 0 !== t.colors2 && (i.colors = t.colors2);
        var a = new te({props: i});
        return L(() => B(a, "colors", o)), {
            c() {
                e = d("div"), a.$$.fragment.c(), y(e, "class", "col-md")
            }, m(t, n) {
                s(t, e, n), R(a, e, null), r = !0
            }, p(t, e) {
                var r = {};
                !n && t.colors2 && (r.colors = e.colors2), a.$set(r)
            }, i(t) {
                r || (q(a.$$.fragment, t), r = !0)
            }, o(t) {
                H(a.$$.fragment, t), r = !1
            }, d(t) {
                t && f(e), I(a)
            }
        }
    }

    function ne(t) {
        var e, n, r, o, i;

        function a(e) {
            t.colorlist_colors_binding.call(null, e), r = !0, E(() => r = !1)
        }

        let c = {};
        void 0 !== t.colors && (c.colors = t.colors);
        var u = new te({props: c});
        L(() => B(u, "colors", a));
        var h = t.diverging && ee(t);
        return {
            c() {
                e = d("div"), n = d("div"), u.$$.fragment.c(), o = v(), h && h.c(), y(n, "class", "col-md"), y(e, "class", "row")
            }, m(t, r) {
                s(t, e, r), l(e, n), R(u, n, null), l(e, o), h && h.m(e, null), i = !0
            }, p(t, n) {
                var o = {};
                !r && t.colors && (o.colors = n.colors), u.$set(o), n.diverging ? h ? (h.p(t, n), q(h, 1)) : ((h = ee(n)).c(), q(h, 1), h.m(e, null)) : h && (P(), H(h, 1, () => {
                    h = null
                }), Y())
            }, i(t) {
                i || (q(u.$$.fragment, t), q(h), i = !0)
            }, o(t) {
                H(u.$$.fragment, t), H(h), i = !1
            }, d(t) {
                t && f(e), I(u), h && h.d()
            }
        }
    }

    function re(t, e, n) {
        let {colors: r = [], colors2: o = [], diverging: i = !1} = e;
        return t.$set = (t => {
            "colors" in t && n("colors", r = t.colors), "colors2" in t && n("colors2", o = t.colors2), "diverging" in t && n("diverging", i = t.diverging)
        }), {
            colors: r, colors2: o, diverging: i, colorlist_colors_binding: function (t) {
                n("colors", r = t)
            }, colorlist_colors_binding_1: function (t) {
                n("colors2", o = t)
            }
        }
    }

    class oe extends W {
        constructor(t) {
            super(), Z(this, t, re, ne, a, ["colors", "colors2", "diverging"])
        }
    }

    function ie(t, e) {
        return blinder[e](Q(t).hex())
    }

    function ae(t, e) {
        let n = 0, r = t.length;
        if (!r) return !0;
        for (let o = 0; o < r; o++) for (let i = o + 1; i < r; i++) {
            let r = Q(t[o]), a = Q(t[i]), c = ce(r, a);
            if (c < 9) continue;
            let u = ce(blinder[e](r.hex()), blinder[e](a.hex()));
            c / u > 5 && u < 9 && n++
        }
        return 0 === n
    }

    function ce(t, e) {
        return .5 * (Q.deltaE(t, e) + Q.deltaE(e, t))
    }

    function ue(t, e, n) {
        const r = Object.create(t);
        return r.step = e[n], r
    }

    function le(t) {
        var e;
        return {
            c() {
                y(e = d("div"), "class", "step svelte-iwtfhk"), w(e, "background", "none" === t.simulate ? t.step : ie(t.step, t.simulate))
            }, m(t, n) {
                s(t, e, n)
            }, p(t, n) {
                (t.simulate || t.steps || t.colorBlindSim) && w(e, "background", "none" === n.simulate ? n.step : ie(n.step, n.simulate))
            }, d(t) {
                t && f(e)
            }
        }
    }

    function se(e) {
        for (var n, r = e.steps, o = [], i = 0; i < r.length; i += 1) o[i] = le(ue(e, r, i));
        return {
            c() {
                n = d("div");
                for (var t = 0; t < o.length; t += 1) o[t].c();
                y(n, "class", "palette svelte-iwtfhk")
            }, m(t, e) {
                s(t, n, e);
                for (var r = 0; r < o.length; r += 1) o[r].m(n, null)
            }, p(t, e) {
                if (t.simulate || t.steps || t.colorBlindSim) {
                    r = e.steps;
                    for (var i = 0; i < r.length; i += 1) {
                        const a = ue(e, r, i);
                        o[i] ? o[i].p(t, a) : (o[i] = le(a), o[i].c(), o[i].m(n, null))
                    }
                    for (; i < o.length; i += 1) o[i].d(1);
                    o.length = r.length
                }
            }, i: t, o: t, d(t) {
                t && f(n), h(o, t)
            }
        }
    }

    function fe(t, e, n) {
        let r, o, i, a, c, u,
            l, {colors: s = ["red"], colors2: f = [], numColors: h = 7, diverging: d = !1, bezier: p, correctLightness: g, simulate: v = "none", steps: b} = e;

        function m(t, e) {
            const n = Q(t).lab(), r = 100 * (.95 - 1 / e), o = r / (e - 1);
            let i = .5 * (100 - r);
            const a = Ft(i, i + e * o, o);
            let c = 0;
            if (!d) {
                c = 9999;
                for (let t = 0; t < e; t++) {
                    let e = n[0] - a[t];
                    Math.abs(e) < Math.abs(c) && (c = e)
                }
            }
            return a.map(t => Q.lab([t + c, n[1], n[2]]))
        }

        function y(t, e, n = !1) {
            if (d) {
                const e = m(t, 3).concat(Q("#f5f5f5"));
                return n && e.reverse(), e
            }
            return m(t, e)
        }

        return t.$set = (t => {
            "colors" in t && n("colors", s = t.colors), "colors2" in t && n("colors2", f = t.colors2), "numColors" in t && n("numColors", h = t.numColors), "diverging" in t && n("diverging", d = t.diverging), "bezier" in t && n("bezier", p = t.bezier), "correctLightness" in t && n("correctLightness", g = t.correctLightness), "simulate" in t && n("simulate", v = t.simulate), "steps" in t && n("steps", b = t.steps)
        }), t.$$.update = ((t = {
            numColors: 1,
            diverging: 1,
            even: 1,
            colors: 1,
            numColorsLeft: 1,
            colors2: 1,
            numColorsRight: 1,
            bezier: 1,
            genColors: 1,
            correctLightness: 1,
            genColors2: 1,
            stepsLeft: 1,
            stepsRight: 1
        }) => {
            t.numColors && n("even", r = h % 2 == 0), (t.diverging || t.numColors || t.even) && n("numColorsLeft", o = d ? Math.ceil(h / 2) + (r ? 1 : 0) : h), (t.diverging || t.numColors || t.even) && n("numColorsRight", i = d ? Math.ceil(h / 2) + (r ? 1 : 0) : 0), (t.colors || t.numColorsLeft) && n("genColors", a = 1 !== s.length ? s : y(s[0], o)), (t.colors2 || t.numColorsRight) && n("genColors2", c = 1 !== f.length ? f : y(f[0], i, !0)), (t.colors || t.bezier || t.genColors || t.correctLightness || t.numColorsLeft) && n("stepsLeft", u = s.length ? Q.scale(p && s.length > 1 ? Q.bezier(a) : a).correctLightness(g).colors(o) : []), (t.diverging || t.colors2 || t.bezier || t.genColors2 || t.correctLightness || t.numColorsRight) && n("stepsRight", l = d && f.length ? Q.scale(p && f.length > 1 ? Q.bezier(c) : c).correctLightness(g).colors(i) : []), (t.even || t.diverging || t.stepsLeft || t.stepsRight) && n("steps", b = (r && d ? u.slice(0, u.length - 1) : u).concat(l.slice(1)))
        }), {colors: s, colors2: f, numColors: h, diverging: d, bezier: p, correctLightness: g, simulate: v, steps: b}
    }

    class he extends W {
        constructor(t) {
            super(), Z(this, t, fe, se, a, ["colors", "colors2", "numColors", "diverging", "bezier", "correctLightness", "simulate", "steps"])
        }
    }

    function de(e) {
        var n, r, o, i, a, c, u, h, p, b, m, w, $, x, M, k, C, T, N, S, z, D, L, j, E, U, A, F, O,
            P = e.steps.join("', '"), Y = e.steps.join("', '"), q = e.steps.join("\n"), H = e.steps.map(pe).join(","),
            B = e.steps.length, R = e.steps.join("', '"), I = e.steps.slice(1).map(ge);
        return {
            c() {
                n = d("pre"), r = g(e.steps), o = v(), i = d("pre"), a = g("'"), c = g(P), u = g("'"), h = v(), p = d("pre"), b = g("['"), m = g(Y), w = g("']"), $ = v(), x = d("pre"), M = g(q), k = v(), C = d("pre"), T = g("["), N = g(H), S = g("]"), z = v(), D = d("pre"), L = g("import { scaleThreshold } from 'd3-scale';\n\nfunction palette(min, max) {\n    const d = (max-min)/"), j = g(B), E = g(";\n    return = scaleThreshold()\n        .range(['"), U = g(R), A = g("'])\n        .domain(["), F = g(I), O = g("]);\n}"), y(n, "class", "svelte-1n20esm"), y(i, "class", "svelte-1n20esm"), y(p, "class", "svelte-1n20esm"), y(x, "class", "svelte-1n20esm"), y(C, "class", "svelte-1n20esm"), y(D, "class", "svelte-1n20esm")
            }, m(t, e) {
                s(t, n, e), l(n, r), s(t, o, e), s(t, i, e), l(i, a), l(i, c), l(i, u), s(t, h, e), s(t, p, e), l(p, b), l(p, m), l(p, w), s(t, $, e), s(t, x, e), l(x, M), s(t, k, e), s(t, C, e), l(C, T), l(C, N), l(C, S), s(t, z, e), s(t, D, e), l(D, L), l(D, j), l(D, E), l(D, U), l(D, A), l(D, F), l(D, O)
            }, p(t, e) {
                t.steps && _(r, e.steps), t.steps && P !== (P = e.steps.join("', '")) && _(c, P), t.steps && Y !== (Y = e.steps.join("', '")) && _(m, Y), t.steps && q !== (q = e.steps.join("\n")) && _(M, q), t.steps && H !== (H = e.steps.map(pe).join(",")) && _(N, H), t.steps && B !== (B = e.steps.length) && _(j, B), t.steps && R !== (R = e.steps.join("', '")) && _(U, R), t.steps && I !== (I = e.steps.slice(1).map(ge)) && _(F, I)
            }, i: t, o: t, d(t) {
                t && (f(n), f(o), f(i), f(h), f(p), f($), f(x), f(k), f(C), f(z), f(D))
            }
        }
    }

    function pe(t) {
        return "0x" + t.substr(1)
    }

    function ge(t, e) {
        return `min + d*${e + 1}`
    }

    function ve(t, e, n) {
        let {steps: r = []} = e;
        return t.$set = (t => {
            "steps" in t && n("steps", r = t.steps)
        }), {steps: r}
    }

    class be extends W {
        constructor(t) {
            super(), Z(this, t, ve, de, a, ["steps"])
        }
    }

    function me(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }

    var ye, _e, we = (1 === (ye = me).length && (_e = ye, ye = function (t, e) {
        return me(_e(t), e)
    }), {
        left: function (t, e, n, r) {
            for (null == n && (n = 0), null == r && (r = t.length); n < r;) {
                var o = n + r >>> 1;
                ye(t[o], e) < 0 ? n = o + 1 : r = o
            }
            return n
        }, right: function (t, e, n, r) {
            for (null == n && (n = 0), null == r && (r = t.length); n < r;) {
                var o = n + r >>> 1;
                ye(t[o], e) > 0 ? r = o : n = o + 1
            }
            return n
        }
    }).right;
    var $e = Math.sqrt(50), xe = Math.sqrt(10), Me = Math.sqrt(2);

    function ke(t, e, n) {
        var r = (e - t) / Math.max(0, n), o = Math.floor(Math.log(r) / Math.LN10), i = r / Math.pow(10, o);
        return o >= 0 ? (i >= $e ? 10 : i >= xe ? 5 : i >= Me ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (i >= $e ? 10 : i >= xe ? 5 : i >= Me ? 2 : 1)
    }

    function Ce(t, e, n) {
        t.prototype = e.prototype = n, n.constructor = t
    }

    function Te(t, e) {
        var n = Object.create(t.prototype);
        for (var r in e) n[r] = e[r];
        return n
    }

    function Ne() {
    }

    var Se = "\\s*([+-]?\\d+)\\s*", ze = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        De = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Le = /^#([0-9a-f]{3})$/, je = /^#([0-9a-f]{6})$/,
        Ee = new RegExp("^rgb\\(" + [Se, Se, Se] + "\\)$"), Ue = new RegExp("^rgb\\(" + [De, De, De] + "\\)$"),
        Ae = new RegExp("^rgba\\(" + [Se, Se, Se, ze] + "\\)$"),
        Fe = new RegExp("^rgba\\(" + [De, De, De, ze] + "\\)$"), Oe = new RegExp("^hsl\\(" + [ze, De, De] + "\\)$"),
        Pe = new RegExp("^hsla\\(" + [ze, De, De, ze] + "\\)$"), Ye = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };

    function qe(t) {
        var e;
        return t = (t + "").trim().toLowerCase(), (e = Le.exec(t)) ? new Ge((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : (e = je.exec(t)) ? He(parseInt(e[1], 16)) : (e = Ee.exec(t)) ? new Ge(e[1], e[2], e[3], 1) : (e = Ue.exec(t)) ? new Ge(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = Ae.exec(t)) ? Be(e[1], e[2], e[3], e[4]) : (e = Fe.exec(t)) ? Be(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = Oe.exec(t)) ? We(e[1], e[2] / 100, e[3] / 100, 1) : (e = Pe.exec(t)) ? We(e[1], e[2] / 100, e[3] / 100, e[4]) : Ye.hasOwnProperty(t) ? He(Ye[t]) : "transparent" === t ? new Ge(NaN, NaN, NaN, 0) : null
    }

    function He(t) {
        return new Ge(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }

    function Be(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new Ge(t, e, n, r)
    }

    function Re(t) {
        return t instanceof Ne || (t = qe(t)), t ? new Ge((t = t.rgb()).r, t.g, t.b, t.opacity) : new Ge
    }

    function Ie(t, e, n, r) {
        return 1 === arguments.length ? Re(t) : new Ge(t, e, n, null == r ? 1 : r)
    }

    function Ge(t, e, n, r) {
        this.r = +t, this.g = +e, this.b = +n, this.opacity = +r
    }

    function Ze(t) {
        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
    }

    function We(t, e, n, r) {
        return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Ve(t, e, n, r)
    }

    function Ve(t, e, n, r) {
        this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
    }

    function Xe(t, e, n) {
        return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
    }

    Ce(Ne, qe, {
        displayable: function () {
            return this.rgb().displayable()
        }, hex: function () {
            return this.rgb().hex()
        }, toString: function () {
            return this.rgb() + ""
        }
    }), Ce(Ge, Ie, Te(Ne, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Ge(this.r * t, this.g * t, this.b * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Ge(this.r * t, this.g * t, this.b * t, this.opacity)
        }, rgb: function () {
            return this
        }, displayable: function () {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        }, hex: function () {
            return "#" + Ze(this.r) + Ze(this.g) + Ze(this.b)
        }, toString: function () {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }
    })), Ce(Ve, function (t, e, n, r) {
        return 1 === arguments.length ? function (t) {
            if (t instanceof Ve) return new Ve(t.h, t.s, t.l, t.opacity);
            if (t instanceof Ne || (t = qe(t)), !t) return new Ve;
            if (t instanceof Ve) return t;
            var e = (t = t.rgb()).r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), i = Math.max(e, n, r),
                a = NaN, c = i - o, u = (i + o) / 2;
            return c ? (a = e === i ? (n - r) / c + 6 * (n < r) : n === i ? (r - e) / c + 2 : (e - n) / c + 4, c /= u < .5 ? i + o : 2 - i - o, a *= 60) : c = u > 0 && u < 1 ? 0 : a, new Ve(a, c, u, t.opacity)
        }(t) : new Ve(t, e, n, null == r ? 1 : r)
    }, Te(Ne, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Ve(this.h, this.s, this.l * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Ve(this.h, this.s, this.l * t, this.opacity)
        }, rgb: function () {
            var t = this.h % 360 + 360 * (this.h < 0), e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l,
                r = n + (n < .5 ? n : 1 - n) * e, o = 2 * n - r;
            return new Ge(Xe(t >= 240 ? t - 240 : t + 120, o, r), Xe(t, o, r), Xe(t < 120 ? t + 240 : t - 120, o, r), this.opacity)
        }, displayable: function () {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var Qe = Math.PI / 180, Je = 180 / Math.PI, Ke = .96422, tn = 1, en = .82521, nn = 4 / 29, rn = 6 / 29,
        on = 3 * rn * rn, an = rn * rn * rn;

    function cn(t) {
        if (t instanceof un) return new un(t.l, t.a, t.b, t.opacity);
        if (t instanceof dn) {
            if (isNaN(t.h)) return new un(t.l, 0, 0, t.opacity);
            var e = t.h * Qe;
            return new un(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity)
        }
        t instanceof Ge || (t = Re(t));
        var n, r, o = hn(t.r), i = hn(t.g), a = hn(t.b), c = ln((.2225045 * o + .7168786 * i + .0606169 * a) / tn);
        return o === i && i === a ? n = r = c : (n = ln((.4360747 * o + .3850649 * i + .1430804 * a) / Ke), r = ln((.0139322 * o + .0971045 * i + .7141733 * a) / en)), new un(116 * c - 16, 500 * (n - c), 200 * (c - r), t.opacity)
    }

    function un(t, e, n, r) {
        this.l = +t, this.a = +e, this.b = +n, this.opacity = +r
    }

    function ln(t) {
        return t > an ? Math.pow(t, 1 / 3) : t / on + nn
    }

    function sn(t) {
        return t > rn ? t * t * t : on * (t - nn)
    }

    function fn(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }

    function hn(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function dn(t, e, n, r) {
        this.h = +t, this.c = +e, this.l = +n, this.opacity = +r
    }

    Ce(un, function (t, e, n, r) {
        return 1 === arguments.length ? cn(t) : new un(t, e, n, null == r ? 1 : r)
    }, Te(Ne, {
        brighter: function (t) {
            return new un(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        }, darker: function (t) {
            return new un(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        }, rgb: function () {
            var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500,
                n = isNaN(this.b) ? t : t - this.b / 200;
            return new Ge(fn(3.1338561 * (e = Ke * sn(e)) - 1.6168667 * (t = tn * sn(t)) - .4906146 * (n = en * sn(n))), fn(-.9787684 * e + 1.9161415 * t + .033454 * n), fn(.0719453 * e - .2289914 * t + 1.4052427 * n), this.opacity)
        }
    })), Ce(dn, function (t, e, n, r) {
        return 1 === arguments.length ? function (t) {
            if (t instanceof dn) return new dn(t.h, t.c, t.l, t.opacity);
            if (t instanceof un || (t = cn(t)), 0 === t.a && 0 === t.b) return new dn(NaN, 0, t.l, t.opacity);
            var e = Math.atan2(t.b, t.a) * Je;
            return new dn(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }(t) : new dn(t, e, n, null == r ? 1 : r)
    }, Te(Ne, {
        brighter: function (t) {
            return new dn(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
        }, darker: function (t) {
            return new dn(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
        }, rgb: function () {
            return cn(this).rgb()
        }
    }));
    var pn = -.14861, gn = 1.78277, vn = -.29227, bn = -.90649, mn = 1.97294, yn = mn * bn, _n = mn * gn,
        wn = gn * vn - bn * pn;

    function $n(t, e, n, r) {
        this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
    }

    function xn(t) {
        return function () {
            return t
        }
    }

    function Mn(t) {
        return 1 == (t = +t) ? kn : function (e, n) {
            return n - e ? function (t, e, n) {
                return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) {
                    return Math.pow(t + r * e, n)
                }
            }(e, n, t) : xn(isNaN(e) ? n : e)
        }
    }

    function kn(t, e) {
        var n = e - t;
        return n ? function (t, e) {
            return function (n) {
                return t + n * e
            }
        }(t, n) : xn(isNaN(t) ? e : t)
    }

    Ce($n, function (t, e, n, r) {
        return 1 === arguments.length ? function (t) {
            if (t instanceof $n) return new $n(t.h, t.s, t.l, t.opacity);
            t instanceof Ge || (t = Re(t));
            var e = t.r / 255, n = t.g / 255, r = t.b / 255, o = (wn * r + yn * e - _n * n) / (wn + yn - _n), i = r - o,
                a = (mn * (n - o) - vn * i) / bn, c = Math.sqrt(a * a + i * i) / (mn * o * (1 - o)),
                u = c ? Math.atan2(a, i) * Je - 120 : NaN;
            return new $n(u < 0 ? u + 360 : u, c, o, t.opacity)
        }(t) : new $n(t, e, n, null == r ? 1 : r)
    }, Te(Ne, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new $n(this.h, this.s, this.l * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new $n(this.h, this.s, this.l * t, this.opacity)
        }, rgb: function () {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * Qe, e = +this.l, n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
                r = Math.cos(t), o = Math.sin(t);
            return new Ge(255 * (e + n * (pn * r + gn * o)), 255 * (e + n * (vn * r + bn * o)), 255 * (e + n * (mn * r)), this.opacity)
        }
    }));
    var Cn = function t(e) {
        var n = Mn(e);

        function r(t, e) {
            var r = n((t = Ie(t)).r, (e = Ie(e)).r), o = n(t.g, e.g), i = n(t.b, e.b), a = kn(t.opacity, e.opacity);
            return function (e) {
                return t.r = r(e), t.g = o(e), t.b = i(e), t.opacity = a(e), t + ""
            }
        }

        return r.gamma = t, r
    }(1);

    function Tn(t, e) {
        return e -= t = +t, function (n) {
            return t + e * n
        }
    }

    var Nn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Sn = new RegExp(Nn.source, "g");

    function zn(t, e) {
        var n, r = typeof e;
        return null == e || "boolean" === r ? xn(e) : ("number" === r ? Tn : "string" === r ? (n = qe(e)) ? (e = n, Cn) : function (t, e) {
            var n, r, o, i = Nn.lastIndex = Sn.lastIndex = 0, a = -1, c = [], u = [];
            for (t += "", e += ""; (n = Nn.exec(t)) && (r = Sn.exec(e));) (o = r.index) > i && (o = e.slice(i, o), c[a] ? c[a] += o : c[++a] = o), (n = n[0]) === (r = r[0]) ? c[a] ? c[a] += r : c[++a] = r : (c[++a] = null, u.push({
                i: a,
                x: Tn(n, r)
            })), i = Sn.lastIndex;
            return i < e.length && (o = e.slice(i), c[a] ? c[a] += o : c[++a] = o), c.length < 2 ? u[0] ? function (t) {
                return function (e) {
                    return t(e) + ""
                }
            }(u[0].x) : function (t) {
                return function () {
                    return t
                }
            }(e) : (e = u.length, function (t) {
                for (var n, r = 0; r < e; ++r) c[(n = u[r]).i] = n.x(t);
                return c.join("")
            })
        } : e instanceof qe ? Cn : e instanceof Date ? function (t, e) {
            var n = new Date;
            return e -= t = +t, function (r) {
                return n.setTime(t + e * r), n
            }
        } : Array.isArray(e) ? function (t, e) {
            var n, r = e ? e.length : 0, o = t ? Math.min(r, t.length) : 0, i = new Array(o), a = new Array(r);
            for (n = 0; n < o; ++n) i[n] = zn(t[n], e[n]);
            for (; n < r; ++n) a[n] = e[n];
            return function (t) {
                for (n = 0; n < o; ++n) a[n] = i[n](t);
                return a
            }
        } : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? function (t, e) {
            var n, r = {}, o = {};
            for (n in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e) n in t ? r[n] = zn(t[n], e[n]) : o[n] = e[n];
            return function (t) {
                for (n in r) o[n] = r[n](t);
                return o
            }
        } : Tn)(t, e)
    }

    function Dn(t, e) {
        return e -= t = +t, function (n) {
            return Math.round(t + e * n)
        }
    }

    Math.PI, Math.SQRT2;

    function Ln(t) {
        return +t
    }

    var jn = [0, 1];

    function En(t) {
        return t
    }

    function Un(t, e) {
        return (e -= t = +t) ? function (n) {
            return (n - t) / e
        } : (n = isNaN(e) ? NaN : .5, function () {
            return n
        });
        var n
    }

    function An(t) {
        var e, n = t[0], r = t[t.length - 1];
        return n > r && (e = n, n = r, r = e), function (t) {
            return Math.max(n, Math.min(r, t))
        }
    }

    function Fn(t, e, n) {
        var r = t[0], o = t[1], i = e[0], a = e[1];
        return o < r ? (r = Un(o, r), i = n(a, i)) : (r = Un(r, o), i = n(i, a)), function (t) {
            return i(r(t))
        }
    }

    function On(t, e, n) {
        var r = Math.min(t.length, e.length) - 1, o = new Array(r), i = new Array(r), a = -1;
        for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r;) o[a] = Un(t[a], t[a + 1]), i[a] = n(e[a], e[a + 1]);
        return function (e) {
            var n = we(t, e, 1, r) - 1;
            return i[n](o[n](e))
        }
    }

    function Pn(t, e) {
        return function () {
            var t, e, n, r, o, i, a = jn, c = jn, u = zn, l = En;

            function s() {
                return r = Math.min(a.length, c.length) > 2 ? On : Fn, o = i = null, f
            }

            function f(e) {
                return isNaN(e = +e) ? n : (o || (o = r(a.map(t), c, u)))(t(l(e)))
            }

            return f.invert = function (n) {
                return l(e((i || (i = r(c, a.map(t), Tn)))(n)))
            }, f.domain = function (t) {
                return arguments.length ? (a = Array.from(t, Ln), l === En || (l = An(a)), s()) : a.slice()
            }, f.range = function (t) {
                return arguments.length ? (c = Array.from(t), s()) : c.slice()
            }, f.rangeRound = function (t) {
                return c = Array.from(t), u = Dn, s()
            }, f.clamp = function (t) {
                return arguments.length ? (l = t ? An(a) : En, f) : l !== En
            }, f.interpolate = function (t) {
                return arguments.length ? (u = t, s()) : u
            }, f.unknown = function (t) {
                return arguments.length ? (n = t, f) : n
            }, function (n, r) {
                return t = n, e = r, s()
            }
        }()(t, e)
    }

    function Yn(t, e) {
        if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var n, r = t.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)]
    }

    function qn(t) {
        return (t = Yn(Math.abs(t))) ? t[1] : NaN
    }

    var Hn, Bn = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Rn(t) {
        return new In(t)
    }

    function In(t) {
        if (!(e = Bn.exec(t))) throw new Error("invalid format: " + t);
        var e;
        this.fill = e[1] || " ", this.align = e[2] || ">", this.sign = e[3] || "-", this.symbol = e[4] || "", this.zero = !!e[5], this.width = e[6] && +e[6], this.comma = !!e[7], this.precision = e[8] && +e[8].slice(1), this.trim = !!e[9], this.type = e[10] || ""
    }

    function Gn(t, e) {
        var n = Yn(t, e);
        if (!n) return t + "";
        var r = n[0], o = n[1];
        return o < 0 ? "0." + new Array(-o).join("0") + r : r.length > o + 1 ? r.slice(0, o + 1) + "." + r.slice(o + 1) : r + new Array(o - r.length + 2).join("0")
    }

    Rn.prototype = In.prototype, In.prototype.toString = function () {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    var Zn = {
        "%": function (t, e) {
            return (100 * t).toFixed(e)
        }, b: function (t) {
            return Math.round(t).toString(2)
        }, c: function (t) {
            return t + ""
        }, d: function (t) {
            return Math.round(t).toString(10)
        }, e: function (t, e) {
            return t.toExponential(e)
        }, f: function (t, e) {
            return t.toFixed(e)
        }, g: function (t, e) {
            return t.toPrecision(e)
        }, o: function (t) {
            return Math.round(t).toString(8)
        }, p: function (t, e) {
            return Gn(100 * t, e)
        }, r: Gn, s: function (t, e) {
            var n = Yn(t, e);
            if (!n) return t + "";
            var r = n[0], o = n[1], i = o - (Hn = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1, a = r.length;
            return i === a ? r : i > a ? r + new Array(i - a + 1).join("0") : i > 0 ? r.slice(0, i) + "." + r.slice(i) : "0." + new Array(1 - i).join("0") + Yn(t, Math.max(0, e + i - 1))[0]
        }, X: function (t) {
            return Math.round(t).toString(16).toUpperCase()
        }, x: function (t) {
            return Math.round(t).toString(16)
        }
    };

    function Wn(t) {
        return t
    }

    var Vn, Xn, Qn, Jn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function Kn(t) {
        var e, n, r = t.grouping && t.thousands ? (e = t.grouping, n = t.thousands, function (t, r) {
            for (var o = t.length, i = [], a = 0, c = e[0], u = 0; o > 0 && c > 0 && (u + c + 1 > r && (c = Math.max(1, r - u)), i.push(t.substring(o -= c, o + c)), !((u += c + 1) > r));) c = e[a = (a + 1) % e.length];
            return i.reverse().join(n)
        }) : Wn, o = t.currency, i = t.decimal, a = t.numerals ? function (t) {
            return function (e) {
                return e.replace(/[0-9]/g, function (e) {
                    return t[+e]
                })
            }
        }(t.numerals) : Wn, c = t.percent || "%";

        function u(t) {
            var e = (t = Rn(t)).fill, n = t.align, u = t.sign, l = t.symbol, s = t.zero, f = t.width, h = t.comma,
                d = t.precision, p = t.trim, g = t.type;
            "n" === g ? (h = !0, g = "g") : Zn[g] || (null == d && (d = 12), p = !0, g = "g"), (s || "0" === e && "=" === n) && (s = !0, e = "0", n = "=");
            var v = "$" === l ? o[0] : "#" === l && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "",
                b = "$" === l ? o[1] : /[%p]/.test(g) ? c : "", m = Zn[g], y = /[defgprs%]/.test(g);

            function _(t) {
                var o, c, l, _ = v, w = b;
                if ("c" === g) w = m(t) + w, t = ""; else {
                    var $ = (t = +t) < 0;
                    if (t = m(Math.abs(t), d), p && (t = function (t) {
                        t:for (var e, n = t.length, r = 1, o = -1; r < n; ++r) switch (t[r]) {
                            case".":
                                o = e = r;
                                break;
                            case"0":
                                0 === o && (o = r), e = r;
                                break;
                            default:
                                if (o > 0) {
                                    if (!+t[r]) break t;
                                    o = 0
                                }
                        }
                        return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t
                    }(t)), $ && 0 == +t && ($ = !1), _ = ($ ? "(" === u ? u : "-" : "-" === u || "(" === u ? "" : u) + _, w = ("s" === g ? Jn[8 + Hn / 3] : "") + w + ($ && "(" === u ? ")" : ""), y) for (o = -1, c = t.length; ++o < c;) if (48 > (l = t.charCodeAt(o)) || l > 57) {
                        w = (46 === l ? i + t.slice(o + 1) : t.slice(o)) + w, t = t.slice(0, o);
                        break
                    }
                }
                h && !s && (t = r(t, 1 / 0));
                var x = _.length + t.length + w.length, M = x < f ? new Array(f - x + 1).join(e) : "";
                switch (h && s && (t = r(M + t, M.length ? f - w.length : 1 / 0), M = ""), n) {
                    case"<":
                        t = _ + t + w + M;
                        break;
                    case"=":
                        t = _ + M + t + w;
                        break;
                    case"^":
                        t = M.slice(0, x = M.length >> 1) + _ + t + w + M.slice(x);
                        break;
                    default:
                        t = M + _ + t + w
                }
                return a(t)
            }

            return d = null == d ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), _.toString = function () {
                return t + ""
            }, _
        }

        return {
            format: u, formatPrefix: function (t, e) {
                var n = u(((t = Rn(t)).type = "f", t)), r = 3 * Math.max(-8, Math.min(8, Math.floor(qn(e) / 3))),
                    o = Math.pow(10, -r), i = Jn[8 + r / 3];
                return function (t) {
                    return n(o * t) + i
                }
            }
        }
    }

    function tr(t, e, n, r) {
        var o, i = function (t, e, n) {
            var r = Math.abs(e - t) / Math.max(0, n), o = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), i = r / o;
            return i >= $e ? o *= 10 : i >= xe ? o *= 5 : i >= Me && (o *= 2), e < t ? -o : o
        }(t, e, n);
        switch ((r = Rn(null == r ? ",f" : r)).type) {
            case"s":
                var a = Math.max(Math.abs(t), Math.abs(e));
                return null != r.precision || isNaN(o = function (t, e) {
                    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(qn(e) / 3))) - qn(Math.abs(t)))
                }(i, a)) || (r.precision = o), Qn(r, a);
            case"":
            case"e":
            case"g":
            case"p":
            case"r":
                null != r.precision || isNaN(o = function (t, e) {
                    return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, qn(e) - qn(t)) + 1
                }(i, Math.max(Math.abs(t), Math.abs(e)))) || (r.precision = o - ("e" === r.type));
                break;
            case"f":
            case"%":
                null != r.precision || isNaN(o = function (t) {
                    return Math.max(0, -qn(Math.abs(t)))
                }(i)) || (r.precision = o - 2 * ("%" === r.type))
        }
        return Xn(r)
    }

    function er(t) {
        var e = t.domain;
        return t.ticks = function (t) {
            var n = e();
            return function (t, e, n) {
                var r, o, i, a, c = -1;
                if (n = +n, (t = +t) == (e = +e) && n > 0) return [t];
                if ((r = e < t) && (o = t, t = e, e = o), 0 === (a = ke(t, e, n)) || !isFinite(a)) return [];
                if (a > 0) for (t = Math.ceil(t / a), e = Math.floor(e / a), i = new Array(o = Math.ceil(e - t + 1)); ++c < o;) i[c] = (t + c) * a; else for (t = Math.floor(t * a), e = Math.ceil(e * a), i = new Array(o = Math.ceil(t - e + 1)); ++c < o;) i[c] = (t - c) / a;
                return r && i.reverse(), i
            }(n[0], n[n.length - 1], null == t ? 10 : t)
        }, t.tickFormat = function (t, n) {
            var r = e();
            return tr(r[0], r[r.length - 1], null == t ? 10 : t, n)
        }, t.nice = function (n) {
            null == n && (n = 10);
            var r, o = e(), i = 0, a = o.length - 1, c = o[i], u = o[a];
            return u < c && (r = c, c = u, u = r, r = i, i = a, a = r), (r = ke(c, u, n)) > 0 ? r = ke(c = Math.floor(c / r) * r, u = Math.ceil(u / r) * r, n) : r < 0 && (r = ke(c = Math.ceil(c * r) / r, u = Math.floor(u * r) / r, n)), r > 0 ? (o[i] = Math.floor(c / r) * r, o[a] = Math.ceil(u / r) * r, e(o)) : r < 0 && (o[i] = Math.ceil(c * r) / r, o[a] = Math.floor(u * r) / r, e(o)), t
        }, t
    }

    function nr() {
        var t = Pn(En, En);
        return t.copy = function () {
            return e = t, nr().domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
            var e
        }, function (t, e) {
            switch (arguments.length) {
                case 0:
                    break;
                case 1:
                    this.range(t);
                    break;
                default:
                    this.range(e).domain(t)
            }
            return this
        }.apply(t, arguments), er(t)
    }

    Vn = Kn({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""]}), Xn = Vn.format, Qn = Vn.formatPrefix;
    var rr = new Date, or = new Date;

    function ir(t, e, n, r) {
        function o(e) {
            return t(e = new Date(+e)), e
        }

        return o.floor = o, o.ceil = function (n) {
            return t(n = new Date(n - 1)), e(n, 1), t(n), n
        }, o.round = function (t) {
            var e = o(t), n = o.ceil(t);
            return t - e < n - t ? e : n
        }, o.offset = function (t, n) {
            return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t
        }, o.range = function (n, r, i) {
            var a, c = [];
            if (n = o.ceil(n), i = null == i ? 1 : Math.floor(i), !(n < r && i > 0)) return c;
            do {
                c.push(a = new Date(+n)), e(n, i), t(n)
            } while (a < n && n < r);
            return c
        }, o.filter = function (n) {
            return ir(function (e) {
                if (e >= e) for (; t(e), !n(e);) e.setTime(e - 1)
            }, function (t, r) {
                if (t >= t) if (r < 0) for (; ++r <= 0;) for (; e(t, -1), !n(t);) ; else for (; --r >= 0;) for (; e(t, 1), !n(t);) ;
            })
        }, n && (o.count = function (e, r) {
            return rr.setTime(+e), or.setTime(+r), t(rr), t(or), Math.floor(n(rr, or))
        }, o.every = function (t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? o.filter(r ? function (e) {
                return r(e) % t == 0
            } : function (e) {
                return o.count(0, e) % t == 0
            }) : o : null
        }), o
    }

    var ar = ir(function () {
    }, function (t, e) {
        t.setTime(+t + e)
    }, function (t, e) {
        return e - t
    });
    ar.every = function (t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? ir(function (e) {
            e.setTime(Math.floor(e / t) * t)
        }, function (e, n) {
            e.setTime(+e + n * t)
        }, function (e, n) {
            return (n - e) / t
        }) : ar : null
    };
    var cr = 6e4, ur = 6048e5, lr = (ir(function (t) {
        t.setTime(t - t.getMilliseconds())
    }, function (t, e) {
        t.setTime(+t + 1e3 * e)
    }, function (t, e) {
        return (e - t) / 1e3
    }, function (t) {
        return t.getUTCSeconds()
    }), ir(function (t) {
        t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds())
    }, function (t, e) {
        t.setTime(+t + e * cr)
    }, function (t, e) {
        return (e - t) / cr
    }, function (t) {
        return t.getMinutes()
    }), ir(function (t) {
        t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds() - t.getMinutes() * cr)
    }, function (t, e) {
        t.setTime(+t + 36e5 * e)
    }, function (t, e) {
        return (e - t) / 36e5
    }, function (t) {
        return t.getHours()
    }), ir(function (t) {
        t.setHours(0, 0, 0, 0)
    }, function (t, e) {
        t.setDate(t.getDate() + e)
    }, function (t, e) {
        return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * cr) / 864e5
    }, function (t) {
        return t.getDate() - 1
    }));

    function sr(t) {
        return ir(function (e) {
            e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0)
        }, function (t, e) {
            t.setDate(t.getDate() + 7 * e)
        }, function (t, e) {
            return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * cr) / ur
        })
    }

    var fr = sr(0), hr = sr(1), dr = (sr(2), sr(3), sr(4)), pr = (sr(5), sr(6), ir(function (t) {
        t.setDate(1), t.setHours(0, 0, 0, 0)
    }, function (t, e) {
        t.setMonth(t.getMonth() + e)
    }, function (t, e) {
        return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
    }, function (t) {
        return t.getMonth()
    }), ir(function (t) {
        t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
    }, function (t, e) {
        t.setFullYear(t.getFullYear() + e)
    }, function (t, e) {
        return e.getFullYear() - t.getFullYear()
    }, function (t) {
        return t.getFullYear()
    }));
    pr.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? ir(function (e) {
            e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
        }, function (e, n) {
            e.setFullYear(e.getFullYear() + n * t)
        }) : null
    };
    ir(function (t) {
        t.setUTCSeconds(0, 0)
    }, function (t, e) {
        t.setTime(+t + e * cr)
    }, function (t, e) {
        return (e - t) / cr
    }, function (t) {
        return t.getUTCMinutes()
    }), ir(function (t) {
        t.setUTCMinutes(0, 0, 0)
    }, function (t, e) {
        t.setTime(+t + 36e5 * e)
    }, function (t, e) {
        return (e - t) / 36e5
    }, function (t) {
        return t.getUTCHours()
    });
    var gr = ir(function (t) {
        t.setUTCHours(0, 0, 0, 0)
    }, function (t, e) {
        t.setUTCDate(t.getUTCDate() + e)
    }, function (t, e) {
        return (e - t) / 864e5
    }, function (t) {
        return t.getUTCDate() - 1
    });

    function vr(t) {
        return ir(function (e) {
            e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0)
        }, function (t, e) {
            t.setUTCDate(t.getUTCDate() + 7 * e)
        }, function (t, e) {
            return (e - t) / ur
        })
    }

    var br = vr(0), mr = vr(1), yr = (vr(2), vr(3), vr(4)), _r = (vr(5), vr(6), ir(function (t) {
        t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
    }, function (t, e) {
        t.setUTCMonth(t.getUTCMonth() + e)
    }, function (t, e) {
        return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
    }, function (t) {
        return t.getUTCMonth()
    }), ir(function (t) {
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
    }, function (t, e) {
        t.setUTCFullYear(t.getUTCFullYear() + e)
    }, function (t, e) {
        return e.getUTCFullYear() - t.getUTCFullYear()
    }, function (t) {
        return t.getUTCFullYear()
    }));

    function wr(t) {
        if (0 <= t.y && t.y < 100) {
            var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return e.setFullYear(t.y), e
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }

    function $r(t) {
        if (0 <= t.y && t.y < 100) {
            var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return e.setUTCFullYear(t.y), e
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }

    function xr(t) {
        return {y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}
    }

    _r.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? ir(function (e) {
            e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
        }, function (e, n) {
            e.setUTCFullYear(e.getUTCFullYear() + n * t)
        }) : null
    };
    var Mr, kr, Cr, Tr = {"-": "", _: " ", 0: "0"}, Nr = /^\s*\d+/, Sr = /^%/, zr = /[\\^$*+?|[\]().{}]/g;

    function Dr(t, e, n) {
        var r = t < 0 ? "-" : "", o = (r ? -t : t) + "", i = o.length;
        return r + (i < n ? new Array(n - i + 1).join(e) + o : o)
    }

    function Lr(t) {
        return t.replace(zr, "\\$&")
    }

    function jr(t) {
        return new RegExp("^(?:" + t.map(Lr).join("|") + ")", "i")
    }

    function Er(t) {
        for (var e = {}, n = -1, r = t.length; ++n < r;) e[t[n].toLowerCase()] = n;
        return e
    }

    function Ur(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 1));
        return r ? (t.w = +r[0], n + r[0].length) : -1
    }

    function Ar(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 1));
        return r ? (t.u = +r[0], n + r[0].length) : -1
    }

    function Fr(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 2));
        return r ? (t.U = +r[0], n + r[0].length) : -1
    }

    function Or(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 2));
        return r ? (t.V = +r[0], n + r[0].length) : -1
    }

    function Pr(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 2));
        return r ? (t.W = +r[0], n + r[0].length) : -1
    }

    function Yr(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 4));
        return r ? (t.y = +r[0], n + r[0].length) : -1
    }

    function qr(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 2));
        return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1
    }

    function Hr(t, e, n) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1
    }

    function Br(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 2));
        return r ? (t.m = r[0] - 1, n + r[0].length) : -1
    }

    function Rr(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 2));
        return r ? (t.d = +r[0], n + r[0].length) : -1
    }

    function Ir(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 3));
        return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1
    }

    function Gr(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 2));
        return r ? (t.H = +r[0], n + r[0].length) : -1
    }

    function Zr(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 2));
        return r ? (t.M = +r[0], n + r[0].length) : -1
    }

    function Wr(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 2));
        return r ? (t.S = +r[0], n + r[0].length) : -1
    }

    function Vr(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 3));
        return r ? (t.L = +r[0], n + r[0].length) : -1
    }

    function Xr(t, e, n) {
        var r = Nr.exec(e.slice(n, n + 6));
        return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1
    }

    function Qr(t, e, n) {
        var r = Sr.exec(e.slice(n, n + 1));
        return r ? n + r[0].length : -1
    }

    function Jr(t, e, n) {
        var r = Nr.exec(e.slice(n));
        return r ? (t.Q = +r[0], n + r[0].length) : -1
    }

    function Kr(t, e, n) {
        var r = Nr.exec(e.slice(n));
        return r ? (t.Q = 1e3 * +r[0], n + r[0].length) : -1
    }

    function to(t, e) {
        return Dr(t.getDate(), e, 2)
    }

    function eo(t, e) {
        return Dr(t.getHours(), e, 2)
    }

    function no(t, e) {
        return Dr(t.getHours() % 12 || 12, e, 2)
    }

    function ro(t, e) {
        return Dr(1 + lr.count(pr(t), t), e, 3)
    }

    function oo(t, e) {
        return Dr(t.getMilliseconds(), e, 3)
    }

    function io(t, e) {
        return oo(t, e) + "000"
    }

    function ao(t, e) {
        return Dr(t.getMonth() + 1, e, 2)
    }

    function co(t, e) {
        return Dr(t.getMinutes(), e, 2)
    }

    function uo(t, e) {
        return Dr(t.getSeconds(), e, 2)
    }

    function lo(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e
    }

    function so(t, e) {
        return Dr(fr.count(pr(t), t), e, 2)
    }

    function fo(t, e) {
        var n = t.getDay();
        return t = n >= 4 || 0 === n ? dr(t) : dr.ceil(t), Dr(dr.count(pr(t), t) + (4 === pr(t).getDay()), e, 2)
    }

    function ho(t) {
        return t.getDay()
    }

    function po(t, e) {
        return Dr(hr.count(pr(t), t), e, 2)
    }

    function go(t, e) {
        return Dr(t.getFullYear() % 100, e, 2)
    }

    function vo(t, e) {
        return Dr(t.getFullYear() % 1e4, e, 4)
    }

    function bo(t) {
        var e = t.getTimezoneOffset();
        return (e > 0 ? "-" : (e *= -1, "+")) + Dr(e / 60 | 0, "0", 2) + Dr(e % 60, "0", 2)
    }

    function mo(t, e) {
        return Dr(t.getUTCDate(), e, 2)
    }

    function yo(t, e) {
        return Dr(t.getUTCHours(), e, 2)
    }

    function _o(t, e) {
        return Dr(t.getUTCHours() % 12 || 12, e, 2)
    }

    function wo(t, e) {
        return Dr(1 + gr.count(_r(t), t), e, 3)
    }

    function $o(t, e) {
        return Dr(t.getUTCMilliseconds(), e, 3)
    }

    function xo(t, e) {
        return $o(t, e) + "000"
    }

    function Mo(t, e) {
        return Dr(t.getUTCMonth() + 1, e, 2)
    }

    function ko(t, e) {
        return Dr(t.getUTCMinutes(), e, 2)
    }

    function Co(t, e) {
        return Dr(t.getUTCSeconds(), e, 2)
    }

    function To(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e
    }

    function No(t, e) {
        return Dr(br.count(_r(t), t), e, 2)
    }

    function So(t, e) {
        var n = t.getUTCDay();
        return t = n >= 4 || 0 === n ? yr(t) : yr.ceil(t), Dr(yr.count(_r(t), t) + (4 === _r(t).getUTCDay()), e, 2)
    }

    function zo(t) {
        return t.getUTCDay()
    }

    function Do(t, e) {
        return Dr(mr.count(_r(t), t), e, 2)
    }

    function Lo(t, e) {
        return Dr(t.getUTCFullYear() % 100, e, 2)
    }

    function jo(t, e) {
        return Dr(t.getUTCFullYear() % 1e4, e, 4)
    }

    function Eo() {
        return "+0000"
    }

    function Uo() {
        return "%"
    }

    function Ao(t) {
        return +t
    }

    function Fo(t) {
        return Math.floor(+t / 1e3)
    }

    !function (t) {
        Mr = function (t) {
            var e = t.dateTime, n = t.date, r = t.time, o = t.periods, i = t.days, a = t.shortDays, c = t.months,
                u = t.shortMonths, l = jr(o), s = Er(o), f = jr(i), h = Er(i), d = jr(a), p = Er(a), g = jr(c),
                v = Er(c), b = jr(u), m = Er(u), y = {
                    a: function (t) {
                        return a[t.getDay()]
                    },
                    A: function (t) {
                        return i[t.getDay()]
                    },
                    b: function (t) {
                        return u[t.getMonth()]
                    },
                    B: function (t) {
                        return c[t.getMonth()]
                    },
                    c: null,
                    d: to,
                    e: to,
                    f: io,
                    H: eo,
                    I: no,
                    j: ro,
                    L: oo,
                    m: ao,
                    M: co,
                    p: function (t) {
                        return o[+(t.getHours() >= 12)]
                    },
                    Q: Ao,
                    s: Fo,
                    S: uo,
                    u: lo,
                    U: so,
                    V: fo,
                    w: ho,
                    W: po,
                    x: null,
                    X: null,
                    y: go,
                    Y: vo,
                    Z: bo,
                    "%": Uo
                }, _ = {
                    a: function (t) {
                        return a[t.getUTCDay()]
                    },
                    A: function (t) {
                        return i[t.getUTCDay()]
                    },
                    b: function (t) {
                        return u[t.getUTCMonth()]
                    },
                    B: function (t) {
                        return c[t.getUTCMonth()]
                    },
                    c: null,
                    d: mo,
                    e: mo,
                    f: xo,
                    H: yo,
                    I: _o,
                    j: wo,
                    L: $o,
                    m: Mo,
                    M: ko,
                    p: function (t) {
                        return o[+(t.getUTCHours() >= 12)]
                    },
                    Q: Ao,
                    s: Fo,
                    S: Co,
                    u: To,
                    U: No,
                    V: So,
                    w: zo,
                    W: Do,
                    x: null,
                    X: null,
                    y: Lo,
                    Y: jo,
                    Z: Eo,
                    "%": Uo
                }, w = {
                    a: function (t, e, n) {
                        var r = d.exec(e.slice(n));
                        return r ? (t.w = p[r[0].toLowerCase()], n + r[0].length) : -1
                    }, A: function (t, e, n) {
                        var r = f.exec(e.slice(n));
                        return r ? (t.w = h[r[0].toLowerCase()], n + r[0].length) : -1
                    }, b: function (t, e, n) {
                        var r = b.exec(e.slice(n));
                        return r ? (t.m = m[r[0].toLowerCase()], n + r[0].length) : -1
                    }, B: function (t, e, n) {
                        var r = g.exec(e.slice(n));
                        return r ? (t.m = v[r[0].toLowerCase()], n + r[0].length) : -1
                    }, c: function (t, n, r) {
                        return M(t, e, n, r)
                    }, d: Rr, e: Rr, f: Xr, H: Gr, I: Gr, j: Ir, L: Vr, m: Br, M: Zr, p: function (t, e, n) {
                        var r = l.exec(e.slice(n));
                        return r ? (t.p = s[r[0].toLowerCase()], n + r[0].length) : -1
                    }, Q: Jr, s: Kr, S: Wr, u: Ar, U: Fr, V: Or, w: Ur, W: Pr, x: function (t, e, r) {
                        return M(t, n, e, r)
                    }, X: function (t, e, n) {
                        return M(t, r, e, n)
                    }, y: qr, Y: Yr, Z: Hr, "%": Qr
                };

            function $(t, e) {
                return function (n) {
                    var r, o, i, a = [], c = -1, u = 0, l = t.length;
                    for (n instanceof Date || (n = new Date(+n)); ++c < l;) 37 === t.charCodeAt(c) && (a.push(t.slice(u, c)), null != (o = Tr[r = t.charAt(++c)]) ? r = t.charAt(++c) : o = "e" === r ? " " : "0", (i = e[r]) && (r = i(n, o)), a.push(r), u = c + 1);
                    return a.push(t.slice(u, c)), a.join("")
                }
            }

            function x(t, e) {
                return function (n) {
                    var r, o, i = xr(1900);
                    if (M(i, t, n += "", 0) != n.length) return null;
                    if ("Q" in i) return new Date(i.Q);
                    if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "V" in i) {
                        if (i.V < 1 || i.V > 53) return null;
                        "w" in i || (i.w = 1), "Z" in i ? (o = (r = $r(xr(i.y))).getUTCDay(), r = o > 4 || 0 === o ? mr.ceil(r) : mr(r), r = gr.offset(r, 7 * (i.V - 1)), i.y = r.getUTCFullYear(), i.m = r.getUTCMonth(), i.d = r.getUTCDate() + (i.w + 6) % 7) : (o = (r = e(xr(i.y))).getDay(), r = o > 4 || 0 === o ? hr.ceil(r) : hr(r), r = lr.offset(r, 7 * (i.V - 1)), i.y = r.getFullYear(), i.m = r.getMonth(), i.d = r.getDate() + (i.w + 6) % 7)
                    } else ("W" in i || "U" in i) && ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0), o = "Z" in i ? $r(xr(i.y)).getUTCDay() : e(xr(i.y)).getDay(), i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (o + 5) % 7 : i.w + 7 * i.U - (o + 6) % 7);
                    return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, $r(i)) : e(i)
                }
            }

            function M(t, e, n, r) {
                for (var o, i, a = 0, c = e.length, u = n.length; a < c;) {
                    if (r >= u) return -1;
                    if (37 === (o = e.charCodeAt(a++))) {
                        if (o = e.charAt(a++), !(i = w[o in Tr ? e.charAt(a++) : o]) || (r = i(t, n, r)) < 0) return -1
                    } else if (o != n.charCodeAt(r++)) return -1
                }
                return r
            }

            return y.x = $(n, y), y.X = $(r, y), y.c = $(e, y), _.x = $(n, _), _.X = $(r, _), _.c = $(e, _), {
                format: function (t) {
                    var e = $(t += "", y);
                    return e.toString = function () {
                        return t
                    }, e
                }, parse: function (t) {
                    var e = x(t += "", wr);
                    return e.toString = function () {
                        return t
                    }, e
                }, utcFormat: function (t) {
                    var e = $(t += "", _);
                    return e.toString = function () {
                        return t
                    }, e
                }, utcParse: function (t) {
                    var e = x(t, $r);
                    return e.toString = function () {
                        return t
                    }, e
                }
            }
        }(t), Mr.format, Mr.parse, kr = Mr.utcFormat, Cr = Mr.utcParse
    }({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    Date.prototype.toISOString || kr("%Y-%m-%dT%H:%M:%S.%LZ");
    +new Date("2000-01-01T00:00:00.000Z") || Cr("%Y-%m-%dT%H:%M:%S.%LZ");
    var Oo = Math.PI, Po = 2 * Oo, Yo = Po - 1e-6;

    function qo() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
    }

    function Ho() {
        return new qo
    }

    function Bo(t) {
        return function () {
            return t
        }
    }

    qo.prototype = Ho.prototype = {
        constructor: qo, moveTo: function (t, e) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e)
        }, closePath: function () {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
        }, lineTo: function (t, e) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e)
        }, quadraticCurveTo: function (t, e, n, r) {
            this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r)
        }, bezierCurveTo: function (t, e, n, r, o, i) {
            this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +o) + "," + (this._y1 = +i)
        }, arcTo: function (t, e, n, r, o) {
            t = +t, e = +e, n = +n, r = +r, o = +o;
            var i = this._x1, a = this._y1, c = n - t, u = r - e, l = i - t, s = a - e, f = l * l + s * s;
            if (o < 0) throw new Error("negative radius: " + o);
            if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e); else if (f > 1e-6) if (Math.abs(s * c - u * l) > 1e-6 && o) {
                var h = n - i, d = r - a, p = c * c + u * u, g = h * h + d * d, v = Math.sqrt(p), b = Math.sqrt(f),
                    m = o * Math.tan((Oo - Math.acos((p + f - g) / (2 * v * b))) / 2), y = m / b, _ = m / v;
                Math.abs(y - 1) > 1e-6 && (this._ += "L" + (t + y * l) + "," + (e + y * s)), this._ += "A" + o + "," + o + ",0,0," + +(s * h > l * d) + "," + (this._x1 = t + _ * c) + "," + (this._y1 = e + _ * u)
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e); else ;
        }, arc: function (t, e, n, r, o, i) {
            t = +t, e = +e;
            var a = (n = +n) * Math.cos(r), c = n * Math.sin(r), u = t + a, l = e + c, s = 1 ^ i, f = i ? r - o : o - r;
            if (n < 0) throw new Error("negative radius: " + n);
            null === this._x1 ? this._ += "M" + u + "," + l : (Math.abs(this._x1 - u) > 1e-6 || Math.abs(this._y1 - l) > 1e-6) && (this._ += "L" + u + "," + l), n && (f < 0 && (f = f % Po + Po), f > Yo ? this._ += "A" + n + "," + n + ",0,1," + s + "," + (t - a) + "," + (e - c) + "A" + n + "," + n + ",0,1," + s + "," + (this._x1 = u) + "," + (this._y1 = l) : f > 1e-6 && (this._ += "A" + n + "," + n + ",0," + +(f >= Oo) + "," + s + "," + (this._x1 = t + n * Math.cos(o)) + "," + (this._y1 = e + n * Math.sin(o))))
        }, rect: function (t, e, n, r) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z"
        }, toString: function () {
            return this._
        }
    };
    Math.PI;

    function Ro(t) {
        this._context = t
    }

    function Io(t) {
        return new Ro(t)
    }

    function Go(t) {
        return t[0]
    }

    function Zo(t) {
        return t[1]
    }

    function Wo() {
        var t = Go, e = Zo, n = Bo(!0), r = null, o = Io, i = null;

        function a(a) {
            var c, u, l, s = a.length, f = !1;
            for (null == r && (i = o(l = Ho())), c = 0; c <= s; ++c) !(c < s && n(u = a[c], c, a)) === f && ((f = !f) ? i.lineStart() : i.lineEnd()), f && i.point(+t(u, c, a), +e(u, c, a));
            if (l) return i = null, l + "" || null
        }

        return a.x = function (e) {
            return arguments.length ? (t = "function" == typeof e ? e : Bo(+e), a) : t
        }, a.y = function (t) {
            return arguments.length ? (e = "function" == typeof t ? t : Bo(+t), a) : e
        }, a.defined = function (t) {
            return arguments.length ? (n = "function" == typeof t ? t : Bo(!!t), a) : n
        }, a.curve = function (t) {
            return arguments.length ? (o = t, null != r && (i = o(r)), a) : o
        }, a.context = function (t) {
            return arguments.length ? (null == t ? r = i = null : i = o(r = t), a) : r
        }, a
    }

    function Vo(t) {
        return t < 0 ? -1 : 1
    }

    function Xo(t, e, n) {
        var r = t._x1 - t._x0, o = e - t._x1, i = (t._y1 - t._y0) / (r || o < 0 && -0),
            a = (n - t._y1) / (o || r < 0 && -0), c = (i * o + a * r) / (r + o);
        return (Vo(i) + Vo(a)) * Math.min(Math.abs(i), Math.abs(a), .5 * Math.abs(c)) || 0
    }

    function Qo(t, e) {
        var n = t._x1 - t._x0;
        return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e
    }

    function Jo(t, e, n) {
        var r = t._x0, o = t._y0, i = t._x1, a = t._y1, c = (i - r) / 3;
        t._context.bezierCurveTo(r + c, o + c * e, i - c, a - c * n, i, a)
    }

    function Ko(t) {
        this._context = t
    }

    function ti(t) {
        this._context = t
    }

    function ei(t, e) {
        this._context = t, this._t = e
    }

    function ni(t) {
        return new ei(t, 1)
    }

    function ri(t, e, n) {
        const r = Object.create(t);
        return r.y = e[n], r
    }

    function oi(t) {
        for (var e, n, r, o, i, a = t.yScale.ticks(6), c = [], u = 0; u < a.length; u += 1) c[u] = ii(ri(t, a, u));
        return {
            c() {
                for (var a = 0; a < c.length; a += 1) c[a].c();
                e = p("line"), i = p("path"), y(e, "class", "direct svelte-1yea8y5"), y(e, "x1", t.padding.left), y(e, "x2", n = t.width - t.padding.right), y(e, "y1", r = t.yScale(t.values[0])), y(e, "y2", o = t.yScale(t.values[t.values.length - 1])), y(i, "d", t.path), y(i, "class", "svelte-1yea8y5")
            }, m(t, n) {
                for (var r = 0; r < c.length; r += 1) c[r].m(t, n);
                s(t, e, n), s(t, i, n)
            }, p(t, u) {
                if (t.padding || t.width || t.yScale) {
                    a = u.yScale.ticks(6);
                    for (var l = 0; l < a.length; l += 1) {
                        const n = ri(u, a, l);
                        c[l] ? c[l].p(t, n) : (c[l] = ii(n), c[l].c(), c[l].m(e.parentNode, e))
                    }
                    for (; l < c.length; l += 1) c[l].d(1);
                    c.length = a.length
                }
                t.width && n !== (n = u.width - u.padding.right) && y(e, "x2", n), (t.yScale || t.values) && r !== (r = u.yScale(u.values[0])) && y(e, "y1", r), (t.yScale || t.values) && o !== (o = u.yScale(u.values[u.values.length - 1])) && y(e, "y2", o), t.path && y(i, "d", u.path)
            }, d(t) {
                h(c, t), t && (f(e), f(i))
            }
        }
    }

    function ii(t) {
        var e, n, r, o, i, a, c = t.y;
        return {
            c() {
                e = p("text"), n = g(c), o = p("line"), y(e, "x", t.padding.left - 5), y(e, "y", r = t.yScale(t.y)), y(e, "class", "svelte-1yea8y5"), y(o, "x1", t.padding.left), y(o, "x2", i = t.width - t.padding.right), y(o, "transform", a = "translate(0," + t.yScale(t.y) + ")"), y(o, "class", "svelte-1yea8y5")
            }, m(t, r) {
                s(t, e, r), l(e, n), s(t, o, r)
            }, p(t, u) {
                t.yScale && c !== (c = u.y) && _(n, c), t.yScale && r !== (r = u.yScale(u.y)) && y(e, "y", r), t.width && i !== (i = u.width - u.padding.right) && y(o, "x2", i), t.yScale && a !== (a = "translate(0," + u.yScale(u.y) + ")") && y(o, "transform", a)
            }, d(t) {
                t && (f(e), f(o))
            }
        }
    }

    function ai(e) {
        var n, r, o, i, a, c, u, h = e.values.length && oi(e);
        return {
            c() {
                n = d("div"), r = d("h4"), o = g(e.title), i = v(), a = p("svg"), h && h.c(), y(r, "class", "svelte-1yea8y5"), y(a, "height", c = e.height || 50), y(a, "class", "svelte-1yea8y5"), j(() => e.div_1_resize_handler.call(n)), w(n, "margin-top", "1em")
            }, m(t, c) {
                s(t, n, c), l(n, r), l(r, o), l(n, i), l(n, a), h && h.m(a, null), u = function (t, e) {
                    "static" === getComputedStyle(t).position && (t.style.position = "relative");
                    const n = document.createElement("object");
                    let r;
                    return n.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"), n.type = "text/html", n.onload = (() => {
                        (r = n.contentDocument.defaultView).addEventListener("resize", e)
                    }), /Trident/.test(navigator.userAgent) ? (t.appendChild(n), n.data = "about:blank") : (n.data = "about:blank", t.appendChild(n)), {
                        cancel: () => {
                            r && r.removeEventListener && r.removeEventListener("resize", e), t.removeChild(n)
                        }
                    }
                }(n, e.div_1_resize_handler.bind(n))
            }, p(t, e) {
                t.title && _(o, e.title), e.values.length ? h ? h.p(t, e) : ((h = oi(e)).c(), h.m(a, null)) : h && (h.d(1), h = null), t.height && c !== (c = e.height || 50) && y(a, "height", c)
            }, i: t, o: t, d(t) {
                t && f(n), h && h.d(), u.cancel()
            }
        }
    }

    function ci(t, e, n) {
        let r, {title: o = ""} = e;
        const i = {left: 30, right: 10, top: 20, bottom: 20};
        let a, c, u, l, s, f, h, d, p, g, v, {steps: b = [], mode: m = 0} = e;
        return t.$set = (t => {
            "title" in t && n("title", o = t.title), "steps" in t && n("steps", b = t.steps), "mode" in t && n("mode", m = t.mode)
        }), t.$$.update = ((t = {
            width: 1,
            steps: 1,
            mode: 1,
            values: 1,
            yDomain: 1,
            minDomain: 1,
            height: 1,
            yScale: 1,
            xScale: 1,
            lineGen: 1,
            values2: 1
        }) => {
            if (t.width && n("height", c = .7 * r), (t.steps || t.mode) && n("values", u = b.map(t => Q(t).lch()[m]).map(2 === m ? t => t : t => t)), t.values && n("values2", l = u.concat(u[u.length - 1])), (t.steps || t.width) && n("xScale", s = nr().domain([0, b.length]).range([i.left, r - i.right])), t.mode && n("minDomain", f = 1 === m ? 80 : 50), t.values || t.yDomain || t.minDomain) {
                n("yDomain", a = function (t, e) {
                    let n, r;
                    if (void 0 === e) for (const e of t) null != e && (void 0 === n ? e >= e && (n = r = e) : (n > e && (n = e), r < e && (r = e))); else {
                        let o = -1;
                        for (let i of t) null != (i = e(i, ++o, t)) && (void 0 === n ? i >= i && (n = r = i) : (n > i && (n = i), r < i && (r = i)))
                    }
                    return [n, r]
                }(u));
                let t = Math.abs(a[1] - a[0]);
                t < f && (a[0] -= .5 * (f - t), n("yDomain", a), n("values", u), n("minDomain", f), n("steps", b), n("mode", m), a[1] += .5 * (f - t), n("yDomain", a), n("values", u), n("minDomain", f), n("steps", b), n("mode", m), n("yDomain", a), n("values", u), n("minDomain", f), n("steps", b), n("mode", m))
            }
            (t.yDomain || t.height) && n("yScale", h = nr().domain(a).nice().rangeRound([c - i.bottom, i.top])), t.yScale && (d = h.domain()[0]), t.yScale && (p = h.domain()[1]), (t.xScale || t.yScale) && n("lineGen", g = Wo().x((t, e) => s(e)).y(h).curve(ni)), (t.lineGen || t.values2) && n("path", v = g(l))
        }), {
            width: r,
            title: o,
            padding: i,
            steps: b,
            mode: m,
            height: c,
            values: u,
            yScale: h,
            path: v,
            div_1_resize_handler: function () {
                r = this.clientWidth, n("width", r)
            }
        }
    }

    Ro.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, e)
            }
        }
    }, Ko.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    Jo(this, this._t0, Qo(this, this._t0))
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, e) {
            var n = NaN;
            if (e = +e, (t = +t) !== this._x1 || e !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, Jo(this, Qo(this, n = Xo(this, t, e)), n);
                        break;
                    default:
                        Jo(this, this._t0, n = Xo(this, t, e))
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n
            }
        }
    }, (function (t) {
        this._context = new ti(t)
    }.prototype = Object.create(Ko.prototype)).point = function (t, e) {
        Ko.prototype.point.call(this, e, t)
    }, ti.prototype = {
        moveTo: function (t, e) {
            this._context.moveTo(e, t)
        }, closePath: function () {
            this._context.closePath()
        }, lineTo: function (t, e) {
            this._context.lineTo(e, t)
        }, bezierCurveTo: function (t, e, n, r, o, i) {
            this._context.bezierCurveTo(e, t, r, n, i, o)
        }
    }, ei.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x = this._y = NaN, this._point = 0
        }, lineEnd: function () {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
        }, point: function (t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e); else {
                        var n = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(n, this._y), this._context.lineTo(n, e)
                    }
            }
            this._x = t, this._y = e
        }
    };

    class ui extends W {
        constructor(t) {
            super(), Z(this, t, ci, ai, a, ["title", "steps", "mode"])
        }
    }

    function li(t) {
        var e, n;
        return {
            c() {
                e = d("span"), n = g(t.step), y(e, "class", "step rounded-circle svelte-1jaw2bc")
            }, m(t, r) {
                s(t, e, r), l(e, n)
            }, p(t, e) {
                t.step && _(n, e.step)
            }, d(t) {
                t && f(e)
            }
        }
    }

    function si(t) {
        var n, r, o, i, a, u, h = t.step && li(t);
        const p = t.$$slots.default, b = function (t, e, n) {
            if (t) {
                const r = c(t, e, n);
                return t[0](r)
            }
        }(p, t, null);
        return {
            c() {
                n = d("div"), r = d("div"), o = d("h5"), h && h.c(), i = g(t.title), a = v(), b && b.c(), y(o, "class", "card-title svelte-1jaw2bc"), y(r, "class", "card-body svelte-1jaw2bc"), y(n, "class", "card shadow-sm svelte-1jaw2bc"), $(n, "rounded-0", t.noBorderTop), $(n, "border-top-0", t.noBorderTop)
            }, l(t) {
                b && b.l(div0_nodes)
            }, m(t, e) {
                s(t, n, e), l(n, r), l(r, o), h && h.m(o, null), l(o, i), l(r, a), b && b.m(r, null), u = !0
            }, p(t, r) {
                r.step ? h ? h.p(t, r) : ((h = li(r)).c(), h.m(o, i)) : h && (h.d(1), h = null), u && !t.title || _(i, r.title), b && b.p && t.$$scope && b.p(function (t, n, r, o) {
                    return t[1] ? e({}, e(n.$$scope.changed || {}, t[1](o ? o(r) : {}))) : n.$$scope.changed || {}
                }(p, r, t, null), c(p, r, null)), t.noBorderTop && ($(n, "rounded-0", r.noBorderTop), $(n, "border-top-0", r.noBorderTop))
            }, i(t) {
                u || (q(b, t), u = !0)
            }, o(t) {
                H(b, t), u = !1
            }, d(t) {
                t && f(n), h && h.d(), b && b.d(t)
            }
        }
    }

    function fi(t, e, n) {
        let {title: r = "", step: o = "", noBorderTop: i = !1} = e, {$$slots: a = {}, $$scope: c} = e;
        return t.$set = (t => {
            "title" in t && n("title", r = t.title), "step" in t && n("step", o = t.step), "noBorderTop" in t && n("noBorderTop", i = t.noBorderTop), "$$scope" in t && n("$$scope", c = t.$$scope)
        }), {title: r, step: o, noBorderTop: i, $$slots: a, $$scope: c}
    }

    class hi extends W {
        constructor(t) {
            super(), Z(this, t, fi, si, a, ["title", "step", "noBorderTop"])
        }
    }

    function di(e) {
        var n, r;
        return {
            c() {
                n = p("svg"), y(r = p("path"), "fill", "currentColor"), y(r, "d", e.path), y(n, "aria-hidden", "true"), y(n, "class", e.classes + " svelte-p8vizn"), y(n, "role", "img"), y(n, "xmlns", "http://www.w3.org/2000/svg"), y(n, "viewBox", e.viewBox)
            }, m(t, e) {
                s(t, n, e), l(n, r)
            }, p(t, e) {
                t.path && y(r, "d", e.path), t.classes && y(n, "class", e.classes + " svelte-p8vizn"), t.viewBox && y(n, "viewBox", e.viewBox)
            }, i: t, o: t, d(t) {
                t && f(n)
            }
        }
    }

    function pi(t, n, r) {
        let {icon: o} = n, i = [], a = "", c = "";
        return t.$set = (t => {
            r("$$props", n = e(e({}, n), t)), "icon" in n && r("icon", o = n.icon)
        }), t.$$.update = ((t = {icon: 1, $$props: 1}) => {
            t.icon && r("viewBox", c = "0 0 " + o.icon[0] + " " + o.icon[1]), r("classes", a = "fa-svelte " + (n.class ? n.class : "")), t.icon && r("path", i = o.icon[4])
        }), {icon: o, path: i, classes: a, viewBox: c, $$props: n = u(n)}
    }

    class gi extends W {
        constructor(t) {
            super(), Z(this, t, pi, di, a, ["icon"])
        }
    }

    var vi = X(function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = [],
            r = "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z";
        e.definition = {
            prefix: "fas",
            iconName: "check",
            icon: [512, 512, n, "f00c", r]
        }, e.faCheck = e.definition, e.prefix = "fas", e.iconName = "check", e.width = 512, e.height = 512, e.ligatures = n, e.unicode = "f00c", e.svgPathData = r
    });
    V(vi);
    vi.definition;
    var bi = vi.faCheck,
        mi = (vi.prefix, vi.iconName, vi.width, vi.height, vi.ligatures, vi.unicode, vi.svgPathData, X(function (t, e) {
            Object.defineProperty(e, "__esModule", {value: !0});
            var n = [],
                r = "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z";
            e.definition = {
                prefix: "fas",
                iconName: "exclamation-triangle",
                icon: [576, 512, n, "f071", r]
            }, e.faExclamationTriangle = e.definition, e.prefix = "fas", e.iconName = "exclamation-triangle", e.width = 576, e.height = 512, e.ligatures = n, e.unicode = "f071", e.svgPathData = r
        }));
    V(mi);
    mi.definition;
    var yi = mi.faExclamationTriangle;
    mi.prefix, mi.iconName, mi.width, mi.height, mi.ligatures, mi.unicode, mi.svgPathData;

    function _i(t, e, n) {
        const r = Object.create(t);
        return r.type = e[n], r
    }

    function wi(t) {
        var e, n, r, o = new gi({props: {icon: bi}});
        return {
            c() {
                e = d("p"), o.$$.fragment.c(), n = g(" This palette is colorblind-safe."), y(e, "class", "res text-secondary svelte-116gzwh")
            }, m(t, i) {
                s(t, e, i), R(o, e, null), l(e, n), r = !0
            }, p(t, e) {
                var n = {};
                t.faCheck && (n.icon = bi), o.$set(n)
            }, i(t) {
                r || (q(o.$$.fragment, t), r = !0)
            }, o(t) {
                H(o.$$.fragment, t), r = !1
            }, d(t) {
                t && f(e), I(o)
            }
        }
    }

    function $i(t) {
        var e, n, r, o = new gi({props: {icon: yi}});
        return {
            c() {
                e = d("p"), o.$$.fragment.c(), n = g(" This palette is not colorblind-safe."), y(e, "class", "res text-danger svelte-116gzwh")
            }, m(t, i) {
                s(t, e, i), R(o, e, null), l(e, n), r = !0
            }, p(t, e) {
                var n = {};
                t.faExclamationTriangle && (n.icon = yi), o.$set(n)
            }, i(t) {
                r || (q(o.$$.fragment, t), r = !0)
            }, o(t) {
                H(o.$$.fragment, t), r = !1
            }, d(t) {
                t && f(e), I(o)
            }
        }
    }

    function xi(t) {
        var e, n, r, o, i, a, c = "none" === t.type ? "normal" : t.type.substr(0, 4) + ".";
        return {
            c() {
                e = d("label"), n = d("input"), o = g(c), i = v(), t.$$binding_groups[0].push(n), n.__value = t.type, n.value = n.__value, y(n, "type", "radio"), y(n, "name", "options"), y(n, "id", "option1"), y(n, "autocomplete", "off"), n.checked = r = t.active === t.type, y(e, "class", "btn btn-sm btn-outline-secondary"), $(e, "btn-outline-danger", t.result.indexOf(t.type) > -1), $(e, "active", t.active === t.type), a = b(n, "change", t.input_change_handler)
            }, m(r, a) {
                s(r, e, a), l(e, n), n.checked = n.__value === t.active, l(e, o), l(e, i)
            }, p(t, o) {
                t.active && (n.checked = n.__value === o.active), n.value = n.__value, t.active && r !== (r = o.active === o.type) && (n.checked = r), (t.result || t.types) && $(e, "btn-outline-danger", o.result.indexOf(o.type) > -1), (t.active || t.types) && $(e, "active", o.active === o.type)
            }, d(r) {
                r && f(e), t.$$binding_groups[0].splice(t.$$binding_groups[0].indexOf(n), 1), a()
            }
        }
    }

    function Mi(t) {
        var e, n, r, o, i, a, c, u, p, g = [$i, wi], b = [];

        function m(t) {
            return t.result.length ? 0 : 1
        }

        n = m(t), r = b[n] = g[n](t);
        for (var _ = t.types, w = [], $ = 0; $ < _.length; $ += 1) w[$] = xi(_i(t, _, $));
        return {
            c() {
                e = d("div"), r.c(), o = v(), i = d("div"), (a = d("div")).textContent = "simulate:", c = v(), u = d("div");
                for (var t = 0; t < w.length; t += 1) w[t].c();
                y(a, "class", "text-muted svelte-116gzwh"), y(u, "class", "btn-group btn-group-toggle"), u.dataset.toggle = "buttons", y(i, "class", "c1 svelte-116gzwh"), y(e, "class", "colorblind-sim svelte-116gzwh")
            }, m(t, r) {
                s(t, e, r), b[n].m(e, null), l(e, o), l(e, i), l(i, a), l(i, c), l(i, u);
                for (var f = 0; f < w.length; f += 1) w[f].m(u, null);
                p = !0
            }, p(t, i) {
                var a = n;
                if ((n = m(i)) === a ? b[n].p(t, i) : (P(), H(b[a], 1, () => {
                    b[a] = null
                }), Y(), (r = b[n]) || (r = b[n] = g[n](i)).c(), q(r, 1), r.m(e, o)), t.result || t.types || t.active) {
                    _ = i.types;
                    for (var c = 0; c < _.length; c += 1) {
                        const e = _i(i, _, c);
                        w[c] ? w[c].p(t, e) : (w[c] = xi(e), w[c].c(), w[c].m(u, null))
                    }
                    for (; c < w.length; c += 1) w[c].d(1);
                    w.length = _.length
                }
            }, i(t) {
                p || (q(r), p = !0)
            }, o(t) {
                H(r), p = !1
            }, d(t) {
                t && f(e), b[n].d(), h(w, t)
            }
        }
    }

    function ki(t, e, n) {
        let {colors: r = [], result: o = [], active: i = "none"} = e;
        return t.$set = (t => {
            "colors" in t && n("colors", r = t.colors), "result" in t && n("result", o = t.result), "active" in t && n("active", i = t.active)
        }), t.$$.update = ((t = {colors: 1}) => {
            t.colors && n("result", o = function (t) {
                const e = ["deuteranopia", "protanopia", "tritanopia"], n = [];
                for (let r = 0; r < e.length; r++) ae(t, e[r]) || n.push(e[r]);
                return n
            }(r))
        }), {
            colors: r,
            result: o,
            active: i,
            types: ["none", "deuteranopia", "protanopia", "tritanopia"],
            input_change_handler: function () {
                i = this.__value, n("active", i)
            },
            $$binding_groups: [[]]
        }
    }

    class Ci extends W {
        constructor(t) {
            super(), Z(this, t, ki, Mi, a, ["colors", "result", "active"])
        }
    }

    function Ti(t, e, n) {
        const r = Object.create(t);
        return r.option = e[n], r
    }

    function Ni(t) {
        var e, n, r, o, i, a, c, u = t.option.title;
        return {
            c() {
                e = d("label"), n = d("input"), i = g(u), a = v(), t.$$binding_groups[0].push(n), n.__value = r = t.option.value, n.value = n.__value, y(n, "type", "radio"), y(n, "name", "options"), y(n, "id", t.id), y(n, "autocomplete", "off"), n.checked = o = t.value === t.option.value, y(e, "class", "btn btn-outline-secondary"), $(e, "active", t.value === t.option.value), c = b(n, "change", t.input_change_handler)
            }, m(r, o) {
                s(r, e, o), l(e, n), n.checked = n.__value === t.value, l(e, i), l(e, a)
            }, p(t, a) {
                t.value && (n.checked = n.__value === a.value), t.options2 && r !== (r = a.option.value) && (n.__value = r), n.value = n.__value, (t.value || t.options2) && o !== (o = a.value === a.option.value) && (n.checked = o), t.options2 && u !== (u = a.option.title) && _(i, u), (t.value || t.options2) && $(e, "active", a.value === a.option.value)
            }, d(r) {
                r && f(e), t.$$binding_groups[0].splice(t.$$binding_groups[0].indexOf(n), 1), c()
            }
        }
    }

    function Si(e) {
        for (var n, r = e.options2, o = [], i = 0; i < r.length; i += 1) o[i] = Ni(Ti(e, r, i));
        return {
            c() {
                n = d("div");
                for (var t = 0; t < o.length; t += 1) o[t].c();
                y(n, "class", "btn-group btn-group-toggle svelte-18fgzm7"), n.dataset.toggle = "buttons"
            }, m(t, e) {
                s(t, n, e);
                for (var r = 0; r < o.length; r += 1) o[r].m(n, null)
            }, p(t, e) {
                if (t.value || t.options2 || t.id) {
                    r = e.options2;
                    for (var i = 0; i < r.length; i += 1) {
                        const a = Ti(e, r, i);
                        o[i] ? o[i].p(t, a) : (o[i] = Ni(a), o[i].c(), o[i].m(n, null))
                    }
                    for (; i < o.length; i += 1) o[i].d(1);
                    o.length = r.length
                }
            }, i: t, o: t, d(t) {
                t && f(n), h(o, t)
            }
        }
    }

    function zi(t, e, n) {
        let {options: r = []} = e, {value: o, label: i = ""} = e;
        const a = Math.round(1e7 * Math.random()).toString(36);
        let c;
        return t.$set = (t => {
            "options" in t && n("options", r = t.options), "value" in t && n("value", o = t.value), "label" in t && n("label", i = t.label)
        }), t.$$.update = ((t = {options: 1}) => {
            t.options && n("options2", c = r.map(t => "string" == typeof t ? {value: t, title: t} : t))
        }), {
            options: r, value: o, label: i, id: a, options2: c, input_change_handler: function () {
                o = this.__value, n("value", o)
            }, $$binding_groups: [[]]
        }
    }

    class Di extends W {
        constructor(t) {
            super(), Z(this, t, zi, Si, a, ["options", "value", "label"])
        }
    }

    function Li(t) {
        var e, n, r, o, i, a, c, u, h, p;

        function m(e) {
            t.buttongroup_value_binding.call(null, e), o = !0, E(() => o = !1)
        }

        let _ = {options: ["sequential", "diverging"]};
        void 0 !== t.mode && (_.value = t.mode);
        var w = new Di({props: _});
        return L(() => B(w, "value", m)), {
            c() {
                e = d("div"), n = d("div"), r = g("Palette type:\n                "), w.$$.fragment.c(), i = v(), a = d("div"), c = g("Number of colors: "), u = d("input"), y(n, "class", "col-md"), y(u, "type", "number"), y(u, "min", "2"), y(u, "class", "svelte-3uzbpv"), y(a, "class", "col-md"), y(e, "class", "row"), p = b(u, "input", t.input_input_handler)
            }, m(o, f) {
                s(o, e, f), l(e, n), l(n, r), R(w, n, null), l(e, i), l(e, a), l(a, c), l(a, u), u.value = t.numColors, h = !0
            }, p(t, e) {
                var n = {};
                !o && t.mode && (n.value = e.mode), w.$set(n), t.numColors && (u.value = e.numColors)
            }, i(t) {
                h || (q(w.$$.fragment, t), h = !0)
            }, o(t) {
                H(w.$$.fragment, t), h = !1
            }, d(t) {
                t && f(e), I(w), p()
            }
        }
    }

    function ji(t) {
        var e, n, r;

        function o(n) {
            t.inputcolors_colors_binding.call(null, n), e = !0, E(() => e = !1)
        }

        function i(e) {
            t.inputcolors_colors2_binding.call(null, e), n = !0, E(() => n = !1)
        }

        let a = {diverging: "diverging" === t.mode};
        void 0 !== t.colors && (a.colors = t.colors), void 0 !== t.colors2 && (a.colors2 = t.colors2);
        var c = new oe({props: a});
        return L(() => B(c, "colors", o)), L(() => B(c, "colors2", i)), {
            c() {
                c.$$.fragment.c()
            }, m(t, e) {
                R(c, t, e), r = !0
            }, p(t, r) {
                var o = {};
                t.mode && (o.diverging = "diverging" === r.mode), !e && t.colors && (o.colors = r.colors), !n && t.colors2 && (o.colors2 = r.colors2), c.$set(o)
            }, i(t) {
                r || (q(c.$$.fragment, t), r = !0)
            }, o(t) {
                H(c.$$.fragment, t), r = !1
            }, d(t) {
                I(c, t)
            }
        }
    }

    function Ei(t) {
        var e, n, r, o, i, a, c, u, h, p, g, b, m, _, $, x, M, k, C, T, N, S, z, D;

        function j(e) {
            t.checkbox0_value_binding.call(null, e), r = !0, E(() => r = !1)
        }

        let U = {label: "correct lightness"};
        void 0 !== t.correctLightness && (U.value = t.correctLightness);
        var A = new tt({props: U});

        function F(e) {
            t.checkbox1_value_binding.call(null, e), i = !0, E(() => i = !1)
        }

        L(() => B(A, "value", j));
        let O = {label: "bezier interpolation"};
        void 0 !== t.bezier && (O.value = t.bezier);
        var P = new tt({props: O});

        function Y(e) {
            t.colorblindcheck_colors_binding.call(null, e), u = !0, E(() => u = !1)
        }

        function G(e) {
            t.colorblindcheck_active_binding.call(null, e), h = !0, E(() => h = !1)
        }

        L(() => B(P, "value", F));
        let Z = {};
        void 0 !== t.steps && (Z.colors = t.steps), void 0 !== t.simulate && (Z.active = t.simulate);
        var W = new Ci({props: Z});

        function V(e) {
            t.palettepreview_steps_binding.call(null, e), g = !0, E(() => g = !1)
        }

        function X(e) {
            t.palettepreview_correctLightness_binding.call(null, e), b = !0, E(() => b = !1)
        }

        function Q(e) {
            t.palettepreview_bezier_binding.call(null, e), m = !0, E(() => m = !1)
        }

        function J(e) {
            t.palettepreview_colors_binding.call(null, e), _ = !0, E(() => _ = !1)
        }

        function K(e) {
            t.palettepreview_colors2_binding.call(null, e), $ = !0, E(() => $ = !1)
        }

        function et(e) {
            t.palettepreview_numColors_binding.call(null, e), x = !0, E(() => x = !1)
        }

        L(() => B(W, "colors", Y)), L(() => B(W, "active", G));
        let nt = {diverging: "diverging" === t.mode, simulate: t.simulate};
        void 0 !== t.steps && (nt.steps = t.steps), void 0 !== t.correctLightness && (nt.correctLightness = t.correctLightness), void 0 !== t.bezier && (nt.bezier = t.bezier), void 0 !== t.colors && (nt.colors = t.colors), void 0 !== t.colors2 && (nt.colors2 = t.colors2), void 0 !== t.numColors && (nt.numColors = t.numColors);
        var rt = new he({props: nt});
        L(() => B(rt, "steps", V)), L(() => B(rt, "correctLightness", X)), L(() => B(rt, "bezier", Q)), L(() => B(rt, "colors", J)), L(() => B(rt, "colors2", K)), L(() => B(rt, "numColors", et));
        var ot = new ui({props: {title: "lightness", steps: t.steps, mode: 0}}),
            it = new ui({props: {title: "saturation", steps: t.steps, mode: 1}}),
            at = new ui({props: {title: "hue", steps: t.steps, mode: 2}});
        return {
            c() {
                e = d("div"), n = d("div"), A.$$.fragment.c(), o = v(), P.$$.fragment.c(), a = v(), c = d("div"), W.$$.fragment.c(), p = v(), rt.$$.fragment.c(), M = v(), k = d("div"), C = d("div"), ot.$$.fragment.c(), T = v(), N = d("div"), it.$$.fragment.c(), S = v(), z = d("div"), at.$$.fragment.c(), y(n, "class", "col-md"), y(c, "class", "col-md"), y(e, "class", "row"), w(e, "margin-bottom", "10px"), y(C, "class", "col-md"), y(N, "class", "col-md"), y(z, "class", "col-md"), y(k, "class", "row")
            }, m(t, r) {
                s(t, e, r), l(e, n), R(A, n, null), l(n, o), R(P, n, null), l(e, a), l(e, c), R(W, c, null), s(t, p, r), R(rt, t, r), s(t, M, r), s(t, k, r), l(k, C), R(ot, C, null), l(k, T), l(k, N), R(it, N, null), l(k, S), l(k, z), R(at, z, null), D = !0
            }, p(t, e) {
                var n = {};
                !r && t.correctLightness && (n.value = e.correctLightness), A.$set(n);
                var o = {};
                !i && t.bezier && (o.value = e.bezier), P.$set(o);
                var a = {};
                !u && t.steps && (a.colors = e.steps), !h && t.simulate && (a.active = e.simulate), W.$set(a);
                var c = {};
                t.mode && (c.diverging = "diverging" === e.mode), t.simulate && (c.simulate = e.simulate), !g && t.steps && (c.steps = e.steps), !b && t.correctLightness && (c.correctLightness = e.correctLightness), !m && t.bezier && (c.bezier = e.bezier), !_ && t.colors && (c.colors = e.colors), !$ && t.colors2 && (c.colors2 = e.colors2), !x && t.numColors && (c.numColors = e.numColors), rt.$set(c);
                var l = {};
                t.steps && (l.steps = e.steps), ot.$set(l);
                var s = {};
                t.steps && (s.steps = e.steps), it.$set(s);
                var f = {};
                t.steps && (f.steps = e.steps), at.$set(f)
            }, i(t) {
                D || (q(A.$$.fragment, t), q(P.$$.fragment, t), q(W.$$.fragment, t), q(rt.$$.fragment, t), q(ot.$$.fragment, t), q(it.$$.fragment, t), q(at.$$.fragment, t), D = !0)
            }, o(t) {
                H(A.$$.fragment, t), H(P.$$.fragment, t), H(W.$$.fragment, t), H(rt.$$.fragment, t), H(ot.$$.fragment, t), H(it.$$.fragment, t), H(at.$$.fragment, t), D = !1
            }, d(t) {
                t && f(e), I(A), I(P), I(W), t && f(p), I(rt, t), t && (f(M), f(k)), I(ot), I(it), I(at)
            }
        }
    }

    function Ui(t) {
        var e, n, r, o, i, a, c, u, h, p, b, m, _, w = t.isMac ? "cmd" : "ctrl", $ = new be({props: {steps: t.steps}});
        return {
            c() {
                e = d("p"), n = g("You can also save your palette for later by bookmarking "), r = d("a"), o = g("this page"), a = g(" using "), c = d("kbd"), u = g(w), h = g("+"), (p = d("kbd")).textContent = "d", b = g("."), m = v(), $.$$.fragment.c(), y(r, "href", i = "#/" + t.hash), y(c, "class", "svelte-3uzbpv"), y(p, "class", "svelte-3uzbpv")
            }, m(t, i) {
                s(t, e, i), l(e, n), l(e, r), l(r, o), l(e, a), l(e, c), l(c, u), l(e, h), l(e, p), l(e, b), s(t, m, i), R($, t, i), _ = !0
            }, p(t, e) {
                _ && !t.hash || i === (i = "#/" + e.hash) || y(r, "href", i);
                var n = {};
                t.steps && (n.steps = e.steps), $.$set(n)
            }, i(t) {
                _ || (q($.$$.fragment, t), _ = !0)
            }, o(t) {
                H($.$$.fragment, t), _ = !1
            }, d(t) {
                t && (f(e), f(m)), I($, t)
            }
        }
    }

    function Ai(t) {
        var e, n, r, o, i, a, c, u, h, p, g = new hi({
            props: {
                step: "1",
                title: "What kind of palette do you want to create?",
                $$slots: {default: [Li]},
                $$scope: {ctx: t}
            }
        }), m = new hi({
            props: {
                step: "2",
                title: "Select and arrange input colors",
                $$slots: {default: [ji]},
                $$scope: {ctx: t}
            }
        }), _ = new hi({
            props: {
                step: "3",
                title: "Check and configure the resulting palette",
                $$slots: {default: [Ei]},
                $$scope: {ctx: t}
            }
        }), w = new hi({
            props: {
                step: "4",
                title: "Export the color codes in various formats",
                $$slots: {default: [Ui]},
                $$scope: {ctx: t}
            }
        });
        return {
            c() {
                e = d("div"), (n = d("div")).innerHTML = '<h1 class="svelte-3uzbpv">Chroma.js Color Palette Helper</h1> <p>This <a href="https://github.com/gka/chroma.js" target="_blank">chroma.js</a>-powered tool is here to help us  <a target="_blank" href="http://vis4.net/blog/posts/mastering-multi-hued-color-scales/">mastering multi-hued, multi-stops color scales</a>.</p>', r = v(), g.$$.fragment.c(), o = v(), m.$$.fragment.c(), i = v(), _.$$.fragment.c(), a = v(), w.$$.fragment.c(), c = v(), (u = d("div")).innerHTML = '<hr> <p>Created by <a href="https://vis4.net/blog">Gregor Aisch</a> for the sake of better\n\t\t\t        use of colors in maps and data visualizations. Feel free to <a href="https://github.com/gka/palettes">fork on Github</a>.</p>', y(n, "class", "head svelte-3uzbpv"), y(u, "class", "foot svelte-3uzbpv"), y(e, "class", "container"), p = b(window, "hashchange", t.hashChange)
            }, m(t, f) {
                s(t, e, f), l(e, n), l(e, r), R(g, e, null), l(e, o), R(m, e, null), l(e, i), R(_, e, null), l(e, a), R(w, e, null), l(e, c), l(e, u), h = !0
            }, p(t, e) {
                var n = {};
                (t.$$scope || t.numColors || t.mode) && (n.$$scope = {changed: t, ctx: e}), g.$set(n);
                var r = {};
                (t.$$scope || t.mode || t.colors || t.colors2) && (r.$$scope = {changed: t, ctx: e}), m.$set(r);
                var o = {};
                (t.$$scope || t.steps || t.mode || t.simulate || t.correctLightness || t.bezier || t.colors || t.colors2 || t.numColors) && (o.$$scope = {
                    changed: t,
                    ctx: e
                }), _.$set(o);
                var i = {};
                (t.$$scope || t.steps || t.hash) && (i.$$scope = {changed: t, ctx: e}), w.$set(i)
            }, i(t) {
                h || (q(g.$$.fragment, t), q(m.$$.fragment, t), q(_.$$.fragment, t), q(w.$$.fragment, t), h = !0)
            }, o(t) {
                H(g.$$.fragment, t), H(m.$$.fragment, t), H(_.$$.fragment, t), H(w.$$.fragment, t), h = !1
            }, d(t) {
                t && f(e), I(g), I(m), I(_), I(w), p()
            }
        }
    }

    function Fi(t, e, n) {
        let {name: r} = e, o = [], i = !0, a = !0, c = "00429d,96ffea,lightyellow".split(/\s*,\s*/).map(t => Q(t)),
            u = "ffffe0,ff005e,93003a".split(/\s*,\s*/).map(t => Q(t)), l = 9, s = "sequential", f = "none";
        window.location.hash && v();
        const h = navigator.platform.toUpperCase().indexOf("MAC") > -1;
        let d, p = "", g = "sequential";

        function v() {
            const t = window.location.hash.substr(2).split("|");
            6 === t.length ? setTimeout(() => {
                n("numColors", l = +t[0]), n("mode", s = "s" === t[1] ? "sequential" : "diverging"), g = s, n("colors", c = t[2].split(",").map(t => t && Q(t))), n("colors2", u = "" !== t[3] ? t[3].split(",").map(t => t && Q(t)) : []), n("correctLightness", a = "1" === t[4]), n("bezier", i = "1" === t[5])
            }) : window.location.hash = ""
        }

        return k(() => {
            d !== p && (p = d, window.location.hash = `#/${d}`), s !== g && ("diverging" !== s || u.length || n("colors2", u = c.slice(0).reverse()), g = s)
        }), t.$set = (t => {
            "name" in t && n("name", r = t.name)
        }), t.$$.update = ((t = {numColors: 1, mode: 1, colors: 1, colors2: 1, correctLightness: 1, bezier: 1}) => {
            (t.numColors || t.mode || t.colors || t.colors2 || t.correctLightness || t.bezier) && n("hash", d = [l, s.substr(0, 1), c.map(t => t.hex().substr(1)).join(","), u.length ? u.map(t => t.hex().substr(1)).join(",") : "", a ? 1 : 0, i ? 1 : 0].join("|"))
        }), {
            name: r,
            steps: o,
            bezier: i,
            correctLightness: a,
            colors: c,
            colors2: u,
            numColors: l,
            mode: s,
            simulate: f,
            isMac: h,
            hashChange: function () {
                window.location.hash !== `#/${d}` && v()
            },
            hash: d,
            buttongroup_value_binding: function (t) {
                n("mode", s = t)
            },
            input_input_handler: function () {
                var t;
                t = this.value, n("numColors", l = "" === t ? void 0 : +t)
            },
            inputcolors_colors_binding: function (t) {
                n("colors", c = t)
            },
            inputcolors_colors2_binding: function (t) {
                n("colors2", u = t)
            },
            checkbox0_value_binding: function (t) {
                n("correctLightness", a = t)
            },
            checkbox1_value_binding: function (t) {
                n("bezier", i = t)
            },
            colorblindcheck_colors_binding: function (t) {
                n("steps", o = t)
            },
            colorblindcheck_active_binding: function (t) {
                n("simulate", f = t)
            },
            palettepreview_steps_binding: function (t) {
                n("steps", o = t)
            },
            palettepreview_correctLightness_binding: function (t) {
                n("correctLightness", a = t)
            },
            palettepreview_bezier_binding: function (t) {
                n("bezier", i = t)
            },
            palettepreview_colors_binding: function (t) {
                n("colors", c = t)
            },
            palettepreview_colors2_binding: function (t) {
                n("colors2", u = t)
            },
            palettepreview_numColors_binding: function (t) {
                n("numColors", l = t)
            }
        }
    }

    return new class extends W {
        constructor(t) {
            super(), Z(this, t, Fi, Ai, a, ["name"])
        }
    }({target: document.body, props: {name: "world"}})
}();
//# sourceMappingURL=bundle.js.map
