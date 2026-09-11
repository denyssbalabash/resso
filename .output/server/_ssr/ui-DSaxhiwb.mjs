import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as cn } from "./resso-store-CnY1r2p_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-DSaxhiwb.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/resso/ui.tsx";
function Eyebrow({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: cn("text-eyebrow", className),
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
function Chip({ children, tone = "muted", className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("font-display inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] uppercase", tone === "amber" ? "bg-primary text-primary-foreground" : "bg-surface-strong text-muted-foreground", className),
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 5
	}, this);
}
/** Big display number used for spins / counters */
function Counter({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col items-center rounded-2xl bg-background/50 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "font-display text-2xl leading-none font-semibold text-primary",
			children: value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 64,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "mt-1 text-[9px] tracking-[0.2em] text-muted-foreground uppercase",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 67,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 63,
		columnNumber: 5
	}, this);
}
//#endregion
export { Counter as n, Eyebrow as r, Chip as t };
