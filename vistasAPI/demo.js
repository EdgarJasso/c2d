function popupShow() {
    $("body").addClass("popup"), window.innerWidth < 480 && ($(".mfp-content").addClass("mobile"), setTimeout(function () {
        $(".popup-form, .popup-action, .market-popup, .cookie-popup").addClass("active")
    }, 400))
}

function popupClose() {
    $("body").removeClass("popup"), $(".popup-form, .popup-action, .market-popup, .cookie-popup").removeClass("active")
}

function getParameterByName(e, t) {
    t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
    var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
        o = n.exec(t);
    return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null
}! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = re.type(e);
        return "function" !== n && !re.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t, n) {
        if (re.isFunction(t)) return re.grep(e, function (e, o) {
            return !!t.call(e, o, e) !== n
        });
        if (t.nodeType) return re.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (me.test(t)) return re.filter(t, e, n);
            t = re.filter(t, e)
        }
        return re.grep(e, function (e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function r(e) {
        var t = {};
        return re.each(e.match(be) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        G.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a), re.ready()
    }

    function s() {
        this.expando = re.expando + s.uid++
    }

    function l(e, t, n) {
        var o;
        if (void 0 === n && 1 === e.nodeType)
            if (o = "data-" + t.replace(Ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(o))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ke.test(n) ? re.parseJSON(n) : n)
                } catch (e) {}
                Te.set(e, t, n)
            } else n = void 0;
        return n
    }

    function c(e, t, n, o) {
        var i, r = 1,
            a = 20,
            s = o ? function () {
                return o.cur()
            } : function () {
                return re.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (re.cssNumber[t] ? "" : "px"),
            u = (re.cssNumber[t] || "px" !== c && +l) && Oe.exec(re.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                r = r || ".5", u /= r, re.style(e, t, u + c)
            } while (r !== (r = s() / l) && 1 !== r && --a)
        }
        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], o && (o.unit = c, o.start = u, o.end = i)), i
    }

    function u(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], n) : n
    }

    function d(e, t) {
        for (var n = 0, o = e.length; o > n; n++) _e.set(e[n], "globalEval", !t || _e.get(t[n], "globalEval"))
    }

    function f(e, t, n, o, i) {
        for (var r, a, s, l, c, f, p = t.createDocumentFragment(), h = [], m = 0, g = e.length; g > m; m++)
            if ((r = e[m]) || 0 === r)
                if ("object" === re.type(r)) re.merge(h, r.nodeType ? [r] : r);
                else if (Le.test(r)) {
            for (a = a || p.appendChild(t.createElement("div")), s = (Pe.exec(r) || ["", ""])[1].toLowerCase(), l = Ie[s] || Ie._default, a.innerHTML = l[1] + re.htmlPrefilter(r) + l[2], f = l[0]; f--;) a = a.lastChild;
            re.merge(h, a.childNodes), a = p.firstChild, a.textContent = ""
        } else h.push(t.createTextNode(r));
        for (p.textContent = "", m = 0; r = h[m++];)
            if (o && re.inArray(r, o) > -1) i && i.push(r);
            else if (c = re.contains(r.ownerDocument, r), a = u(p.appendChild(r), "script"), c && d(a), n)
            for (f = 0; r = a[f++];) Ne.test(r.type || "") && n.push(r);
        return p
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function m() {
        try {
            return G.activeElement
        } catch (e) {}
    }

    function g(e, t, n, o, i, r) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (o = o || n, n = void 0);
            for (s in t) g(e, s, n, o, t[s], r);
            return e
        }
        if (null == o && null == i ? (i = n, o = n = void 0) : null == i && ("string" == typeof n ? (i = o, o = void 0) : (i = o, o = n, n = void 0)), !1 === i) i = h;
        else if (!i) return e;
        return 1 === r && (a = i, i = function (e) {
            return re().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = re.guid++)), e.each(function () {
            re.event.add(this, t, i, o, n)
        })
    }

    function v(e, t) {
        return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function x(e) {
        var t = ze.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function b(e, t) {
        var n, o, i, r, a, s, l, c;
        if (1 === t.nodeType) {
            if (_e.hasData(e) && (r = _e.access(e), a = _e.set(t, r), c = r.events)) {
                delete a.handle, a.events = {};
                for (i in c)
                    for (n = 0, o = c[i].length; o > n; n++) re.event.add(t, i, c[i][n])
            }
            Te.hasData(e) && (s = Te.access(e), l = re.extend({}, s), Te.set(t, l))
        }
    }

    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && De.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function C(e, t, n, o) {
        t = J.apply([], t);
        var i, r, a, s, l, c, d = 0,
            p = e.length,
            h = p - 1,
            m = t[0],
            g = re.isFunction(m);
        if (g || p > 1 && "string" == typeof m && !oe.checkClone && We.test(m)) return e.each(function (i) {
            var r = e.eq(i);
            g && (t[0] = m.call(this, i, r.html())), C(r, t, n, o)
        });
        if (p && (i = f(t, e[0].ownerDocument, !1, e, o), r = i.firstChild, 1 === i.childNodes.length && (i = r), r || o)) {
            for (a = re.map(u(i, "script"), y), s = a.length; p > d; d++) l = i, d !== h && (l = re.clone(l, !0, !0), s && re.merge(a, u(l, "script"))), n.call(e[d], l, d);
            if (s)
                for (c = a[a.length - 1].ownerDocument, re.map(a, x), d = 0; s > d; d++) l = a[d], Ne.test(l.type || "") && !_e.access(l, "globalEval") && re.contains(c, l) && (l.src ? re._evalUrl && re._evalUrl(l.src) : re.globalEval(l.textContent.replace(Re, "")))
        }
        return e
    }

    function S(e, t, n) {
        for (var o, i = t ? re.filter(t, e) : e, r = 0; null != (o = i[r]); r++) n || 1 !== o.nodeType || re.cleanData(u(o)), o.parentNode && (n && re.contains(o.ownerDocument, o) && d(u(o, "script")), o.parentNode.removeChild(o));
        return e
    }

    function _(e, t) {
        var n = re(t.createElement(e)).appendTo(t.body),
            o = re.css(n[0], "display");
        return n.detach(), o
    }

    function T(e) {
        var t = G,
            n = Xe[e];
        return n || (n = _(e, t), "none" !== n && n || (Ue = (Ue || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ue[0].contentDocument, t.write(), t.close(), n = _(e, t), Ue.detach()), Xe[e] = n), n
    }

    function k(e, t, n) {
        var o, i, r, a, s = e.style;
        return n = n || Ge(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), n && !oe.pixelMarginRight() && Ve.test(a) && Ye.test(t) && (o = s.width, i = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = o, s.minWidth = i, s.maxWidth = r), void 0 !== a ? a + "" : a
    }

    function E(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function j(e) {
        if (e in nt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--;)
            if ((e = tt[n] + t) in nt) return e
    }

    function O(e, t, n) {
        var o = Oe.exec(t);
        return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
    }

    function A(e, t, n, o, i) {
        for (var r = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += re.css(e, n + Ae[r], !0, i)), o ? ("content" === n && (a -= re.css(e, "padding" + Ae[r], !0, i)), "margin" !== n && (a -= re.css(e, "border" + Ae[r] + "Width", !0, i))) : (a += re.css(e, "padding" + Ae[r], !0, i), "padding" !== n && (a += re.css(e, "border" + Ae[r] + "Width", !0, i)));
        return a
    }

    function B(e, t, n) {
        var o = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = Ge(e),
            a = "border-box" === re.css(e, "boxSizing", !1, r);
        if (0 >= i || null == i) {
            if (i = k(e, t, r), (0 > i || null == i) && (i = e.style[t]), Ve.test(i)) return i;
            o = a && (oe.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + A(e, t, n || (a ? "border" : "content"), o, r) + "px"
    }

    function D(e, t) {
        for (var n, o, i, r = [], a = 0, s = e.length; s > a; a++) o = e[a], o.style && (r[a] = _e.get(o, "olddisplay"), n = o.style.display, t ? (r[a] || "none" !== n || (o.style.display = ""), "" === o.style.display && Be(o) && (r[a] = _e.access(o, "olddisplay", T(o.nodeName)))) : (i = Be(o), "none" === n && i || _e.set(o, "olddisplay", i ? n : re.css(o, "display"))));
        for (a = 0; s > a; a++) o = e[a], o.style && (t && "none" !== o.style.display && "" !== o.style.display || (o.style.display = t ? r[a] || "" : "none"));
        return e
    }

    function P(e, t, n, o, i) {
        return new P.prototype.init(e, t, n, o, i)
    }

    function N() {
        return e.setTimeout(function () {
            ot = void 0
        }), ot = re.now()
    }

    function I(e, t) {
        var n, o = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Ae[o], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function L(e, t, n) {
        for (var o, i = (H.tweeners[t] || []).concat(H.tweeners["*"]), r = 0, a = i.length; a > r; r++)
            if (o = i[r].call(n, t, e)) return o
    }

    function M(e, t, n) {
        var o, i, r, a, s, l, c, u = this,
            d = {},
            f = e.style,
            p = e.nodeType && Be(e),
            h = _e.get(e, "fxshow");
        n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = re.css(e, "display"), "inline" === ("none" === c ? _e.get(e, "olddisplay") || T(e.nodeName) : c) && "none" === re.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (o in t)
            if (i = t[o], rt.exec(i)) {
                if (delete t[o], r = r || "toggle" === i, i === (p ? "hide" : "show")) {
                    if ("show" !== i || !h || void 0 === h[o]) continue;
                    p = !0
                }
                d[o] = h && h[o] || re.style(e, o)
            } else c = void 0;
        if (re.isEmptyObject(d)) "inline" === ("none" === c ? T(e.nodeName) : c) && (f.display = c);
        else {
            h ? "hidden" in h && (p = h.hidden) : h = _e.access(e, "fxshow", {}), r && (h.hidden = !p), p ? re(e).show() : u.done(function () {
                re(e).hide()
            }), u.done(function () {
                var t;
                _e.remove(e, "fxshow");
                for (t in d) re.style(e, t, d[t])
            });
            for (o in d) a = L(p ? h[o] : 0, o, u), o in h || (h[o] = a.start, p && (a.end = a.start, a.start = "width" === o || "height" === o ? 1 : 0))
        }
    }

    function $(e, t) {
        var n, o, i, r, a;
        for (n in e)
            if (o = re.camelCase(n), i = t[o], r = e[n], re.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== o && (e[o] = r, delete e[n]), (a = re.cssHooks[o]) && "expand" in a) {
                r = a.expand(r), delete e[o];
                for (n in r) n in e || (e[n] = r[n], t[n] = i)
            } else t[o] = i
    }

    function H(e, t, n) {
        var o, i, r = 0,
            a = H.prefilters.length,
            s = re.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (i) return !1;
                for (var t = ot || N(), n = Math.max(0, c.startTime + c.duration - t), o = n / c.duration || 0, r = 1 - o, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(r);
                return s.notifyWith(e, [c, r, n]), 1 > r && l ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: re.extend({}, t),
                opts: re.extend(!0, {
                    specialEasing: {},
                    easing: re.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ot || N(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var o = re.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(o), o
                },
                stop: function (t) {
                    var n = 0,
                        o = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; o > n; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for ($(u, c.opts.specialEasing); a > r; r++)
            if (o = H.prefilters[r].call(c, e, u, c.opts)) return re.isFunction(o.stop) && (re._queueHooks(c.elem, c.opts.queue).stop = re.proxy(o.stop, o)), o;
        return re.map(u, L, c), re.isFunction(c.opts.start) && c.opts.start.call(e, c), re.fx.timer(re.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function q(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function F(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var o, i = 0,
                r = t.toLowerCase().match(be) || [];
            if (re.isFunction(n))
                for (; o = r[i++];) "+" === o[0] ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
        }
    }

    function W(e, t, n, o) {
        function i(s) {
            var l;
            return r[s] = !0, re.each(e[s] || [], function (e, s) {
                var c = s(t, n, o);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }), l
        }
        var r = {},
            a = e === Tt;
        return i(t.dataTypes[0]) || !r["*"] && i("*")
    }

    function z(e, t) {
        var n, o, i = re.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : o || (o = {}))[n] = t[n]);
        return o && re.extend(!0, e, o), e
    }

    function R(e, t, n) {
        for (var o, i, r, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (i in s)
                if (s[i] && s[i].test(o)) {
                    l.unshift(i);
                    break
                } if (l[0] in n) r = l[0];
        else {
            for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                    r = i;
                    break
                }
                a || (a = i)
            }
            r = r || a
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function U(e, t, n, o) {
        var i, r, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (!(a = c[l + " " + r] || c["* " + r]))
                for (i in c)
                    if (s = i.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        !0 === a ? a = c[i] : !0 !== c[i] && (r = s[0], u.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function X(e, t, n, o) {
        var i;
        if (re.isArray(t)) re.each(t, function (t, i) {
            n || Ot.test(e) ? o(e, i) : X(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, o)
        });
        else if (n || "object" !== re.type(t)) o(e, t);
        else
            for (i in t) X(e + "[" + i + "]", t[i], n, o)
    }

    function Y(e) {
        return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var V = [],
        G = e.document,
        K = V.slice,
        J = V.concat,
        Q = V.push,
        Z = V.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        oe = {},
        ie = "2.2.4",
        re = function (e, t) {
            return new re.fn.init(e, t)
        },
        ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        le = /-([\da-z])/gi,
        ce = function (e, t) {
            return t.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: ie,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function () {
            return K.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : K.call(this)
        },
        pushStack: function (e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e) {
            return re.each(this, e)
        },
        map: function (e) {
            return this.pushStack(re.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: Q,
        sort: V.sort,
        splice: V.splice
    }, re.extend = re.fn.extend = function () {
        var e, t, n, o, i, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], o = e[t], a !== o && (c && o && (re.isPlainObject(o) || (i = re.isArray(o))) ? (i ? (i = !1, r = n && re.isArray(n) ? n : []) : r = n && re.isPlainObject(n) ? n : {}, a[t] = re.extend(c, r, o)) : void 0 !== o && (a[t] = o));
        return a
    }, re.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === re.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = e && e.toString();
            return !re.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function (e) {
            var t;
            if ("object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || ne.call(e, t)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            var t, n = eval;
            (e = re.trim(e)) && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function (e) {
            return e.replace(se, "ms-").replace(le, ce)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t) {
            var o, i = 0;
            if (n(e))
                for (o = e.length; o > i && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(ae, "")
        },
        makeArray: function (e, t) {
            var o = t || [];
            return null != e && (n(Object(e)) ? re.merge(o, "string" == typeof e ? [e] : e) : Q.call(o, e)), o
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, o = 0, i = e.length; n > o; o++) e[i++] = t[o];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var o = [], i = 0, r = e.length, a = !n; r > i; i++) !t(e[i], i) !== a && o.push(e[i]);
            return o
        },
        map: function (e, t, o) {
            var i, r, a = 0,
                s = [];
            if (n(e))
                for (i = e.length; i > a; a++) null != (r = t(e[a], a, o)) && s.push(r);
            else
                for (a in e) null != (r = t(e[a], a, o)) && s.push(r);
            return J.apply([], s)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, o, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), re.isFunction(e) ? (o = K.call(arguments, 2), i = function () {
                return e.apply(t || this, o.concat(K.call(arguments)))
            }, i.guid = e.guid = e.guid || re.guid++, i) : void 0
        },
        now: Date.now,
        support: oe
    }), "function" == typeof Symbol && (re.fn[Symbol.iterator] = V[Symbol.iterator]), re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function (e) {
        function t(e, t, n, o) {
            var i, r, a, s, l, c, d, p, h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!o && ((t ? t.ownerDocument || t : q) !== D && B(t), t = t || D, N)) {
                if (11 !== m && (c = ve.exec(e)))
                    if (i = c[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (h && (a = h.getElementById(i)) && $(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (c[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = c[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
                    } if (w.qsa && !U[e + " "] && (!I || !I.test(e))) {
                    if (1 !== m) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, "\\$&") : t.setAttribute("id", s = H), d = T(e), r = d.length, l = fe.test(s) ? "#" + s : "[id='" + s + "']"; r--;) d[r] = l + " " + f(d[r]);
                        p = d.join(","), h = ye.test(e) && u(t.parentNode) || t
                    }
                    if (p) try {
                        return Q.apply(n, h.querySelectorAll(p)), n
                    } catch (e) {} finally {
                        s === H && t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(se, "$1"), t, n, o)
        }

        function n() {
            function e(n, o) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = o
            }
            var t = [];
            return e
        }

        function o(e) {
            return e[H] = !0, e
        }

        function i(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) C.attrHandle[n[o]] = t
        }

        function a(e, t) {
            var n = t && e,
                o = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (o) return o;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return o(function (t) {
                return t = +t, o(function (n, o) {
                    for (var i, r = e([], n.length, t), a = r.length; a--;) n[i = r[a]] && (n[i] = !(o[i] = n[i]))
                })
            })
        }

        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, o = ""; n > t; t++) o += e[t].value;
            return o
        }

        function p(e, t, n) {
            var o = t.dir,
                i = n && "parentNode" === o,
                r = W++;
            return t.first ? function (t, n, r) {
                for (; t = t[o];)
                    if (1 === t.nodeType || i) return e(t, n, r)
            } : function (t, n, a) {
                var s, l, c, u = [F, r];
                if (a) {
                    for (; t = t[o];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[o];)
                        if (1 === t.nodeType || i) {
                            if (c = t[H] || (t[H] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[o]) && s[0] === F && s[1] === r) return u[2] = s[2];
                            if (l[o] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, o) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, o)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, o) {
            for (var i = 0, r = n.length; r > i; i++) t(e, n[i], o);
            return o
        }

        function g(e, t, n, o, i) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(r = e[s]) && (n && !n(r, o, i) || (a.push(r), c && t.push(s)));
            return a
        }

        function v(e, t, n, i, r, a) {
            return i && !i[H] && (i = v(i)), r && !r[H] && (r = v(r, a)), o(function (o, a, s, l) {
                var c, u, d, f = [],
                    p = [],
                    h = a.length,
                    v = o || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? v : g(v, f, e, s, l),
                    x = n ? r || (o ? e : h || i) ? [] : a : y;
                if (n && n(y, x, s, l), i)
                    for (c = g(x, p), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (x[p[u]] = !(y[p[u]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = x.length; u--;)(d = x[u]) && c.push(y[u] = d);
                            r(null, x = [], c, l)
                        }
                        for (u = x.length; u--;)(d = x[u]) && (c = r ? ee(o, d) : f[u]) > -1 && (o[c] = !(a[c] = d))
                    }
                } else x = g(x === a ? x.splice(h, x.length) : x), r ? r(null, a, x, l) : Q.apply(a, x)
            })
        }

        function y(e) {
            for (var t, n, o, i = e.length, r = C.relative[e[0].type], a = r || C.relative[" "], s = r ? 1 : 0, l = p(function (e) {
                    return e === t
                }, a, !0), c = p(function (e) {
                    return ee(t, e) > -1
                }, a, !0), u = [function (e, n, o) {
                    var i = !r && (o || n !== j) || ((t = n).nodeType ? l(e, n, o) : c(e, n, o));
                    return t = null, i
                }]; i > s; s++)
                if (n = C.relative[e[s].type]) u = [p(h(u), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                        for (o = ++s; i > o && !C.relative[e[o].type]; o++);
                        return v(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, o > s && y(e.slice(s, o)), i > o && y(e = e.slice(o)), i > o && f(e))
                    }
                    u.push(n)
                } return h(u)
        }

        function x(e, n) {
            var i = n.length > 0,
                r = e.length > 0,
                a = function (o, a, s, l, c) {
                    var u, d, f, p = 0,
                        h = "0",
                        m = o && [],
                        v = [],
                        y = j,
                        x = o || r && C.find.TAG("*", c),
                        b = F += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (c && (j = a === D || a || c); h !== w && null != (u = x[h]); h++) {
                        if (r && u) {
                            for (d = 0, a || u.ownerDocument === D || (B(u), s = !N); f = e[d++];)
                                if (f(u, a || D, s)) {
                                    l.push(u);
                                    break
                                } c && (F = b)
                        }
                        i && ((u = !f && u) && p--, o && m.push(u))
                    }
                    if (p += h, i && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (o) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = K.call(l));
                            v = g(v)
                        }
                        Q.apply(l, v), c && !o && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (F = b, j = y), m
                };
            return i ? o(a) : a
        }
        var b, w, C, S, _, T, k, E, j, O, A, B, D, P, N, I, L, M, $, H = "sizzle" + 1 * new Date,
            q = e.document,
            F = 0,
            W = 0,
            z = n(),
            R = n(),
            U = n(),
            X = function (e, t) {
                return e === t && (A = !0), 0
            },
            Y = 1 << 31,
            V = {}.hasOwnProperty,
            G = [],
            K = G.pop,
            J = G.push,
            Q = G.push,
            Z = G.slice,
            ee = function (e, t) {
                for (var n = 0, o = e.length; o > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = "\\[" + ne + "*(" + oe + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            re = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(re),
            fe = new RegExp("^" + oe + "$"),
            pe = {
                ID: new RegExp("^#(" + oe + ")"),
                CLASS: new RegExp("^\\.(" + oe + ")"),
                TAG: new RegExp("^(" + oe + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            xe = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function (e, t, n) {
                var o = "0x" + t - 65536;
                return o !== o || n ? t : 0 > o ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
            },
            Ce = function () {
                B()
            };
        try {
            Q.apply(G = Z.call(q.childNodes), q.childNodes), G[q.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: G.length ? function (e, t) {
                    J.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, o = 0; e[n++] = t[o++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, _ = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, B = t.setDocument = function (e) {
            var t, n, o = e ? e.ownerDocument || e : q;
            return o !== D && 9 === o.nodeType && o.documentElement ? (D = o, P = D.documentElement, N = !_(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ge.test(D.getElementsByClassName), w.getById = i(function (e) {
                return P.appendChild(e).id = H, !D.getElementsByName || !D.getElementsByName(H).length
            }), w.getById ? (C.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && N) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, C.filter.ID = function (e) {
                var t = e.replace(be, we);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function (e) {
                var t = e.replace(be, we);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = w.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, o = [],
                    i = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[i++];) 1 === n.nodeType && o.push(n);
                    return o
                }
                return r
            }, C.find.CLASS = w.getElementsByClassName && function (e, t) {
                return void 0 !== t.getElementsByClassName && N ? t.getElementsByClassName(e) : void 0
            }, L = [], I = [], (w.qsa = ge.test(D.querySelectorAll)) && (i(function (e) {
                P.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || I.push(".#.+[+~]")
            }), i(function (e) {
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
            })), (w.matchesSelector = ge.test(M = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), L.push("!=", re)
            }), I = I.length && new RegExp(I.join("|")), L = L.length && new RegExp(L.join("|")), t = ge.test(P.compareDocumentPosition), $ = t || ge.test(P.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    o = t && t.parentNode;
                return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function (e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === q && $(q, e) ? -1 : t === D || t.ownerDocument === q && $(q, t) ? 1 : O ? ee(O, e) - ee(O, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return A = !0, 0;
                var n, o = 0,
                    i = e.parentNode,
                    r = t.parentNode,
                    s = [e],
                    l = [t];
                if (!i || !r) return e === D ? -1 : t === D ? 1 : i ? -1 : r ? 1 : O ? ee(O, e) - ee(O, t) : 0;
                if (i === r) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[o] === l[o];) o++;
                return o ? a(s[o], l[o]) : s[o] === q ? -1 : l[o] === q ? 1 : 0
            }, D) : D
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== D && B(e), n = n.replace(ue, "='$1']"), w.matchesSelector && N && !U[n + " "] && (!L || !L.test(n)) && (!I || !I.test(n))) try {
                var o = M.call(e, n);
                if (o || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o
            } catch (e) {}
            return t(n, D, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== D && B(e), $(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== D && B(e);
            var n = C.attrHandle[t.toLowerCase()],
                o = n && V.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
            return void 0 !== o ? o : w.attributes || !N ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                o = 0,
                i = 0;
            if (A = !w.detectDuplicates, O = !w.sortStable && e.slice(0), e.sort(X), A) {
                for (; t = e[i++];) t === e[i] && (o = n.push(i));
                for (; o--;) e.splice(n[o], 1)
            }
            return O = null, e
        }, S = t.getText = function (e) {
            var t, n = "",
                o = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[o++];) n += S(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(be, we).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, o) {
                    return function (i) {
                        var r = t.attr(i, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === o : "!=" === n ? r !== o : "^=" === n ? o && 0 === r.indexOf(o) : "*=" === n ? o && r.indexOf(o) > -1 : "$=" === n ? o && r.slice(-o.length) === o : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(o) > -1 : "|=" === n && (r === o || r.slice(0, o.length + 1) === o + "-"))
                    }
                },
                CHILD: function (e, t, n, o, i) {
                    var r = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === o && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, f, p, h, m = r !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            x = !1;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (f = g, d = f[H] || (f[H] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === F && c[1], x = p && c[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (x = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++x && f === t) {
                                        u[e] = [F, p, x];
                                        break
                                    }
                            } else if (y && (f = t, d = f[H] || (f[H] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === F && c[1], x = p), !1 === x)
                                for (;
                                    (f = ++p && f && f[m] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++x || (y && (d = f[H] || (f[H] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [F, x]), f !== t)););
                            return (x -= i) === o || x % o == 0 && x / o >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var i, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[H] ? r(n) : r.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function (e, t) {
                        for (var o, i = r(e, n), a = i.length; a--;) o = ee(e, i[a]), e[o] = !(t[o] = i[a])
                    }) : function (e) {
                        return r(e, 0, i)
                    }) : r
                }
            },
            pseudos: {
                not: o(function (e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(se, "$1"));
                    return i[H] ? o(function (e, t, n, o) {
                        for (var r, a = i(e, null, o, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function (e, o, r) {
                        return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: o(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: o(function (e) {
                    return e = e.replace(be, we),
                        function (t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                }),
                lang: o(function (e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === P
                },
                focus: function (e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return !1 === e.disabled
                },
                disabled: function (e) {
                    return !0 === e.disabled
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !C.pseudos.empty(e)
                },
                header: function (e) {
                    return me.test(e.nodeName)
                },
                input: function (e) {
                    return he.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function (e, t, n) {
                    for (var o = 0 > n ? n + t : n; --o >= 0;) e.push(o);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var o = 0 > n ? n + t : n; ++o < t;) e.push(o);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[b] = s(b);
        for (b in {
                submit: !0,
                reset: !0
            }) C.pseudos[b] = l(b);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, T = t.tokenize = function (e, n) {
            var o, i, r, a, s, l, c, u = R[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = C.preFilter; s;) {
                o && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(r = [])), o = !1, (i = ce.exec(s)) && (o = i.shift(), r.push({
                    value: o,
                    type: i[0].replace(se, " ")
                }), s = s.slice(o.length));
                for (a in C.filter) !(i = pe[a].exec(s)) || c[a] && !(i = c[a](i)) || (o = i.shift(), r.push({
                    value: o,
                    type: a,
                    matches: i
                }), s = s.slice(o.length));
                if (!o) break
            }
            return n ? s.length : s ? t.error(e) : R(e, l).slice(0)
        }, k = t.compile = function (e, t) {
            var n, o = [],
                i = [],
                r = U[e + " "];
            if (!r) {
                for (t || (t = T(e)), n = t.length; n--;) r = y(t[n]), r[H] ? o.push(r) : i.push(r);
                r = U(e, x(i, o)), r.selector = e
            }
            return r
        }, E = t.select = function (e, t, n, o) {
            var i, r, a, s, l, c = "function" == typeof e && e,
                d = !o && T(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && w.getById && 9 === t.nodeType && N && C.relative[r[1].type]) {
                    if (!(t = (C.find.ID(a.matches[0].replace(be, we), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : r.length; i-- && (a = r[i], !C.relative[s = a.type]);)
                    if ((l = C.find[s]) && (o = l(a.matches[0].replace(be, we), ye.test(r[0].type) && u(t.parentNode) || t))) {
                        if (r.splice(i, 1), !(e = o.length && f(r))) return Q.apply(n, o), n;
                        break
                    }
            }
            return (c || k(e, d))(o, t, !N, n, !t || ye.test(e) && u(t.parentNode) || t), n
        }, w.sortStable = H.split("").sort(X).join("") === H, w.detectDuplicates = !!A, B(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function (e, t, n) {
            var o;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }), t
    }(e);
    re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.uniqueSort = re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
    var de = function (e, t, n) {
            for (var o = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && re(e).is(n)) break;
                    o.push(e)
                } return o
        },
        fe = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        pe = re.expr.match.needsContext,
        he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        me = /^.[^:#\[\.,]*$/;
    re.filter = function (e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? re.find.matchesSelector(o, e) ? [o] : [] : re.find.matches(e, re.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, re.fn.extend({
        find: function (e) {
            var t, n = this.length,
                o = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(re(e).filter(function () {
                for (t = 0; n > t; t++)
                    if (re.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) re.find(e, i[t], o);
            return o = this.pushStack(n > 1 ? re.unique(o) : o), o.selector = this.selector ? this.selector + " " + e : e, o
        },
        filter: function (e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function (e) {
            return !!o(this, "string" == typeof e && pe.test(e) ? re(e) : e || [], !1).length
        }
    });
    var ge, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (re.fn.init = function (e, t, n) {
        var o, i;
        if (!e) return this;
        if (n = n || ge, "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), he.test(o[1]) && re.isPlainObject(t))
                    for (o in t) re.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return i = G.getElementById(o[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = G, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
    }).prototype = re.fn, ge = re(G);
    var ye = /^(?:parents|prev(?:Until|All))/,
        xe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.fn.extend({
        has: function (e) {
            var t = re(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)
                    if (re.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, o = 0, i = this.length, r = [], a = pe.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; i > o; o++)
                for (n = this[o]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    } return this.pushStack(r.length > 1 ? re.uniqueSort(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? Z.call(re(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), re.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return de(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return de(e, "parentNode", n)
        },
        next: function (e) {
            return i(e, "nextSibling")
        },
        prev: function (e) {
            return i(e, "previousSibling")
        },
        nextAll: function (e) {
            return de(e, "nextSibling")
        },
        prevAll: function (e) {
            return de(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return de(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return de(e, "previousSibling", n)
        },
        siblings: function (e) {
            return fe((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return fe(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || re.merge([], e.childNodes)
        }
    }, function (e, t) {
        re.fn[e] = function (n, o) {
            var i = re.map(this, t, n);
            return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (i = re.filter(o, i)), this.length > 1 && (xe[e] || re.uniqueSort(i), ye.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var be = /\S+/g;
    re.Callbacks = function (e) {
        e = "string" == typeof e ? r(e) : re.extend({}, e);
        var t, n, o, i, a = [],
            s = [],
            l = -1,
            c = function () {
                for (i = e.once, o = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
            },
            u = {
                add: function () {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
                        re.each(n, function (n, o) {
                            re.isFunction(o) ? e.unique && u.has(o) || a.push(o) : o && o.length && "string" !== re.type(o) && t(o)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function () {
                    return re.each(arguments, function (e, t) {
                        for (var n;
                            (n = re.inArray(t, a, n)) > -1;) a.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function (e) {
                    return e ? re.inArray(e, a) > -1 : a.length > 0
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return i = s = [], a = n = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return i = s = [], n || (a = n = ""), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return u
    }, re.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                n = "pending",
                o = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return re.Deferred(function (n) {
                            re.each(t, function (t, r) {
                                var a = re.isFunction(e[t]) && e[t];
                                i[r[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && re.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === o ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? re.extend(e, o) : o
                    }
                },
                i = {};
            return o.pipe = o.then, re.each(t, function (e, r) {
                var a = r[2],
                    s = r[3];
                o[r[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[r[0]] = function () {
                    return i[r[0] + "With"](this === i ? o : this, arguments), this
                }, i[r[0] + "With"] = a.fireWith
            }), o.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t, n, o, i = 0,
                r = K.call(arguments),
                a = r.length,
                s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : re.Deferred(),
                c = function (e, n, o) {
                    return function (i) {
                        n[e] = this, o[e] = arguments.length > 1 ? K.call(arguments) : i, o === t ? l.notifyWith(n, o) : --s || l.resolveWith(n, o)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), o = new Array(a); a > i; i++) r[i] && re.isFunction(r[i].promise) ? r[i].promise().progress(c(i, n, t)).done(c(i, o, r)).fail(l.reject) : --s;
            return s || l.resolveWith(o, r), l.promise()
        }
    });
    var we;
    re.fn.ready = function (e) {
        return re.ready.promise().done(e), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? re.readyWait++ : re.ready(!0)
        },
        ready: function (e) {
            (!0 === e ? --re.readyWait : re.isReady) || (re.isReady = !0, !0 !== e && --re.readyWait > 0 || (we.resolveWith(G, [re]), re.fn.triggerHandler && (re(G).triggerHandler("ready"), re(G).off("ready"))))
        }
    }), re.ready.promise = function (t) {
        return we || (we = re.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(re.ready) : (G.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a))), we.promise(t)
    }, re.ready.promise();
    var Ce = function (e, t, n, o, i, r, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === re.type(n)) {
                i = !0;
                for (s in n) Ce(e, t, s, n[s], !0, r, a)
            } else if (void 0 !== o && (i = !0, re.isFunction(o) || (a = !0), c && (a ? (t.call(e, o), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(re(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        Se = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    s.uid = 1, s.prototype = {
        register: function (e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function (e) {
            if (!Se(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, Se(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var o, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else
                for (o in t) i[o] = t[o];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function (e, t, n) {
            var o;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (o = this.get(e, t), void 0 !== o ? o : this.get(e, re.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, o, i, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 === t) this.register(e);
                else {
                    re.isArray(t) ? o = t.concat(t.map(re.camelCase)) : (i = re.camelCase(t), t in r ? o = [t, i] : (o = i, o = o in r ? [o] : o.match(be) || [])), n = o.length;
                    for (; n--;) delete r[o[n]]
                }(void 0 === t || re.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !re.isEmptyObject(t)
        }
    };
    var _e = new s,
        Te = new s,
        ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ee = /[A-Z]/g;
    re.extend({
        hasData: function (e) {
            return Te.hasData(e) || _e.hasData(e)
        },
        data: function (e, t, n) {
            return Te.access(e, t, n)
        },
        removeData: function (e, t) {
            Te.remove(e, t)
        },
        _data: function (e, t, n) {
            return _e.access(e, t, n)
        },
        _removeData: function (e, t) {
            _e.remove(e, t)
        }
    }), re.fn.extend({
        data: function (e, t) {
            var n, o, i, r = this[0],
                a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (i = Te.get(r), 1 === r.nodeType && !_e.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (o = a[n].name, 0 === o.indexOf("data-") && (o = re.camelCase(o.slice(5)), l(r, o, i[o])));
                    _e.set(r, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                Te.set(this, e)
            }) : Ce(this, function (t) {
                var n, o;
                if (r && void 0 === t) {
                    if (void 0 !== (n = Te.get(r, e) || Te.get(r, e.replace(Ee, "-$&").toLowerCase()))) return n;
                    if (o = re.camelCase(e), void 0 !== (n = Te.get(r, o))) return n;
                    if (void 0 !== (n = l(r, o, void 0))) return n
                } else o = re.camelCase(e), this.each(function () {
                    var n = Te.get(this, o);
                    Te.set(this, o, t), e.indexOf("-") > -1 && void 0 !== n && Te.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Te.remove(this, e)
            })
        }
    }), re.extend({
        queue: function (e, t, n) {
            var o;
            return e ? (t = (t || "fx") + "queue", o = _e.get(e, t), n && (!o || re.isArray(n) ? o = _e.access(e, t, re.makeArray(n)) : o.push(n)), o || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = re.queue(e, t),
                o = n.length,
                i = n.shift(),
                r = re._queueHooks(e, t),
                a = function () {
                    re.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), o--), i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, a, r)), !o && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return _e.get(e, n) || _e.access(e, n, {
                empty: re.Callbacks("once memory").add(function () {
                    _e.remove(e, [t + "queue", n])
                })
            })
        }
    }), re.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = re.queue(this, e, t);
                re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                re.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, o = 1,
                i = re.Deferred(),
                r = this,
                a = this.length,
                s = function () {
                    --o || i.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = _e.get(r[a], e + "queueHooks")) && n.empty && (o++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Oe = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
        Ae = ["Top", "Right", "Bottom", "Left"],
        Be = function (e, t) {
            return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
        },
        De = /^(?:checkbox|radio)$/i,
        Pe = /<([\w:-]+)/,
        Ne = /^$|\/(?:java|ecma)script/i,
        Ie = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td;
    var Le = /<|&#?\w+;/;
    ! function () {
        var e = G.createDocumentFragment(),
            t = e.appendChild(G.createElement("div")),
            n = G.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), oe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", oe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Me = /^key/,
        $e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        He = /^([^.]*)(?:\.(.+)|)/;
    re.event = {
        global: {},
        add: function (e, t, n, o, i) {
            var r, a, s, l, c, u, d, f, p, h, m, g = _e.get(e);
            if (g)
                for (n.handler && (r = n, n = r.handler, i = r.selector), n.guid || (n.guid = re.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                        return void 0 !== re && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(be) || [""], c = t.length; c--;) s = He.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (d = re.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = re.event.special[p] || {}, u = re.extend({
                    type: p,
                    origType: m,
                    data: o,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && re.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, r), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, o, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), re.event.global[p] = !0)
        },
        remove: function (e, t, n, o, i) {
            var r, a, s, l, c, u, d, f, p, h, m, g = _e.hasData(e) && _e.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(be) || [""], c = t.length; c--;)
                    if (s = He.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = re.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;) u = f[r], !i && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || o && o !== u.selector && ("**" !== o || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || re.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) re.event.remove(e, p + t[c], n, o, !0);
                re.isEmptyObject(l) && _e.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            e = re.event.fix(e);
            var t, n, o, i, r, a = [],
                s = K.call(arguments),
                l = (_e.get(this, "events") || {})[e.type] || [],
                c = re.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = re.event.handlers.call(this, e, l), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (r = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (o = ((re.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (e.result = o) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, o, i, r, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (o = [], n = 0; s > n; n++) r = t[n], i = r.selector + " ", void 0 === o[i] && (o[i] = r.needsContext ? re(i, this).index(l) > -1 : re.find(i, this, null, [l]).length), o[i] && o.push(r);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, o, i, r = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, o = n.documentElement, i = n.body, e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[re.expando]) return e;
            var t, n, o, i = e.type,
                r = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = $e.test(i) ? this.mouseHooks : Me.test(i) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(r), t = o.length; t--;) n = o[t], e[n] = r[n];
            return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== m() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === m() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return re.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, re.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, re.Event = function (e, t) {
        return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? p : h) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
    }, re.Event.prototype = {
        constructor: re.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, o = this,
                    i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === o || re.contains(o, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), re.fn.extend({
        on: function (e, t, n, o) {
            return g(this, e, t, n, o)
        },
        one: function (e, t, n, o) {
            return g(this, e, t, n, o, 1)
        },
        off: function (e, t, n) {
            var o, i;
            if (e && e.preventDefault && e.handleObj) return o = e.handleObj, re(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = h), this.each(function () {
                re.event.remove(this, e, n, t)
            })
        }
    });
    var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Fe = /<script|<style|<link/i,
        We = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ze = /^true\/(.*)/,
        Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    re.extend({
        htmlPrefilter: function (e) {
            return e.replace(qe, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var o, i, r, a, s = e.cloneNode(!0),
                l = re.contains(e.ownerDocument, e);
            if (!(oe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                for (a = u(s), r = u(e), o = 0, i = r.length; i > o; o++) w(r[o], a[o]);
            if (t)
                if (n)
                    for (r = r || u(e), a = a || u(s), o = 0, i = r.length; i > o; o++) b(r[o], a[o]);
                else b(e, s);
            return a = u(s, "script"), a.length > 0 && d(a, !l && u(e, "script")), s
        },
        cleanData: function (e) {
            for (var t, n, o, i = re.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (Se(n)) {
                    if (t = n[_e.expando]) {
                        if (t.events)
                            for (o in t.events) i[o] ? re.event.remove(n, o) : re.removeEvent(n, o, t.handle);
                        n[_e.expando] = void 0
                    }
                    n[Te.expando] && (n[Te.expando] = void 0)
                }
        }
    }), re.fn.extend({
        domManip: C,
        detach: function (e) {
            return S(this, e, !0)
        },
        remove: function (e) {
            return S(this, e)
        },
        text: function (e) {
            return Ce(this, function (e) {
                return void 0 === e ? re.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return C(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    v(this, e).appendChild(e)
                }
            })
        },
        prepend: function () {
            return C(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return C(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return C(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (re.cleanData(u(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return re.clone(this, e, t)
            })
        },
        html: function (e) {
            return Ce(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    o = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Fe.test(e) && !Ie[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = re.htmlPrefilter(e);
                    try {
                        for (; o > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(u(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return C(this, arguments, function (t) {
                var n = this.parentNode;
                re.inArray(this, e) < 0 && (re.cleanData(u(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        re.fn[e] = function (e) {
            for (var n, o = [], i = re(e), r = i.length - 1, a = 0; r >= a; a++) n = a === r ? this : this.clone(!0), re(i[a])[t](n), Q.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Ue, Xe = {
            HTML: "block",
            BODY: "block"
        },
        Ye = /^margin/,
        Ve = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
        Ge = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Ke = function (e, t, n, o) {
            var i, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            i = n.apply(e, o || []);
            for (r in t) e.style[r] = a[r];
            return i
        },
        Je = G.documentElement;
    ! function () {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Je.appendChild(a);
            var t = e.getComputedStyle(s);
            n = "1%" !== t.top, r = "2px" === t.marginLeft, o = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Je.removeChild(a)
        }
        var n, o, i, r, a = G.createElement("div"),
            s = G.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", oe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), re.extend(oe, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return null == o && t(), o
            },
            pixelMarginRight: function () {
                return null == o && t(), i
            },
            reliableMarginLeft: function () {
                return null == o && t(), r
            },
            reliableMarginRight: function () {
                var t, n = s.appendChild(G.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Je.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), Je.removeChild(a), s.removeChild(n), t
            }
        }))
    }();
    var Qe = /^(none|table(?!-c[ea]).+)/,
        Ze = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        et = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        tt = ["Webkit", "O", "Moz", "ms"],
        nt = G.createElement("div").style;
    re.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = k(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, r, a, s = re.camelCase(t),
                    l = e.style;
                return t = re.cssProps[s] || (re.cssProps[s] = j(s) || s), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, o)) ? i : l[t] : (r = typeof n, "string" === r && (i = Oe.exec(n)) && i[1] && (n = c(e, t, i), r = "number"), void(null != n && n === n && ("number" === r && (n += i && i[3] || (re.cssNumber[s] ? "" : "px")), oe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, o)) || (l[t] = n))))
            }
        },
        css: function (e, t, n, o) {
            var i, r, a, s = re.camelCase(t);
            return t = re.cssProps[s] || (re.cssProps[s] = j(s) || s), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = k(e, t, o)), "normal" === i && t in et && (i = et[t]), "" === n || n ? (r = parseFloat(i), !0 === n || isFinite(r) ? r || 0 : i) : i
        }
    }), re.each(["height", "width"], function (e, t) {
        re.cssHooks[t] = {
            get: function (e, n, o) {
                return n ? Qe.test(re.css(e, "display")) && 0 === e.offsetWidth ? Ke(e, Ze, function () {
                    return B(e, t, o)
                }) : B(e, t, o) : void 0
            },
            set: function (e, n, o) {
                var i, r = o && Ge(e),
                    a = o && A(e, t, o, "border-box" === re.css(e, "boxSizing", !1, r), r);
                return a && (i = Oe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = re.css(e, t)), O(e, n, a)
            }
        }
    }), re.cssHooks.marginLeft = E(oe.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(k(e, "marginLeft")) || e.getBoundingClientRect().left - Ke(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), re.cssHooks.marginRight = E(oe.reliableMarginRight, function (e, t) {
        return t ? Ke(e, {
            display: "inline-block"
        }, k, [e, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        re.cssHooks[e + t] = {
            expand: function (n) {
                for (var o = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > o; o++) i[e + Ae[o] + t] = r[o] || r[o - 2] || r[0];
                return i
            }
        }, Ye.test(e) || (re.cssHooks[e + t].set = O)
    }), re.fn.extend({
        css: function (e, t) {
            return Ce(this, function (e, t, n) {
                var o, i, r = {},
                    a = 0;
                if (re.isArray(t)) {
                    for (o = Ge(e), i = t.length; i > a; a++) r[t[a]] = re.css(e, t[a], !1, o);
                    return r
                }
                return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return D(this, !0)
        },
        hide: function () {
            return D(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Be(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = P, P.prototype = {
        constructor: P,
        init: function (e, t, n, o, i, r) {
            this.elem = e, this.prop = n, this.easing = i || re.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = r || (re.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (e) {
                re.fx.step[e.prop] ? re.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[re.cssProps[e.prop]] && !re.cssHooks[e.prop] ? e.elem[e.prop] = e.now : re.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, re.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, re.fx = P.prototype.init, re.fx.step = {};
    var ot, it, rt = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    re.Animation = re.extend(H, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return c(n.elem, e, Oe.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                re.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(be);
                for (var n, o = 0, i = e.length; i > o; o++) n = e[o], H.tweeners[n] = H.tweeners[n] || [], H.tweeners[n].unshift(t)
            },
            prefilters: [M],
            prefilter: function (e, t) {
                t ? H.prefilters.unshift(e) : H.prefilters.push(e)
            }
        }), re.speed = function (e, t, n) {
            var o = e && "object" == typeof e ? re.extend({}, e) : {
                complete: n || !n && t || re.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !re.isFunction(t) && t
            };
            return o.duration = re.fx.off ? 0 : "number" == typeof o.duration ? o.duration : o.duration in re.fx.speeds ? re.fx.speeds[o.duration] : re.fx.speeds._default, null != o.queue && !0 !== o.queue || (o.queue = "fx"), o.old = o.complete, o.complete = function () {
                re.isFunction(o.old) && o.old.call(this), o.queue && re.dequeue(this, o.queue)
            }, o
        }, re.fn.extend({
            fadeTo: function (e, t, n, o) {
                return this.filter(Be).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, o)
            },
            animate: function (e, t, n, o) {
                var i = re.isEmptyObject(e),
                    r = re.speed(t, n, o),
                    a = function () {
                        var t = H(this, re.extend({}, e), r);
                        (i || _e.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function (e, t, n) {
                var o = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        r = re.timers,
                        a = _e.get(this);
                    if (i) a[i] && a[i].stop && o(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && at.test(i) && o(a[i]);
                    for (i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n), t = !1, r.splice(i, 1));
                    !t && n || re.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = _e.get(this),
                        o = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        r = re.timers,
                        a = o ? o.length : 0;
                    for (n.finish = !0, re.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; a > t; t++) o[t] && o[t].finish && o[t].finish.call(this);
                    delete n.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function (e, t) {
            var n = re.fn[t];
            re.fn[t] = function (e, o, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, o, i)
            }
        }), re.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            re.fn[e] = function (e, n, o) {
                return this.animate(t, e, n, o)
            }
        }), re.timers = [], re.fx.tick = function () {
            var e, t = 0,
                n = re.timers;
            for (ot = re.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || re.fx.stop(), ot = void 0
        }, re.fx.timer = function (e) {
            re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function () {
            it || (it = e.setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function () {
            e.clearInterval(it), it = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function (t, n) {
            return t = re.fx ? re.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, o) {
                var i = e.setTimeout(n, t);
                o.stop = function () {
                    e.clearTimeout(i)
                }
            })
        },
        function () {
            var e = G.createElement("input"),
                t = G.createElement("select"),
                n = t.appendChild(G.createElement("option"));
            e.type = "checkbox", oe.checkOn = "" !== e.value, oe.optSelected = n.selected, t.disabled = !0, oe.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", oe.radioValue = "t" === e.value
        }();
    var st, lt = re.expr.attrHandle;
    re.fn.extend({
        attr: function (e, t) {
            return Ce(this, re.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                re.removeAttr(this, e)
            })
        }
    }), re.extend({
        attr: function (e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? re.prop(e, t, n) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? st : void 0)), void 0 !== n ? null === n ? void re.removeAttr(e, t) : i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = re.find.attr(e, t), null == o ? void 0 : o))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!oe.radioValue && "radio" === t && re.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, o, i = 0,
                r = t && t.match(be);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) o = re.propFix[n] || n, re.expr.match.bool.test(n) && (e[o] = !1), e.removeAttribute(n)
        }
    }), st = {
        set: function (e, t, n) {
            return !1 === t ? re.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = lt[t] || re.find.attr;
        lt[t] = function (e, t, o) {
            var i, r;
            return o || (r = lt[t], lt[t] = i, i = null != n(e, t, o) ? t.toLowerCase() : null, lt[t] = r), i
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i,
        ut = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function (e, t) {
            return Ce(this, re.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[re.propFix[e] || e]
            })
        }
    }), re.extend({
        prop: function (e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && re.isXMLDoc(e) || (t = re.propFix[t] || t, i = re.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = re.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), oe.optSelected || (re.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        re.propFix[this.toLowerCase()] = this
    });
    var dt = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function (e) {
            var t, n, o, i, r, a, s, l = 0;
            if (re.isFunction(e)) return this.each(function (t) {
                re(this).addClass(e.call(this, t, q(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(be) || []; n = this[l++];)
                    if (i = q(n), o = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
                        for (a = 0; r = t[a++];) o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                        s = re.trim(o), i !== s && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, o, i, r, a, s, l = 0;
            if (re.isFunction(e)) return this.each(function (t) {
                re(this).removeClass(e.call(this, t, q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(be) || []; n = this[l++];)
                    if (i = q(n), o = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
                        for (a = 0; r = t[a++];)
                            for (; o.indexOf(" " + r + " ") > -1;) o = o.replace(" " + r + " ", " ");
                        s = re.trim(o), i !== s && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function (n) {
                re(this).toggleClass(e.call(this, n, q(this), t), t)
            }) : this.each(function () {
                var t, o, i, r;
                if ("string" === n)
                    for (o = 0, i = re(this), r = e.match(be) || []; t = r[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = q(this), t && _e.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : _e.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, o = 0;
            for (t = " " + e + " "; n = this[o++];)
                if (1 === n.nodeType && (" " + q(n) + " ").replace(dt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ft = /\r/g,
        pt = /[\x20\t\r\n\f]+/g;
    re.fn.extend({
        val: function (e) {
            var t, n, o, i = this[0];
            return arguments.length ? (o = re.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = o ? e.call(this, n, re(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : re.isArray(i) && (i = re.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), (t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = re.valHooks[i.type] || re.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ft, "") : null == n ? "" : n)) : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = re.find.attr(e, "value");
                    return null != t ? t : re.trim(re.text(e)).replace(pt, " ")
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, o = e.options, i = e.selectedIndex, r = "select-one" === e.type || 0 > i, a = r ? null : [], s = r ? i + 1 : o.length, l = 0 > i ? s : r ? i : 0; s > l; l++)
                        if (n = o[l], (n.selected || l === i) && (oe.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                            if (t = re(n).val(), r) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var n, o, i = e.options, r = re.makeArray(t), a = i.length; a--;) o = i[a], (o.selected = re.inArray(re.valHooks.option.get(o), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function () {
        re.valHooks[this] = {
            set: function (e, t) {
                return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) > -1 : void 0
            }
        }, oe.checkOn || (re.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ht = /^(?:focusinfocus|focusoutblur)$/;
    re.extend(re.event, {
        trigger: function (t, n, o, i) {
            var r, a, s, l, c, u, d, f = [o || G],
                p = ne.call(t, "type") ? t.type : t,
                h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = o = o || G, 3 !== o.nodeType && 8 !== o.nodeType && !ht.test(p + re.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[re.expando] ? t : new re.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : re.makeArray(n, [t]), d = re.event.special[p] || {}, i || !d.trigger || !1 !== d.trigger.apply(o, n))) {
                if (!i && !d.noBubble && !re.isWindow(o)) {
                    for (l = d.delegateType || p, ht.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                    s === (o.ownerDocument || G) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (r = 0;
                    (a = f[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || p, u = (_e.get(a, "events") || {})[t.type] && _e.get(a, "handle"), u && u.apply(a, n), (u = c && a[c]) && u.apply && Se(a) && (t.result = u.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Se(o) || c && re.isFunction(o[p]) && !re.isWindow(o) && (s = o[c], s && (o[c] = null), re.event.triggered = p, o[p](), re.event.triggered = void 0, s && (o[c] = s)), t.result
            }
        },
        simulate: function (e, t, n) {
            var o = re.extend(new re.Event, n, {
                type: e,
                isSimulated: !0
            });
            re.event.trigger(o, null, t)
        }
    }), re.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                re.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? re.event.trigger(e, t, n, !0) : void 0
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        re.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), re.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), oe.focusin = "onfocusin" in e, oe.focusin || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            re.event.simulate(t, e.target, re.event.fix(e))
        };
        re.event.special[t] = {
            setup: function () {
                var o = this.ownerDocument || this,
                    i = _e.access(o, t);
                i || o.addEventListener(e, n, !0), _e.access(o, t, (i || 0) + 1)
            },
            teardown: function () {
                var o = this.ownerDocument || this,
                    i = _e.access(o, t) - 1;
                i ? _e.access(o, t, i) : (o.removeEventListener(e, n, !0), _e.remove(o, t))
            }
        }
    });
    var mt = e.location,
        gt = re.now(),
        vt = /\?/;
    re.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, re.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
    };
    var yt = /#.*$/,
        xt = /([?&])_=[^&]*/,
        bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ct = /^(?:GET|HEAD)$/,
        St = /^\/\//,
        _t = {},
        Tt = {},
        kt = "*/".concat("*"),
        Et = G.createElement("a");
    Et.href = mt.href, re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: wt.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? z(z(e, re.ajaxSettings), t) : z(re.ajaxSettings, e)
        },
        ajaxPrefilter: F(_t),
        ajaxTransport: F(Tt),
        ajax: function (t, n) {
            function o(t, n, o, s) {
                var c, d, y, x, w, S = n;
                2 !== b && (b = 2, l && e.clearTimeout(l), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, o && (x = R(f, C, o)), x = U(f, x, C, c), c ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (re.lastModified[r] = w), (w = C.getResponseHeader("etag")) && (re.etag[r] = w)), 204 === t || "HEAD" === f.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = x.state, d = x.data, y = x.error, c = !y)) : (y = S, !t && S || (S = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || S) + "", c ? m.resolveWith(p, [d, S, C]) : m.rejectWith(p, [C, S, y]), C.statusCode(v), v = void 0, u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? d : y]), g.fireWith(p, [C, S]), u && (h.trigger("ajaxComplete", [C, f]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, r, a, s, l, c, u, d, f = re.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? re(p) : re.event,
                m = re.Deferred(),
                g = re.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                x = {},
                b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!s)
                                for (s = {}; t = bt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) v[t] = [v[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        return i && i.abort(t), o(0, t), this
                    }
                };
            if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, f.url = ((t || f.url || mt.href) + "").replace(yt, "").replace(St, mt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = re.trim(f.dataType || "*").toLowerCase().match(be) || [""], null == f.crossDomain) {
                c = G.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = Et.protocol + "//" + Et.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = re.param(f.data, f.traditional)), W(_t, f, n, C), 2 === b) return C;
            u = re.event && f.global, u && 0 == re.active++ && re.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ct.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (vt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = xt.test(r) ? r.replace(xt, "$1_=" + gt++) : r + (vt.test(r) ? "&" : "?") + "_=" + gt++)), f.ifModified && (re.lastModified[r] && C.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && C.setRequestHeader("If-None-Match", re.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, C, f) || 2 === b)) return C.abort();
            w = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[d](f[d]);
            if (i = W(Tt, f, n, C)) {
                if (C.readyState = 1, u && h.trigger("ajaxSend", [C, f]), 2 === b) return C;
                f.async && f.timeout > 0 && (l = e.setTimeout(function () {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, i.send(y, o)
                } catch (e) {
                    if (!(2 > b)) throw e;
                    o(-1, e)
                }
            } else o(-1, "No Transport");
            return C
        },
        getJSON: function (e, t, n) {
            return re.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return re.get(e, void 0, t, "script")
        }
    }), re.each(["get", "post"], function (e, t) {
        re[t] = function (e, n, o, i) {
            return re.isFunction(n) && (i = i || o, o = n, n = void 0), re.ajax(re.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: o
            }, re.isPlainObject(e) && e))
        }
    }), re._evalUrl = function (e) {
        return re.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, re.fn.extend({
        wrapAll: function (e) {
            var t;
            return re.isFunction(e) ? this.each(function (t) {
                re(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return re.isFunction(e) ? this.each(function (t) {
                re(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = re(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = re.isFunction(e);
            return this.each(function (n) {
                re(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function (e) {
        return !re.expr.filters.visible(e)
    }, re.expr.filters.visible = function (e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var jt = /%20/g,
        Ot = /\[\]$/,
        At = /\r?\n/g,
        Bt = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;
    re.param = function (e, t) {
        var n, o = [],
            i = function (e, t) {
                t = re.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) X(n, e[n], t, i);
        return o.join("&").replace(jt, "+")
    }, re.fn.extend({
        serialize: function () {
            return re.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = re.prop(this, "elements");
                return e ? re.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !re(this).is(":disabled") && Dt.test(this.nodeName) && !Bt.test(e) && (this.checked || !De.test(e))
            }).map(function (e, t) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Pt = {
            0: 200,
            1223: 204
        },
        Nt = re.ajaxSettings.xhr();
    oe.cors = !!Nt && "withCredentials" in Nt, oe.ajax = Nt = !!Nt, re.ajaxTransport(function (t) {
        var n, o;
        return oe.cors || Nt && !t.crossDomain ? {
            send: function (i, r) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = o = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Pt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), o = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = o : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && o()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        } : void 0
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return re.globalEval(e), e
            }
        }
    }), re.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), re.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (o, i) {
                    t = re("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), G.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var It = [],
        Lt = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = It.pop() || re.expando + "_" + gt++;
            return this[e] = !0, e
        }
    }), re.ajaxPrefilter("json jsonp", function (t, n, o) {
        var i, r, a, s = !1 !== t.jsonp && (Lt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Lt, "$1" + i) : !1 !== t.jsonp && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || re.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", r = e[i], e[i] = function () {
            a = arguments
        }, o.always(function () {
            void 0 === r ? re(e).removeProp(i) : e[i] = r, t[i] && (t.jsonpCallback = n.jsonpCallback, It.push(i)), a && re.isFunction(r) && r(a[0]), a = r = void 0
        }), "script") : void 0
    }), re.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || G;
        var o = he.exec(e),
            i = !n && [];
        return o ? [t.createElement(o[1])] : (o = f([e], t, i), i && i.length && re(i).remove(), re.merge([], o.childNodes))
    };
    var Mt = re.fn.load;
    re.fn.load = function (e, t, n) {
        if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
        var o, i, r, a = this,
            s = e.indexOf(" ");
        return s > -1 && (o = re.trim(e.slice(s)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && re.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, a.html(o ? re("<div>").append(re.parseHTML(e)).find(o) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        re.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), re.expr.filters.animated = function (e) {
        return re.grep(re.timers, function (t) {
            return e === t.elem
        }).length
    }, re.offset = {
        setOffset: function (e, t, n) {
            var o, i, r, a, s, l, c, u = re.css(e, "position"),
                d = re(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), r = re.css(e, "top"), l = re.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (o = d.position(), a = o.top, i = o.left) : (a = parseFloat(r) || 0, i = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, re.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, re.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                re.offset.setOffset(this, e, t)
            });
            var t, n, o = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                r = o && o.ownerDocument;
            return r ? (t = r.documentElement, re.contains(t, o) ? (i = o.getBoundingClientRect(), n = Y(r), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === re.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (o = e.offset()), o.top += re.css(e[0], "borderTopWidth", !0), o.left += re.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - o.top - re.css(n, "marginTop", !0),
                    left: t.left - o.left - re.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === re.css(e, "position");) e = e.offsetParent;
                return e || Je
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        re.fn[e] = function (o) {
            return Ce(this, function (e, o, i) {
                var r = Y(e);
                return void 0 === i ? r ? r[t] : e[o] : void(r ? r.scrollTo(n ? r.pageXOffset : i, n ? i : r.pageYOffset) : e[o] = i)
            }, e, o, arguments.length)
        }
    }), re.each(["top", "left"], function (e, t) {
        re.cssHooks[t] = E(oe.pixelPosition, function (e, n) {
            return n ? (n = k(e, t), Ve.test(n) ? re(e).position()[t] + "px" : n) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        re.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, o) {
            re.fn[o] = function (o, i) {
                var r = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === i ? "margin" : "border");
                return Ce(this, function (t, n, o) {
                    var i;
                    return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? re.css(t, n, a) : re.style(t, n, o, a)
                }, t, r ? o : void 0, r, null)
            }
        })
    }), re.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, o) {
            return this.on(t, e, n, o)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function () {
            return this.length
        }
    }), re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return re
    });
    var $t = e.jQuery,
        Ht = e.$;
    return re.noConflict = function (t) {
        return e.$ === re && (e.$ = Ht), t && e.jQuery === re && (e.jQuery = $t), re
    }, t || (e.jQuery = e.$ = re), re
}),
function (e) {
    "use strict";

    function t(t) {
        var n = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(this).ajaxSubmit(n))
    }

    function n(t) {
        var n = t.target,
            o = e(n);
        if (!o.is(":submit,input:image")) {
            var i = o.closest(":submit");
            if (0 === i.length) return;
            n = i[0]
        }
        var r = this;
        if (r.clk = n, "image" == n.type)
            if (void 0 !== t.offsetX) r.clk_x = t.offsetX, r.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var a = o.offset();
            r.clk_x = t.pageX - a.left, r.clk_y = t.pageY - a.top
        } else r.clk_x = t.pageX - n.offsetLeft, r.clk_y = t.pageY - n.offsetTop;
        setTimeout(function () {
            r.clk = r.clk_x = r.clk_y = null
        }, 100)
    }

    function o() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var i = {};
    i.fileapi = void 0 !== e("<input type='file'/>").get(0).files, i.formdata = void 0 !== window.FormData, e.fn.ajaxSubmit = function (t) {
        function n(n) {
            for (var o = new FormData, i = 0; i < n.length; i++) o.append(n[i].name, n[i].value);
            if (t.extraData)
                for (var r in t.extraData) t.extraData.hasOwnProperty(r) && o.append(r, t.extraData[r]);
            t.data = null;
            var a = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: "POST"
            });
            t.uploadProgress && (a.xhr = function () {
                var e = jQuery.ajaxSettings.xhr();
                return e.upload && (e.upload.onprogress = function (e) {
                    var n = 0,
                        o = e.loaded || e.position,
                        i = e.total;
                    e.lengthComputable && (n = Math.ceil(o / i * 100)), t.uploadProgress(e, o, i, n)
                }), e
            }), a.data = null;
            var s = a.beforeSend;
            a.beforeSend = function (e, t) {
                t.data = o, s && s.call(this, e, t)
            }, e.ajax(a)
        }

        function r(n) {
            function i(e) {
                return e.contentWindow ? e.contentWindow.document : e.contentDocument ? e.contentDocument : e.document
            }

            function r() {
                function t() {
                    try {
                        var e = i(g).readyState;
                        o("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (e) {
                        o("Server abort: ", e, " (", e.name, ")"), s(T), w && clearTimeout(w), w = void 0
                    }
                }
                var n = c.attr("target"),
                    r = c.attr("action");
                C.setAttribute("target", h), a || C.setAttribute("method", "POST"), r != d.url && C.setAttribute("action", d.url), d.skipEncodingOverride || a && !/post/i.test(a) || c.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), d.timeout && (w = setTimeout(function () {
                    b = !0, s(_)
                }, d.timeout));
                var l = [];
                try {
                    if (d.extraData)
                        for (var u in d.extraData) d.extraData.hasOwnProperty(u) && (e.isPlainObject(d.extraData[u]) && d.extraData[u].hasOwnProperty("name") && d.extraData[u].hasOwnProperty("value") ? l.push(e('<input type="hidden" name="' + d.extraData[u].name + '">').attr("value", d.extraData[u].value).appendTo(C)[0]) : l.push(e('<input type="hidden" name="' + u + '">').attr("value", d.extraData[u]).appendTo(C)[0]));
                    d.iframeTarget || (m.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1)), setTimeout(t, 15), C.submit()
                } finally {
                    C.setAttribute("action", r), n ? C.setAttribute("target", n) : c.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!v.aborted && !A) {
                    try {
                        O = i(g)
                    } catch (e) {
                        o("cannot access response document: ", e), t = T
                    }
                    if (t === _ && v) return void v.abort("timeout");
                    if (t == T && v) return void v.abort("server abort");
                    if (O && O.location.href != d.iframeSrc || b) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var n, r = "success";
                        try {
                            if (b) throw "timeout";
                            var a = "xml" == d.dataType || O.XMLDocument || e.isXMLDoc(O);
                            if (o("isXml=" + a), !a && window.opera && (null === O.body || !O.body.innerHTML) && --B) return o("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var l = O.body ? O.body : O.documentElement;
                            v.responseText = l ? l.innerHTML : null, v.responseXML = O.XMLDocument ? O.XMLDocument : O, a && (d.dataType = "xml"), v.getResponseHeader = function (e) {
                                return {
                                    "content-type": d.dataType
                                } [e]
                            }, l && (v.status = Number(l.getAttribute("status")) || v.status, v.statusText = l.getAttribute("statusText") || v.statusText);
                            var c = (d.dataType || "").toLowerCase(),
                                u = /(json|script|text)/.test(c);
                            if (u || d.textarea) {
                                var p = O.getElementsByTagName("textarea")[0];
                                if (p) v.responseText = p.value, v.status = Number(p.getAttribute("status")) || v.status, v.statusText = p.getAttribute("statusText") || v.statusText;
                                else if (u) {
                                    var h = O.getElementsByTagName("pre")[0],
                                        y = O.getElementsByTagName("body")[0];
                                    h ? v.responseText = h.textContent ? h.textContent : h.innerText : y && (v.responseText = y.textContent ? y.textContent : y.innerText)
                                }
                            } else "xml" == c && !v.responseXML && v.responseText && (v.responseXML = D(v.responseText));
                            try {
                                j = N(v, c, d)
                            } catch (t) {
                                r = "parsererror", v.error = n = t || r
                            }
                        } catch (t) {
                            o("error caught: ", t), r = "error", v.error = n = t || r
                        }
                        v.aborted && (o("upload aborted"), r = null), v.status && (r = v.status >= 200 && v.status < 300 || 304 === v.status ? "success" : "error"), "success" === r ? (d.success && d.success.call(d.context, j, "success", v), f && e.event.trigger("ajaxSuccess", [v, d])) : r && (void 0 === n && (n = v.statusText), d.error && d.error.call(d.context, v, r, n), f && e.event.trigger("ajaxError", [v, d, n])), f && e.event.trigger("ajaxComplete", [v, d]), f && !--e.active && e.event.trigger("ajaxStop"), d.complete && d.complete.call(d.context, v, r), A = !0, d.timeout && clearTimeout(w), setTimeout(function () {
                            d.iframeTarget || m.remove(), v.responseXML = null
                        }, 100)
                    }
                }
            }
            var l, u, d, f, h, m, g, v, y, x, b, w, C = c[0],
                S = !!e.fn.prop;
            if (e(":input[name=submit],:input[id=submit]", C).length) return void alert('Error: Form elements must not have name or id of "submit".');
            if (n)
                for (u = 0; u < p.length; u++) l = e(p[u]), S ? l.prop("disabled", !1) : l.removeAttr("disabled");
            if (d = e.extend(!0, {}, e.ajaxSettings, t), d.context = d.context || d, h = "jqFormIO" + (new Date).getTime(), d.iframeTarget ? (m = e(d.iframeTarget), x = m.attr("name"), x ? h = x : m.attr("name", h)) : (m = e('<iframe name="' + h + '" src="' + d.iframeSrc + '" />'), m.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), g = m[0], v = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {},
                    getResponseHeader: function () {},
                    setRequestHeader: function () {},
                    abort: function (t) {
                        var n = "timeout" === t ? "timeout" : "aborted";
                        if (o("aborting upload... " + n), this.aborted = 1, g.contentWindow.document.execCommand) try {
                            g.contentWindow.document.execCommand("Stop")
                        } catch (e) {}
                        m.attr("src", d.iframeSrc), v.error = n, d.error && d.error.call(d.context, v, n, t), f && e.event.trigger("ajaxError", [v, d, n]), d.complete && d.complete.call(d.context, v, n)
                    }
                }, f = d.global, f && 0 == e.active++ && e.event.trigger("ajaxStart"), f && e.event.trigger("ajaxSend", [v, d]), d.beforeSend && !1 === d.beforeSend.call(d.context, v, d)) return void(d.global && e.active--);
            if (!v.aborted) {
                y = C.clk, y && (x = y.name) && !y.disabled && (d.extraData = d.extraData || {}, d.extraData[x] = y.value, "image" == y.type && (d.extraData[x + ".x"] = C.clk_x, d.extraData[x + ".y"] = C.clk_y));
                var _ = 1,
                    T = 2,
                    k = e("meta[name=csrf-token]").attr("content"),
                    E = e("meta[name=csrf-param]").attr("content");
                E && k && (d.extraData = d.extraData || {}, d.extraData[E] = k), d.forceSync ? r() : setTimeout(r, 10);
                var j, O, A, B = 50,
                    D = e.parseXML || function (e, t) {
                        return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                    },
                    P = e.parseJSON || function (e) {
                        return window.eval("(" + e + ")")
                    },
                    N = function (t, n, o) {
                        var i = t.getResponseHeader("content-type") || "",
                            r = "xml" === n || !n && i.indexOf("xml") >= 0,
                            a = r ? t.responseXML : t.responseText;
                        return r && "parsererror" === a.documentElement.nodeName && e.error && e.error("parsererror"), o && o.dataFilter && (a = o.dataFilter(a, n)), "string" == typeof a && ("json" === n || !n && i.indexOf("json") >= 0 ? a = P(a) : ("script" === n || !n && i.indexOf("javascript") >= 0) && e.globalEval(a)), a
                    }
            }
        }
        if (!this.length) return o("ajaxSubmit: skipping submit process - no element selected"), this;
        var a, s, l, c = this;
        "function" == typeof t && (t = {
            success: t
        }), a = this.attr("method"), s = this.attr("action"), l = "string" == typeof s ? e.trim(s) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: a || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var u = {};
        if (this.trigger("form-pre-serialize", [this, t, u]), u.veto) return o("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && !1 === t.beforeSerialize(this, t)) return o("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var f, p = [],
            h = this.formToArray(t.semantic, p);
        if (t.data && (t.extraData = t.data, f = e.param(t.data, d)), t.beforeSubmit && !1 === t.beforeSubmit(h, this, t)) return o("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [h, this, t, u]), u.veto) return o("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var m = e.param(h, d);
        f && (m = m ? m + "&" + f : f), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + m, t.data = null) : t.data = m;
        var g = [];
        if (t.resetForm && g.push(function () {
                c.resetForm()
            }), t.clearForm && g.push(function () {
                c.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var v = t.success || function () {};
            g.push(function (n) {
                var o = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[o](n).each(v, arguments)
            })
        } else t.success && g.push(t.success);
        t.success = function (e, n, o) {
            for (var i = t.context || this, r = 0, a = g.length; r < a; r++) g[r].apply(i, [e, n, o || c, c])
        };
        var y = e("input:file:enabled[value]", this),
            x = y.length > 0,
            b = "multipart/form-data",
            w = c.attr("enctype") == b || c.attr("encoding") == b,
            C = i.fileapi && i.formdata;
        o("fileAPI :" + C);
        var S = (x || w) && !C;
        !1 !== t.iframe && (t.iframe || S) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            r(h)
        }) : r(h) : (x || w) && C ? n(h) : e.ajax(t);
        for (var _ = 0; _ < p.length; _++) p[_] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (i) {
        if (i = i || {}, i.delegation = i.delegation && e.isFunction(e.fn.on), !i.delegation && 0 === this.length) {
            var r = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && r.s ? (o("DOM not ready, queuing ajaxForm"), e(function () {
                e(r.s, r.c).ajaxForm(i)
            }), this) : (o("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return i.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, i, t).on("click.form-plugin", this.selector, i, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", i, t).bind("click.form-plugin", i, n)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, n) {
        var o = [];
        if (0 === this.length) return o;
        var r = this[0],
            a = t ? r.getElementsByTagName("*") : r.elements;
        if (!a) return o;
        var s, l, c, u, d, f, p;
        for (s = 0, f = a.length; s < f; s++)
            if (d = a[s], c = d.name)
                if (t && r.clk && "image" == d.type) d.disabled || r.clk != d || (o.push({
                    name: c,
                    value: e(d).val(),
                    type: d.type
                }), o.push({
                    name: c + ".x",
                    value: r.clk_x
                }, {
                    name: c + ".y",
                    value: r.clk_y
                }));
                else if ((u = e.fieldValue(d, !0)) && u.constructor == Array)
            for (n && n.push(d), l = 0, p = u.length; l < p; l++) o.push({
                name: c,
                value: u[l]
            });
        else if (i.fileapi && "file" == d.type && !d.disabled) {
            n && n.push(d);
            var h = d.files;
            if (h.length)
                for (l = 0; l < h.length; l++) o.push({
                    name: c,
                    value: h[l],
                    type: d.type
                });
            else o.push({
                name: c,
                value: "",
                type: d.type
            })
        } else null !== u && void 0 !== u && (n && n.push(d), o.push({
            name: c,
            value: u,
            type: d.type,
            required: d.required
        }));
        if (!t && r.clk) {
            var m = e(r.clk),
                g = m[0];
            c = g.name, c && !g.disabled && "image" == g.type && (o.push({
                name: c,
                value: m.val()
            }), o.push({
                name: c + ".x",
                value: r.clk_x
            }, {
                name: c + ".y",
                value: r.clk_y
            }))
        }
        return o
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var n = [];
        return this.each(function () {
            var o = this.name;
            if (o) {
                var i = e.fieldValue(this, t);
                if (i && i.constructor == Array)
                    for (var r = 0, a = i.length; r < a; r++) n.push({
                        name: o,
                        value: i[r]
                    });
                else null !== i && void 0 !== i && n.push({
                    name: this.name,
                    value: i
                })
            }
        }), e.param(n)
    }, e.fn.fieldValue = function (t) {
        for (var n = [], o = 0, i = this.length; o < i; o++) {
            var r = this[o],
                a = e.fieldValue(r, t);
            null === a || void 0 === a || a.constructor == Array && !a.length || (a.constructor == Array ? e.merge(n, a) : n.push(a))
        }
        return n
    }, e.fieldValue = function (t, n) {
        var o = t.name,
            i = t.type,
            r = t.tagName.toLowerCase();
        if (void 0 === n && (n = !0), n && (!o || t.disabled || "reset" == i || "button" == i || ("checkbox" == i || "radio" == i) && !t.checked || ("submit" == i || "image" == i) && t.form && t.form.clk != t || "select" == r && -1 == t.selectedIndex)) return null;
        if ("select" == r) {
            var a = t.selectedIndex;
            if (a < 0) return null;
            for (var s = [], l = t.options, c = "select-one" == i, u = c ? a + 1 : l.length, d = c ? a : 0; d < u; d++) {
                var f = l[d];
                if (f.selected) {
                    var p = f.value;
                    if (p || (p = f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value), c) return p;
                    s.push(p)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var o = this.type,
                i = this.tagName.toLowerCase();
            n.test(o) || "textarea" == i ? this.value = "" : "checkbox" == o || "radio" == o ? this.checked = !1 : "select" == i ? this.selectedIndex = -1 : t && (!0 === t && /hidden/.test(o) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var n = this.type;
            if ("checkbox" == n || "radio" == n) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var o = e(this).parent("select");
                t && o[0] && "select-one" == o[0].type && o.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
}(jQuery),
function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (e) {
    var t, n, o, i, r, a, s = "Close",
        l = "BeforeClose",
        c = "AfterClose",
        u = "BeforeAppend",
        d = "MarkupParse",
        f = "Open",
        p = "Change",
        h = "mfp",
        m = "." + h,
        g = "mfp-ready",
        v = "mfp-removing",
        y = "mfp-prevent-close",
        x = function () {},
        b = !!window.jQuery,
        w = e(window),
        C = function (e, n) {
            t.ev.on(h + e + m, n)
        },
        S = function (t, n, o, i) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, o && (r.innerHTML = o), i ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
        },
        _ = function (n, o) {
            t.ev.triggerHandler(h + n, o), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(o) ? o : [o]))
        },
        T = function (n) {
            return n === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = n), t.currTemplate.closeBtn
        },
        k = function () {
            e.magnificPopup.instance || (t = new x, t.init(), e.magnificPopup.instance = t)
        },
        E = function () {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    x.prototype = {
        constructor: x,
        init: function () {
            var n = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = E(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
        },
        open: function (n) {
            var i;
            if (!1 === n.isObj) {
                t.items = n.items.toArray(), t.index = 0;
                var a, s = n.items;
                for (i = 0; i < s.length; i++)
                    if (a = s[i], a.parsed && (a = a.el[0]), a === n.el[0]) {
                        t.index = i;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], r = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = S("bg").on("click" + m, function () {
                t.close()
            }), t.wrap = S("wrap").attr("tabindex", -1).on("click" + m, function (e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = S("container", t.wrap)), t.contentContainer = S("content"), t.st.preloader && (t.preloader = S("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (i = 0; i < l.length; i++) {
                var c = l[i];
                c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
            }
            _("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (C(d, function (e, t, n, o) {
                n.close_replaceWith = T(o.type)
            }), r += " mfp-close-btn-in") : t.wrap.append(T())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: w.scrollTop(),
                position: "absolute"
            }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && o.on("keyup" + m, function (e) {
                27 === e.keyCode && t.close()
            }), w.on("resize" + m, function () {
                t.updateSize()
            }), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
            var u = t.wH = w.height(),
                p = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var h = t._getScrollbarSize();
                h && (p.marginRight = h)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : p.overflow = "hidden");
            var v = t.st.mainClass;
            return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), _("BuildControls"), e("html").css(p), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
                t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g), o.on("focusin" + m, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(u), _(f), n
        },
        close: function () {
            t.isOpen && (_(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), setTimeout(function () {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function () {
            _(s);
            var n = v + " " + g + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
            }
            o.off("keyup" + m + " focusin" + m), t.ev.off(m), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, _(c)
        },
        updateSize: function (e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    o = window.innerHeight * n;
                t.wrap.css("height", o), t.wH = o
            } else t.wH = e || w.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), _("Resize")
        },
        updateItemHTML: function () {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var o = n.type;
            if (_("BeforeChange", [t.currItem ? t.currItem.type : "", o]), t.currItem = n, !t.currTemplate[o]) {
                var r = !!t.st[o] && t.st[o].markup;
                _("FirstMarkupParse", r), t.currTemplate[o] = !r || e(r)
            }
            i && i !== n.type && t.container.removeClass("mfp-" + i + "-holder");
            var a = t["get" + o.charAt(0).toUpperCase() + o.slice(1)](n, t.currTemplate[o]);
            t.appendContent(a, o), n.preloaded = !0, _(p, n), i = n.type, t.container.prepend(t.contentContainer), _("AfterChange")
        },
        appendContent: function (e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(T()) : t.content = e : t.content = "", _(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function (n) {
            var o, i = t.items[n];
            if (i.tagName ? i = {
                    el: e(i)
                } : (o = i.type, i = {
                    data: i,
                    src: i.src
                }), i.el) {
                for (var r = t.types, a = 0; a < r.length; a++)
                    if (i.el.hasClass("mfp-" + r[a])) {
                        o = r[a];
                        break
                    } i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
            }
            return i.type = o || t.st.type || "inline", i.index = n, i.parsed = !0, t.items[n] = i, _("ElementParse", i), t.items[n]
        },
        addGroup: function (e, n) {
            var o = function (o) {
                o.mfpEl = this, t._openClick(o, e, n)
            };
            n || (n = {});
            var i = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(i).on(i, o)) : (n.isObj = !1, n.delegate ? e.off(i).on(i, n.delegate, o) : (n.items = e, e.off(i).on(i, o)))
        },
        _openClick: function (n, o, i) {
            if ((void 0 !== i.midClick ? i.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var r = void 0 !== i.disableOn ? i.disableOn : e.magnificPopup.defaults.disableOn;
                if (r)
                    if (e.isFunction(r)) {
                        if (!r.call(t)) return !0
                    } else if (w.width() < r) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), i.el = e(n.mfpEl), i.delegate && (i.items = o.find(i.delegate)), t.open(i)
            }
        },
        updateStatus: function (e, o) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), o || "loading" !== e || (o = t.st.tLoading);
                var i = {
                    status: e,
                    text: o
                };
                _("UpdateStatus", i), e = i.status, o = i.text, t.preloader.html(o), t.preloader.find("a").on("click", function (e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function (n) {
            if (!e(n).hasClass(y)) {
                var o = t.st.closeOnContentClick,
                    i = t.st.closeOnBgClick;
                if (o && i) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (o) return !0
                } else if (i && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function (e) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || w.height())
        },
        _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function (n) {
            if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target)) return t._setFocus(), !1
        },
        _parseMarkup: function (t, n, o) {
            var i;
            o.data && (n = e.extend(o.data, n)), _(d, [t, n, o]), e.each(n, function (n, o) {
                if (void 0 === o || !1 === o) return !0;
                if (i = n.split("_"), i.length > 1) {
                    var r = t.find(m + "-" + i[0]);
                    if (r.length > 0) {
                        var a = i[1];
                        "replaceWith" === a ? r[0] !== o[0] && r.replaceWith(o) : "img" === a ? r.is("img") ? r.attr("src", o) : r.replaceWith(e("<img>").attr("src", o).attr("class", r.attr("class"))) : r.attr(i[1], o)
                    }
                } else t.find(m + "-" + n).html(o)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: x.prototype,
        modules: [],
        open: function (t, n) {
            return k(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function () {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function (t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function (n) {
        k();
        var o = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var i, r = b ? o.data("magnificPopup") : o[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                r.items ? i = r.items[a] : (i = o, r.delegate && (i = i.find(r.delegate)), i = i.eq(a)), t._openClick({
                    mfpEl: i
                }, o, r)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), b ? o.data("magnificPopup", n) : o[0].magnificPopup = n, t.addGroup(o, n);
        return o
    };
    var j, O, A, B = "inline",
        D = function () {
            A && (O.after(A.addClass(j)).detach(), A = null)
        };
    e.magnificPopup.registerModule(B, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                t.types.push(B), C(s + "." + B, function () {
                    D()
                })
            },
            getInline: function (n, o) {
                if (D(), n.src) {
                    var i = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a && a.tagName && (O || (j = i.hiddenClass, O = S(j), j = "mfp-" + j), A = r.after(O).detach().removeClass(j)), t.updateStatus("ready")
                    } else t.updateStatus("error", i.tNotFound), r = e("<div>");
                    return n.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(o, {}, n), o
            }
        }
    });
    var P, N = "ajax",
        I = function () {
            P && e(document.body).removeClass(P)
        },
        L = function () {
            I(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(N, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                t.types.push(N), P = t.st.ajax.cursor, C(s + "." + N, L), C("BeforeChange." + N, L)
            },
            getAjax: function (n) {
                P && e(document.body).addClass(P), t.updateStatus("loading");
                var o = e.extend({
                    url: n.src,
                    success: function (o, i, r) {
                        var a = {
                            data: o,
                            xhr: r
                        };
                        _("ParseAjax", a), t.appendContent(e(a.data), N), n.finished = !0, I(), t._setFocus(), setTimeout(function () {
                            t.wrap.addClass(g)
                        }, 16), t.updateStatus("ready"), _("AjaxContentAdded")
                    },
                    error: function () {
                        I(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(o), ""
            }
        }
    });
    var M, $ = function (n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var o = t.st.image.titleSrc;
        if (o) {
            if (e.isFunction(o)) return o.call(t, n);
            if (n.el) return n.el.attr(o) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var n = t.st.image,
                    o = ".image";
                t.types.push("image"), C(f + o, function () {
                    "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
                }), C(s + o, function () {
                    n.cursor && e(document.body).removeClass(n.cursor), w.off("resize" + m)
                }), C("Resize" + o, t.resizeImage), t.isLowIE && C("AfterChange", t.resizeImage)
            },
            resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function (e) {
                e.img && (e.hasSize = !0, M && clearInterval(M), e.isCheckingImgSize = !1, _("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function (e) {
                var n = 0,
                    o = e.img[0],
                    i = function (r) {
                        M && clearInterval(M), M = setInterval(function () {
                            if (o.naturalWidth > 0) return void t._onImageHasSize(e);
                            n > 200 && clearInterval(M), n++, 3 === n ? i(10) : 40 === n ? i(50) : 100 === n && i(500)
                        }, r)
                    };
                i(1)
            },
            getImage: function (n, o) {
                var i = 0,
                    r = function () {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, _("ImageLoadComplete")) : (i++, i < 200 ? setTimeout(r, 100) : a()))
                    },
                    a = function () {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    l = o.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(o, {
                    title: $(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (M && clearInterval(M), n.loadError ? (o.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (o.removeClass("mfp-loading"), t.updateStatus("ready")), o) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, o.addClass("mfp-loading"), t.findImageSize(n)), o)
            }
        }
    });
    var H, q = function () {
        return void 0 === H && (H = void 0 !== document.createElement("p").style.MozTransform), H
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var e, n = t.st.zoom,
                    o = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var i, r, a = n.duration,
                        c = function (e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                o = "all " + n.duration / 1e3 + "s " + n.easing,
                                i = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return i["-webkit-" + r] = i["-moz-" + r] = i["-o-" + r] = i[r] = o, t.css(i), t
                        },
                        u = function () {
                            t.content.css("visibility", "visible")
                        };
                    C("BuildControls" + o, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(i), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void u();
                            r = c(e), r.css(t._getOffset()), t.wrap.append(r), i = setTimeout(function () {
                                r.css(t._getOffset(!0)), i = setTimeout(function () {
                                    u(), setTimeout(function () {
                                        r.remove(), e = r = null, _("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), C(l + o, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(i), t.st.removalDelay = a, !e) {
                                if (!(e = t._getItemToZoom())) return;
                                r = c(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), C(s + o, function () {
                        t._allowZoom() && (u(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function () {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function (n) {
                var o;
                o = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var i = o.offset(),
                    r = parseInt(o.css("padding-top"), 10),
                    a = parseInt(o.css("padding-bottom"), 10);
                i.top -= e(window).scrollTop() - r;
                var s = {
                    width: o.width(),
                    height: (b ? o.innerHeight() : o[0].offsetHeight) - a - r
                };
                return q() ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left, s.top = i.top), s
            }
        }
    });
    var F = "iframe",
        W = "//about:blank",
        z = function (e) {
            if (t.currTemplate[F]) {
                var n = t.currTemplate[F].find("iframe");
                n.length && (e || (n[0].src = W), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(F, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                t.types.push(F), C("BeforeChange", function (e, t, n) {
                    t !== n && (t === F ? z() : n === F && z(!0))
                }), C(s + "." + F, function () {
                    z()
                })
            },
            getIframe: function (n, o) {
                var i = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function () {
                    if (i.indexOf(this.index) > -1) return this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1
                });
                var a = {};
                return r.srcAction && (a[r.srcAction] = i), t._parseMarkup(o, a, n), t.updateStatus("ready"), o
            }
        }
    });
    var R = function (e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : e < 0 ? n + e : e
        },
        U = function (e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var n = t.st.gallery,
                    i = ".mfp-gallery";
                if (t.direction = !0, !n || !n.enabled) return !1;
                r += " mfp-gallery", C(f + i, function () {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function () {
                        if (t.items.length > 1) return t.next(), !1
                    }), o.on("keydown" + i, function (e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), C("UpdateStatus" + i, function (e, n) {
                    n.text && (n.text = U(n.text, t.currItem.index, t.items.length))
                }), C(d + i, function (e, o, i, r) {
                    var a = t.items.length;
                    i.counter = a > 1 ? U(n.tCounter, r.index, a) : ""
                }), C("BuildControls" + i, function () {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var o = n.arrowMarkup,
                            i = t.arrowLeft = e(o.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            r = t.arrowRight = e(o.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y);
                        i.click(function () {
                            t.prev()
                        }), r.click(function () {
                            t.next()
                        }), t.container.append(i.add(r))
                    }
                }), C(p + i, function () {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), C(s + i, function () {
                    o.off(i), t.wrap.off("click" + i), t.arrowRight = t.arrowLeft = null
                })
            },
            next: function () {
                t.direction = !0, t.index = R(t.index + 1), t.updateItemHTML()
            },
            prev: function () {
                t.direction = !1, t.index = R(t.index - 1), t.updateItemHTML()
            },
            goTo: function (e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var e, n = t.st.gallery.preload,
                    o = Math.min(n[0], t.items.length),
                    i = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? i : o); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? o : i); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function (n) {
                if (n = R(n), !t.items[n].preloaded) {
                    var o = t.items[n];
                    o.parsed || (o = t.parseEl(n)), _("LazyLoad", o), "image" === o.type && (o.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
                        o.hasSize = !0
                    }).on("error.mfploader", function () {
                        o.hasSize = !0, o.loadError = !0, _("LazyLoadError", o)
                    }).attr("src", o.src)), o.preloaded = !0
                }
            }
        }
    });
    var X = "retina";
    e.magnificPopup.registerModule(X, {
        options: {
            replaceSrc: function (e) {
                return e.src.replace(/\.\w+$/, function (e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (C("ImageHasSize." + X, function (e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), C("ElementParse." + X, function (t, o) {
                        o.src = e.replaceSrc(o, n)
                    }))
                }
            }
        }
    }), k()
}),
function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function (e) {
    ! function (t) {
        var n = "function" == typeof define && define.amd,
            o = "undefined" != typeof module && module.exports,
            i = "https:" == document.location.protocol ? "https:" : "http:";
        n || (o ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + i + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), t()
    }(function () {
        var t, n = "mCustomScrollbar",
            o = "mCS",
            i = ".mCustomScrollbar",
            r = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            },
            a = 0,
            s = {},
            l = window.attachEvent && !window.addEventListener ? 1 : 0,
            c = !1,
            u = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            d = {
                init: function (t) {
                    var t = e.extend(!0, {}, r, t),
                        n = f.call(this);
                    if (t.live) {
                        var l = t.liveSelector || this.selector || i,
                            c = e(l);
                        if ("off" === t.live) return void h(l);
                        s[l] = setTimeout(function () {
                            c.mCustomScrollbar(t), "once" === t.live && c.length && h(l)
                        }, 500)
                    } else h(l);
                    return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : m(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), p(t), e(n).each(function () {
                        var n = e(this);
                        if (!n.data(o)) {
                            n.data(o, {
                                idx: ++a,
                                opt: t,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: n.css("direction"),
                                cbOffsets: null,
                                trigger: null,
                                poll: {
                                    size: {
                                        o: 0,
                                        n: 0
                                    },
                                    img: {
                                        o: 0,
                                        n: 0
                                    },
                                    change: {
                                        o: 0,
                                        n: 0
                                    }
                                }
                            });
                            var i = n.data(o),
                                r = i.opt,
                                s = n.data("mcs-axis"),
                                l = n.data("mcs-scrollbar-position"),
                                c = n.data("mcs-theme");
                            s && (r.axis = s), l && (r.scrollbarPosition = l), c && (r.theme = c, p(r)), v.call(this), i && r.callbacks.onCreate && "function" == typeof r.callbacks.onCreate && r.callbacks.onCreate.call(this), e("#mCSB_" + i.idx + "_container img:not(." + u[2] + ")").addClass(u[2]), d.update.call(null, n)
                        }
                    })
                },
                update: function (t, n) {
                    var i = t || f.call(this);
                    return e(i).each(function () {
                        var t = e(this);
                        if (t.data(o)) {
                            var i = t.data(o),
                                r = i.opt,
                                a = e("#mCSB_" + i.idx + "_container"),
                                s = e("#mCSB_" + i.idx),
                                l = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")];
                            if (!a.length) return;
                            i.tweenRunning && V(t), n && i && r.callbacks.onBeforeUpdate && "function" == typeof r.callbacks.onBeforeUpdate && r.callbacks.onBeforeUpdate.call(this), t.hasClass(u[3]) && t.removeClass(u[3]), t.hasClass(u[4]) && t.removeClass(u[4]), s.css("max-height", "none"), s.height() !== t.height() && s.css("max-height", t.height()), x.call(this), "y" === r.axis || r.advanced.autoExpandHorizontalScroll || a.css("width", y(a)), i.overflowed = _.call(this), j.call(this), r.autoDraggerLength && w.call(this), C.call(this), k.call(this);
                            var c = [Math.abs(a[0].offsetTop), Math.abs(a[0].offsetLeft)];
                            "x" !== r.axis && (i.overflowed[0] ? l[0].height() > l[0].parent().height() ? T.call(this) : (G(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), i.contentReset.y = null) : (T.call(this), "y" === r.axis ? E.call(this) : "yx" === r.axis && i.overflowed[1] && G(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== r.axis && (i.overflowed[1] ? l[1].width() > l[1].parent().width() ? T.call(this) : (G(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), i.contentReset.x = null) : (T.call(this), "x" === r.axis ? E.call(this) : "yx" === r.axis && i.overflowed[0] && G(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), n && i && (2 === n && r.callbacks.onImageLoad && "function" == typeof r.callbacks.onImageLoad ? r.callbacks.onImageLoad.call(this) : 3 === n && r.callbacks.onSelectorChange && "function" == typeof r.callbacks.onSelectorChange ? r.callbacks.onSelectorChange.call(this) : r.callbacks.onUpdate && "function" == typeof r.callbacks.onUpdate && r.callbacks.onUpdate.call(this)), X.call(this)
                        }
                    })
                },
                scrollTo: function (t, n) {
                    if (void 0 !== t && null != t) {
                        var i = f.call(this);
                        return e(i).each(function () {
                            var i = e(this);
                            if (i.data(o)) {
                                var r = i.data(o),
                                    a = r.opt,
                                    s = {
                                        trigger: "external",
                                        scrollInertia: a.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    },
                                    l = e.extend(!0, {}, s, n),
                                    c = R.call(this, t),
                                    u = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                c[0] = U.call(this, c[0], "y"), c[1] = U.call(this, c[1], "x"), l.moveDragger && (c[0] *= r.scrollRatio.y, c[1] *= r.scrollRatio.x), l.dur = ie() ? 0 : u, setTimeout(function () {
                                    null !== c[0] && void 0 !== c[0] && "x" !== a.axis && r.overflowed[0] && (l.dir = "y", l.overwrite = "all", G(i, c[0].toString(), l)), null !== c[1] && void 0 !== c[1] && "y" !== a.axis && r.overflowed[1] && (l.dir = "x", l.overwrite = "none", G(i, c[1].toString(), l))
                                }, l.timeout)
                            }
                        })
                    }
                },
                stop: function () {
                    var t = f.call(this);
                    return e(t).each(function () {
                        var t = e(this);
                        t.data(o) && V(t)
                    })
                },
                disable: function (t) {
                    var n = f.call(this);
                    return e(n).each(function () {
                        var n = e(this);
                        if (n.data(o)) {
                            n.data(o);
                            X.call(this, "remove"), E.call(this), t && T.call(this), j.call(this, !0), n.addClass(u[3])
                        }
                    })
                },
                destroy: function () {
                    var t = f.call(this);
                    return e(t).each(function () {
                        var i = e(this);
                        if (i.data(o)) {
                            var r = i.data(o),
                                a = r.opt,
                                s = e("#mCSB_" + r.idx),
                                l = e("#mCSB_" + r.idx + "_container"),
                                c = e(".mCSB_" + r.idx + "_scrollbar");
                            a.live && h(a.liveSelector || e(t).selector), X.call(this, "remove"), E.call(this), T.call(this), i.removeData(o), Z(this, "mcs"), c.remove(), l.find("img." + u[2]).removeClass(u[2]), s.replaceWith(l.contents()), i.removeClass(n + " _" + o + "_" + r.idx + " " + u[6] + " " + u[7] + " " + u[5] + " " + u[3]).addClass(u[4])
                        }
                    })
                }
            },
            f = function () {
                return "object" != typeof e(this) || e(this).length < 1 ? i : this
            },
            p = function (t) {
                var n = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    o = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    i = ["minimal", "minimal-dark"],
                    r = ["minimal", "minimal-dark"],
                    a = ["minimal", "minimal-dark"];
                t.autoDraggerLength = !(e.inArray(t.theme, n) > -1) && t.autoDraggerLength, t.autoExpandScrollbar = !(e.inArray(t.theme, o) > -1) && t.autoExpandScrollbar, t.scrollButtons.enable = !(e.inArray(t.theme, i) > -1) && t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, r) > -1 || t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, a) > -1 ? "outside" : t.scrollbarPosition
            },
            h = function (e) {
                s[e] && (clearTimeout(s[e]), Z(s, e))
            },
            m = function (e) {
                return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
            },
            g = function (e) {
                return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
            },
            v = function () {
                var t = e(this),
                    i = t.data(o),
                    r = i.opt,
                    a = r.autoExpandScrollbar ? " " + u[1] + "_expand" : "",
                    s = ["<div id='mCSB_" + i.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + i.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_vertical" + a + "'><div class='" + u[12] + "'><div id='mCSB_" + i.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + i.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + i.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_horizontal" + a + "'><div class='" + u[12] + "'><div id='mCSB_" + i.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    l = "yx" === r.axis ? "mCSB_vertical_horizontal" : "x" === r.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    c = "yx" === r.axis ? s[0] + s[1] : "x" === r.axis ? s[1] : s[0],
                    d = "yx" === r.axis ? "<div id='mCSB_" + i.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    f = r.autoHideScrollbar ? " " + u[6] : "",
                    p = "x" !== r.axis && "rtl" === i.langDir ? " " + u[7] : "";
                r.setWidth && t.css("width", r.setWidth), r.setHeight && t.css("height", r.setHeight), r.setLeft = "y" !== r.axis && "rtl" === i.langDir ? "989999px" : r.setLeft, t.addClass(n + " _" + o + "_" + i.idx + f + p).wrapInner("<div id='mCSB_" + i.idx + "' class='mCustomScrollBox mCS-" + r.theme + " " + l + "'><div id='mCSB_" + i.idx + "_container' class='mCSB_container' style='position:relative; top:" + r.setTop + "; left:" + r.setLeft + ";' dir='" + i.langDir + "' /></div>");
                var h = e("#mCSB_" + i.idx),
                    m = e("#mCSB_" + i.idx + "_container");
                "y" === r.axis || r.advanced.autoExpandHorizontalScroll || m.css("width", y(m)), "outside" === r.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), h.addClass("mCSB_outside").after(c)) : (h.addClass("mCSB_inside").append(c), m.wrap(d)), b.call(this);
                var g = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")];
                g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
            },
            y = function (t) {
                var n = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
                        return e(this).outerWidth(!0)
                    }).get())],
                    o = t.parent().width();
                return n[0] > o ? n[0] : n[1] > o ? n[1] : "100%"
            },
            x = function () {
                var t = e(this),
                    n = t.data(o),
                    i = n.opt,
                    r = e("#mCSB_" + n.idx + "_container");
                if (i.advanced.autoExpandHorizontalScroll && "y" !== i.axis) {
                    r.css({
                        width: "auto",
                        "min-width": 0,
                        "overflow-x": "scroll"
                    });
                    var a = Math.ceil(r[0].scrollWidth);
                    3 === i.advanced.autoExpandHorizontalScroll || 2 !== i.advanced.autoExpandHorizontalScroll && a > r.parent().width() ? r.css({
                        width: a,
                        "min-width": "100%",
                        "overflow-x": "inherit"
                    }) : r.css({
                        "overflow-x": "inherit",
                        position: "absolute"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(r[0].getBoundingClientRect().right + .4) - Math.floor(r[0].getBoundingClientRect().left),
                        "min-width": "100%",
                        position: "relative"
                    }).unwrap()
                }
            },
            b = function () {
                var t = e(this),
                    n = t.data(o),
                    i = n.opt,
                    r = e(".mCSB_" + n.idx + "_scrollbar:first"),
                    a = ne(i.scrollButtons.tabindex) ? "tabindex='" + i.scrollButtons.tabindex + "'" : "",
                    s = ["<a href='#' class='" + u[13] + "' " + a + " />", "<a href='#' class='" + u[14] + "' " + a + " />", "<a href='#' class='" + u[15] + "' " + a + " />", "<a href='#' class='" + u[16] + "' " + a + " />"],
                    l = ["x" === i.axis ? s[2] : s[0], "x" === i.axis ? s[3] : s[1], s[2], s[3]];
                i.scrollButtons.enable && r.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
            },
            w = function () {
                var t = e(this),
                    n = t.data(o),
                    i = e("#mCSB_" + n.idx),
                    r = e("#mCSB_" + n.idx + "_container"),
                    a = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                    s = [i.height() / r.outerHeight(!1), i.width() / r.outerWidth(!1)],
                    c = [parseInt(a[0].css("min-height")), Math.round(s[0] * a[0].parent().height()), parseInt(a[1].css("min-width")), Math.round(s[1] * a[1].parent().width())],
                    u = l && c[1] < c[0] ? c[0] : c[1],
                    d = l && c[3] < c[2] ? c[2] : c[3];
                a[0].css({
                    height: u,
                    "max-height": a[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({
                    "line-height": c[0] + "px"
                }), a[1].css({
                    width: d,
                    "max-width": a[1].parent().width() - 10
                })
            },
            C = function () {
                var t = e(this),
                    n = t.data(o),
                    i = e("#mCSB_" + n.idx),
                    r = e("#mCSB_" + n.idx + "_container"),
                    a = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                    s = [r.outerHeight(!1) - i.height(), r.outerWidth(!1) - i.width()],
                    l = [s[0] / (a[0].parent().height() - a[0].height()), s[1] / (a[1].parent().width() - a[1].width())];
                n.scrollRatio = {
                    y: l[0],
                    x: l[1]
                }
            },
            S = function (e, t, n) {
                var o = n ? u[0] + "_expanded" : "",
                    i = e.closest(".mCSB_scrollTools");
                "active" === t ? (e.toggleClass(u[0] + " " + o), i.toggleClass(u[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(u[0]), i.removeClass(u[1])) : (e.addClass(u[0]), i.addClass(u[1])))
            },
            _ = function () {
                var t = e(this),
                    n = t.data(o),
                    i = e("#mCSB_" + n.idx),
                    r = e("#mCSB_" + n.idx + "_container"),
                    a = null == n.overflowed ? r.height() : r.outerHeight(!1),
                    s = null == n.overflowed ? r.width() : r.outerWidth(!1),
                    l = r[0].scrollHeight,
                    c = r[0].scrollWidth;
                return l > a && (a = l), c > s && (s = c), [a > i.height(), s > i.width()]
            },
            T = function () {
                var t = e(this),
                    n = t.data(o),
                    i = n.opt,
                    r = e("#mCSB_" + n.idx),
                    a = e("#mCSB_" + n.idx + "_container"),
                    s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                if (V(t), ("x" !== i.axis && !n.overflowed[0] || "y" === i.axis && n.overflowed[0]) && (s[0].add(a).css("top", 0), G(t, "_resetY")), "y" !== i.axis && !n.overflowed[1] || "x" === i.axis && n.overflowed[1]) {
                    var l = dx = 0;
                    "rtl" === n.langDir && (l = r.width() - a.outerWidth(!1), dx = Math.abs(l / n.scrollRatio.x)), a.css("left", l), s[1].css("left", dx), G(t, "_resetX")
                }
            },
            k = function () {
                function t() {
                    a = setTimeout(function () {
                        e.event.special.mousewheel ? (clearTimeout(a), P.call(n[0])) : t()
                    }, 100)
                }
                var n = e(this),
                    i = n.data(o),
                    r = i.opt;
                if (!i.bindEvents) {
                    if (A.call(this), r.contentTouchScroll && B.call(this), D.call(this), r.mouseWheel.enable) {
                        var a;
                        t()
                    }
                    $.call(this), q.call(this), r.advanced.autoScrollOnFocus && H.call(this), r.scrollButtons.enable && F.call(this), r.keyboard.enable && W.call(this), i.bindEvents = !0
                }
            },
            E = function () {
                var t = e(this),
                    n = t.data(o),
                    i = n.opt,
                    r = o + "_" + n.idx,
                    a = ".mCSB_" + n.idx + "_scrollbar",
                    s = e("#mCSB_" + n.idx + ",#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper," + a + " ." + u[12] + ",#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal," + a + ">a"),
                    l = e("#mCSB_" + n.idx + "_container");
                i.advanced.releaseDraggableSelectors && s.add(e(i.advanced.releaseDraggableSelectors)), i.advanced.extraDraggableSelectors && s.add(e(i.advanced.extraDraggableSelectors)), n.bindEvents && (e(document).add(e(!I() || top.document)).unbind("." + r), s.each(function () {
                    e(this).unbind("." + r)
                }), clearTimeout(t[0]._focusTimeout), Z(t[0], "_focusTimeout"), clearTimeout(n.sequential.step), Z(n.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), Z(l[0], "onCompleteTimeout"), n.bindEvents = !1)
            },
            j = function (t) {
                var n = e(this),
                    i = n.data(o),
                    r = i.opt,
                    a = e("#mCSB_" + i.idx + "_container_wrapper"),
                    s = a.length ? a : e("#mCSB_" + i.idx + "_container"),
                    l = [e("#mCSB_" + i.idx + "_scrollbar_vertical"), e("#mCSB_" + i.idx + "_scrollbar_horizontal")],
                    c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                "x" !== r.axis && (i.overflowed[0] && !t ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), s.removeClass(u[8] + " " + u[10])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[0].css("display", "none"), s.removeClass(u[10])) : (l[0].css("display", "none"), s.addClass(u[10])), s.addClass(u[8]))), "y" !== r.axis && (i.overflowed[1] && !t ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), s.removeClass(u[9] + " " + u[11])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[1].css("display", "none"), s.removeClass(u[11])) : (l[1].css("display", "none"), s.addClass(u[11])), s.addClass(u[9]))), i.overflowed[0] || i.overflowed[1] ? n.removeClass(u[5]) : n.addClass(u[5])
            },
            O = function (t) {
                var n = t.type,
                    o = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                    i = I() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
                switch (n) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return o ? [t.originalEvent.pageY - o[0] + i[0], t.originalEvent.pageX - o[1] + i[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var r = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                            a = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                        return t.target.ownerDocument !== document ? [r.screenY, r.screenX, a > 1] : [r.pageY, r.pageX, a > 1];
                    default:
                        return o ? [t.pageY - o[0] + i[0], t.pageX - o[1] + i[1], !1] : [t.pageY, t.pageX, !1]
                }
            },
            A = function () {
                function t(e, t, o, i) {
                    if (p[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, n.attr("id") === f[1]) var r = "x",
                        l = (n[0].offsetLeft - t + i) * s.scrollRatio.x;
                    else var r = "y",
                        l = (n[0].offsetTop - e + o) * s.scrollRatio.y;
                    G(a, l.toString(), {
                        dir: r,
                        drag: !0
                    })
                }
                var n, i, r, a = e(this),
                    s = a.data(o),
                    u = s.opt,
                    d = o + "_" + s.idx,
                    f = ["mCSB_" + s.idx + "_dragger_vertical", "mCSB_" + s.idx + "_dragger_horizontal"],
                    p = e("#mCSB_" + s.idx + "_container"),
                    h = e("#" + f[0] + ",#" + f[1]),
                    m = u.advanced.releaseDraggableSelectors ? h.add(e(u.advanced.releaseDraggableSelectors)) : h,
                    g = u.advanced.extraDraggableSelectors ? e(!I() || top.document).add(e(u.advanced.extraDraggableSelectors)) : e(!I() || top.document);
                h.bind("contextmenu." + d, function (e) {
                    e.preventDefault()
                }).bind("mousedown." + d + " touchstart." + d + " pointerdown." + d + " MSPointerDown." + d, function (t) {
                    if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
                        c = !0, l && (document.onselectstart = function () {
                            return !1
                        }), L.call(p, !1), V(a), n = e(this);
                        var o = n.offset(),
                            s = O(t)[0] - o.top,
                            d = O(t)[1] - o.left,
                            f = n.height() + o.top,
                            h = n.width() + o.left;
                        s < f && s > 0 && d < h && d > 0 && (i = s, r = d), S(n, "active", u.autoExpandScrollbar)
                    }
                }).bind("touchmove." + d, function (e) {
                    e.stopImmediatePropagation(), e.preventDefault();
                    var o = n.offset(),
                        a = O(e)[0] - o.top,
                        s = O(e)[1] - o.left;
                    t(i, r, a, s)
                }), e(document).add(g).bind("mousemove." + d + " pointermove." + d + " MSPointerMove." + d, function (e) {
                    if (n) {
                        var o = n.offset(),
                            a = O(e)[0] - o.top,
                            s = O(e)[1] - o.left;
                        if (i === a && r === s) return;
                        t(i, r, a, s)
                    }
                }).add(m).bind("mouseup." + d + " touchend." + d + " pointerup." + d + " MSPointerUp." + d, function (e) {
                    n && (S(n, "active", u.autoExpandScrollbar), n = null), c = !1, l && (document.onselectstart = null), L.call(p, !0)
                })
            },
            B = function () {
                function n(e) {
                    if (!te(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, C = 0, S = 0, u = 1, _.removeClass("mCS_touch_action");
                    var n = A.offset();
                    d = O(e)[0] - n.top, f = O(e)[1] - n.left, M = [O(e)[0], O(e)[1]]
                }

                function i(e) {
                    if (te(e) && !c && !O(e)[2] && (k.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!S || C) && u)) {
                        g = J();
                        var t = j.offset(),
                            n = O(e)[0] - t.top,
                            o = O(e)[1] - t.left,
                            i = "mcsLinearOut";
                        if (D.push(n), P.push(o), M[2] = Math.abs(O(e)[0] - M[0]), M[3] = Math.abs(O(e)[1] - M[1]), T.overflowed[0]) var r = B[0].parent().height() - B[0].height(),
                            a = d - n > 0 && n - d > -r * T.scrollRatio.y && (2 * M[3] < M[2] || "yx" === k.axis);
                        if (T.overflowed[1]) var s = B[1].parent().width() - B[1].width(),
                            p = f - o > 0 && o - f > -s * T.scrollRatio.x && (2 * M[2] < M[3] || "yx" === k.axis);
                        a || p ? (q || e.preventDefault(), C = 1) : (S = 1, _.addClass("mCS_touch_action")), q && e.preventDefault(), b = "yx" === k.axis ? [d - n, f - o] : "x" === k.axis ? [null, f - o] : [d - n, null], A[0].idleTimer = 250, T.overflowed[0] && l(b[0], N, i, "y", "all", !0), T.overflowed[1] && l(b[1], N, i, "x", L, !0)
                    }
                }

                function r(e) {
                    if (!te(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, e.stopImmediatePropagation(), V(_), m = J();
                    var n = j.offset();
                    p = O(e)[0] - n.top, h = O(e)[1] - n.left, D = [], P = []
                }

                function a(e) {
                    if (te(e) && !c && !O(e)[2]) {
                        u = 0, e.stopImmediatePropagation(), C = 0, S = 0, v = J();
                        var t = j.offset(),
                            n = O(e)[0] - t.top,
                            o = O(e)[1] - t.left;
                        if (!(v - g > 30)) {
                            x = 1e3 / (v - m);
                            var i = "mcsEaseOut",
                                r = x < 2.5,
                                a = r ? [D[D.length - 2], P[P.length - 2]] : [0, 0];
                            y = r ? [n - a[0], o - a[1]] : [n - p, o - h];
                            var d = [Math.abs(y[0]), Math.abs(y[1])];
                            x = r ? [Math.abs(y[0] / 4), Math.abs(y[1] / 4)] : [x, x];
                            var f = [Math.abs(A[0].offsetTop) - y[0] * s(d[0] / x[0], x[0]), Math.abs(A[0].offsetLeft) - y[1] * s(d[1] / x[1], x[1])];
                            b = "yx" === k.axis ? [f[0], f[1]] : "x" === k.axis ? [null, f[1]] : [f[0], null], w = [4 * d[0] + k.scrollInertia, 4 * d[1] + k.scrollInertia];
                            var _ = parseInt(k.contentTouchScroll) || 0;
                            b[0] = d[0] > _ ? b[0] : 0, b[1] = d[1] > _ ? b[1] : 0, T.overflowed[0] && l(b[0], w[0], i, "y", L, !1), T.overflowed[1] && l(b[1], w[1], i, "x", L, !1)
                        }
                    }
                }

                function s(e, t) {
                    var n = [1.5 * t, 2 * t, t / 1.5, t / 2];
                    return e > 90 ? t > 4 ? n[0] : n[3] : e > 60 ? t > 3 ? n[3] : n[2] : e > 30 ? t > 8 ? n[1] : t > 6 ? n[0] : t > 4 ? t : n[2] : t > 8 ? t : n[3]
                }

                function l(e, t, n, o, i, r) {
                    e && G(_, e.toString(), {
                        dur: t,
                        scrollEasing: n,
                        dir: o,
                        overwrite: i,
                        drag: r
                    })
                }
                var u, d, f, p, h, m, g, v, y, x, b, w, C, S, _ = e(this),
                    T = _.data(o),
                    k = T.opt,
                    E = o + "_" + T.idx,
                    j = e("#mCSB_" + T.idx),
                    A = e("#mCSB_" + T.idx + "_container"),
                    B = [e("#mCSB_" + T.idx + "_dragger_vertical"), e("#mCSB_" + T.idx + "_dragger_horizontal")],
                    D = [],
                    P = [],
                    N = 0,
                    L = "yx" === k.axis ? "none" : "all",
                    M = [],
                    $ = A.find("iframe"),
                    H = ["touchstart." + E + " pointerdown." + E + " MSPointerDown." + E, "touchmove." + E + " pointermove." + E + " MSPointerMove." + E, "touchend." + E + " pointerup." + E + " MSPointerUp." + E],
                    q = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                A.bind(H[0], function (e) {
                    n(e)
                }).bind(H[1], function (e) {
                    i(e)
                }), j.bind(H[0], function (e) {
                    r(e)
                }).bind(H[2], function (e) {
                    a(e)
                }), $.length && $.each(function () {
                    e(this).bind("load", function () {
                        I(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function (e) {
                            n(e), r(e)
                        }).bind(H[1], function (e) {
                            i(e)
                        }).bind(H[2], function (e) {
                            a(e)
                        })
                    })
                })
            },
            D = function () {
                function n() {
                    return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                }

                function i(e, t, n) {
                    u.type = n && r ? "stepped" : "stepless", u.scrollAmount = 10, z(a, e, t, "mcsLinearOut", n ? 60 : null)
                }
                var r, a = e(this),
                    s = a.data(o),
                    l = s.opt,
                    u = s.sequential,
                    d = o + "_" + s.idx,
                    f = e("#mCSB_" + s.idx + "_container"),
                    p = f.parent();
                f.bind("mousedown." + d, function (e) {
                    t || r || (r = 1, c = !0)
                }).add(document).bind("mousemove." + d, function (e) {
                    if (!t && r && n()) {
                        var o = f.offset(),
                            a = O(e)[0] - o.top + f[0].offsetTop,
                            c = O(e)[1] - o.left + f[0].offsetLeft;
                        a > 0 && a < p.height() && c > 0 && c < p.width() ? u.step && i("off", null, "stepped") : ("x" !== l.axis && s.overflowed[0] && (a < 0 ? i("on", 38) : a > p.height() && i("on", 40)), "y" !== l.axis && s.overflowed[1] && (c < 0 ? i("on", 37) : c > p.width() && i("on", 39)))
                    }
                }).bind("mouseup." + d + " dragend." + d, function (e) {
                    t || (r && (r = 0, i("off", null)), c = !1)
                })
            },
            P = function () {
                function t(t, o) {
                    if (V(n), !M(n, t.target)) {
                        var a = "auto" !== r.mouseWheel.deltaFactor ? parseInt(r.mouseWheel.deltaFactor) : l && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                            u = r.scrollInertia;
                        if ("x" === r.axis || "x" === r.mouseWheel.axis) var d = "x",
                            f = [Math.round(a * i.scrollRatio.x), parseInt(r.mouseWheel.scrollAmount)],
                            p = "auto" !== r.mouseWheel.scrollAmount ? f[1] : f[0] >= s.width() ? .9 * s.width() : f[0],
                            h = Math.abs(e("#mCSB_" + i.idx + "_container")[0].offsetLeft),
                            m = c[1][0].offsetLeft,
                            g = c[1].parent().width() - c[1].width(),
                            v = "y" === r.mouseWheel.axis ? t.deltaY || o : t.deltaX;
                        else var d = "y",
                            f = [Math.round(a * i.scrollRatio.y), parseInt(r.mouseWheel.scrollAmount)],
                            p = "auto" !== r.mouseWheel.scrollAmount ? f[1] : f[0] >= s.height() ? .9 * s.height() : f[0],
                            h = Math.abs(e("#mCSB_" + i.idx + "_container")[0].offsetTop),
                            m = c[0][0].offsetTop,
                            g = c[0].parent().height() - c[0].height(),
                            v = t.deltaY || o;
                        "y" === d && !i.overflowed[0] || "x" === d && !i.overflowed[1] || ((r.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), r.mouseWheel.normalizeDelta && (v = v < 0 ? -1 : 1), (v > 0 && 0 !== m || v < 0 && m !== g || r.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !r.mouseWheel.normalizeDelta && (p = t.deltaFactor, u = 17), G(n, (h - v * p).toString(), {
                            dir: d,
                            dur: u
                        }))
                    }
                }
                if (e(this).data(o)) {
                    var n = e(this),
                        i = n.data(o),
                        r = i.opt,
                        a = o + "_" + i.idx,
                        s = e("#mCSB_" + i.idx),
                        c = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")],
                        u = e("#mCSB_" + i.idx + "_container").find("iframe");
                    u.length && u.each(function () {
                        e(this).bind("load", function () {
                            I(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + a, function (e, n) {
                                t(e, n)
                            })
                        })
                    }), s.bind("mousewheel." + a, function (e, n) {
                        t(e, n)
                    })
                }
            },
            N = new Object,
            I = function (t) {
                var n = !1,
                    o = !1,
                    i = null;
                if (void 0 === t ? o = "#empty" : void 0 !== e(t).attr("id") && (o = e(t).attr("id")), !1 !== o && void 0 !== N[o]) return N[o];
                if (t) {
                    try {
                        var r = t.contentDocument || t.contentWindow.document;
                        i = r.body.innerHTML
                    } catch (e) {}
                    n = null !== i
                } else {
                    try {
                        var r = top.document;
                        i = r.body.innerHTML
                    } catch (e) {}
                    n = null !== i
                }
                return !1 !== o && (N[o] = n), n
            },
            L = function (e) {
                var t = this.find("iframe");
                if (t.length) {
                    var n = e ? "auto" : "none";
                    t.css("pointer-events", n)
                }
            },
            M = function (t, n) {
                var i = n.nodeName.toLowerCase(),
                    r = t.data(o).opt.mouseWheel.disableOver,
                    a = ["select", "textarea"];
                return e.inArray(i, r) > -1 && !(e.inArray(i, a) > -1 && !e(n).is(":focus"))
            },
            $ = function () {
                var t, n = e(this),
                    i = n.data(o),
                    r = o + "_" + i.idx,
                    a = e("#mCSB_" + i.idx + "_container"),
                    s = a.parent(),
                    l = e(".mCSB_" + i.idx + "_scrollbar ." + u[12]);
                l.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r, function (n) {
                    c = !0, e(n.target).hasClass("mCSB_dragger") || (t = 1)
                }).bind("touchend." + r + " pointerup." + r + " MSPointerUp." + r, function (e) {
                    c = !1
                }).bind("click." + r, function (o) {
                    if (t && (t = 0, e(o.target).hasClass(u[12]) || e(o.target).hasClass("mCSB_draggerRail"))) {
                        V(n);
                        var r = e(this),
                            l = r.find(".mCSB_dragger");
                        if (r.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!i.overflowed[1]) return;
                            var c = "x",
                                d = o.pageX > l.offset().left ? -1 : 1,
                                f = Math.abs(a[0].offsetLeft) - d * (.9 * s.width())
                        } else {
                            if (!i.overflowed[0]) return;
                            var c = "y",
                                d = o.pageY > l.offset().top ? -1 : 1,
                                f = Math.abs(a[0].offsetTop) - d * (.9 * s.height())
                        }
                        G(n, f.toString(), {
                            dir: c,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
            H = function () {
                var t = e(this),
                    n = t.data(o),
                    i = n.opt,
                    r = o + "_" + n.idx,
                    a = e("#mCSB_" + n.idx + "_container"),
                    s = a.parent();
                a.bind("focusin." + r, function (n) {
                    var o = e(document.activeElement),
                        r = a.find(".mCustomScrollBox").length,
                        l = 0;
                    o.is(i.advanced.autoScrollOnFocus) && (V(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = r ? (l + 17) * r : 0, t[0]._focusTimeout = setTimeout(function () {
                        var e = [oe(o)[0], oe(o)[1]],
                            n = [a[0].offsetTop, a[0].offsetLeft],
                            r = [n[0] + e[0] >= 0 && n[0] + e[0] < s.height() - o.outerHeight(!1), n[1] + e[1] >= 0 && n[0] + e[1] < s.width() - o.outerWidth(!1)],
                            c = "yx" !== i.axis || r[0] || r[1] ? "all" : "none";
                        "x" === i.axis || r[0] || G(t, e[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: l
                        }), "y" === i.axis || r[1] || G(t, e[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: l
                        })
                    }, t[0]._focusTimer))
                })
            },
            q = function () {
                var t = e(this),
                    n = t.data(o),
                    i = o + "_" + n.idx,
                    r = e("#mCSB_" + n.idx + "_container").parent();
                r.bind("scroll." + i, function (t) {
                    0 === r.scrollTop() && 0 === r.scrollLeft() || e(".mCSB_" + n.idx + "_scrollbar").css("visibility", "hidden")
                })
            },
            F = function () {
                var t = e(this),
                    n = t.data(o),
                    i = n.opt,
                    r = n.sequential,
                    a = o + "_" + n.idx,
                    s = ".mCSB_" + n.idx + "_scrollbar";
                e(s + ">a").bind("contextmenu." + a, function (e) {
                    e.preventDefault()
                }).bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a + " mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a + " mouseout." + a + " pointerout." + a + " MSPointerOut." + a + " click." + a, function (o) {
                    function a(e, n) {
                        r.scrollAmount = i.scrollButtons.scrollAmount, z(t, e, n)
                    }
                    if (o.preventDefault(), ee(o)) {
                        var s = e(this).attr("class");
                        switch (r.type = i.scrollButtons.scrollType, o.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" === r.type) return;
                                c = !0, n.tweenRunning = !1, a("on", s);
                                break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === r.type) return;
                                c = !1, r.dir && a("off", s);
                                break;
                            case "click":
                                if ("stepped" !== r.type || n.tweenRunning) return;
                                a("on", s)
                        }
                    }
                })
            },
            W = function () {
                function t(t) {
                    function o(e, t) {
                        a.type = r.keyboard.scrollType, a.scrollAmount = r.keyboard.scrollAmount, "stepped" === a.type && i.tweenRunning || z(n, e, t)
                    }
                    switch (t.type) {
                        case "blur":
                            i.tweenRunning && a.dir && o("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var s = t.keyCode ? t.keyCode : t.which,
                                l = "on";
                            if ("x" !== r.axis && (38 === s || 40 === s) || "y" !== r.axis && (37 === s || 39 === s)) {
                                if ((38 === s || 40 === s) && !i.overflowed[0] || (37 === s || 39 === s) && !i.overflowed[1]) return;
                                "keyup" === t.type && (l = "off"), e(document.activeElement).is(d) || (t.preventDefault(), t.stopImmediatePropagation(), o(l, s))
                            } else if (33 === s || 34 === s) {
                                if ((i.overflowed[0] || i.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                    V(n);
                                    var f = 34 === s ? -1 : 1;
                                    if ("x" === r.axis || "yx" === r.axis && i.overflowed[1] && !i.overflowed[0]) var p = "x",
                                        h = Math.abs(c[0].offsetLeft) - f * (.9 * u.width());
                                    else var p = "y",
                                        h = Math.abs(c[0].offsetTop) - f * (.9 * u.height());
                                    G(n, h.toString(), {
                                        dir: p,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                            } else if ((35 === s || 36 === s) && !e(document.activeElement).is(d) && ((i.overflowed[0] || i.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                if ("x" === r.axis || "yx" === r.axis && i.overflowed[1] && !i.overflowed[0]) var p = "x",
                                    h = 35 === s ? Math.abs(u.width() - c.outerWidth(!1)) : 0;
                                else var p = "y",
                                    h = 35 === s ? Math.abs(u.height() - c.outerHeight(!1)) : 0;
                                G(n, h.toString(), {
                                    dir: p,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                    }
                }
                var n = e(this),
                    i = n.data(o),
                    r = i.opt,
                    a = i.sequential,
                    s = o + "_" + i.idx,
                    l = e("#mCSB_" + i.idx),
                    c = e("#mCSB_" + i.idx + "_container"),
                    u = c.parent(),
                    d = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    f = c.find("iframe"),
                    p = ["blur." + s + " keydown." + s + " keyup." + s];
                f.length && f.each(function () {
                    e(this).bind("load", function () {
                        I(this) && e(this.contentDocument || this.contentWindow.document).bind(p[0], function (e) {
                            t(e)
                        })
                    })
                }), l.attr("tabindex", "0").bind(p[0], function (e) {
                    t(e)
                })
            },
            z = function (t, n, i, r, a) {
                function s(e) {
                    d.snapAmount && (f.scrollAmount = d.snapAmount instanceof Array ? "x" === f.dir[0] ? d.snapAmount[1] : d.snapAmount[0] : d.snapAmount);
                    var n = "stepped" !== f.type,
                        o = a || (e ? n ? m / 1.5 : g : 1e3 / 60),
                        i = e ? n ? 7.5 : 40 : 2.5,
                        l = [Math.abs(p[0].offsetTop), Math.abs(p[0].offsetLeft)],
                        u = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                        h = "x" === f.dir[0] ? l[1] + f.dir[1] * (u[1] * i) : l[0] + f.dir[1] * (u[0] * i),
                        v = "x" === f.dir[0] ? l[1] + f.dir[1] * parseInt(f.scrollAmount) : l[0] + f.dir[1] * parseInt(f.scrollAmount),
                        y = "auto" !== f.scrollAmount ? v : h,
                        x = r || (e ? n ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                        b = !!e;
                    if (e && o < 17 && (y = "x" === f.dir[0] ? l[1] : l[0]), G(t, y.toString(), {
                            dir: f.dir[0],
                            scrollEasing: x,
                            dur: o,
                            onComplete: b
                        }), e) return void(f.dir = !1);
                    clearTimeout(f.step), f.step = setTimeout(function () {
                        s()
                    }, o)
                }

                function l() {
                    clearTimeout(f.step), Z(f, "step"), V(t)
                }
                var c = t.data(o),
                    d = c.opt,
                    f = c.sequential,
                    p = e("#mCSB_" + c.idx + "_container"),
                    h = "stepped" === f.type,
                    m = d.scrollInertia < 26 ? 26 : d.scrollInertia,
                    g = d.scrollInertia < 1 ? 17 : d.scrollInertia;
                switch (n) {
                    case "on":
                        if (f.dir = [i === u[16] || i === u[15] || 39 === i || 37 === i ? "x" : "y", i === u[13] || i === u[15] || 38 === i || 37 === i ? -1 : 1], V(t), ne(i) && "stepped" === f.type) return;
                        s(h);
                        break;
                    case "off":
                        l(), (h || c.tweenRunning && f.dir) && s(!0)
                }
            },
            R = function (t) {
                var n = e(this).data(o).opt,
                    i = [];
                return "function" == typeof t && (t = t()), t instanceof Array ? i = t.length > 1 ? [t[0], t[1]] : "x" === n.axis ? [null, t[0]] : [t[0], null] : (i[0] = t.y ? t.y : t.x || "x" === n.axis ? null : t, i[1] = t.x ? t.x : t.y || "y" === n.axis ? null : t), "function" == typeof i[0] && (i[0] = i[0]()), "function" == typeof i[1] && (i[1] = i[1]()), i
            },
            U = function (t, n) {
                if (null != t && void 0 !== t) {
                    var i = e(this),
                        r = i.data(o),
                        a = r.opt,
                        s = e("#mCSB_" + r.idx + "_container"),
                        l = s.parent(),
                        c = typeof t;
                    n || (n = "x" === a.axis ? "x" : "y");
                    var u = "x" === n ? s.outerWidth(!1) - l.width() : s.outerHeight(!1) - l.height(),
                        f = "x" === n ? s[0].offsetLeft : s[0].offsetTop,
                        p = "x" === n ? "left" : "top";
                    switch (c) {
                        case "function":
                            return t();
                        case "object":
                            var h = t.jquery ? t : e(t);
                            if (!h.length) return;
                            return "x" === n ? oe(h)[1] : oe(h)[0];
                        case "string":
                        case "number":
                            if (ne(t)) return Math.abs(t);
                            if (-1 !== t.indexOf("%")) return Math.abs(u * parseInt(t) / 100);
                            if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
                            if (-1 !== t.indexOf("+=")) {
                                var m = f + parseInt(t.split("+=")[1]);
                                return m >= 0 ? 0 : Math.abs(m)
                            }
                            if (-1 !== t.indexOf("px") && ne(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                            if ("top" === t || "left" === t) return 0;
                            if ("bottom" === t) return Math.abs(l.height() - s.outerHeight(!1));
                            if ("right" === t) return Math.abs(l.width() - s.outerWidth(!1));
                            if ("first" === t || "last" === t) {
                                var h = s.find(":" + t);
                                return "x" === n ? oe(h)[1] : oe(h)[0]
                            }
                            return e(t).length ? "x" === n ? oe(e(t))[1] : oe(e(t))[0] : (s.css(p, t), void d.update.call(null, i[0]))
                    }
                }
            },
            X = function (t) {
                function n() {
                    if (clearTimeout(f[0].autoUpdate), 0 === s.parents("html").length) return void(s = null);
                    f[0].autoUpdate = setTimeout(function () {
                        return c.advanced.updateOnSelectorChange && (l.poll.change.n = r(), l.poll.change.n !== l.poll.change.o) ? (l.poll.change.o = l.poll.change.n, void a(3)) : c.advanced.updateOnContentResize && (l.poll.size.n = s[0].scrollHeight + s[0].scrollWidth + f[0].offsetHeight + s[0].offsetHeight + s[0].offsetWidth, l.poll.size.n !== l.poll.size.o) ? (l.poll.size.o = l.poll.size.n, void a(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (l.poll.img.n = f.find("img").length, l.poll.img.n === l.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && n()) : (l.poll.img.o = l.poll.img.n, void f.find("img").each(function () {
                            i(this)
                        }))
                    }, c.advanced.autoUpdateTimeout)
                }

                function i(t) {
                    function n(e, t) {
                        return function () {
                            return t.apply(e, arguments)
                        }
                    }

                    function o() {
                        this.onload = null, e(t).addClass(u[2]), a(2)
                    }
                    if (e(t).hasClass(u[2])) return void a();
                    var i = new Image;
                    i.onload = n(i, o), i.src = t.src
                }

                function r() {
                    !0 === c.advanced.updateOnSelectorChange && (c.advanced.updateOnSelectorChange = "*");
                    var e = 0,
                        t = f.find(c.advanced.updateOnSelectorChange);
                    return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
                        e += this.offsetHeight + this.offsetWidth
                    }), e
                }

                function a(e) {
                    clearTimeout(f[0].autoUpdate), d.update.call(null, s[0], e)
                }
                var s = e(this),
                    l = s.data(o),
                    c = l.opt,
                    f = e("#mCSB_" + l.idx + "_container");
                if (t) return clearTimeout(f[0].autoUpdate), void Z(f[0], "autoUpdate");
                n()
            },
            Y = function (e, t, n) {
                return Math.round(e / t) * t - n
            },
            V = function (t) {
                var n = t.data(o);
                e("#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper,#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal").each(function () {
                    Q.call(this)
                })
            },
            G = function (t, n, i) {
                function r(e) {
                    return l && c.callbacks[e] && "function" == typeof c.callbacks[e]
                }

                function a() {
                    return [c.callbacks.alwaysTriggerOffsets || b >= w[0] + _, c.callbacks.alwaysTriggerOffsets || b <= -T]
                }

                function s() {
                    var e = [p[0].offsetTop, p[0].offsetLeft],
                        n = [y[0].offsetTop, y[0].offsetLeft],
                        o = [p.outerHeight(!1), p.outerWidth(!1)],
                        r = [f.height(), f.width()];
                    t[0].mcs = {
                        content: p,
                        top: e[0],
                        left: e[1],
                        draggerTop: n[0],
                        draggerLeft: n[1],
                        topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(o[0]) - r[0])),
                        leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(o[1]) - r[1])),
                        direction: i.dir
                    }
                }
                var l = t.data(o),
                    c = l.opt,
                    u = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: c.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    },
                    i = e.extend(u, i),
                    d = [i.dur, i.drag ? 0 : i.dur],
                    f = e("#mCSB_" + l.idx),
                    p = e("#mCSB_" + l.idx + "_container"),
                    h = p.parent(),
                    m = c.callbacks.onTotalScrollOffset ? R.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                    g = c.callbacks.onTotalScrollBackOffset ? R.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (l.trigger = i.trigger, 0 === h.scrollTop() && 0 === h.scrollLeft() || (e(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), h.scrollTop(0).scrollLeft(0)), "_resetY" !== n || l.contentReset.y || (r("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), l.contentReset.y = 1), "_resetX" !== n || l.contentReset.x || (r("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), l.contentReset.x = 1), "_resetY" !== n && "_resetX" !== n) {
                    if (!l.contentReset.y && t[0].mcs || !l.overflowed[0] || (r("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), l.contentReset.x = null), !l.contentReset.x && t[0].mcs || !l.overflowed[1] || (r("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), l.contentReset.x = null), c.snapAmount) {
                        var v = c.snapAmount instanceof Array ? "x" === i.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                        n = Y(n, v, c.snapOffset)
                    }
                    switch (i.dir) {
                        case "x":
                            var y = e("#mCSB_" + l.idx + "_dragger_horizontal"),
                                x = "left",
                                b = p[0].offsetLeft,
                                w = [f.width() - p.outerWidth(!1), y.parent().width() - y.width()],
                                C = [n, 0 === n ? 0 : n / l.scrollRatio.x],
                                _ = m[1],
                                T = g[1],
                                k = _ > 0 ? _ / l.scrollRatio.x : 0,
                                E = T > 0 ? T / l.scrollRatio.x : 0;
                            break;
                        case "y":
                            var y = e("#mCSB_" + l.idx + "_dragger_vertical"),
                                x = "top",
                                b = p[0].offsetTop,
                                w = [f.height() - p.outerHeight(!1), y.parent().height() - y.height()],
                                C = [n, 0 === n ? 0 : n / l.scrollRatio.y],
                                _ = m[0],
                                T = g[0],
                                k = _ > 0 ? _ / l.scrollRatio.y : 0,
                                E = T > 0 ? T / l.scrollRatio.y : 0
                    }
                    C[1] < 0 || 0 === C[0] && 0 === C[1] ? C = [0, 0] : C[1] >= w[1] ? C = [w[0], w[1]] : C[0] = -C[0], t[0].mcs || (s(), r("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(p[0].onCompleteTimeout), K(y[0], x, Math.round(C[1]), d[1], i.scrollEasing), !l.tweenRunning && (0 === b && C[0] >= 0 || b === w[0] && C[0] <= w[0]) || K(p[0], x, Math.round(C[0]), d[0], i.scrollEasing, i.overwrite, {
                        onStart: function () {
                            i.callbacks && i.onStart && !l.tweenRunning && (r("onScrollStart") && (s(), c.callbacks.onScrollStart.call(t[0])), l.tweenRunning = !0, S(y), l.cbOffsets = a())
                        },
                        onUpdate: function () {
                            i.callbacks && i.onUpdate && r("whileScrolling") && (s(), c.callbacks.whileScrolling.call(t[0]))
                        },
                        onComplete: function () {
                            if (i.callbacks && i.onComplete) {
                                "yx" === c.axis && clearTimeout(p[0].onCompleteTimeout);
                                var e = p[0].idleTimer || 0;
                                p[0].onCompleteTimeout = setTimeout(function () {
                                    r("onScroll") && (s(), c.callbacks.onScroll.call(t[0])), r("onTotalScroll") && C[1] >= w[1] - k && l.cbOffsets[0] && (s(), c.callbacks.onTotalScroll.call(t[0])), r("onTotalScrollBack") && C[1] <= E && l.cbOffsets[1] && (s(), c.callbacks.onTotalScrollBack.call(t[0])), l.tweenRunning = !1, p[0].idleTimer = 0, S(y, "hide")
                                }, e)
                            }
                        }
                    })
                }
            },
            K = function (e, t, n, o, i, r, a) {
                function s() {
                    w.stop || (y || h.call(), y = J() - v, l(), y >= w.time && (w.time = y > w.time ? y + f - (y - w.time) : y + f - 1, w.time < y + 1 && (w.time = y + 1)), w.time < o ? w.id = p(s) : g.call())
                }

                function l() {
                    o > 0 ? (w.currVal = d(w.time, x, C, o, i), b[t] = Math.round(w.currVal) + "px") : b[t] = n + "px", m.call()
                }

                function c() {
                    f = 1e3 / 60, w.time = y + f, p = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
                        return l(), setTimeout(e, .01)
                    }, w.id = p(s)
                }

                function u() {
                    null != w.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(w.id) : clearTimeout(w.id), w.id = null)
                }

                function d(e, t, n, o, i) {
                    switch (i) {
                        case "linear":
                        case "mcsLinear":
                            return n * e / o + t;
                        case "mcsLinearOut":
                            return e /= o, e--, n * Math.sqrt(1 - e * e) + t;
                        case "easeInOutSmooth":
                            return (e /= o / 2) < 1 ? n / 2 * e * e + t : (e--, -n / 2 * (e * (e - 2) - 1) + t);
                        case "easeInOutStrong":
                            return (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, n / 2 * (2 - Math.pow(2, -10 * e)) + t);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : (e -= 2, n / 2 * (e * e * e + 2) + t);
                        case "easeOutSmooth":
                            return e /= o, e--, -n * (e * e * e * e - 1) + t;
                        case "easeOutStrong":
                            return n * (1 - Math.pow(2, -10 * e / o)) + t;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var r = (e /= o) * e,
                                a = r * e;
                            return t + n * (.499999999999997 * a * r + -2.5 * r * r + 5.5 * a + -6.5 * r + 4 * e)
                    }
                }
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                var f, p, a = a || {},
                    h = a.onStart || function () {},
                    m = a.onUpdate || function () {},
                    g = a.onComplete || function () {},
                    v = J(),
                    y = 0,
                    x = e.offsetTop,
                    b = e.style,
                    w = e._mTween[t];
                "left" === t && (x = e.offsetLeft);
                var C = n - x;
                w.stop = 0, "none" !== r && u(), c()
            },
            J = function () {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            },
            Q = function () {
                var e = this;
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                for (var t = ["top", "left"], n = 0; n < t.length; n++) {
                    var o = t[n];
                    e._mTween[o].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[o].id) : clearTimeout(e._mTween[o].id), e._mTween[o].id = null, e._mTween[o].stop = 1)
                }
            },
            Z = function (e, t) {
                try {
                    delete e[t]
                } catch (n) {
                    e[t] = null
                }
            },
            ee = function (e) {
                return !(e.which && 1 !== e.which)
            },
            te = function (e) {
                var t = e.originalEvent.pointerType;
                return !(t && "touch" !== t && 2 !== t)
            },
            ne = function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            oe = function (e) {
                var t = e.parents(".mCSB_container");
                return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
            },
            ie = function () {
                function e() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }
                var t = e();
                return !!t && document[t]
            };
        e.fn[n] = function (t) {
            return d[t] ? d[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : d.init.apply(this, arguments)
        }, e[n] = function (t) {
            return d[t] ? d[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : d.init.apply(this, arguments)
        }, e[n].defaults = r, window[n] = !0, e(window).bind("load", function () {
            e(i)[n](), e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function (t) {
                    var n, o, i = e(t),
                        r = i.parents(".mCSB_container");
                    if (r.length) return n = r.parent(), o = [r[0].offsetTop, r[0].offsetLeft], o[0] + oe(i)[0] >= 0 && o[0] + oe(i)[0] < n.height() - i.outerHeight(!1) && o[1] + oe(i)[1] >= 0 && o[1] + oe(i)[1] < n.width() - i.outerWidth(!1)
                },
                mcsInSight: e.expr[":"].mcsInSight || function (t, n, o) {
                    var i, r, a, s, l = e(t),
                        c = l.parents(".mCSB_container"),
                        u = "exact" === o[3] ? [
                            [1, 0],
                            [1, 0]
                        ] : [
                            [.9, .1],
                            [.6, .4]
                        ];
                    if (c.length) return i = [l.outerHeight(!1), l.outerWidth(!1)], a = [c[0].offsetTop + oe(l)[0], c[0].offsetLeft + oe(l)[1]], r = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], s = [i[0] < r[0] ? u[0] : u[1], i[1] < r[1] ? u[0] : u[1]], a[0] - r[0] * s[0][0] < 0 && a[0] + i[0] - r[0] * s[0][1] >= 0 && a[1] - r[1] * s[1][0] < 0 && a[1] + i[1] - r[1] * s[1][1] >= 0
                },
                mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
                    var n = e(t).data(o);
                    if (n) return n.overflowed[0] || n.overflowed[1]
                }
            })
        })
    })
}),
function (e, t) {
    "function" == typeof define && define.amd ? define([], function () {
        return e.svg4everybody = t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.svg4everybody = t()
}(this, function () {
    function e(e, t, n) {
        if (n) {
            var o = document.createDocumentFragment(),
                i = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
            i && t.setAttribute("viewBox", i);
            for (var r = n.cloneNode(!0); r.childNodes.length;) o.appendChild(r.firstChild);
            e.appendChild(o)
        }
    }

    function t(t) {
        t.onreadystatechange = function () {
            if (4 === t.readyState) {
                var n = t._cachedDocument;
                n || (n = t._cachedDocument = document.implementation.createHTMLDocument(""), n.body.innerHTML = t.responseText, t._cachedTarget = {}), t._embeds.splice(0).map(function (o) {
                    var i = t._cachedTarget[o.id];
                    i || (i = t._cachedTarget[o.id] = n.getElementById(o.id)), e(o.parent, o.svg, i)
                })
            }
        }, t.onreadystatechange()
    }

    function n(n) {
        function i() {
            for (var n = 0; n < f.length;) {
                var s = f[n],
                    l = s.parentNode,
                    c = o(l);
                if (c) {
                    var p = s.getAttribute("xlink:href") || s.getAttribute("href");
                    if (r && (!a.validate || a.validate(p, c, s))) {
                        l.removeChild(s);
                        var h = p.split("#"),
                            m = h.shift(),
                            g = h.join("#");
                        if (m.length) {
                            var v = u[m];
                            v || (v = u[m] = new XMLHttpRequest, v.open("GET", m), v.send(), v._embeds = []), v._embeds.push({
                                parent: l,
                                svg: c,
                                id: g
                            }), t(v)
                        } else e(l, document.getElementById(g))
                    }
                } else ++n
            }
            d(i, 67)
        }
        var r, a = Object(n),
            s = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
            l = /\bAppleWebKit\/(\d+)\b/,
            c = /\bEdge\/12\.(\d+)\b/;
        r = "polyfill" in a ? a.polyfill : s.test(navigator.userAgent) || (navigator.userAgent.match(c) || [])[1] < 10547 || (navigator.userAgent.match(l) || [])[1] < 537;
        var u = {},
            d = window.requestAnimationFrame || setTimeout,
            f = document.getElementsByTagName("use");
        r && i()
    }

    function o(e) {
        for (var t = e;
            "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode););
        return t
    }
    return n
}),
function () {
    var e = [].indexOf || function (e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (t in this && this[t] === e) return t;
            return -1
        },
        t = [].slice;
    ! function (e, t) {
        "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function (n) {
            return t(n, e)
        }) : t(e.jQuery, e)
    }(this, function (n, o) {
        var i, r, a, s, l, c, u, d, f, p, h, m, g, v, y, x;
        return i = n(o), d = e.call(o, "ontouchstart") >= 0, s = {
            horizontal: {},
            vertical: {}
        }, l = 1, u = {}, c = "waypoints-context-id", h = "resize.waypoints", m = "scroll.waypoints", g = 1, v = "waypoints-waypoint-ids", y = "waypoint", x = "waypoints", r = function () {
            function e(e) {
                var t = this;
                this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                    x: e.scrollLeft(),
                    y: e.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, e.data(c, this.id), u[this.id] = this, e.bind(m, function () {
                    var e;
                    if (!t.didScroll && !d) return t.didScroll = !0, e = function () {
                        return t.doScroll(), t.didScroll = !1
                    }, o.setTimeout(e, n[x].settings.scrollThrottle)
                }), e.bind(h, function () {
                    var e;
                    if (!t.didResize) return t.didResize = !0, e = function () {
                        return n[x]("refresh"), t.didResize = !1
                    }, o.setTimeout(e, n[x].settings.resizeThrottle)
                })
            }
            return e.prototype.doScroll = function () {
                var e, t = this;
                return e = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !d || e.vertical.oldScroll && e.vertical.newScroll || n[x]("refresh"), n.each(e, function (e, o) {
                    var i, r, a;
                    return a = [], r = o.newScroll > o.oldScroll, i = r ? o.forward : o.backward, n.each(t.waypoints[e], function (e, t) {
                        var n, i;
                        return o.oldScroll < (n = t.offset) && n <= o.newScroll ? a.push(t) : o.newScroll < (i = t.offset) && i <= o.oldScroll ? a.push(t) : void 0
                    }), a.sort(function (e, t) {
                        return e.offset - t.offset
                    }), r || a.reverse(), n.each(a, function (e, t) {
                        if (t.options.continuous || e === a.length - 1) return t.trigger([i])
                    })
                }), this.oldScroll = {
                    x: e.horizontal.newScroll,
                    y: e.vertical.newScroll
                }
            }, e.prototype.refresh = function () {
                var e, t, o, i = this;
                return o = n.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
                    horizontal: {
                        contextOffset: o ? 0 : t.left,
                        contextScroll: o ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: o ? 0 : t.top,
                        contextScroll: o ? 0 : this.oldScroll.y,
                        contextDimension: o ? n[x]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, n.each(e, function (e, t) {
                    return n.each(i.waypoints[e], function (e, o) {
                        var i, r, a, s, l;
                        if (i = o.options.offset, a = o.offset, r = n.isWindow(o.element) ? 0 : o.$element.offset()[t.offsetProp], n.isFunction(i) ? i = i.apply(o.element) : "string" == typeof i && (i = parseFloat(i), o.options.offset.indexOf("%") > -1 && (i = Math.ceil(t.contextDimension * i / 100))), o.offset = r - t.contextOffset + t.contextScroll - i, (!o.options.onlyOnScroll || null == a) && o.enabled) return null !== a && a < (s = t.oldScroll) && s <= o.offset ? o.trigger([t.backward]) : null !== a && a > (l = t.oldScroll) && l >= o.offset ? o.trigger([t.forward]) : null === a && t.oldScroll >= o.offset ? o.trigger([t.forward]) : void 0
                    })
                })
            }, e.prototype.checkEmpty = function () {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([h, m].join(" ")), delete u[this.id]
            }, e
        }(), a = function () {
            function e(e, t, o) {
                var i, r;
                o = n.extend({}, n.fn[y].defaults, o), "bottom-in-view" === o.offset && (o.offset = function () {
                    var e;
                    return e = n[x]("viewportHeight"), n.isWindow(t.element) || (e = t.$element.height()), e - n(this).outerHeight()
                }), this.$element = e, this.element = e[0], this.axis = o.horizontal ? "horizontal" : "vertical", this.callback = o.handler, this.context = t, this.enabled = o.enabled, this.id = "waypoints" + g++, this.offset = null, this.options = o, t.waypoints[this.axis][this.id] = this, s[this.axis][this.id] = this, i = null != (r = e.data(v)) ? r : [], i.push(this.id), e.data(v, i)
            }
            return e.prototype.trigger = function (e) {
                if (this.enabled) return null != this.callback && this.callback.apply(this.element, e), this.options.triggerOnce ? this.destroy() : void 0
            }, e.prototype.disable = function () {
                return this.enabled = !1
            }, e.prototype.enable = function () {
                return this.context.refresh(), this.enabled = !0
            }, e.prototype.destroy = function () {
                return delete s[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, e.getWaypointsByElement = function (e) {
                var t, o;
                return (o = n(e).data(v)) ? (t = n.extend({}, s.horizontal, s.vertical), n.map(o, function (e) {
                    return t[e]
                })) : []
            }, e
        }(), p = {
            init: function (e, t) {
                return null == t && (t = {}), null == t.handler && (t.handler = e), this.each(function () {
                    var e, o, i, s;
                    return e = n(this), i = null != (s = t.context) ? s : n.fn[y].defaults.context, n.isWindow(i) || (i = e.closest(i)), i = n(i), o = u[i.data(c)], o || (o = new r(i)), new a(e, o, t)
                }), n[x]("refresh"), this
            },
            disable: function () {
                return p._invoke(this, "disable")
            },
            enable: function () {
                return p._invoke(this, "enable")
            },
            destroy: function () {
                return p._invoke(this, "destroy")
            },
            prev: function (e, t) {
                return p._traverse.call(this, e, t, function (e, t, n) {
                    if (t > 0) return e.push(n[t - 1])
                })
            },
            next: function (e, t) {
                return p._traverse.call(this, e, t, function (e, t, n) {
                    if (t < n.length - 1) return e.push(n[t + 1])
                })
            },
            _traverse: function (e, t, i) {
                var r, a;
                return null == e && (e = "vertical"), null == t && (t = o), a = f.aggregate(t), r = [], this.each(function () {
                    var t;
                    return t = n.inArray(this, a[e]), i(r, t, a[e])
                }), this.pushStack(r)
            },
            _invoke: function (e, t) {
                return e.each(function () {
                    var e;
                    return e = a.getWaypointsByElement(this), n.each(e, function (e, n) {
                        return n[t](), !0
                    })
                }), this
            }
        }, n.fn[y] = function () {
            var e, o;
            return o = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], p[o] ? p[o].apply(this, e) : n.isFunction(o) ? p.init.apply(this, arguments) : n.isPlainObject(o) ? p.init.apply(this, [null, o]) : o ? n.error("The " + o + " method does not exist in jQuery Waypoints.") : n.error("jQuery Waypoints needs a callback function or handler option.")
        }, n.fn[y].defaults = {
            context: o,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, f = {
            refresh: function () {
                return n.each(u, function (e, t) {
                    return t.refresh()
                })
            },
            viewportHeight: function () {
                var e;
                return null != (e = o.innerHeight) ? e : i.height()
            },
            aggregate: function (e) {
                var t, o, i;
                return t = s, e && (t = null != (i = u[n(e).data(c)]) ? i.waypoints : void 0), t ? (o = {
                    horizontal: [],
                    vertical: []
                }, n.each(o, function (e, i) {
                    return n.each(t[e], function (e, t) {
                        return i.push(t)
                    }), i.sort(function (e, t) {
                        return e.offset - t.offset
                    }), o[e] = n.map(i, function (e) {
                        return e.element
                    }), o[e] = n.unique(o[e])
                }), o) : []
            },
            above: function (e) {
                return null == e && (e = o), f._filter(e, "vertical", function (e, t) {
                    return t.offset <= e.oldScroll.y
                })
            },
            below: function (e) {
                return null == e && (e = o), f._filter(e, "vertical", function (e, t) {
                    return t.offset > e.oldScroll.y
                })
            },
            left: function (e) {
                return null == e && (e = o), f._filter(e, "horizontal", function (e, t) {
                    return t.offset <= e.oldScroll.x
                })
            },
            right: function (e) {
                return null == e && (e = o), f._filter(e, "horizontal", function (e, t) {
                    return t.offset > e.oldScroll.x
                })
            },
            enable: function () {
                return f._invoke("enable")
            },
            disable: function () {
                return f._invoke("disable")
            },
            destroy: function () {
                return f._invoke("destroy")
            },
            extendFn: function (e, t) {
                return p[e] = t
            },
            _invoke: function (e) {
                var t;
                return t = n.extend({}, s.vertical, s.horizontal), n.each(t, function (t, n) {
                    return n[e](), !0
                })
            },
            _filter: function (e, t, o) {
                var i, r;
                return (i = u[n(e).data(c)]) ? (r = [], n.each(i.waypoints[t], function (e, t) {
                    if (o(i, t)) return r.push(t)
                }), r.sort(function (e, t) {
                    return e.offset - t.offset
                }), n.map(r, function (e) {
                    return e.element
                })) : []
            }
        }, n[x] = function () {
            var e, n;
            return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], f[n] ? f[n].apply(null, e) : f.aggregate.call(null, n)
        }, n[x].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, i.load(function () {
            return n[x]("refresh")
        })
    })
}.call(this),
    function (e, t) {
        if ("function" == typeof define && define.amd) define(["module", "exports"], t);
        else if ("undefined" != typeof exports) t(module, exports);
        else {
            var n = {
                exports: {}
            };
            t(n, n.exports), e.WOW = n.exports
        }
    }(this, function (e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            return t.indexOf(e) >= 0
        }

        function i(e, t) {
            for (var n in t)
                if (null == e[n]) {
                    var o = t[n];
                    e[n] = o
                } return e
        }

        function r(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }

        function a(e) {
            var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
                n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
                o = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
                i = void 0;
            return null != document.createEvent ? (i = document.createEvent("CustomEvent"), i.initCustomEvent(e, t, n, o)) : null != document.createEventObject ? (i = document.createEventObject(), i.eventType = e) : i.eventName = e, i
        }

        function s(e, t) {
            null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) && e["on" + t]()
        }

        function l(e, t, n) {
            null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
        }

        function c(e, t, n) {
            null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
        }

        function u() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d, f, p = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            h = window.WeakMap || window.MozWeakMap || function () {
                function e() {
                    n(this, e), this.keys = [], this.values = []
                }
                return p(e, [{
                    key: "get",
                    value: function (e) {
                        for (var t = 0; t < this.keys.length; t++) {
                            if (this.keys[t] === e) return this.values[t]
                        }
                    }
                }, {
                    key: "set",
                    value: function (e, t) {
                        for (var n = 0; n < this.keys.length; n++) {
                            if (this.keys[n] === e) return this.values[n] = t, this
                        }
                        return this.keys.push(e), this.values.push(t), this
                    }
                }]), e
            }(),
            m = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (f = d = function () {
                function e() {
                    n(this, e), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
                }
                return p(e, [{
                    key: "observe",
                    value: function () {}
                }]), e
            }(), d.notSupported = !0, f),
            g = window.getComputedStyle || function (e) {
                var t = /(\-([a-z]){1})/g;
                return {
                    getPropertyValue: function (n) {
                        "float" === n && (n = "styleFloat"), t.test(n) && n.replace(t, function (e, t) {
                            return t.toUpperCase()
                        });
                        var o = e.currentStyle;
                        return (null != o ? o[n] : void 0) || null
                    }
                }
            },
            v = function () {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    n(this, e), this.defaults = {
                        boxClass: "wow",
                        animateClass: "animated",
                        offset: 0,
                        mobile: !0,
                        live: !0,
                        callback: null,
                        scrollContainer: null,
                        resetAnimation: !0
                    }, this.animate = function () {
                        return "requestAnimationFrame" in window ? function (e) {
                            return window.requestAnimationFrame(e)
                        } : function (e) {
                            return e()
                        }
                    }(), this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = i(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new h, this.wowEvent = a(this.config.boxClass)
                }
                return p(e, [{
                    key: "init",
                    value: function () {
                        this.element = window.document.documentElement, o(document.readyState, ["interactive", "complete"]) ? this.start() : l(document, "DOMContentLoaded", this.start), this.finished = []
                    }
                }, {
                    key: "start",
                    value: function () {
                        var e = this;
                        if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
                            if (this.disabled()) this.resetStyle();
                            else
                                for (var t = 0; t < this.boxes.length; t++) {
                                    var n = this.boxes[t];
                                    this.applyStyle(n, !0)
                                }
                        if (this.disabled() || (l(this.config.scrollContainer || window, "scroll", this.scrollHandler), l(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
                            new m(function (t) {
                                for (var n = 0; n < t.length; n++)
                                    for (var o = t[n], i = 0; i < o.addedNodes.length; i++) {
                                        var r = o.addedNodes[i];
                                        e.doSync(r)
                                    }
                            }).observe(document.body, {
                                childList: !0,
                                subtree: !0
                            })
                        }
                    }
                }, {
                    key: "stop",
                    value: function () {
                        this.stopped = !0, c(this.config.scrollContainer || window, "scroll", this.scrollHandler), c(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval)
                    }
                }, {
                    key: "sync",
                    value: function () {
                        m.notSupported && this.doSync(this.element)
                    }
                }, {
                    key: "doSync",
                    value: function (e) {
                        if (void 0 !== e && null !== e || (e = this.element), 1 === e.nodeType) {
                            e = e.parentNode || e;
                            for (var t = e.querySelectorAll("." + this.config.boxClass), n = 0; n < t.length; n++) {
                                var i = t[n];
                                o(i, this.all) || (this.boxes.push(i), this.all.push(i), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(i, !0), this.scrolled = !0)
                            }
                        }
                    }
                }, {
                    key: "show",
                    value: function (e) {
                        return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), s(e, this.wowEvent), this.config.resetAnimation && (l(e, "animationend", this.resetAnimation), l(e, "oanimationend", this.resetAnimation), l(e, "webkitAnimationEnd", this.resetAnimation), l(e, "MSAnimationEnd", this.resetAnimation)), e
                    }
                }, {
                    key: "applyStyle",
                    value: function (e, t) {
                        var n = this,
                            o = e.getAttribute("data-wow-duration"),
                            i = e.getAttribute("data-wow-delay"),
                            r = e.getAttribute("data-wow-iteration");
                        return this.animate(function () {
                            return n.customStyle(e, t, o, i, r)
                        })
                    }
                }, {
                    key: "resetStyle",
                    value: function () {
                        for (var e = 0; e < this.boxes.length; e++) {
                            this.boxes[e].style.visibility = "visible"
                        }
                    }
                }, {
                    key: "resetAnimation",
                    value: function (e) {
                        if (e.type.toLowerCase().indexOf("animationend") >= 0) {
                            var t = e.target || e.srcElement;
                            t.className = t.className.replace(this.config.animateClass, "").trim()
                        }
                    }
                }, {
                    key: "customStyle",
                    value: function (e, t, n, o, i) {
                        return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
                            animationDuration: n
                        }), o && this.vendorSet(e.style, {
                            animationDelay: o
                        }), i && this.vendorSet(e.style, {
                            animationIterationCount: i
                        }), this.vendorSet(e.style, {
                            animationName: t ? "none" : this.cachedAnimationName(e)
                        }), e
                    }
                }, {
                    key: "vendorSet",
                    value: function (e, t) {
                        for (var n in t)
                            if (t.hasOwnProperty(n)) {
                                var o = t[n];
                                e["" + n] = o;
                                for (var i = 0; i < this.vendors.length; i++) {
                                    var r = this.vendors[i];
                                    e["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o
                                }
                            }
                    }
                }, {
                    key: "vendorCSS",
                    value: function (e, t) {
                        for (var n = g(e), o = n.getPropertyCSSValue(t), i = 0; i < this.vendors.length; i++) {
                            var r = this.vendors[i];
                            o = o || n.getPropertyCSSValue("-" + r + "-" + t)
                        }
                        return o
                    }
                }, {
                    key: "animationName",
                    value: function (e) {
                        var t = void 0;
                        try {
                            t = this.vendorCSS(e, "animation-name").cssText
                        } catch (n) {
                            t = g(e).getPropertyValue("animation-name")
                        }
                        return "none" === t ? "" : t
                    }
                }, {
                    key: "cacheAnimationName",
                    value: function (e) {
                        return this.animationNameCache.set(e, this.animationName(e))
                    }
                }, {
                    key: "cachedAnimationName",
                    value: function (e) {
                        return this.animationNameCache.get(e)
                    }
                }, {
                    key: "scrollHandler",
                    value: function () {
                        this.scrolled = !0
                    }
                }, {
                    key: "scrollCallback",
                    value: function () {
                        if (this.scrolled) {
                            this.scrolled = !1;
                            for (var e = [], t = 0; t < this.boxes.length; t++) {
                                var n = this.boxes[t];
                                if (n) {
                                    if (this.isVisible(n)) {
                                        this.show(n);
                                        continue
                                    }
                                    e.push(n)
                                }
                            }
                            this.boxes = e, this.boxes.length || this.config.live || this.stop()
                        }
                    }
                }, {
                    key: "offsetTop",
                    value: function (e) {
                        for (; void 0 === e.offsetTop;) e = e.parentNode;
                        for (var t = e.offsetTop; e.offsetParent;) e = e.offsetParent, t += e.offsetTop;
                        return t
                    }
                }, {
                    key: "isVisible",
                    value: function (e) {
                        var t = e.getAttribute("data-wow-offset") || this.config.offset,
                            n = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                            o = n + Math.min(this.element.clientHeight, u()) - t,
                            i = this.offsetTop(e),
                            r = i + e.clientHeight;
                        return i <= o && r >= n
                    }
                }, {
                    key: "disabled",
                    value: function () {
                        return !this.config.mobile && r(navigator.userAgent)
                    }
                }]), e
            }();
        t.default = v, e.exports = t.default
    }), $(document).ready(function () {
        function e(e, t, o, i) {
            if (e) switch (e.status) {
                case "extention":
                    $.magnificPopup.open({
                        items: {
                            src: "#error-files"
                        },
                        type: "inline",
                        midClick: !0,
                        fixedBgPos: !0,
                        fixedContentPos: !0,
                        closeOnBgClick: !1,
                        removalDelay: 400,
                        callbacks: {
                            open: function () {
                                popupShow()
                            },
                            close: function () {
                                popupClose()
                            }
                        }
                    });
                    break;
                case "error":
                    $.magnificPopup.open({
                        items: {
                            src: "#error-popup"
                        },
                        type: "inline",
                        midClick: !0,
                        fixedBgPos: !0,
                        fixedContentPos: !0,
                        closeOnBgClick: !1,
                        removalDelay: 400,
                        callbacks: {
                            open: function () {
                                popupShow()
                            },
                            close: function () {
                                popupClose()
                            }
                        }
                    });
                    break;
                case "success":
                    switch ($.magnificPopup.open({
                        items: {
                            src: "#thanks"
                        },
                        type: "inline",
                        fixedBgPos: !0,
                        fixedContentPos: !0,
                        closeOnBgClick: !1,
                        removalDelay: 400,
                        callbacks: {
                            open: function () {
                                popupShow()
                            },
                            close: function () {
                                popupClose()
                            }
                        }
                    }), n.find(".js-form-submit").addClass("disabled"), e.action) {
                        case "feedback":
                            Comagic.addOfflineRequest({
                                name: n.find('input[name="name"]').val(),
                                phone: n.find('input[name="contacts"]').val(),
                                message: "Название формы: " + n.attr("data-form") + "; Компания: " + n.find('input[name="company"]').val() + "; Сообщение: " + n.find("textarea").val()
                            });
                            break;
                        case "job":
                            n.find(".job-item__add").removeClass("active").find("span").text("Прикрепить").parent().next().addClass("disabled-btn"), n.find(".js-file").replaceWith('<input class="js-file" name="files[]" type="file">')
                    }
                    n.clearForm()
            }
        }

        function t(e, t, n) {
            var o, i = !0,
                r = !0;
            return t.find(".error-field").removeClass("error-field"), t.find("input:required").each(function (e) {
                o = $(this), o.length > 0 && ($(this).is("required") && !$(this).is("a") && (r = "" != $(this).val()), (r = "" != $(this).val()) || (i = !1, o.addClass("error-field")))
            }), console.log(i), i
        }
        var n, o = {
            beforeSubmit: t,
            success: e,
            url: "/ajax-form",
            type: "post",
            dataType: "json"
        };
        $(".js-form-submit").click(function () {
            n = $(this).parents("form"), n.ajaxSubmit(o)
        })
    }), $(document).ready(function () {
        function e() {
            $("body").addClass("no-scroll").css("top", -$(window).scrollTop())
        }

        function t() {
            $(window).scrollTop(i), $("body").removeClass("no-scroll").removeAttr("style")
        }

        function n(e) {
            var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
            return t ? decodeURIComponent(t[1]) : void 0
        }
        navigator.userAgent.match(/iPhone|iPad|Android|Windows Phone/) ? $("html").addClass("touch") : $("html").addClass("no-touch"), navigator.userAgent.match(/Mac/) && $("html").addClass("macos"), localStorage.cookie || (window.innerWidth < 480 ? $.magnificPopup.open({
            items: {
                src: "#cookie-popup"
            },
            type: "inline",
            fixedBgPos: !0,
            fixedContentPos: !0,
            closeOnBgClick: !1,
            removalDelay: 400,
            callbacks: {
                open: function () {
                    popupShow()
                },
                close: function () {
                    popupClose()
                }
            }
        }) : $(".cookie-popup").slideDown(400), localStorage.cookie = "Видел"), $(".cookie-popup .blue-btn").click(function () {
            window.innerWidth < 480 ? $.magnificPopup.close() : $(".cookie-popup").slideUp(400)
        }), new WOW({
            offset: 20,
            resetAnimation: !1
        }).init(), $(".js-open-popup").magnificPopup({
            type: "inline",
            midClick: !0,
            fixedBgPos: !0,
            fixedContentPos: !0,
            closeOnBgClick: !1,
            removalDelay: 400,
            callbacks: {
                open: function () {
                    popupShow()
                },
                close: function () {
                    popupClose()
                }
            }
        }), $(".js-close-popup").click(function () {
            $.magnificPopup.close()
        }), $(".js-y-scroll").mCustomScrollbar({
            axis: "y",
            advanced: {
                updateOnContentResize: !0
            },
            mouseWheel: {
                preventDefault: !0
            }
        }), svg4everybody(), $(".js-policy input").on("change", function () {
            $(this).is(":checked") ? $(this).parents("form").find('.js-form-submit, .js-lead-submit, button[type="submit"]').removeClass("disabled") : $(this).parents("form").find('.js-form-submit, .js-lead-submit, button[type="submit"]').addClass("disabled")
        }), $(".js-next-toggle").click(function (e) {
            $(this).toggleClass("active").next().slideToggle(250), e.preventDefault()
        }), $(".js-parent-toggle").click(function (e) {
            $(this).toggleClass("active").next().slideToggle(250), $(this).parent().toggleClass("active"), e.preventDefault()
        }), $(".js-password").click(function () {
            $(this).parent().toggleClass("active"), $(this).siblings("input").attr("type", $(this).data("type")), $(this).parent().next().attr("type", $(this).data("type"))
        }), $(".js-popup-menu, .js-footer-menu").click(function () {
            $(this).toggleClass("active").parent().toggleClass("active").end().next().slideToggle()
        }), $(".js-history-back").click(function () {
            window.history.back()
        }), $(".js-widget").click(function () {
            window.innerWidth >= 1025 ? $(".Controls-module__startBtn___1Kdw0").hasClass("Controls-module__open___2X2Mf") ? $("#chat24 .Controls-module__wrapper___23drr .Controls-module__messengersWrapper___fKFxL").children().eq(2).click() : ($(".Controls-module__startBtn___1Kdw0").click(), $("#chat24 .Controls-module__wrapper___23drr .Controls-module__messengersWrapper___fKFxL").children().eq(2).click()) : $("#chat24 .Controls-module__list___1lFlP").children().eq(2).click()
        }), $(".js-anchor").click(function (e) {
            e.preventDefault();
            var t = $(this).attr("href"),
                n = $(t).offset().top - $("header").height();
            $("html, body").animate({
                scrollTop: n
            }, 700)
        }), $(window).scroll(function () {
            var e = $(this).scrollTop();
            e > 0 ? $(".header").addClass("active") : $(".header").removeClass("active"), e >= $(document).height() - $(window).height() ? $("#chat24").css({
                bottom: "130px",
                transition: "bottom 200ms"
            }) : $("#chat24").css({
                bottom: "5vh",
                transition: "bottom 200ms"
            })
        });
        var o = $(".header-popup-wrap"),
            i = 0;
        $(".js-header-popup").click(function (n) {
            o.hasClass("active") ? (o.removeClass("animate"), setTimeout(function () {
                o.removeClass("active"), $("html").removeClass("blocked"), t()
            }, 500)) : (i = $(window).scrollTop(), e(), o.css("height", window.innerHeight), $("html").addClass("blocked"), o.addClass("active animate")), n.stopPropagation()
        }), $(".header-popup").click(function (e) {
            e.stopPropagation()
        }), o.click(function () {
            o.removeClass("animate"), setTimeout(function () {
                o.removeClass("active"), $("html").removeClass("blocked"), t()
            }, 500)
        }), -1 != window.location.hash.indexOf("#registr") && $.magnificPopup.open({
            items: {
                src: "#registration"
            },
            type: "inline",
            midClick: !0,
            fixedBgPos: !0,
            fixedContentPos: !0,
            closeOnBgClick: !1,
            removalDelay: 400,
            callbacks: {
                open: function () {
                    popupShow()
                },
                close: function () {
                    popupClose()
                }
            }
        }, 0);
        var r = "https://web.chat2desk.com",
            a = "https://vip.chat2desk.com",
            s = getParameterByName("hash"),
            l = $("html").attr("lang"),
            c = "",
            u = !1;
        try {
            u = window != window.top || document != top.document || self.location != top.location
        } catch (e) {
            u = !0
        }
        if (0 == u)
            if (null != getParameterByName("partid")) {
                c = getParameterByName("partid");
                var d = new Date;
                d.setDate(d.getDate() + 90), document.cookie = "partid=" + getParameterByName("partid") + "; path=/; expires=" + d + "; secure"
            } else void 0 != n("partid") && (c = n("partid"));
        s && (s = getParameterByName("hash"), $(".change-key").val(s), $.magnificPopup.open({
            items: {
                src: "#change"
            },
            type: "inline",
            fixedBgPos: !0,
            fixedContentPos: !0,
            closeOnBgClick: !1,
            removalDelay: 400,
            callbacks: {
                open: function () {
                    popupShow()
                },
                close: function () {
                    popupClose()
                }
            }
        })), $(".login-form").submit(function (e) {
            var t = $(this),
                n = !0,
                o = !0;
            return $.ajax({
                method: "POST",
                url: a + "/api/user/sign_in?lang=" + l,
                contentType: "application/json; charset=UTF-8",
                dataType: "json",
                data: JSON.stringify({
                    email: $(".login-email").val().trim(),
                    password: $(".login-password").val()
                }),
                beforeSend: function () {
                    return t.find(".error-field").removeClass("error-field"), t.find("input.required").each(function (e) {
                        var t = $(this);
                        t.length > 0 && ($(this).hasClass("required") && (o = "" != $(this).val()), o || (n = !1, t.addClass("error-field")))
                    }), 1 == n && t.find(".popup-form__btn").addClass("waiting"), n
                },
                success: function (e) {
                    t.find(".popup-form__btn").removeClass("waiting"), "success" === e.status ? (document.cookie = "logged_in=true", document.cookie = "logged_in_url=" + a, "object" == typeof yaCounter36361410 && yaCounter36361410.reachGoal("success_enter"), "function" == typeof gtag && gtag("event", "success_enter"), null != getParameterByName("returnUrl") ? location.href = a + "?auth_key=" + e.auth_key + "&refer=" + getParameterByName("returnUrl") : location.href = a + "?auth_key=" + e.auth_key) : $.ajax({
                        method: "POST",
                        url: r + "/api/user/sign_in?lang=" + l,
                        contentType: "application/json; charset=UTF-8",
                        dataType: "json",
                        data: JSON.stringify({
                            email: $(".login-email").val().trim(),
                            password: $(".login-password").val()
                        }),
                        success: function (e) {
                            if ("success" === e.status) document.cookie = "logged_in=true", document.cookie = "logged_in_url=" + r, "object" == typeof yaCounter36361410 && yaCounter36361410.reachGoal("success_enter"), "function" == typeof gtag && gtag("event", "success_enter"), null != getParameterByName("returnUrl") ? location.href = r + "?auth_key=" + e.auth_key + "&refer=" + getParameterByName("returnUrl") : location.href = r + "?auth_key=" + e.auth_key;
                            else {
                                var t = [];
                                for (var n in e.errors) t.push(e.errors[n][0]);
                                $(".login-error").show().html(t.join("<br/>"))
                            }
                        }
                    })
                },
                error: function () {
                    $.ajax({
                        method: "POST",
                        url: r + "/api/user/sign_in?lang=" + l,
                        contentType: "application/json; charset=UTF-8",
                        dataType: "json",
                        data: JSON.stringify({
                            email: $(".login-email").val().trim(),
                            password: $(".login-password").val()
                        }),
                        success: function (e) {
                            if ("success" === e.status) document.cookie = "logged_in=true", document.cookie = "logged_in_url=" + r, "object" == typeof yaCounter36361410 && yaCounter36361410.reachGoal("success_enter"), "function" == typeof gtag && gtag("event", "success_enter"), null != getParameterByName("returnUrl") ? location.href = r + "?auth_key=" + e.auth_key + "&refer=" + getParameterByName("returnUrl") : location.href = r + "?auth_key=" + e.auth_key;
                            else {
                                var t = [];
                                for (var n in e.errors) t.push(e.errors[n][0]);
                                $(".login-error").show().html(t.join("<br/>"))
                            }
                        }
                    })
                }
            }), !1
        }), $(".registration-form").submit(function (e) {
            var t = $(this),
                n = !0,
                o = !0,
                i = t.find(".registration-page").val(),
                a = t.find(".registration-name").val(),
                s = t.find(".registration-email").val(),
                u = t.find(".registration-phone").val();
            return $.ajax({
                method: "POST",
                url: r + "/api/user/sign_up?lang=" + l,
                contentType: "application/json; charset=UTF-8",
                dataType: "json",
                data: JSON.stringify({
                    email: $(".registration-email").val().trim(),
                    company_name: $(".registration-name").val(),
                    password_confirmation: $(".registration-confirm").val(),
                    password: $(".registration-password").val(),
                    partid: c
                }),
                beforeSend: function () {
                    return t.find(".error-field").removeClass("error-field"), t.find("input.required").each(function (e) {
                        var t = $(this);
                        t.length > 0 && ($(this).hasClass("required") && (o = "" != $(this).val()), o || (n = !1, t.addClass("error-field")))
                    }), 1 == n && t.find(".popup-form__btn").addClass("waiting"), n
                },
                success: function (e) {
                    if (t.find(".popup-form__btn").removeClass("waiting"), "success" === e.status ? (Comagic.addOfflineRequest({
                            name: a,
                            email: s,
                            message: "Название формы: " + $(".registration-form").attr("data-form") + "Страница: " + i
                        }), "object" == typeof yaCounter36361410 && yaCounter36361410.reachGoal("success_reg"), "function" == typeof gtag && gtag("event", "success_reg"), $.ajax({
                            url: "/ajax",
                            type: "POST",
                            data: {
                                client_id: 29597980,
                                text: "Регистрация:\n\nНазвание компании: " + a.replaceAll("_", "\\_").replaceAll("*", "\\*") + "\nE-mail: " + s.replaceAll("_", "\\_").replaceAll("*", "\\*") + "\nТелефон: " + u + "\nСтраница: " + i + "\n"
                            },
                            dataType: "html",
                            success: function (t) {
                                $.ajax({
                                    url: "/ajax",
                                    type: "POST",
                                    data: {
                                        case: "register",
                                        name: a,
                                        email: s,
                                        phone: u,
                                        comagic: Comagic.getVisitorId()
                                    },
                                    dataType: "html"
                                }), location.href = r + "?auth_key=" + e.auth_key
                            },
                            error: function () {
                                $.magnificPopup.open({
                                    items: {
                                        src: "#error-popup"
                                    },
                                    type: "inline",
                                    midClick: !0,
                                    fixedBgPos: !0,
                                    fixedContentPos: !0,
                                    closeOnBgClick: !1,
                                    removalDelay: 400,
                                    callbacks: {
                                        open: function () {
                                            popupShow()
                                        },
                                        close: function () {
                                            popupClose()
                                        }
                                    }
                                }, 0)
                            }
                        })) : console.error("response", e), "error" === e.status) {
                        var n = [];
                        for (var o in e.errors) n.push(e.errors[o][0]);
                        $(".registration-error").show().html(n.join("<br/>"))
                    }
                }
            }), !1
        }), $(".reset-form").submit(function (e) {
            var t = $(this),
                n = !0,
                o = !0;
            return $.ajax({
                method: "POST",
                url: a + "/api/user/reset_password?lang=" + l,
                contentType: "application/json; charset=UTF-8",
                dataType: "json",
                data: JSON.stringify({
                    email: $(".reset-email").val().trim(),
                    url_to_change_pwd: window.location.href
                }),
                beforeSend: function () {
                    return t.find(".error-field").removeClass("error-field"), t.find("input.required").each(function (e) {
                        var t = $(this);
                        t.length > 0 && ($(this).hasClass("required") && (o = "" != $(this).val()), o || (n = !1, t.addClass("error-field")))
                    }), 1 == n && t.find(".popup-form__btn").addClass("waiting"), n
                },
                success: function (e) {
                    t.find(".popup-form__btn").removeClass("waiting"), "success" === e.status ? ($(".popup-form__check span").text($(".reset-email").val().trim()), $.magnificPopup.open({
                        items: {
                            src: "#check"
                        },
                        type: "inline",
                        fixedBgPos: !0,
                        fixedContentPos: !0,
                        closeOnBgClick: !1,
                        removalDelay: 400,
                        callbacks: {
                            open: function () {
                                popupShow()
                            },
                            close: function () {
                                popupClose()
                            }
                        }
                    }, 0)) : $.ajax({
                        method: "POST",
                        url: r + "/api/user/reset_password?lang=" + l,
                        contentType: "application/json; charset=UTF-8",
                        dataType: "json",
                        data: JSON.stringify({
                            email: $(".reset-email").val().trim(),
                            url_to_change_pwd: window.location.href
                        }),
                        success: function (e) {
                            if ("success" === e.status ? ($(".popup-form__check span").text($(".reset-email").val().trim()), $.magnificPopup.open({
                                    items: {
                                        src: "#check"
                                    },
                                    type: "inline",
                                    fixedBgPos: !0,
                                    fixedContentPos: !0,
                                    closeOnBgClick: !1,
                                    removalDelay: 400,
                                    callbacks: {
                                        open: function () {
                                            popupShow()
                                        },
                                        close: function () {
                                            popupClose()
                                        }
                                    }
                                }, 0)) : console.error("response", e), "error" === e.status) {
                                var t = [];
                                for (var n in e.errors) t.push(e.errors[n][0]);
                                $(".reset-error").show().html(t.join("<br/>"))
                            }
                        }
                    })
                }
            }), !1
        }), $(".change-form").submit(function (e) {
            e.preventDefault();
            var t = $(this),
                n = !0,
                o = !0;
            $.ajax({
                method: "POST",
                url: r + "/api/user/change_password",
                contentType: "application/json; charset=UTF-8",
                dataType: "json",
                data: JSON.stringify({
                    password: $(".change-password").val(),
                    password_confirmation: $(".change-confirm").val(),
                    hash: $(".change-key").val()
                }),
                beforeSend: function () {
                    return t.find(".error-field").removeClass("error-field"), t.find("input.required").each(function (e) {
                        var t = $(this);
                        t.length > 0 && ($(this).hasClass("required") && (o = "" != $(this).val()), o || (n = !1, t.addClass("error-field")))
                    }), 1 == n && t.find(".popup-form__btn").addClass("waiting"), n
                },
                success: function (e) {
                    t.find(".popup-form__btn").removeClass("waiting"), "success" === e.status ? location.href = r + "?auth_key=" + e.auth_key : console.error("response", e)
                }
            })
        }), $(".demo-sign-in").click(function (e) {
            e.preventDefault(), $.ajax({
                method: "POST",
                url: r + "/api/user/sign_up",
                contentType: "application/json; charset=UTF-8",
                dataType: "json",
                data: JSON.stringify({
                    demo_access: !0
                }),
                success: function (e) {
                    "success" === e.status ? window.open(r + "?auth_key=" + e.auth_key, "_blank") : console.error("response", e)
                }
            })
        })
    });