import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { l as Copy, s as Gift } from "../_libs/lucide-react.mjs";
import { a as useResso, t as AppShell } from "./resso-store-CnY1r2p_.mjs";
import { r as Eyebrow, t as Chip } from "./ui-DSaxhiwb.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prizes-D6-nVCFk.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/prizes.tsx?tsr-split=component";
function Prizes() {
	const { state, ready } = useResso();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppShell, {
		title: "призи",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: [state.prizes.length, " виграшів"] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-2 text-[1.75rem] leading-tight font-semibold",
				children: ["Мої ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-primary",
					children: "призи"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 15,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Код діє один раз — барист валідує його на касі."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 7
			}, this),
			ready && state.prizes.length === 0 && /* @__PURE__ */ (void 0)("div", {
				className: "panel hairline mt-6 border-dashed p-8 text-center",
				children: [
					/* @__PURE__ */ (void 0)("span", {
						className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/50",
						children: /* @__PURE__ */ (void 0)(Gift, {
							className: "h-5 w-5 text-primary",
							strokeWidth: 1.9
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 23,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "Призів ще немає"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)(Link, {
						to: "/tasks",
						className: "press font-display mt-5 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground",
						children: "Отримати спін"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 46
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 space-y-3",
				children: state.prizes.map((prize) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => {
						navigator.clipboard?.writeText(prize.code);
						toast.success("Код скопійовано", { description: prize.label });
					},
					className: "panel hairline press flex w-full items-center gap-3.5 p-4 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary-soft text-primary",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Gift, {
								className: "h-5 w-5",
								strokeWidth: 1.9
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-display text-sm font-semibold",
								children: prize.label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground",
								children: new Date(prize.wonAt).toLocaleDateString("uk-UA")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex flex-col items-end gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chip, {
								tone: "amber",
								children: prize.code
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "flex items-center gap-1 text-[10px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "h-3 w-3" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 17
								}, this), " копіювати"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 51,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 13
						}, this)
					]
				}, prize.code, true, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 36
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
//#endregion
export { Prizes as component };
