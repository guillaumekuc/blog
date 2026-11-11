import { t as e } from "./icon-CNq2KsM2.js";
//#region src/kinds/fretboard/parse.ts
var t = class extends Error {
	constructor(e) {
		super(e), this.name = "FretboardError";
	}
}, n = (e) => new t(e), r = 4e3, i = [
	"width",
	"height",
	"strings",
	"frets",
	"start",
	"start-text",
	"tuning"
], a = [
	"fret",
	"frets",
	"string",
	"strings",
	"text",
	"color",
	"note",
	"notes",
	"fill-color"
];
function o(e) {
	let t = {
		width: "700",
		height: "150",
		strings: "6",
		frets: "17",
		start: "1",
		"start-text": null,
		tuning: "standard"
	}, a = [];
	e.split(/\r?\n/).forEach((e, r) => {
		let o = e.trim();
		o && !o.startsWith("#") && o !== "fretboard" && c(r + 1, () => {
			let e = o.match(/^option\s+(\S+?)\s*=\s*(.+)$/);
			if (e) {
				if (!i.includes(e[1])) throw n(`Invalid option: ${e[1]}`);
				t[e[1]] = e[2].trim();
				return;
			}
			if (e = o.match(/^show\s+(.+)$/), e) return void a.push({
				params: l(e[1]),
				line: r + 1
			});
			throw n(`Unknown command: ${o.split(/\s+/)[0]}`);
		});
	});
	let o = d(t.width, "width"), f = d(t.height, "height");
	if (o < 100 || o > 4e3) throw n(`Width must be between 100 and ${r}: ${o}`);
	if (f < 50 || f > 4e3) throw n(`Height must be between 50 and ${r}: ${f}`);
	let p = {
		width: o,
		height: f,
		strings: d(t.strings, "strings"),
		startFret: d(t.start, "start"),
		endFret: d(t.frets, "frets"),
		startText: t["start-text"],
		lights: []
	}, { strings: m, startFret: h, endFret: g } = p;
	if (m < 2) throw n(`Too few strings: ${m}`);
	if (h < 1) throw n(`Start fret must be at least 1: ${h}`);
	if (g <= h) throw n(`Start fret number must be lower than end fret number: ${h} >= ${g}`);
	if (g - h < 3) throw n(`Too few frets: ${g}`);
	if (s(p) < 10) throw n("Fretboard is too small to draw");
	let _ = h === 1 ? 0 : h;
	for (let { params: e, line: t } of a) c(t, () => {
		for (let t of u(e)) {
			if (!Number.isInteger(t.fret) || t.fret < _ || t.fret > g) throw n(`Invalid fret: ${t.fret}`);
			if (!Number.isInteger(t.string) || t.string < 1 || t.string > m) throw n(`Invalid string: ${t.string}`);
			p.lights.push(t);
		}
	});
	return p;
}
var s = (e) => e.height - 40 - (e.startFret === 1 ? 0 : 10);
function c(e, r) {
	try {
		r();
	} catch (r) {
		throw r instanceof t ? n(`Line ${e}: ${r.message}`) : r;
	}
}
function l(e) {
	let t = {}, r = e.replace(/(\S+?)\s*=\s*("[^"]*"|\S+)/g, (e, r, i) => {
		if (!a.includes(r)) throw n(`Invalid 'show' option: ${r}`);
		return t[r] = i.replace(/^"(.*)"$/, "$1"), "";
	});
	if (r.trim()) throw n(`Invalid 'show' option: ${r.trim().split(/\s+/)[0]}`);
	return t;
}
function u(e) {
	let t = e.frets ?? e.fret, r = e.strings ?? e.string, i = e.notes ?? e.note;
	if ((t == null || r == null) && i == null) throw n("No frets or strings specified on line");
	let a = [];
	if (t != null && r != null) {
		let e = f(r, "string");
		for (let n of f(t, "fret")) for (let t of e) a.push({
			fret: n,
			string: t
		});
	}
	return i != null && a.push(...p(i)), a.map((t) => {
		let n = { ...t };
		return e.color != null && (n.color = e.color), e["fill-color"] != null && (n.fillColor = e["fill-color"]), e.text != null && (n.text = e.text), n;
	});
}
function d(e, t) {
	let r = (e ?? "").trim();
	if (!/^-?\d+$/.test(r)) throw n(`Invalid number for ${t}: ${e}`);
	return parseInt(r, 10);
}
function f(e, t) {
	return e.trim().split(/\s*,\s*/).map((e) => d(e, t));
}
function p(e) {
	return e.trim().split(/\s*,\s*/).map((e) => {
		let t = e.match(/^(\d+)\/(\d+)$/);
		if (!t) throw n(`Invalid note: ${e} (expected fret/string, e.g. 5/6)`);
		return {
			fret: parseInt(t[1], 10),
			string: parseInt(t[2], 10)
		};
	});
}
//#endregion
//#region src/kinds/fretboard/render.ts
var m = "http://www.w3.org/2000/svg", h = 10, g = 20, _ = 10, v = "#000000", y = "#aaaaaa", b = 4, x = "Arial", S = 12, C = 2 ** (1 / 12), w = (e) => Math.round(e * 1e5) / 1e5;
function T(e, t, n) {
	let r = document.createElementNS(m, e);
	for (let [e, n] of Object.entries(t)) r.setAttribute(e, String(typeof n == "number" ? w(n) : n));
	return n !== void 0 && (r.textContent = n), r;
}
function E(e) {
	let { width: t, height: n, strings: r, startFret: i, endFret: a } = e, o = T("svg", {
		xmlns: m,
		width: t,
		height: n,
		viewBox: `0 0 ${t} ${n}`
	}), c = (e) => o.append(e), l = t - 20, u = s(e), d = u / (r - 1), f = d / 2 - 1, p = i > 1 ? 3 : _, w = (e) => 1 - C ** -e, E = w(i - 1), D = w(a), O = (e) => h + p + (w(e) - E) / (D - E) * (l - p), k = (e) => g + (e - 1) * d, A = (e) => e === 0 ? 15 : (O(e) + O(e - 1)) / 2, j = (e, t, n, r) => c(T("line", {
		x1: e,
		y1: t,
		x2: n,
		y2: r,
		stroke: v
	})), M = (e, t, n, r, i) => c(T("circle", {
		cx: e,
		cy: t,
		r: n,
		stroke: r,
		fill: i
	})), N = (e, t, n, r) => c(T("text", {
		x: e,
		y: t,
		fill: r,
		"font-family": x,
		"font-size": S,
		"text-anchor": "middle"
	}, n));
	for (let e = 1; e <= r; e++) j(h, k(e), h + l, k(e));
	for (let e = i; e <= a; e++) j(O(e), g, O(e), g + u);
	i === 1 ? c(T("rect", {
		x: h,
		y: 15,
		width: _,
		height: u + 10,
		rx: 2,
		fill: y,
		stroke: y
	})) : N(A(i), g + u + 20, e.startText ?? String(i), v);
	let P = (e) => e >= i && e <= a, F = g + (Math.floor(r / 2) - .5) * d;
	for (let e of [
		3,
		5,
		7,
		9,
		15,
		17,
		19,
		21
	]) P(e) && M(A(e), F, b, y, y);
	for (let e of [12, 24]) P(e) && (M(A(e), F - d, b, y, y), M(A(e), F + d, b, y, y));
	for (let t of e.lights) {
		let e = A(t.fret), n = k(t.string);
		if (t.text != null) {
			let r = t.color ?? "white";
			M(e, n, f, r, t.fillColor ?? "#666"), N(e, n + S * .35, t.text, r);
		} else {
			let r = t.color ?? "#666";
			M(e, n, Math.max(f - 2, 1), r, t.fillColor ?? r);
		}
	}
	return {
		svg: o,
		width: t,
		height: n
	};
}
//#endregion
//#region src/kinds/fretboard/index.ts
function D(e) {
	return E(o(e));
}
var O = {
	id: "fretboard",
	label: "Fretboard",
	newLabel: "New fretboard",
	codeLabel: "Fretboard code",
	draftName: "Shared snippet",
	keywords: [
		"fretboard",
		"option",
		"show"
	],
	template: "fretboard\noption frets=12\n",
	icon: e("<path d=\"M1.75 4.25h12.5v7.5H1.75zM1.75 6.75h12.5M1.75 9.25h12.5M5.5 4.25v7.5M9.5 4.25v7.5\"/>"),
	newIcon: e("<path d=\"M1.75 4.25h7.5M1.75 8h7.5M1.75 11.75h5M4.75 2.5v11\"/><path d=\"M12 9v5M9.5 11.5h5\"/>"),
	ext: ".fret",
	header: "comments",
	sharePrefix: "code",
	render: D,
	reference: "\n    <h3>Options</h3>\n    <pre>option width=700        canvas width in px\noption height=150       canvas height in px\noption strings=6        number of strings\noption start=1          first fret shown (1 draws the nut)\noption frets=17         last fret shown\noption start-text=5fr   label under the first fret when start &gt; 1</pre>\n    <h3>Showing notes</h3>\n    <pre>show fret=3 string=6                one note\nshow frets=3,5,7 strings=6,5        every fret × string combination\nshow notes=10/1,9/3                 fret/string pairs\nshow fret=5 string=1 text=A         labelled circle\nshow fret=5 string=1 text=\"5 fr\"    quote values containing spaces\nshow ... color=red fill-color=white outline and fill colour</pre>\n    <p>Strings are numbered from the top (1 = high E). Fret 0 marks an open string on the nut.\n      Lines starting with <code>#</code> are comments.</p>"
};
//#endregion
export { O as fretboard };
