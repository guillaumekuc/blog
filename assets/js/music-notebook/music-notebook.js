import { t as e } from "./pitch-DgZkVsBO.js";
//#region src/audio/synth.ts
var t = .18, n = .01, r = .06, i = class {
	ctx = null;
	out = null;
	oscillators = [];
	timer;
	cueTimers = [];
	onStop = null;
	onCue = null;
	get playing() {
		return this.out !== null;
	}
	play({ events: e, length: t, cues: n = [] }) {
		this.stop(), this.ctx ??= new AudioContext();
		let i = this.ctx;
		i.resume();
		let a = i.createDynamicsCompressor();
		a.connect(i.destination);
		let o = i.createGain();
		o.connect(a), this.out = o;
		let s = i.currentTime + .05;
		for (let t of e) for (let e of t.midi) this.tone(i, o, e, s + t.start, t.duration);
		let c = (s - i.currentTime) * 1e3;
		this.cueTimers = n.map((e) => window.setTimeout(() => this.onCue?.(e.id), c + e.start * 1e3)), this.timer = window.setTimeout(() => this.stop(), (t + r) * 1e3 + 100);
	}
	stop() {
		if (window.clearTimeout(this.timer), this.cueTimers.forEach((e) => window.clearTimeout(e)), this.cueTimers = [], this.out) {
			for (let e of this.oscillators) try {
				e.stop();
			} catch {}
			this.oscillators = [], this.out.disconnect(), this.out = null, this.onStop?.();
		}
	}
	tone(i, a, o, s, c) {
		let l = i.createOscillator();
		l.type = "triangle", l.frequency.value = e(o);
		let u = i.createGain(), d = s + Math.max(c - .02, n * 2);
		u.gain.setValueAtTime(0, s), u.gain.linearRampToValueAtTime(t, s + n), u.gain.setTargetAtTime(t * .4, s + n, .15), u.gain.setTargetAtTime(0, d, r / 3), l.connect(u).connect(a), l.start(s), l.stop(d + r), l.onended = () => u.disconnect(), this.oscillators.push(l);
	}
};
//#endregion
//#region src/util.ts
function a(e) {
	return e.replace(/[&<>"']/g, (e) => `&#${e.charCodeAt(0)};`);
}
//#endregion
//#region src/embed.css?inline
var o = ":where(.mn-block){background:var(--mn-card,#fff);border:1px solid var(--mn-border,#d8d8d8);border-radius:var(--mn-radius,6px);color:#222;margin:1em 0;padding:8px;position:relative;overflow-x:auto}:where(.mn-block)>svg{max-width:100%;height:auto;margin:0 auto;display:block}:where(.mn-block) [data-bar].playing{fill:var(--mn-playing,#fdeaa7)}:where(.mn-play){color:#222;cursor:pointer;opacity:.75;background:#fff;border:1px solid #ccc;border-radius:50%;place-items:center;width:28px;height:28px;padding:0;display:grid;position:absolute;top:6px;right:6px}:where(.mn-play):hover,:where(.mn-play):focus-visible{opacity:1}:where(.mn-error){color:var(--mn-error,#b4442a);white-space:pre-wrap;margin:0;font:.9em/1.4 system-ui,sans-serif}", s = {
	fretboard: () => import("./fretboard-QFTICYm7.js").then((e) => e.fretboard),
	notation: () => import("./notation-DoMu55Dh.js").then((e) => e.notation),
	progression: () => import("./progression-Bklm8zqk.js").then((e) => e.progression)
}, c = Object.keys(s), l = (e) => e in s, u = /* @__PURE__ */ new Map();
function d(e) {
	let t = u.get(e);
	return t || (t = s[e]().then(async (e) => (await e.load?.(), e)), u.set(e, t)), t;
}
var f = "<svg viewBox=\"0 0 16 16\" width=\"16\" height=\"16\" aria-hidden=\"true\"><path d=\"M4.75 2.75v10.5L13 8z\" fill=\"currentColor\"/></svg>", p = "<svg viewBox=\"0 0 16 16\" width=\"16\" height=\"16\" aria-hidden=\"true\"><rect x=\"3.5\" y=\"3.5\" width=\"9\" height=\"9\" rx=\"1\" fill=\"currentColor\"/></svg>";
function m(e) {
	if (e.getElementById("music-notebook-styles")) return;
	let t = e.createElement("style");
	t.id = "music-notebook-styles", t.textContent = o, e.head.prepend(t);
}
var h = null, g = null;
function _(e) {
	for (let t of [g, e]) {
		let n = t?.querySelector(".mn-play");
		if (!n) continue;
		let r = t === e && e !== null;
		n.innerHTML = r ? p : f, n.title = r ? "Stop" : "Play", n.setAttribute("aria-label", n.title);
	}
	g?.querySelectorAll("[data-bar].playing").forEach((e) => e.classList.remove("playing")), g = e;
}
function v(e, t, n) {
	h ??= new i();
	let r = h.playing && g === n;
	if (h.stop(), r) return;
	let a = e.perform?.(t);
	a?.events.length && (h.onStop = () => _(null), h.onCue = (e) => {
		n.querySelectorAll("[data-bar].playing").forEach((e) => e.classList.remove("playing")), n.querySelector(`[data-bar="${e}"]`)?.classList.add("playing");
	}, h.play(a), _(n));
}
async function y(e, t, n) {
	if (!l(e)) throw Error(`Unknown kind: ${e}`);
	m(n.ownerDocument);
	let r = await d(e);
	n.classList.add("mn-block"), n.dataset.kind = e;
	try {
		let { svg: e } = r.render(t);
		if (n.replaceChildren(e), r.perform) {
			let e = n.ownerDocument.createElement("button");
			e.type = "button", e.className = "mn-play", e.title = "Play", e.setAttribute("aria-label", "Play"), e.innerHTML = f, e.addEventListener("click", () => v(r, t, n)), n.append(e);
		}
	} catch (e) {
		n.innerHTML = `<p class="mn-error">${a(e instanceof Error ? e.message : String(e))}</p>`;
	}
}
function b(e) {
	let t = e.closest("pre"), n = e.closest("[class*=\"language-\"]");
	if (!n || !(t.contains(n) || n.contains(t) && n.querySelectorAll("pre").length === 1)) return null;
	let r = [...n.classList].find((e) => e.startsWith("language-"))?.slice(9) ?? "";
	return l(r) ? {
		kind: r,
		wrapper: n.contains(t) ? n : t
	} : null;
}
async function x(e = document) {
	let t = [];
	for (let n of e.querySelectorAll("pre code")) {
		let e = b(n);
		if (!e) continue;
		let r = e.wrapper.ownerDocument.createElement("div"), i = (n.textContent ?? "").replace(/\n$/, "");
		t.push(y(e.kind, i, r).then(() => e.wrapper.replaceWith(r)));
	}
	await Promise.all(t);
}
//#endregion
export { c as KINDS, l as isKind, y as render, x as renderAll };
