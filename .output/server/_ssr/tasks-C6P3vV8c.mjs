import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { c as ExternalLink, f as Check, t as Sparkles } from "../_libs/lucide-react.mjs";
import { a as useResso, n as cn, t as AppShell } from "./resso-store-CnY1r2p_.mjs";
import { r as Eyebrow, t as Chip } from "./ui-DSaxhiwb.mjs";
import { i as TASKS } from "./resso-data-BCu49Cuq.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tasks-C6P3vV8c.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/tasks.tsx?tsr-split=component";
function Tasks() {
	const { state, spinsLeft, completeTask } = useResso();
	const progress = state.tasks.length / TASKS.length * 100;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppShell, {
		title: "завдання",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "+1 спін за дію" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-2 text-[1.75rem] leading-tight font-semibold",
				children: [
					"Завдання",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-primary",
						children: "за спіни"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "За перше — печиво з передбаченням, за два — брендований шопер."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "panel hairline mt-5 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "прогрес" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-display text-xs text-primary",
						children: [
							state.tasks.length,
							"/",
							TASKS.length
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-3 h-1.5 overflow-hidden rounded-full bg-background/60",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "h-full rounded-full bg-primary transition-[width] duration-700",
						style: { width: `${progress}%` }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4 space-y-3",
				children: TASKS.map((task, index) => {
					const done = state.tasks.includes(task.id);
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: cn("hairline p-4", done ? "panel-amber" : "panel"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: cn("font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold", done ? "bg-primary text-primary-foreground" : "border border-border bg-background/50"),
								children: done ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, {
									className: "h-4 w-4",
									strokeWidth: 2.6
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 47,
									columnNumber: 27
								}, this) : index + 1
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-display text-base font-semibold",
										children: task.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 51,
										columnNumber: 21
									}, this), done && /* @__PURE__ */ (void 0)(Chip, {
										tone: "amber",
										children: "done"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 54,
										columnNumber: 30
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 50,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: task.description
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 49,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: task.url,
								target: "_blank",
								rel: "noreferrer",
								className: "press flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background/50 text-sm font-medium",
								children: [
									task.cta,
									" ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 64,
										columnNumber: 30
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								disabled: done,
								onClick: () => {
									completeTask(task.id);
									toast.success("Завдання зараховано", { description: "+1 спін колеса фортуни." });
								},
								className: "press font-display flex h-11 flex-1 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground disabled:bg-surface-strong disabled:text-muted-foreground",
								children: done ? "Виконано" : "Я виконав"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 15
						}, this)]
					}, task.id, true, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 16
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/wheel",
				className: "press font-display mt-5 flex h-14 items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary-soft text-sm font-semibold text-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "h-5 w-5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 9
					}, this),
					" До колеса (",
					spinsLeft,
					")"
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 10
	}, this);
}
//#endregion
export { Tasks as component };
