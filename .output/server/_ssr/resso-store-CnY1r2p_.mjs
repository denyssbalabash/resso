import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { o as House, r as MapPin, s as Gift, t as Sparkles } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resso-store-CnY1r2p_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var resso_logo_png_asset_default = { url: "https://picsum.photos/seed/resso/100/100" };
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var _jsxFileName = "/app/applet/src/components/resso/AppShell.tsx";
var NAV = [
	{
		to: "/",
		label: "Головна",
		icon: House
	},
	{
		to: "/locations",
		label: "Заклади",
		icon: MapPin
	},
	{
		to: "/wheel",
		label: "Колесо",
		icon: Sparkles
	},
	{
		to: "/prizes",
		label: "Призи",
		icon: Gift
	}
];
function AppShell({ children, title, action }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative flex min-h-screen flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "loft-grain pointer-events-none fixed inset-0 z-0" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "sticky top-0 z-20 bg-gradient-to-b from-background via-background/90 to-transparent",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto flex h-16 w-full max-w-md items-center gap-3 px-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: resso_logo_png_asset_default.url,
							alt: "Resso Coffee",
							className: "h-9 w-9"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-display text-[13px] font-medium tracking-[0.3em] uppercase",
							children: title ?? "resso"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "ml-auto",
						children: action
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "relative z-10 mx-auto w-full max-w-md flex-1 px-5 pt-1 pb-32",
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				className: "fixed bottom-0 left-0 right-0 z-20 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto flex w-full max-w-md items-center gap-1 rounded-full border border-border bg-popover/80 p-1.5 backdrop-blur-2xl",
					children: NAV.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to,
						activeOptions: { exact: to === "/" },
						className: cn("press flex flex-1 flex-col items-center gap-1 rounded-full py-2.5 text-[10px] font-medium tracking-wide text-muted-foreground"),
						activeProps: { className: "bg-primary text-primary-foreground shadow-[0_10px_24px_-14px_var(--primary)]" },
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
							className: "h-[18px] w-[18px]",
							strokeWidth: 1.9
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 15
						}, this), label]
					}, to, true, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 5
	}, this);
}
var KEY = "resso.state.v1";
var EMPTY = {
	onboarded: false,
	locationId: null,
	tasks: [],
	spinsUsed: 0,
	prizes: []
};
function read() {
	if (typeof window === "undefined") return EMPTY;
	try {
		const raw = window.localStorage.getItem(KEY);
		return raw ? {
			...EMPTY,
			...JSON.parse(raw)
		} : EMPTY;
	} catch {
		return EMPTY;
	}
}
var listeners = /* @__PURE__ */ new Set();
function write(next) {
	if (typeof window !== "undefined") window.localStorage.setItem(KEY, JSON.stringify(next));
	listeners.forEach((l) => l());
}
function generateCode() {
	const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	const pick = (n) => Array.from({ length: n }, () => alphabet[Math.floor(Math.random() * 32)]).join("");
	return `RS-${pick(4)}-${pick(2)}`;
}
function useResso() {
	const [state, setState] = (0, import_react.useState)(EMPTY);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const sync = () => setState(read());
		sync();
		setReady(true);
		listeners.add(sync);
		return () => {
			listeners.delete(sync);
		};
	}, []);
	const update = (0, import_react.useCallback)((patch) => {
		write({
			...read(),
			...patch
		});
	}, []);
	const completeTask = (0, import_react.useCallback)((id) => {
		const current = read();
		if (current.tasks.includes(id)) return;
		write({
			...current,
			tasks: [...current.tasks, id]
		});
	}, []);
	const addPrize = (0, import_react.useCallback)((prize) => {
		const current = read();
		write({
			...current,
			spinsUsed: current.spinsUsed + 1,
			prizes: [prize, ...current.prizes]
		});
	}, []);
	return {
		state,
		ready,
		spinsLeft: Math.max(0, state.tasks.length - state.spinsUsed),
		update,
		completeTask,
		addPrize
	};
}
//#endregion
export { useResso as a, resso_logo_png_asset_default as i, cn as n, generateCode as r, AppShell as t };
