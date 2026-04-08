import * as e from "react";
import { createContext as t, createElement as n, forwardRef as r, useContext as i } from "react";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region node_modules/clsx/dist/clsx.mjs
function c(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = c(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function l() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = c(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var u = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, d = l, f = (e, t) => (n) => {
	if (t?.variants == null) return d(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = u(t) || u(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return d(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
};
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function p(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function m(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = p(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : p(e[t], null);
			}
		};
	};
}
//#endregion
//#region node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function h(t) {
	let n = /* @__PURE__ */ ee(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t, s = e.Children.toArray(i), c = s.find(v);
		if (c) {
			let t = c.props.children, i = s.map((n) => n === c ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ o(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ o(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
var g = /* @__PURE__ */ h("Slot");
/* @__NO_SIDE_EFFECTS__ */
function ee(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (e.isValidElement(r)) {
			let t = b(r), a = y(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? m(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var _ = Symbol("radix.slottable");
function v(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === _;
}
function y(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function b(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var x = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), te = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), S = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), C = (e) => {
	let t = S(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, w = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, ne = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, T = t({}), re = () => i(T), ie = r(({ color: e, size: t, strokeWidth: r, absoluteStrokeWidth: i, className: a = "", children: o, iconNode: s, ...c }, l) => {
	let { size: u = 24, strokeWidth: d = 2, absoluteStrokeWidth: f = !1, color: p = "currentColor", className: m = "" } = re() ?? {}, h = i ?? f ? Number(r ?? d) * 24 / Number(t ?? u) : r ?? d;
	return n("svg", {
		ref: l,
		...w,
		width: t ?? u ?? w.width,
		height: t ?? u ?? w.height,
		stroke: e ?? p,
		strokeWidth: h,
		className: x("lucide", m, a),
		...!o && !ne(c) && { "aria-hidden": "true" },
		...c
	}, [...s.map(([e, t]) => n(e, t)), ...Array.isArray(o) ? o : [o]]);
}), E = ((e, t) => {
	let i = r(({ className: r, ...i }, a) => n(ie, {
		ref: a,
		iconNode: t,
		className: x(`lucide-${te(C(e))}`, `lucide-${e}`, r),
		...i
	}));
	return i.displayName = C(e), i;
})("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), D = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, O = (e, t) => ({
	classGroupId: e,
	validator: t
}), k = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), A = "-", j = [], ae = "arbitrary..", oe = (e) => {
	let t = P(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return N(e);
			let n = e.split(A);
			return M(n, n[0] === "" && n.length > 1 ? 1 : 0, t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? D(i, t) : t : i || j;
			}
			return n[e] || j;
		}
	};
}, M = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = M(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(A) : e.slice(t).join(A), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, N = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? ae + r : void 0;
})(), P = (e) => {
	let { theme: t, classGroups: n } = e;
	return F(n, t);
}, F = (e, t) => {
	let n = k();
	for (let r in e) {
		let i = e[r];
		I(i, n, r, t);
	}
	return n;
}, I = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		se(i, t, n, r);
	}
}, se = (e, t, n, r) => {
	if (typeof e == "string") {
		L(e, t, n);
		return;
	}
	if (typeof e == "function") {
		ce(e, t, n, r);
		return;
	}
	R(e, t, n, r);
}, L = (e, t, n) => {
	let r = e === "" ? t : z(t, e);
	r.classGroupId = n;
}, ce = (e, t, n, r) => {
	if (B(e)) {
		I(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(O(n, e));
}, R = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		I(o, z(t, a), n, r);
	}
}, z = (e, t) => {
	let n = e, r = t.split(A), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = k(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, B = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, V = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, le = "!", ue = ":", de = [], fe = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), pe = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === ue) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(le) ? (c = s.slice(0, -1), l = !0) : s.startsWith(le) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return fe(t, l, c, u);
	};
	if (t) {
		let e = t + ue, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : fe(de, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, me = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, he = (e) => ({
	cache: V(e.cacheSize),
	parseClassName: pe(e),
	sortModifiers: me(e),
	...oe(e)
}), ge = /\s+/, _e = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a } = t, o = [], s = e.trim().split(ge), c = "";
	for (let e = s.length - 1; e >= 0; --e) {
		let t = s[e], { isExternal: l, modifiers: u, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: p } = n(t);
		if (l) {
			c = t + (c.length > 0 ? " " + c : c);
			continue;
		}
		let m = !!p, h = r(m ? f.substring(0, p) : f);
		if (!h) {
			if (!m) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			if (h = r(f), !h) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			m = !1;
		}
		let g = u.length === 0 ? "" : u.length === 1 ? u[0] : a(u).join(":"), ee = d ? g + le : g, _ = ee + h;
		if (o.indexOf(_) > -1) continue;
		o.push(_);
		let v = i(h, m);
		for (let e = 0; e < v.length; ++e) {
			let t = v[e];
			o.push(ee + t);
		}
		c = t + (c.length > 0 ? " " + c : c);
	}
	return c;
}, ve = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = ye(n)) && (i && (i += " "), i += r);
	return i;
}, ye = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = ye(e[r])) && (n && (n += " "), n += t);
	return n;
}, be = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = he(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = _e(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(ve(...e));
}, xe = [], H = (e) => {
	let t = (t) => t[e] || xe;
	return t.isThemeGetter = !0, t;
}, Se = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ce = /^\((?:(\w[\w-]*):)?(.+)\)$/i, we = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Te = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ee = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, De = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Oe = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ke = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, U = (e) => we.test(e), W = (e) => !!e && !Number.isNaN(Number(e)), G = (e) => !!e && Number.isInteger(Number(e)), Ae = (e) => e.endsWith("%") && W(e.slice(0, -1)), K = (e) => Te.test(e), je = () => !0, Me = (e) => Ee.test(e) && !De.test(e), Ne = () => !1, Pe = (e) => Oe.test(e), Fe = (e) => ke.test(e), Ie = (e) => !q(e) && !Y(e), Le = (e) => Q(e, Ze, Ne), q = (e) => Se.test(e), J = (e) => Q(e, Qe, Me), Re = (e) => Q(e, $e, W), ze = (e) => Q(e, tt, je), Be = (e) => Q(e, et, Ne), Ve = (e) => Q(e, Ye, Ne), He = (e) => Q(e, Xe, Fe), Ue = (e) => Q(e, nt, Pe), Y = (e) => Ce.test(e), X = (e) => $(e, Qe), We = (e) => $(e, et), Ge = (e) => $(e, Ye), Ke = (e) => $(e, Ze), qe = (e) => $(e, Xe), Z = (e) => $(e, nt, !0), Je = (e) => $(e, tt, !0), Q = (e, t, n) => {
	let r = Se.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, $ = (e, t, n = !1) => {
	let r = Ce.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Ye = (e) => e === "position" || e === "percentage", Xe = (e) => e === "image" || e === "url", Ze = (e) => e === "length" || e === "size" || e === "bg-size", Qe = (e) => e === "length", $e = (e) => e === "number", et = (e) => e === "family-name", tt = (e) => e === "number" || e === "weight", nt = (e) => e === "shadow", rt = /* @__PURE__ */ be(() => {
	let e = H("color"), t = H("font"), n = H("text"), r = H("font-weight"), i = H("tracking"), a = H("leading"), o = H("breakpoint"), s = H("container"), c = H("spacing"), l = H("radius"), u = H("shadow"), d = H("inset-shadow"), f = H("text-shadow"), p = H("drop-shadow"), m = H("blur"), h = H("perspective"), g = H("aspect"), ee = H("ease"), _ = H("animate"), v = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], y = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], b = () => [
		...y(),
		Y,
		q
	], x = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], te = () => [
		"auto",
		"contain",
		"none"
	], S = () => [
		Y,
		q,
		c
	], C = () => [
		U,
		"full",
		"auto",
		...S()
	], w = () => [
		G,
		"none",
		"subgrid",
		Y,
		q
	], ne = () => [
		"auto",
		{ span: [
			"full",
			G,
			Y,
			q
		] },
		G,
		Y,
		q
	], T = () => [
		G,
		"auto",
		Y,
		q
	], re = () => [
		"auto",
		"min",
		"max",
		"fr",
		Y,
		q
	], ie = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], E = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], D = () => ["auto", ...S()], O = () => [
		U,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...S()
	], k = () => [
		U,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...S()
	], A = () => [
		U,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...S()
	], j = () => [
		e,
		Y,
		q
	], ae = () => [
		...y(),
		Ge,
		Ve,
		{ position: [Y, q] }
	], oe = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], M = () => [
		"auto",
		"cover",
		"contain",
		Ke,
		Le,
		{ size: [Y, q] }
	], N = () => [
		Ae,
		X,
		J
	], P = () => [
		"",
		"none",
		"full",
		l,
		Y,
		q
	], F = () => [
		"",
		W,
		X,
		J
	], I = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], se = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], L = () => [
		W,
		Ae,
		Ge,
		Ve
	], ce = () => [
		"",
		"none",
		m,
		Y,
		q
	], R = () => [
		"none",
		W,
		Y,
		q
	], z = () => [
		"none",
		W,
		Y,
		q
	], B = () => [
		W,
		Y,
		q
	], V = () => [
		U,
		"full",
		...S()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [K],
			breakpoint: [K],
			color: [je],
			container: [K],
			"drop-shadow": [K],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Ie],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [K],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [K],
			shadow: [K],
			spacing: ["px", W],
			text: [K],
			"text-shadow": [K],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				U,
				q,
				Y,
				g
			] }],
			container: ["container"],
			columns: [{ columns: [
				W,
				q,
				Y,
				s
			] }],
			"break-after": [{ "break-after": v() }],
			"break-before": [{ "break-before": v() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: b() }],
			overflow: [{ overflow: x() }],
			"overflow-x": [{ "overflow-x": x() }],
			"overflow-y": [{ "overflow-y": x() }],
			overscroll: [{ overscroll: te() }],
			"overscroll-x": [{ "overscroll-x": te() }],
			"overscroll-y": [{ "overscroll-y": te() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: C() }],
			"inset-x": [{ "inset-x": C() }],
			"inset-y": [{ "inset-y": C() }],
			start: [{
				"inset-s": C(),
				start: C()
			}],
			end: [{
				"inset-e": C(),
				end: C()
			}],
			"inset-bs": [{ "inset-bs": C() }],
			"inset-be": [{ "inset-be": C() }],
			top: [{ top: C() }],
			right: [{ right: C() }],
			bottom: [{ bottom: C() }],
			left: [{ left: C() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				G,
				"auto",
				Y,
				q
			] }],
			basis: [{ basis: [
				U,
				"full",
				"auto",
				s,
				...S()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				W,
				U,
				"auto",
				"initial",
				"none",
				q
			] }],
			grow: [{ grow: [
				"",
				W,
				Y,
				q
			] }],
			shrink: [{ shrink: [
				"",
				W,
				Y,
				q
			] }],
			order: [{ order: [
				G,
				"first",
				"last",
				"none",
				Y,
				q
			] }],
			"grid-cols": [{ "grid-cols": w() }],
			"col-start-end": [{ col: ne() }],
			"col-start": [{ "col-start": T() }],
			"col-end": [{ "col-end": T() }],
			"grid-rows": [{ "grid-rows": w() }],
			"row-start-end": [{ row: ne() }],
			"row-start": [{ "row-start": T() }],
			"row-end": [{ "row-end": T() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": re() }],
			"auto-rows": [{ "auto-rows": re() }],
			gap: [{ gap: S() }],
			"gap-x": [{ "gap-x": S() }],
			"gap-y": [{ "gap-y": S() }],
			"justify-content": [{ justify: [...ie(), "normal"] }],
			"justify-items": [{ "justify-items": [...E(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...E()] }],
			"align-content": [{ content: ["normal", ...ie()] }],
			"align-items": [{ items: [...E(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...E(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": ie() }],
			"place-items": [{ "place-items": [...E(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...E()] }],
			p: [{ p: S() }],
			px: [{ px: S() }],
			py: [{ py: S() }],
			ps: [{ ps: S() }],
			pe: [{ pe: S() }],
			pbs: [{ pbs: S() }],
			pbe: [{ pbe: S() }],
			pt: [{ pt: S() }],
			pr: [{ pr: S() }],
			pb: [{ pb: S() }],
			pl: [{ pl: S() }],
			m: [{ m: D() }],
			mx: [{ mx: D() }],
			my: [{ my: D() }],
			ms: [{ ms: D() }],
			me: [{ me: D() }],
			mbs: [{ mbs: D() }],
			mbe: [{ mbe: D() }],
			mt: [{ mt: D() }],
			mr: [{ mr: D() }],
			mb: [{ mb: D() }],
			ml: [{ ml: D() }],
			"space-x": [{ "space-x": S() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": S() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: O() }],
			"inline-size": [{ inline: ["auto", ...k()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...k()] }],
			"max-inline-size": [{ "max-inline": ["none", ...k()] }],
			"block-size": [{ block: ["auto", ...A()] }],
			"min-block-size": [{ "min-block": ["auto", ...A()] }],
			"max-block-size": [{ "max-block": ["none", ...A()] }],
			w: [{ w: [
				s,
				"screen",
				...O()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...O()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...O()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...O()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...O()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...O()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				X,
				J
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Je,
				ze
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				Ae,
				q
			] }],
			"font-family": [{ font: [
				We,
				Be,
				t
			] }],
			"font-features": [{ "font-features": [q] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				Y,
				q
			] }],
			"line-clamp": [{ "line-clamp": [
				W,
				"none",
				Y,
				Re
			] }],
			leading: [{ leading: [a, ...S()] }],
			"list-image": [{ "list-image": [
				"none",
				Y,
				q
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				Y,
				q
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: j() }],
			"text-color": [{ text: j() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...I(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				W,
				"from-font",
				"auto",
				Y,
				J
			] }],
			"text-decoration-color": [{ decoration: j() }],
			"underline-offset": [{ "underline-offset": [
				W,
				"auto",
				Y,
				q
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: S() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				Y,
				q
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				Y,
				q
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: ae() }],
			"bg-repeat": [{ bg: oe() }],
			"bg-size": [{ bg: M() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						G,
						Y,
						q
					],
					radial: [
						"",
						Y,
						q
					],
					conic: [
						G,
						Y,
						q
					]
				},
				qe,
				He
			] }],
			"bg-color": [{ bg: j() }],
			"gradient-from-pos": [{ from: N() }],
			"gradient-via-pos": [{ via: N() }],
			"gradient-to-pos": [{ to: N() }],
			"gradient-from": [{ from: j() }],
			"gradient-via": [{ via: j() }],
			"gradient-to": [{ to: j() }],
			rounded: [{ rounded: P() }],
			"rounded-s": [{ "rounded-s": P() }],
			"rounded-e": [{ "rounded-e": P() }],
			"rounded-t": [{ "rounded-t": P() }],
			"rounded-r": [{ "rounded-r": P() }],
			"rounded-b": [{ "rounded-b": P() }],
			"rounded-l": [{ "rounded-l": P() }],
			"rounded-ss": [{ "rounded-ss": P() }],
			"rounded-se": [{ "rounded-se": P() }],
			"rounded-ee": [{ "rounded-ee": P() }],
			"rounded-es": [{ "rounded-es": P() }],
			"rounded-tl": [{ "rounded-tl": P() }],
			"rounded-tr": [{ "rounded-tr": P() }],
			"rounded-br": [{ "rounded-br": P() }],
			"rounded-bl": [{ "rounded-bl": P() }],
			"border-w": [{ border: F() }],
			"border-w-x": [{ "border-x": F() }],
			"border-w-y": [{ "border-y": F() }],
			"border-w-s": [{ "border-s": F() }],
			"border-w-e": [{ "border-e": F() }],
			"border-w-bs": [{ "border-bs": F() }],
			"border-w-be": [{ "border-be": F() }],
			"border-w-t": [{ "border-t": F() }],
			"border-w-r": [{ "border-r": F() }],
			"border-w-b": [{ "border-b": F() }],
			"border-w-l": [{ "border-l": F() }],
			"divide-x": [{ "divide-x": F() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": F() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...I(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...I(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: j() }],
			"border-color-x": [{ "border-x": j() }],
			"border-color-y": [{ "border-y": j() }],
			"border-color-s": [{ "border-s": j() }],
			"border-color-e": [{ "border-e": j() }],
			"border-color-bs": [{ "border-bs": j() }],
			"border-color-be": [{ "border-be": j() }],
			"border-color-t": [{ "border-t": j() }],
			"border-color-r": [{ "border-r": j() }],
			"border-color-b": [{ "border-b": j() }],
			"border-color-l": [{ "border-l": j() }],
			"divide-color": [{ divide: j() }],
			"outline-style": [{ outline: [
				...I(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				W,
				Y,
				q
			] }],
			"outline-w": [{ outline: [
				"",
				W,
				X,
				J
			] }],
			"outline-color": [{ outline: j() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Z,
				Ue
			] }],
			"shadow-color": [{ shadow: j() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Z,
				Ue
			] }],
			"inset-shadow-color": [{ "inset-shadow": j() }],
			"ring-w": [{ ring: F() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: j() }],
			"ring-offset-w": [{ "ring-offset": [W, J] }],
			"ring-offset-color": [{ "ring-offset": j() }],
			"inset-ring-w": [{ "inset-ring": F() }],
			"inset-ring-color": [{ "inset-ring": j() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Z,
				Ue
			] }],
			"text-shadow-color": [{ "text-shadow": j() }],
			opacity: [{ opacity: [
				W,
				Y,
				q
			] }],
			"mix-blend": [{ "mix-blend": [
				...se(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": se() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [W] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": L() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": L() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": j() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": j() }],
			"mask-image-t-from-pos": [{ "mask-t-from": L() }],
			"mask-image-t-to-pos": [{ "mask-t-to": L() }],
			"mask-image-t-from-color": [{ "mask-t-from": j() }],
			"mask-image-t-to-color": [{ "mask-t-to": j() }],
			"mask-image-r-from-pos": [{ "mask-r-from": L() }],
			"mask-image-r-to-pos": [{ "mask-r-to": L() }],
			"mask-image-r-from-color": [{ "mask-r-from": j() }],
			"mask-image-r-to-color": [{ "mask-r-to": j() }],
			"mask-image-b-from-pos": [{ "mask-b-from": L() }],
			"mask-image-b-to-pos": [{ "mask-b-to": L() }],
			"mask-image-b-from-color": [{ "mask-b-from": j() }],
			"mask-image-b-to-color": [{ "mask-b-to": j() }],
			"mask-image-l-from-pos": [{ "mask-l-from": L() }],
			"mask-image-l-to-pos": [{ "mask-l-to": L() }],
			"mask-image-l-from-color": [{ "mask-l-from": j() }],
			"mask-image-l-to-color": [{ "mask-l-to": j() }],
			"mask-image-x-from-pos": [{ "mask-x-from": L() }],
			"mask-image-x-to-pos": [{ "mask-x-to": L() }],
			"mask-image-x-from-color": [{ "mask-x-from": j() }],
			"mask-image-x-to-color": [{ "mask-x-to": j() }],
			"mask-image-y-from-pos": [{ "mask-y-from": L() }],
			"mask-image-y-to-pos": [{ "mask-y-to": L() }],
			"mask-image-y-from-color": [{ "mask-y-from": j() }],
			"mask-image-y-to-color": [{ "mask-y-to": j() }],
			"mask-image-radial": [{ "mask-radial": [Y, q] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": L() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": L() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": j() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": j() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": y() }],
			"mask-image-conic-pos": [{ "mask-conic": [W] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": L() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": L() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": j() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": j() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: ae() }],
			"mask-repeat": [{ mask: oe() }],
			"mask-size": [{ mask: M() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				Y,
				q
			] }],
			filter: [{ filter: [
				"",
				"none",
				Y,
				q
			] }],
			blur: [{ blur: ce() }],
			brightness: [{ brightness: [
				W,
				Y,
				q
			] }],
			contrast: [{ contrast: [
				W,
				Y,
				q
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Z,
				Ue
			] }],
			"drop-shadow-color": [{ "drop-shadow": j() }],
			grayscale: [{ grayscale: [
				"",
				W,
				Y,
				q
			] }],
			"hue-rotate": [{ "hue-rotate": [
				W,
				Y,
				q
			] }],
			invert: [{ invert: [
				"",
				W,
				Y,
				q
			] }],
			saturate: [{ saturate: [
				W,
				Y,
				q
			] }],
			sepia: [{ sepia: [
				"",
				W,
				Y,
				q
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Y,
				q
			] }],
			"backdrop-blur": [{ "backdrop-blur": ce() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				W,
				Y,
				q
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				W,
				Y,
				q
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				W,
				Y,
				q
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				W,
				Y,
				q
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				W,
				Y,
				q
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				W,
				Y,
				q
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				W,
				Y,
				q
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				W,
				Y,
				q
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": S() }],
			"border-spacing-x": [{ "border-spacing-x": S() }],
			"border-spacing-y": [{ "border-spacing-y": S() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				Y,
				q
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				W,
				"initial",
				Y,
				q
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				ee,
				Y,
				q
			] }],
			delay: [{ delay: [
				W,
				Y,
				q
			] }],
			animate: [{ animate: [
				"none",
				_,
				Y,
				q
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				Y,
				q
			] }],
			"perspective-origin": [{ "perspective-origin": b() }],
			rotate: [{ rotate: R() }],
			"rotate-x": [{ "rotate-x": R() }],
			"rotate-y": [{ "rotate-y": R() }],
			"rotate-z": [{ "rotate-z": R() }],
			scale: [{ scale: z() }],
			"scale-x": [{ "scale-x": z() }],
			"scale-y": [{ "scale-y": z() }],
			"scale-z": [{ "scale-z": z() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: B() }],
			"skew-x": [{ "skew-x": B() }],
			"skew-y": [{ "skew-y": B() }],
			transform: [{ transform: [
				Y,
				q,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: b() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: V() }],
			"translate-x": [{ "translate-x": V() }],
			"translate-y": [{ "translate-y": V() }],
			"translate-z": [{ "translate-z": V() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: j() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: j() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				Y,
				q
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": S() }],
			"scroll-mx": [{ "scroll-mx": S() }],
			"scroll-my": [{ "scroll-my": S() }],
			"scroll-ms": [{ "scroll-ms": S() }],
			"scroll-me": [{ "scroll-me": S() }],
			"scroll-mbs": [{ "scroll-mbs": S() }],
			"scroll-mbe": [{ "scroll-mbe": S() }],
			"scroll-mt": [{ "scroll-mt": S() }],
			"scroll-mr": [{ "scroll-mr": S() }],
			"scroll-mb": [{ "scroll-mb": S() }],
			"scroll-ml": [{ "scroll-ml": S() }],
			"scroll-p": [{ "scroll-p": S() }],
			"scroll-px": [{ "scroll-px": S() }],
			"scroll-py": [{ "scroll-py": S() }],
			"scroll-ps": [{ "scroll-ps": S() }],
			"scroll-pe": [{ "scroll-pe": S() }],
			"scroll-pbs": [{ "scroll-pbs": S() }],
			"scroll-pbe": [{ "scroll-pbe": S() }],
			"scroll-pt": [{ "scroll-pt": S() }],
			"scroll-pr": [{ "scroll-pr": S() }],
			"scroll-pb": [{ "scroll-pb": S() }],
			"scroll-pl": [{ "scroll-pl": S() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				Y,
				q
			] }],
			fill: [{ fill: ["none", ...j()] }],
			"stroke-w": [{ stroke: [
				W,
				X,
				J,
				Re
			] }],
			stroke: [{ stroke: ["none", ...j()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/lib/utils.ts
function it(...e) {
	return rt(l(e));
}
//#endregion
//#region src/components/ui/button.tsx
var at = f("group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			primary: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:bg-input/30",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-7 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			xs: "h-5 gap-1 rounded-sm px-2 text-[0.625rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-2.5",
			sm: "h-6 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			md: "h-7 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-8 gap-1 px-2.5 text-sm/relaxed has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
			icon: "size-7 [&_svg:not([class*='size-'])]:size-3.5",
			"icon-xs": "size-5 rounded-sm [&_svg:not([class*='size-'])]:size-2.5",
			"icon-sm": "size-6 [&_svg:not([class*='size-'])]:size-3",
			"icon-md": "size-7 [&_svg:not([class*='size-'])]:size-3.5",
			"icon-lg": "size-8 [&_svg:not([class*='size-'])]:size-4"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), ot = {
	default: "icon",
	xs: "icon-xs",
	sm: "icon-sm",
	md: "icon-md",
	lg: "icon-lg"
};
function st({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, loading: i = !1, iconLeft: c, iconRight: l, iconOnly: u = !1, children: d, disabled: f, ...p }) {
	let m = r ? g : "button", h = u ? ot[n] ?? "icon" : n;
	return /* @__PURE__ */ o(m, {
		"data-slot": "button",
		"data-variant": t,
		"data-size": h,
		className: it(at({
			variant: t,
			size: h,
			className: e
		})),
		disabled: f || i,
		...p,
		children: u ? i ? /* @__PURE__ */ o(E, { className: "animate-spin" }) : c ?? l ?? d : /* @__PURE__ */ s(a, { children: [
			i ? /* @__PURE__ */ o("span", {
				"data-icon": "inline-start",
				className: "inline-flex shrink-0",
				children: /* @__PURE__ */ o(E, { className: "animate-spin" })
			}) : c ? /* @__PURE__ */ o("span", {
				"data-icon": "inline-start",
				className: "inline-flex shrink-0",
				children: c
			}) : null,
			d,
			!i && l && /* @__PURE__ */ o("span", {
				"data-icon": "inline-end",
				className: "inline-flex shrink-0",
				children: l
			})
		] })
	});
}
//#endregion
export { st as Button, at as buttonVariants };
