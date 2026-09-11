import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { c as ExternalLink, d as Clock, f as Check, r as MapPin } from "../_libs/lucide-react.mjs";
import { a as useResso, n as cn, t as AppShell } from "./resso-store-CnY1r2p_.mjs";
import { r as Eyebrow, t as Chip } from "./ui-DSaxhiwb.mjs";
import { n as LOCATIONS } from "./resso-data-BCu49Cuq.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/locations-YAFb5Pfn.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/locations.tsx?tsr-split=component";
function Locations() {
	const { state, update } = useResso();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppShell, {
		title: "заклади",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "2 локації" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-2 text-[1.75rem] leading-tight font-semibold",
				children: [
					"Обери свій",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 17,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-primary",
						children: "заклад"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Ми запамʼятаємо вибір для новин і меню."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 space-y-3",
				children: LOCATIONS.map((loc) => {
					const active = state.locationId === loc.id;
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: cn("hairline p-4", active ? "panel-amber" : "panel"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => {
								update({ locationId: loc.id });
								toast.success(`${loc.name} — ваш заклад`, { description: loc.address });
							},
							className: "flex w-full items-start gap-3 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-full", active ? "bg-primary text-primary-foreground" : "border border-border bg-background/50 text-primary"),
								children: active ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, {
									className: "h-5 w-5",
									strokeWidth: 2.5
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 37,
									columnNumber: 29
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, {
									className: "h-5 w-5",
									strokeWidth: 1.9
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 37,
									columnNumber: 79
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-display text-base font-semibold",
											children: loc.name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 41,
											columnNumber: 21
										}, this), active && /* @__PURE__ */ (void 0)(Chip, {
											tone: "amber",
											children: "мій"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 44,
											columnNumber: 32
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 40,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "mt-0.5 block text-sm text-muted-foreground",
										children: loc.address
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "mt-2 inline-flex items-center gap-1.5 text-[11px] tracking-widest text-muted-foreground uppercase",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-3 w-3" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 50,
												columnNumber: 21
											}, this),
											" ",
											loc.hours
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 49,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 28,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: loc.mapUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "press mt-4 flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background/50 text-sm font-medium",
							children: ["Відкрити на карті ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 35
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 15
						}, this)]
					}, loc.id, true, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 16
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 10
	}, this);
}
//#endregion
export { Locations as component };
