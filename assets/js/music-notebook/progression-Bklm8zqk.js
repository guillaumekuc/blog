import { r as e } from "./pitch-DgZkVsBO.js";
import { t } from "./icon-CNq2KsM2.js";
//#region src/core/chords.ts
var n = [
	"M",
	"m",
	"d",
	"A"
], r = [
	"I",
	"♭II",
	"II",
	"♭III",
	"III",
	"IV",
	"♭V",
	"V",
	"♭VI",
	"VI",
	"♭VII",
	"VII"
], i = [
	"I",
	"II",
	"III",
	"IV",
	"V",
	"VI",
	"VII"
], a = [
	0,
	2,
	4,
	5,
	7,
	9,
	11
], o = [
	"C",
	"D",
	"E",
	"F",
	"G",
	"A",
	"B"
], s = /^[A-G][#b♯♭]?(?:maj|min|mi|dim|aug|sus|add|alt|m|M|ø|°|o|Δ|\+|-|6\/9|\d{1,2}|[#b♯♭](?=\d)|\([^)\s]*\))*(?:\/[A-G][#b♯♭]?)?$/, c = (e) => e.replace(/(^|\/)([A-G])b/g, "$1$2♭").replace(/b(?=\d)/g, "♭").replace(/#/g, "♯"), l = (e) => [...e].reduce((e, t) => e + (t === "#" || t === "♯" ? 1 : t === "b" || t === "♭" ? -1 : t === "𝄫" ? -2 : 0), 0), u = (t) => e(a[t.letter] + t.accidental);
function d(e) {
	let t = e.accidental > 0 ? "♯".repeat(e.accidental) : "♭".repeat(-e.accidental);
	return o[e.letter] + t;
}
function f(e) {
	let t = e.match(/^([A-G])([#b♯♭]?)$/);
	return t ? {
		letter: o.indexOf(t[1]),
		accidental: l(t[2])
	} : null;
}
function p(t) {
	let n = t.match(/^([#b♯♭]?)(I|II|III|IV|V|VI|VII)$/);
	if (!n) return null;
	let r = i.indexOf(n[2]);
	return {
		degree: r,
		semitones: e(a[r] + l(n[1]))
	};
}
function m(t, n, r) {
	let i = (t.letter + n.degree) % 7, o = e(u(t) + n.semitones), s = e(o - a[i] + 6) - 6;
	return Math.abs(s) <= 1 ? {
		letter: i,
		accidental: s
	} : f((r ? [
		"C",
		"C#",
		"D",
		"D#",
		"E",
		"F",
		"F#",
		"G",
		"G#",
		"A",
		"A#",
		"B"
	] : [
		"C",
		"Db",
		"D",
		"Eb",
		"E",
		"F",
		"Gb",
		"G",
		"Ab",
		"A",
		"Bb",
		"B"
	])[o]);
}
var h = /^(bb|𝄫|[#b♯♭])?(2|3|4|5|6|7|9|11|13)$/;
function g(e) {
	let t = e.match(h);
	return t ? (t[1] ?? "").replace(/♭/g, "b").replace(/♯/g, "#").replace("𝄫", "bb") + t[2] : null;
}
var _ = (e) => Number(e.match(/\d+$/)?.[0] ?? 0), v = (e) => [...new Set(e)].sort((e, t) => _(e) - _(t) || e.localeCompare(t)), y = (e) => e.length ? ` (${v(e).map((e) => e.replace(/bb/, "𝄫").replace(/b/, "♭").replace(/#/, "♯")).join(", ")})` : "", b = {
	7: [],
	9: ["9"],
	11: ["9", "11"],
	13: ["9", "13"]
};
function ee(e) {
	let t = e, n = "M", r = [], i = (e) => {
		let n = t.match(e);
		return n && (t = t.slice(n[0].length)), n;
	};
	i(/^(m7b5|m7♭5|mi7b5|-7b5|ø7?|Ø7?)/) ? (n = "d", r.push("b7")) : i(/^(dim7|°7|o7)/) ? (n = "d", r.push("bb7")) : i(/^(dim|°|o)/) ? n = "d" : i(/^(aug|\+)/) ? n = "A" : !/^(maj|M|Δ)/.test(t) && i(/^(min|mi|m|-)/) && (n = "m");
	let a;
	for (; t;) if (a = i(/^\(?(?:maj|Δ)(7|9|11|13)?\)?/) ?? i(/^\(?M(7|9|11|13)\)?/)) r.push("7", ...b[a[1] ?? "7"]);
	else if (i(/^(6\/9|69)/)) r.push("6", "9");
	else if (a = i(/^(7|9|11|13)/)) r.push("b7", ...b[a[1]]);
	else if (i(/^6/)) r.push("6");
	else if (i(/^5/)) n = null;
	else if (a = i(/^sus(2|4)?/)) n = null, r.push(a[1] ?? "4");
	else if (a = i(/^add([#b♯♭]?\d{1,2})/)) {
		let e = g(a[1]);
		if (!e) return null;
		r.push(e);
	} else if (i(/^alt/)) r.push("b9", "#9", "b13");
	else if (a = i(/^\(([^)]*)\)/)) for (let e of a[1].split(",")) {
		let t = g(e.trim().replace(/^add/, ""));
		if (!t) return null;
		r.push(t);
	}
	else if (a = i(/^([#b♯♭])(5|9|11|13)/)) r.push(g(a[1] + a[2]));
	else return null;
	return {
		quality: n,
		added: v(r)
	};
}
function x(e, t) {
	let n = new Set(t), r = (e) => n.delete(e), i = {
		M: "",
		m: "m",
		d: "°",
		A: "+"
	}[e], a = "";
	e === "d" && r("bb7") ? a = "7" : e === "d" && r("b7") ? (i = "ø", a = "7") : r("b7") ? a = "7" : r("7") && (a = e === "m" ? "(maj7)" : "maj7");
	let o = "";
	if (a) {
		let e = n.has("13") ? "13" : n.has("11") && n.has("9") ? "11" : n.has("9") ? "9" : "";
		if (e && a !== "(maj7)") {
			for (let t of b[e]) n.delete(t);
			a = a.replace("7", e);
		}
	} else r("6") && (o = r("9") ? "6/9" : "6");
	let s = v([...n]).map(S), c = "";
	return s.length && (c = a || o || s.length > 1 ? `(${s.join(",")})` : `add${s[0]}`), i + o + a + c;
}
var S = (e) => e.replace("bb", "𝄫").replace("b", "♭").replace("#", "♯"), C = {
	M: [
		0,
		4,
		7
	],
	m: [
		0,
		3,
		7
	],
	d: [
		0,
		3,
		6
	],
	A: [
		0,
		4,
		8
	]
}, w = {
	2: 2,
	3: 4,
	4: 5,
	5: 7,
	6: 9,
	7: 11,
	9: 14,
	11: 17,
	13: 21
};
function T(e, t) {
	let n = e ? [...C[e]] : [0, 7];
	t.some((e) => /^[#b]5$/.test(e)) && (n = n.filter((e) => e !== 6 && e !== 7 && e !== 8));
	for (let e of t) {
		let t = e.match(/^(bb|b|#)?(\d+)$/);
		t && t[2] in w && n.push(w[t[2]] + (t[1] === "bb" ? -2 : t[1] === "b" ? -1 : +(t[1] === "#")));
	}
	return [...new Set(n)].sort((e, t) => e - t);
}
//#endregion
//#region src/kinds/progression/parse.ts
var E = class extends Error {}, D = 4e3, O = /^([#b♯♭]?(?:I|II|III|IV|V|VI|VII))\.([MmdA])(?:\(([^)]*)\))?$/;
function k(e, t) {
	let r = e.match(O);
	if (r) {
		let n = p(r[1]);
		n || t(`Unknown interval "${r[1]}"`);
		let i = (r[3] ?? "").split(",").map((e) => e.trim()).filter(Boolean).map((n) => g(n) ?? t(`Unknown added interval "${n}" in "${e}" (use 7, b7, 9, #11, ...)`));
		return {
			kind: "relative",
			numeral: n,
			sharp: /^[#♯]/.test(r[1]),
			quality: r[2],
			added: i
		};
	}
	(/^[#b♯♭]?(I|V)/.test(e) || e.includes(".")) && t(`Can't read "${e}": a chord relationship is interval.quality, e.g. I.m, bIII.M or V.M(b7), with a quality of ${n.join(" ")}`), s.test(e) || t(`Unknown chord "${e}"`);
	let i = e.match(/^([A-G][#b♯♭]?)(.*?)(?:\/([A-G][#b♯♭]?))?$/), a = ee(i[2]);
	return a || t(`Can't read the chord "${e}"`), {
		kind: "absolute",
		root: f(i[1]),
		...a,
		text: e,
		bass: i[3] ? f(i[3]) : null
	};
}
var A = /(:\|:|:\|(?:x\d+)?|\|:|\|\||\|\]|\|)/;
function j(e) {
	return e === ":|:" ? {
		right: "repeatEnd",
		left: "repeatBegin"
	} : e.startsWith(":|") ? {
		right: "repeatEnd",
		left: "single",
		count: e.length > 2 ? Number(e.slice(3)) : void 0
	} : e === "|:" ? {
		right: "single",
		left: "repeatBegin"
	} : e === "||" ? {
		right: "double",
		left: "single"
	} : e === "|]" ? {
		right: "end",
		left: "single"
	} : {
		right: "single",
		left: "single"
	};
}
function M(e) {
	let t = 700, n = 100, r = 4, i = {}, a = null, o, s = [], c = null, l = null, u;
	if (e.split(/\r?\n/).forEach((e, d) => {
		let p = e.trim(), m = (e) => {
			throw new E(`Line ${d + 1}: ${e}`);
		};
		if (!p || p.startsWith("#") || p === "progression") return;
		let h = p.split(/\s+/)[0], g = p.slice(h.length).trim();
		if (h === "width") {
			let e = Number(g);
			(!Number.isFinite(e) || e < 200 || e > 4e3) && m(`Width must be 200–${D}`), t = e;
			return;
		}
		if (h === "tempo") {
			let e = Number(g);
			(!Number.isFinite(e) || e < 20 || e > 400) && m("Tempo must be 20–400 (quarter notes per minute)"), n = e, i.tempo = e;
			return;
		}
		if (h === "time") {
			let e = g.match(/^(\d+)\/(1|2|4|8|16)$/);
			(!e || Number(e[1]) < 1) && m("Time must look like 4/4, 3/4 or 6/8"), r = Number(e[1]) * 4 / Number(e[2]), i.time = g;
			return;
		}
		if (h === "root") {
			s.length && m("Put root before the first bar"), a = f(g) ?? m(`Unknown root "${g}" (use a note name like A, Bb or F#)`);
			return;
		}
		if (h === "section") {
			g || m("A section needs a name, e.g. section A"), o = g;
			return;
		}
		let _ = p.split(A), v = [], y = "single";
		for (let e = 0; e < _.length; e += 2) {
			let t = _[e + 1] ? j(_[e + 1]) : null, n = _[e].trim().split(/\s+/).filter(Boolean);
			if (!n.length) {
				let e = v[v.length - 1];
				t && e && e.right === "single" && t.right !== "single" && (e.right = t.right, e.repeatCount = t.count), t && t.left !== "single" && (y = t.left);
				continue;
			}
			let r = {
				slots: [],
				simile: !1,
				left: y,
				right: t?.right ?? "single",
				repeatCount: t?.count
			};
			y = t?.left ?? "single";
			let i = n[0].match(/^\[(\d+)$/);
			if (i) {
				n.shift();
				let e = Number(i[1]);
				e === 1 || l === null ? l = c : c = l, u = e, r.endingStart = !0;
			} else /^\[/.test(n[0]) && m(`Unknown ending "${n[0]}" (use [1, [2, ...)`);
			if (r.ending = u, n.length === 1 && n[0] === "%") {
				let e = v[v.length - 1] ?? s[s.length - 1]?.bars.slice(-1)[0];
				e || m("% repeats the previous bar, but this is the first one"), r.simile = !0, r.slots = e.slots, c = P(e) ?? c;
			} else for (let e of n) {
				if (e === "%" && m("% stands for a whole bar, on its own between bar lines"), e === "/") {
					r.slots.length ? r.slots[r.slots.length - 1].span++ : r.slots.push({
						kind: "hold",
						span: 1
					});
					continue;
				}
				if (e === "N.C." || e === "NC") {
					r.slots.push({
						kind: "nc",
						span: 1
					});
					continue;
				}
				let { slot: t, resolved: n } = te(k(e, m), c, a);
				c = n, N.set(t, n), r.slots.push(t);
			}
			r.right !== "single" && (u = void 0), (r.right === "end" || r.right === "double") && (l = null), v.push(r);
		}
		v.length || m("A row needs at least one bar"), u = void 0, s.push({
			bars: v,
			section: o
		}), o = void 0;
	}), !s.length) throw new E("No bars yet: write chords between bar lines, e.g. | Am | bIII.M | F |");
	return {
		width: t,
		rows: s,
		tempo: n,
		barQuarters: r,
		marks: i
	};
}
var N = /* @__PURE__ */ new WeakMap();
function P(e) {
	let t = e.slots.filter((e) => e.kind === "chord");
	return t.length ? N.get(t[t.length - 1]) : void 0;
}
function te(t, n, i) {
	let a = {
		kind: "chord",
		span: 1
	}, o = n ? n.root : i, s = n ? n.pitch : i ? u(i) : 0, l, f;
	t.kind === "absolute" ? (l = t.root, f = o ? e(u(l) - u(o)) : null, a.symbol = c(t.text)) : (l = o ? m(o, t.numeral, t.sharp) : null, f = t.numeral.semitones, l && (a.symbol = d(l) + x(t.quality, t.added)));
	let p = t.quality ?? "?", h = y(t.added);
	n ? f !== null && (a.label = `${n.quality ?? "?"} ${r[f]} ${p}${h}`) : a.label = `${f ? `${r[f]} ` : ""}${p}${h}`;
	let g = t.kind === "absolute" ? u(t.root) : e(s + t.numeral.semitones), _ = t.kind === "absolute" && t.bass ? u(t.bass) : g;
	return a.sound = {
		root: g,
		tones: T(t.quality, t.added),
		bass: _
	}, {
		slot: a,
		resolved: {
			root: l,
			quality: t.quality,
			pitch: g
		}
	};
}
//#endregion
//#region src/kinds/progression/render.ts
var F = "http://www.w3.org/2000/svg", I = "system-ui, 'Segoe UI', Helvetica, Arial, sans-serif", L = 10, R = 72, z = 18, B = 10, V = 18, H = "#222", U = "#bbb", W = "#555", G = null;
function K(e, t, n = "normal") {
	return G ??= document.createElement("canvas").getContext("2d"), G.font = `${n} ${t}px ${I}`, G.measureText(e).width;
}
function q(e, t, n) {
	let r = document.createElementNS(F, e);
	for (let [e, n] of Object.entries(t)) r.setAttribute(e, String(n));
	return n !== void 0 && (r.textContent = n), r;
}
function J(e) {
	let t = q("svg", { xmlns: F }), n = (e) => (t.append(e), e), r = (e, t, r, i, a, o = H, s = "normal") => {
		let c = Math.max(7, Math.min(i, i * a / Math.max(1, K(e, i, s))));
		n(q("text", {
			x: t,
			y: r,
			"font-family": I,
			"font-size": c.toFixed(1),
			"font-weight": s,
			"text-anchor": "middle",
			fill: o
		}, e));
	}, i = (e, t, r, i, a = H, o = 1) => n(q("line", {
		x1: e,
		y1: t,
		x2: r,
		y2: i,
		stroke: a,
		"stroke-width": o
	})), a = (e, t, r = 2) => n(q("circle", {
		cx: e,
		cy: t,
		r,
		fill: H
	})), o = e.rows.map((e) => e.section).filter((e) => !!e), s = o.length ? Math.max(28, ...o.map((e) => K(e, 13, "bold") + 14)) + 8 : 0, c = Math.max(...e.rows.map((e) => e.bars.length)), l = (e.width - 20 - s) / c, u = (e) => e.some((e) => e.endingStart || e.repeatCount) ? V : 0, d = L, f = [e.marks.tempo ? `♩ = ${e.marks.tempo}` : "", e.marks.time ?? ""].filter(Boolean).join("  ·  ");
	f && (n(q("text", {
		x: L,
		y: d + 14,
		"font-family": I,
		"font-size": 15,
		"font-weight": "bold",
		fill: H
	}, f)), d += 24);
	let p = 0;
	for (let t of e.rows) {
		d += u(t.bars);
		let e = d, a = d + R, o = (e + a) / 2;
		if (t.section) {
			let i = s - 8;
			n(q("rect", {
				x: L,
				y: e + 6,
				width: i,
				height: 24,
				rx: 3,
				fill: "none",
				stroke: H,
				"stroke-width": 1.25
			})), r(t.section, L + i / 2, e + 23, 13, i - 6, H, "bold");
		}
		t.bars.forEach((a, c) => {
			let u = L + s + c * l;
			if (n(q("rect", {
				x: u,
				y: e,
				width: l,
				height: R,
				fill: "none",
				stroke: U,
				"stroke-width": 1,
				"data-bar": p++
			})), g(a.left, u, "left", e), g(a.right, u + l, "right", e), a.repeatCount && r(`×${a.repeatCount}`, u + l - 10, e - 5, 12, 30, H, "bold"), a.ending) {
				let r = e - 6, o = t.bars[c + 1], s = !o || o.ending !== a.ending || o.endingStart;
				i(u + (a.endingStart ? 2 : 0), r, u + l - (s ? 2 : 0), r), a.endingStart && (i(u + 2, r, u + 2, e - 1), n(q("text", {
					x: u + 6,
					y: r + 11,
					"font-family": I,
					"font-size": 11,
					fill: H
				}, `${a.ending}.`)));
			}
			let d = (e) => e === "single" ? 3 : 12, f = u + d(a.left), _ = l - d(a.left) - d(a.right);
			if (a.simile) return h(f + _ / 2, o);
			let v = a.slots.reduce((e, t) => e + t.span, 0), y = f;
			for (let t of a.slots) {
				let n = _ * t.span / v;
				m(t, y + n / 2, n - 4, e), y += n;
			}
		}), d = a + B;
	}
	function m(e, t, n, i) {
		if (e.kind === "hold") return r("/", t, i + 43, z, n, W);
		if (e.kind === "nc") return r("N.C.", t, i + 43, z, n);
		e.symbol ? (r(e.symbol, t, i + 30, z, n), e.label && r(e.label, t, i + 58, z, n)) : e.label && r(e.label, t, i + 43, z, n);
	}
	function h(e, t) {
		i(e - 9, t + 9, e + 9, t - 9, H, 2.25), a(e - 7, t - 5, 2.5), a(e + 7, t + 5, 2.5);
	}
	function g(e, t, n, r) {
		if (e === "single") return;
		let o = r + R, s = n === "left" ? 1 : -1, c = (e) => i(e, r, e, o, H, 3), l = (e) => i(e, r, e, o, H, 1.25);
		e === "double" ? (l(t), l(t + s * 3.5)) : e === "end" ? (c(t + s * 1.5), l(t + s * 6)) : (c(t + s * 1.5), l(t + s * 6), a(t + s * 10, r + R / 2 - 7), a(t + s * 10, r + R / 2 + 7));
	}
	let _ = e.width, v = Math.ceil(d - B + L);
	return t.setAttribute("width", String(_)), t.setAttribute("height", String(v)), t.setAttribute("viewBox", `0 0 ${_} ${v}`), {
		svg: t,
		width: _,
		height: v
	};
}
//#endregion
//#region src/kinds/progression/playback.ts
function Y(e) {
	let t = [], n = 0, r = 1, i = 0;
	for (; i < e.length && t.length < 2e3;) {
		let a = e[i];
		if (a.left === "repeatBegin" && r === 1 && (n = i), a.endingStart && a.ending !== void 0) {
			let t = a.ending;
			for (let n = i; n < e.length && e[n].ending !== void 0; n++) t = Math.max(t, e[n].ending);
			if (a.ending !== Math.min(r, t)) {
				let t = a.ending;
				for (i++; i < e.length && e[i].ending === t && !e[i].endingStart;) i++;
				continue;
			}
		}
		if (t.push(i), a.right === "repeatEnd") {
			if (r < (a.repeatCount ?? 2)) {
				r++, i = n;
				continue;
			}
			r = 1, n = i + 1;
		} else a.ending !== void 0 && e[i + 1]?.ending === void 0 && (r = 1, n = i + 1);
		i++;
	}
	return t;
}
var X = 40, Z = 52, ne = 76, re = 62;
function ie(e) {
	let t = [...new Set(e.tones.map((t) => (e.root + t) % 12))], n = [];
	for (let e = 0; e < t.length; e++) {
		let r = [...t.slice(e), ...t.slice(0, e)], i = [];
		for (let e of r) {
			let t = i.length ? i[i.length - 1] + 1 : e;
			for (; t % 12 !== e;) t++;
			i.push(t);
		}
		for (let e = -24; e <= 96; e += 12) {
			let t = i.map((t) => t + e);
			t[0] >= Z && t[t.length - 1] <= ne && n.push(t);
		}
	}
	return n;
}
var ae = 4;
function Q(e, t) {
	let n = 0;
	if (e.length === t.length) e.forEach((e, r) => n += Math.abs(e - t[r]));
	else {
		let r = (e, t) => Math.min(...t.map((t) => Math.abs(e - t)));
		n = e.reduce((e, n) => e + r(n, t), 0) + t.reduce((t, n) => t + r(n, e), 0);
	}
	let r = e.reduce((e, t) => e + t, 0) / e.length;
	return n + 3 * Math.max(0, Math.abs(r - re) - ae);
}
function oe(e, t) {
	let n = ie(e);
	return n.length ? t ? n.reduce((e, n) => Q(n, t) < Q(e, t) ? n : e) : n.filter((t) => t[0] % 12 === e.root).reduce((e, t) => Math.abs(t[0] - 60) < Math.abs(e[0] - 60) ? t : e) : e.tones.map((t) => 60 + e.root + t);
}
function $(e) {
	let t = e.rows.flatMap((e) => e.bars), n = e.barQuarters * 60 / e.tempo, r = [], i = [], a = [], o = null, s = 0;
	for (let e of Y(t)) {
		let c = t[e];
		i.push({
			start: s,
			id: e
		});
		let l = c.slots.reduce((e, t) => e + t.span, 0) || 1;
		for (let e of c.slots) {
			let t = n * e.span / l;
			if (e.kind === "hold") for (let e of a) e.duration += t;
			else if (e.kind === "nc" || !e.sound) a = [];
			else {
				o = oe(e.sound, o);
				let n = X + ((e.sound.bass - X) % 12 + 12) % 12;
				n >= o[0] && (n -= 12), a = [{
					start: s,
					duration: t,
					midi: [n]
				}, {
					start: s,
					duration: t,
					midi: o
				}], r.push(...a);
			}
			s += t;
		}
		if (!c.slots.length) {
			for (let e of a) e.duration += n;
			s += n;
		}
	}
	return {
		events: r,
		length: s,
		cues: i
	};
}
//#endregion
//#region src/kinds/progression/index.ts
function se(e) {
	return J(M(e));
}
function ce(e) {
	return $(M(e));
}
var le = {
	id: "progression",
	label: "Chord progression",
	newLabel: "New chord progression",
	codeLabel: "Progression code",
	draftName: "Shared progression",
	keywords: [
		"progression",
		"root",
		"width",
		"tempo",
		"time",
		"section"
	],
	template: "root A\n| I.m | bIII.M | bVII.M | IV.M |\n",
	icon: t("<path d=\"M1.75 4.25h12.5v7.5H1.75zM6 4.25v7.5M10 4.25v7.5\"/>"),
	newIcon: t("<path d=\"M1.75 4.25h7.5v7.5h-7.5zM5.5 4.25v7.5\"/><path d=\"M12 9v5M9.5 11.5h5\"/>"),
	ext: ".progression",
	header: "comments",
	sharePrefix: "prog",
	render: se,
	perform: ce,
	reference: "\n    <h3>Settings</h3>\n    <pre>root A                   the root the first chord relates to (optional)\nwidth 700                grid width in px\ntempo 100  time 3/4      quarter notes per minute, beats per bar (shown, and used by Play)\nsection Verse            a label for the rows that follow</pre>\n    <h3>Bars</h3>\n    <pre>| Am | C | G  F |        one row; | separates bars\n|| |] |: :| :|: :|x3     double, final and repeat bar lines\n|[1 E7 :|[2 Am |]        1st and 2nd endings\nC / / G                  / holds the chord for one more slot\n%   N.C.                 repeat the previous bar · no chord</pre>\n    <h3>Chords</h3>\n    <pre>Am  Bb7  F#m7b5  G/B     chord symbols\nbIII.M  V.M(b7)          relationships: interval.quality(added)\nI.m(11)                  same root: e.g. the first chord, without a root</pre>\n    <p>A relationship goes from the previous chord: the Roman numeral is the interval up from\n      its root, then the new quality (M major, m minor, d diminished, A augmented) and any\n      added intervals (7 is a major 7th, b7 a minor 7th; 9, #11, …). Each cell shows the\n      chord symbol and the relationship, whichever was written. Without a root, a\n      progression written in relationships shows them only.\n      Lines starting with <code>#</code> are comments.</p>"
};
//#endregion
export { le as progression };
