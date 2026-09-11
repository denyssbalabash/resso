import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { a as Instagram, i as Lock, m as ArrowRight, n as Newspaper, p as ArrowUpRight, r as MapPin, t as Sparkles, u as Coffee } from "../_libs/lucide-react.mjs";
import { a as useResso, i as resso_logo_png_asset_default, t as AppShell } from "./resso-store-CnY1r2p_.mjs";
import { n as Counter, r as Eyebrow, t as Chip } from "./ui-DSaxhiwb.mjs";
import { n as LOCATIONS, t as INSTAGRAM_URL } from "./resso-data-BCu49Cuq.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cd3h9NOv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var DEMO = {
	id: 100200300,
	firstName: "Олег",
	lastName: "Ковальчук"
};
function useTelegramUser() {
	const [user, setUser] = (0, import_react.useState)(DEMO);
	const [isTelegram, setIsTelegram] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const tg = window.Telegram?.WebApp;
		if (!tg) return;
		tg.ready();
		tg.expand();
		setIsTelegram(true);
		const u = tg.initDataUnsafe?.user;
		if (u) setUser({
			id: u.id,
			firstName: u.first_name ?? "Гість",
			lastName: u.last_name ?? "",
			photoUrl: u.photo_url
		});
	}, []);
	return {
		user,
		isTelegram
	};
}
function initials(user) {
	return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
}
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
function Index() {
	const { user } = useTelegramUser();
	const { state, ready, spinsLeft, update } = useResso();
	if (!ready) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-background" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 22
	}, this);
	if (!state.onboarded) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative flex min-h-screen flex-col justify-between overflow-hidden bg-background px-6 pt-16 pb-[calc(1.5rem+env(safe-area-inset-bottom))] text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "loft-grain pointer-events-none absolute inset-0" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[90px]" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex flex-1 flex-col items-center justify-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: resso_logo_png_asset_default.url,
						alt: "Resso Coffee",
						className: "animate-float h-24 w-24"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, {
						className: "mt-10",
						children: "вітаємо в resso"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "animate-rise mt-3 text-[2rem] leading-[1.1] font-semibold",
						children: [
							user.firstName,
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 31,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-primary",
								children: user.lastName
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 32,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "panel hairline animate-rise mt-9 flex w-full items-center gap-3 p-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, {
								photoUrl: user.photoUrl,
								label: initials(user)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm font-medium",
									children: "Кабінет створено"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 38,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: ["ID гостя · ", user.id]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 39,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chip, {
								tone: "amber",
								children: "new"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: () => {
					update({ onboarded: true });
					toast.success("Кабінет активовано", { description: "Виконай завдання і крути колесо фортуни." });
				},
				className: "press amber-glow relative mt-10 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary font-display text-base font-semibold text-primary-foreground",
				children: ["Продовжити ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-5 w-5" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 22
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 12
	}, this);
	const location = LOCATIONS.find((l) => l.id === state.locationId);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppShell, {
		action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chip, {
			tone: spinsLeft > 0 ? "amber" : "muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "h-3 w-3" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 11
				}, this),
				" ",
				spinsLeft,
				" спін"
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 60,
			columnNumber: 28
		}, this),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "panel hairline flex items-center gap-3.5 p-3.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, {
						photoUrl: user.photoUrl,
						label: initials(user)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "гість resso" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 truncate font-display text-lg leading-tight font-semibold",
								children: [
									user.firstName,
									" ",
									user.lastName
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: location ? location.name : "Заклад не обрано"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Counter, {
						value: spinsLeft,
						label: "спіни"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/wheel",
				className: "panel-amber hairline press group relative mt-3 block overflow-hidden p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-primary/30 blur-[70px]" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, {
								className: "text-primary-foreground/70",
								children: "акція"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "mt-2 text-2xl leading-tight font-semibold",
								children: [
									"Колесо",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 86,
										columnNumber: 15
									}, this),
									"фортуни"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 84,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 max-w-[13rem] text-xs text-foreground/70",
								children: spinsLeft > 0 ? `${spinsLeft} спін готовий до обертання` : "Виконай завдання, щоб отримати спін"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 13
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, {
								className: "h-5 w-5",
								strokeWidth: 2
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative mt-5 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-display inline-flex h-10 items-center gap-2 rounded-full bg-background/60 px-4 text-xs font-medium tracking-wide",
							children: ["Крутити ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] text-foreground/50",
							children: "печиво · шопер · −50 ₴"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 grid grid-cols-2 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/tasks",
						className: "panel hairline press col-span-2 flex items-center gap-3.5 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, {
								className: "h-5 w-5",
								strokeWidth: 1.9
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 13
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "font-display text-sm font-semibold",
									children: "Завдання"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: "Підписка та відгук — по одному спіну"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chip, { children: [state.tasks.length, "/2"] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/locations",
						className: "panel hairline press flex min-h-[9.5rem] flex-col justify-between p-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, {
							className: "h-5 w-5",
							strokeWidth: 1.9
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 125,
							columnNumber: 13
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 124,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-display text-sm font-semibold",
							children: "Наш заклад"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-0.5 line-clamp-2 text-xs text-muted-foreground",
							children: location ? location.address : "Обрати свою кавʼярню"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 127,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: INSTAGRAM_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "panel hairline press flex min-h-[9.5rem] flex-col justify-between p-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, {
							className: "h-5 w-5",
							strokeWidth: 1.9
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 137,
							columnNumber: 13
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 136,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-display text-sm font-semibold",
							children: "Instagram"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: "@resso.coffee"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 141,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 139,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 135,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 109,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "panel hairline mt-3 overflow-hidden py-3",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "animate-marquee flex w-max gap-6 whitespace-nowrap",
					children: Array.from({ length: 2 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-display flex gap-6 text-[11px] tracking-[0.28em] text-muted-foreground uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "speciality coffee" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 154,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-primary",
								children: "·"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "resso since 2021" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 156,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-primary",
								children: "·"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 157,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "обсмажка щотижня" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 158,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-primary",
								children: "·"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 159,
								columnNumber: 15
							}, this)
						]
					}, i, true, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 26
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 150,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, {
				className: "mt-7",
				children: "скоро"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 164,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 grid grid-cols-3 gap-2.5",
				children: [
					{
						label: "Меню",
						icon: Coffee
					},
					{
						label: "Новини",
						icon: Newspaper
					},
					{
						label: "Бонуси",
						icon: Lock
					}
				].map(({ label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => toast(`${label} — скоро`, { description: "Розділ у розробці. Ми повідомимо про запуск." }),
					className: "press flex flex-col items-center gap-2 rounded-2xl border border-dashed border-border bg-surface/40 px-2 py-4 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
						className: "h-4 w-4 text-muted-foreground",
						strokeWidth: 1.9
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 181,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[11px] text-muted-foreground",
						children: label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 182,
						columnNumber: 13
					}, this)]
				}, label, true, {
					fileName: _jsxFileName,
					lineNumber: 178,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 165,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 60,
		columnNumber: 10
	}, this);
}
function Tile({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-background/50 text-primary",
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 192,
		columnNumber: 10
	}, this);
}
function Avatar({ photoUrl, label }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "relative shrink-0",
		children: [photoUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
			src: photoUrl,
			alt: "",
			className: "h-14 w-14 rounded-2xl border border-border object-cover"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 204,
			columnNumber: 19
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "font-display flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-strong text-lg font-semibold",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 204,
			columnNumber: 119
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -right-1 -bottom-1 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 207,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 203,
		columnNumber: 10
	}, this);
}
//#endregion
export { Index as component };
