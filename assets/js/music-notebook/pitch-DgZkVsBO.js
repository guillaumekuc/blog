//#region src/core/pitch.ts
var e = {
	c: 0,
	d: 2,
	e: 4,
	f: 5,
	g: 7,
	a: 9,
	b: 11
}, t = (e) => (e % 12 + 12) % 12, n = (e) => Math.floor(e / 12) - 1;
function r(t, n, r) {
	let i = (n.match(/#/g)?.length ?? 0) - (n.match(/b/g)?.length ?? 0);
	return (r + 1) * 12 + e[t.toLowerCase()] + i;
}
var i = (e) => 440 * 2 ** ((e - 69) / 12);
//#endregion
export { n as i, r as n, t as r, i as t };
