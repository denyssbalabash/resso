import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { l as Copy, t as Sparkles } from "../_libs/lucide-react.mjs";
import { a as useResso, r as generateCode, t as AppShell } from "./resso-store-CnY1r2p_.mjs";
import { r as PRIZES } from "./resso-data-BCu49Cuq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wheel-CENUiGHz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/wheel.tsx?tsr-split=component";
var SEGMENT = 360 / PRIZES.length;
function Wheel() {
	const { state, ready, spinsLeft, addPrize } = useResso();
	const [angle, setAngle] = (0, import_react.useState)(0);
	const [spinning, setSpinning] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const spin = () => {
		if (spinning || spinsLeft <= 0) return;
		const targetId = state.tasks.length >= 2 && state.spinsUsed >= 1 ? "tote" : "cookie";
		const index = Math.max(0, PRIZES.findIndex((p) => p.id === targetId));
		const prize = PRIZES[index];
		setResult(null);
		setCopied(false);
		setSpinning(true);
		const target = angle + 1800 + (360 - (index * SEGMENT + SEGMENT / 2) - angle % 360);
		setAngle(target);
		window.setTimeout(() => {
			const won = {
				prizeId: prize.id,
				label: prize.label,
				code: generateCode(),
				wonAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			addPrize(won);
			setResult(won);
			setSpinning(false);
		}, 4200);
	};
	if (!ready) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppShell, {
		title: "Колесо",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 42,
			columnNumber: 47
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 42,
		columnNumber: 22
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppShell, {
		title: "Колесо",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-2xl font-semibold",
				children: "Колесо фортуни"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: ["Доступних спінів: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-primary",
					children: spinsLeft
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 27
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative mx-auto mt-8 aspect-square w-full max-w-[19rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0 rounded-full bg-primary/15 blur-3xl" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative h-full w-full rounded-full border-[6px] border-border/80 shadow-2xl",
						style: {
							transform: `rotate(${angle}deg)`,
							transition: spinning ? "transform 4.2s cubic-bezier(0.16, 1, 0.3, 1)" : void 0,
							background: `conic-gradient(${PRIZES.map((p, i) => {
								const from = i * SEGMENT;
								const to = (i + 1) * SEGMENT;
								return `${i % 2 === 0 ? "var(--primary)" : "var(--secondary)"} ${from}deg ${to}deg`;
							}).join(", ")})`
						},
						children: PRIZES.map((p, i) => {
							const rad = (i * SEGMENT + SEGMENT / 2 - 90) * Math.PI / 180;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "absolute text-[11px] font-semibold tracking-wide",
								style: {
									left: `${50 + 33 * Math.cos(rad)}%`,
									top: `${50 + 33 * Math.sin(rad)}%`,
									transform: "translate(-50%, -50%)",
									color: i % 2 === 0 ? "#0f0f0f" : "#ffffff"
								},
								children: p.short
							}, p.id, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 18
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-background",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, {
							className: "h-6 w-6 text-primary",
							strokeWidth: 1.75
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -top-1 left-1/2 h-5 w-3 -translate-x-1/2 rounded-b-full bg-primary" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 7
			}, this),
			spinsLeft > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: spin,
				disabled: spinning,
				className: "mt-8 flex h-14 w-full items-center justify-center rounded-2xl bg-primary text-base font-semibold text-primary-foreground disabled:opacity-60 active:scale-[0.99]",
				children: spinning ? "Крутимо…" : "Крутити"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 81,
				columnNumber: 24
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/tasks",
				className: "mt-8 flex h-14 w-full items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-base font-semibold text-primary active:scale-[0.99]",
				children: "Отримати спін"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 21
			}, this),
			result && /* @__PURE__ */ (void 0)("div", {
				className: "mt-6 rounded-3xl border border-primary/50 bg-primary/10 p-5 text-center",
				children: [
					/* @__PURE__ */ (void 0)("p", {
						className: "text-xs tracking-[0.28em] text-primary/80 uppercase",
						children: "ваш приз"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "mt-2 text-xl font-semibold",
						children: result.label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "mt-4 text-xs text-muted-foreground",
						children: "Покажіть код баристі"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("button", {
						onClick: () => {
							navigator.clipboard?.writeText(result.code);
							setCopied(true);
						},
						className: "mt-2 inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-background px-4 py-3 font-mono text-lg tracking-[0.2em]",
						children: [
							result.code,
							" ",
							/* @__PURE__ */ (void 0)(Copy, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 99,
								columnNumber: 27
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 11
					}, this),
					copied && /* @__PURE__ */ (void 0)("p", {
						className: "mt-2 text-xs text-primary",
						children: "Код скопійовано"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 22
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 87,
				columnNumber: 18
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 43,
		columnNumber: 10
	}, this);
}
//#endregion
export { Wheel as component };
