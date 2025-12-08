(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/loading-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingScreen",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const loadingMessages = [
    "Accessing Mainframe...",
    "Bypassing Security Protocols...",
    "Downloading Commit History...",
    "Analyzing 1,000s of commits...",
    "Compiling Audio Vectors...",
    "Generating Tarot Archetypes...",
    "Rendering Code City...",
    "Synthesizing Developer Essence...",
    "Calibrating Neon Frequencies...",
    "Initializing Visual Cortex..."
];
function LoadingScreen() {
    _s();
    const [currentMessage, setCurrentMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingScreen.useEffect": ()=>{
            const message = loadingMessages[currentMessage];
            let charIndex = 0;
            const typeInterval = setInterval({
                "LoadingScreen.useEffect.typeInterval": ()=>{
                    if (charIndex <= message.length) {
                        setDisplayedText(message.slice(0, charIndex));
                        charIndex++;
                    } else {
                        clearInterval(typeInterval);
                        setLogs({
                            "LoadingScreen.useEffect.typeInterval": (prev)=>[
                                    ...prev,
                                    `[OK] ${message}`
                                ]
                        }["LoadingScreen.useEffect.typeInterval"]);
                        setTimeout({
                            "LoadingScreen.useEffect.typeInterval": ()=>{
                                if (currentMessage < loadingMessages.length - 1) {
                                    setCurrentMessage({
                                        "LoadingScreen.useEffect.typeInterval": (prev)=>prev + 1
                                    }["LoadingScreen.useEffect.typeInterval"]);
                                    setDisplayedText("");
                                }
                            }
                        }["LoadingScreen.useEffect.typeInterval"], 400);
                    }
                }
            }["LoadingScreen.useEffect.typeInterval"], 40);
            return ({
                "LoadingScreen.useEffect": ()=>clearInterval(typeInterval)
            })["LoadingScreen.useEffect"];
        }
    }["LoadingScreen.useEffect"], [
        currentMessage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crt-scanlines fixed inset-0 pointer-events-none z-50"
            }, void 0, false, {
                fileName: "[project]/components/loading-screen.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff00ff]/20 rounded-full blur-3xl animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/components/loading-screen.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/loading-screen.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-[#00ff88]/50 bg-black/80 backdrop-blur-sm overflow-hidden neon-border-green",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-4 py-2 border-b border-[#00ff88]/30 bg-[#00ff88]/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-[#ff5f56]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/loading-screen.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-[#ffbd2e]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/loading-screen.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-[#27c93f]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/loading-screen.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 text-xs text-[#00ff88]",
                                        children: "gitfm@mainframe:~$"
                                    }, void 0, false, {
                                        fileName: "[project]/components/loading-screen.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/loading-screen.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 font-mono text-sm min-h-[300px]",
                                children: [
                                    logs.map((log, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[#00ff88] mb-1",
                                            children: log
                                        }, index, false, {
                                            fileName: "[project]/components/loading-screen.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-[#00ff88]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#ff00ff] mr-2",
                                                children: "> "
                                            }, void 0, false, {
                                                fileName: "[project]/components/loading-screen.tsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: displayedText
                                            }, void 0, false, {
                                                fileName: "[project]/components/loading-screen.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1 animate-pulse",
                                                children: "█"
                                            }, void 0, false, {
                                                fileName: "[project]/components/loading-screen.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/loading-screen.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/loading-screen.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/loading-screen.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-xs text-muted-foreground mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Synthesizing..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/loading-screen.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            Math.round(currentMessage / loadingMessages.length * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/loading-screen.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/loading-screen.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 rounded-full bg-muted overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-gradient-to-r from-[#ff00ff] via-[#8800ff] to-[#00ff88] transition-all duration-500",
                                    style: {
                                        width: `${currentMessage / loadingMessages.length * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/loading-screen.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/loading-screen.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/loading-screen.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "text-[#ff00ff] text-xs leading-tight inline-block",
                            children: `
   ______   _ __      ________  ___ 
  / ____/(_) /_   / ____/  |/  / 
 / / __ / / __/  / /_  / /|_/ /  
/ /_/ // / /_   / __/ / /  / /   
\\____//_/\\__/  /_/   /_/  /_/    
`
                        }, void 0, false, {
                            fileName: "[project]/components/loading-screen.tsx",
                            lineNumber: 112,
                            columnNumber: 1
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/loading-screen.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/loading-screen.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/loading-screen.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(LoadingScreen, "FeRO95Q+TK97LoW+FHZ0avk+bj8=");
_c = LoadingScreen;
var _c;
__turbopack_context__.k.register(_c, "LoadingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/tarot-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TarotCard",
    ()=>TarotCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skull.js [app-client] (ecmascript) <export default as Skull>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const classMap = {
    JavaScript: {
        name: "Chaos Mage",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/components/tarot-card.tsx",
            lineNumber: 15,
            columnNumber: 43
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#f7df1e"
    },
    TypeScript: {
        name: "Chaos Mage",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/components/tarot-card.tsx",
            lineNumber: 16,
            columnNumber: 43
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#3178c6"
    },
    Python: {
        name: "Snake Charmer",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/components/tarot-card.tsx",
            lineNumber: 17,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#3776ab"
    },
    Rust: {
        name: "The Ironclad",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__["Skull"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/components/tarot-card.tsx",
            lineNumber: 18,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#dea584"
    },
    "C++": {
        name: "The Ironclad",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__["Skull"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/components/tarot-card.tsx",
            lineNumber: 19,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#00599c"
    },
    C: {
        name: "The Ironclad",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__["Skull"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/components/tarot-card.tsx",
            lineNumber: 20,
            columnNumber: 36
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#555555"
    },
    Go: {
        name: "Backend Paladin",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/components/tarot-card.tsx",
            lineNumber: 21,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#00add8"
    },
    Java: {
        name: "Backend Paladin",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/components/tarot-card.tsx",
            lineNumber: 22,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#ed8b00"
    },
    HTML: {
        name: "Pixel Weaver",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/components/tarot-card.tsx",
            lineNumber: 23,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#e34f26"
    },
    CSS: {
        name: "Pixel Weaver",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/components/tarot-card.tsx",
            lineNumber: 24,
            columnNumber: 38
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#264de4"
    },
    default: {
        name: "Code Ronin",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/components/tarot-card.tsx",
            lineNumber: 25,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#ff00ff"
    }
};
function TarotCard({ data, vibeMode }) {
    _s();
    const [isFlipped, setIsFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const rpgClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TarotCard.useMemo[rpgClass]": ()=>{
            const lang = data.topLanguage || "default";
            return classMap[lang] || classMap["default"];
        }
    }["TarotCard.useMemo[rpgClass]"], [
        data.topLanguage
    ]);
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TarotCard.useMemo[stats]": ()=>{
            const caffeineDependency = Math.min(100, Math.round(data.totalContributions / 365 * 10));
            const socialLife = Math.max(0, 100 - Math.round(data.totalContributions / 365 * 15));
            const codeQuality = Math.min(100, 50 + Math.round(data.totalPRsMerged / 10));
            const bugCreationRate = vibeMode === "roast" ? Math.round(Math.random() * 40 + 30) : Math.round(Math.random() * 20 + 10);
            const mainCommitter = data.totalCommits > 100;
            return {
                caffeineDependency,
                socialLife,
                codeQuality,
                bugCreationRate,
                mainCommitter
            };
        }
    }["TarotCard.useMemo[stats]"], [
        data,
        vibeMode
    ]);
    const getText = (type)=>{
        if (vibeMode === "hype") {
            switch(type){
                case "title":
                    return rpgClass.name;
                case "subtitle":
                    return "Legendary Developer";
                case "stat1":
                    return "Dedication";
                case "stat2":
                    return "Work-Life Balance";
                case "stat3":
                    return "Code Quality";
                case "stat4":
                    return "Bug Resistance";
                case "quote":
                    return data.longestStreak > 30 ? `"A ${data.longestStreak}-day streak? Your dedication is legendary. ${data.totalContributions} contributions define a true master."` : `"Your architecture is pure art. ${data.totalContributions} contributions define a true master."`;
            }
        } else {
            switch(type){
                case "title":
                    return rpgClass.name;
                case "subtitle":
                    return "Menace to Codebases";
                case "stat1":
                    return "Caffeine Dependency";
                case "stat2":
                    return "Social Life";
                case "stat3":
                    return "Delusion Level";
                case "stat4":
                    return "Bug Creation Rate";
                case "quote":
                    if (data.currentStreak === 0) {
                        return `"Your streak is dead. ${data.totalContributions} contributions and you couldn't keep it going?"`;
                    }
                    return stats.mainCommitter ? `"${data.totalCommits}+ commits this year. Quantity over quality, I see."` : `"${data.totalContributions} contributions and your code still looks like this?"`;
            }
        }
    };
    const isHype = vibeMode === "hype";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "perspective-1000 cursor-pointer w-80 h-[480px]",
        onClick: ()=>setIsFlipped(!isFlipped),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col items-center justify-between ${isHype ? "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] border-2 border-[#ffd700] neon-border-gold" : "bg-gradient-to-br from-[#1a0a0a] via-[#2d0a0a] to-[#0a0a1a] border-2 border-[#ff0000] glitch"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-xs ${isHype ? "text-[#ffd700]" : "text-[#ff0000]"}`,
                                    children: isHype ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tarot-card.tsx",
                                        lineNumber: 116,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tarot-card.tsx",
                                        lineNumber: 116,
                                        columnNumber: 60
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/tarot-card.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-xs font-bold ${isHype ? "text-[#ffd700]" : "text-[#ff0000]"}`,
                                    children: "2025"
                                }, void 0, false, {
                                    fileName: "[project]/components/tarot-card.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tarot-card.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute inset-0 rounded-full blur-xl ${isHype ? "bg-[#ffd700]/30" : "bg-[#ff0000]/30"}`
                                }, void 0, false, {
                                    fileName: "[project]/components/tarot-card.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: data.user.avatarUrl || "/placeholder.svg",
                                    alt: data.user.login,
                                    className: `w-28 h-28 rounded-full border-4 relative z-10 ${isHype ? "border-[#ffd700]" : "border-[#ff0000]"}`
                                }, void 0, false, {
                                    fileName: "[project]/components/tarot-card.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tarot-card.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${isHype ? "text-[#ffd700]" : "text-[#ff0000]"}`,
                            children: rpgClass.icon
                        }, void 0, false, {
                            fileName: "[project]/components/tarot-card.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `text-2xl font-bold ${isHype ? "text-[#ffd700] neon-gold" : "text-[#ff0000] chromatic-aberration"}`,
                                    "data-text": getText("title"),
                                    children: getText("title")
                                }, void 0, false, {
                                    fileName: "[project]/components/tarot-card.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mt-1",
                                    children: getText("subtitle")
                                }, void 0, false, {
                                    fileName: "[project]/components/tarot-card.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tarot-card.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-1 rounded-full text-xs font-bold",
                            style: {
                                backgroundColor: `${rpgClass.color}30`,
                                color: rpgClass.color
                            },
                            children: data.topLanguage || "Polyglot"
                        }, void 0, false, {
                            fileName: "[project]/components/tarot-card.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground animate-pulse",
                            children: "Tap to reveal stats"
                        }, void 0, false, {
                            fileName: "[project]/components/tarot-card.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tarot-card.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-6 flex flex-col ${isHype ? "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] border-2 border-[#ffd700] neon-border-gold" : "bg-gradient-to-br from-[#1a0a0a] via-[#2d0a0a] to-[#0a0a1a] border-2 border-[#ff0000]"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: `text-lg font-bold mb-4 text-center ${isHype ? "text-[#ffd700]" : "text-[#ff0000]"}`,
                            children: "Stats"
                        }, void 0, false, {
                            fileName: "[project]/components/tarot-card.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBar, {
                                    label: getText("stat1"),
                                    value: stats.caffeineDependency,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tarot-card.tsx",
                                        lineNumber: 178,
                                        columnNumber: 21
                                    }, void 0),
                                    color: isHype ? "#ffd700" : "#ff0000"
                                }, void 0, false, {
                                    fileName: "[project]/components/tarot-card.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBar, {
                                    label: getText("stat2"),
                                    value: stats.socialLife,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tarot-card.tsx",
                                        lineNumber: 184,
                                        columnNumber: 21
                                    }, void 0),
                                    color: isHype ? "#ffd700" : "#ff0000"
                                }, void 0, false, {
                                    fileName: "[project]/components/tarot-card.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBar, {
                                    label: getText("stat3"),
                                    value: stats.codeQuality,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tarot-card.tsx",
                                        lineNumber: 190,
                                        columnNumber: 21
                                    }, void 0),
                                    color: isHype ? "#ffd700" : "#ff0000"
                                }, void 0, false, {
                                    fileName: "[project]/components/tarot-card.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBar, {
                                    label: getText("stat4"),
                                    value: vibeMode === "hype" ? 100 - stats.bugCreationRate : stats.bugCreationRate,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tarot-card.tsx",
                                        lineNumber: 196,
                                        columnNumber: 21
                                    }, void 0),
                                    color: isHype ? "#ffd700" : "#ff0000"
                                }, void 0, false, {
                                    fileName: "[project]/components/tarot-card.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tarot-card.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mt-4 p-3 rounded-lg text-xs italic text-center ${isHype ? "bg-[#ffd700]/10 text-[#ffd700]" : "bg-[#ff0000]/10 text-[#ff0000]"}`,
                            children: getText("quote")
                        }, void 0, false, {
                            fileName: "[project]/components/tarot-card.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground text-center mt-4 animate-pulse",
                            children: "Tap to flip back"
                        }, void 0, false, {
                            fileName: "[project]/components/tarot-card.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tarot-card.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tarot-card.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/tarot-card.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(TarotCard, "6jX6o42liW1yA5ZyjsJh38foqnk=");
_c = TarotCard;
function StatBar({ label, value, icon, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        style: {
                            color
                        },
                        children: [
                            icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/tarot-card.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tarot-card.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color
                        },
                        children: [
                            value,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tarot-card.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tarot-card.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-2 rounded-full bg-black/50 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full rounded-full transition-all duration-1000",
                    style: {
                        width: `${value}%`,
                        backgroundColor: color,
                        boxShadow: `0 0 10px ${color}`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/tarot-card.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/tarot-card.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tarot-card.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_c1 = StatBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "TarotCard");
__turbopack_context__.k.register(_c1, "StatBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/audio-symphony.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioSymphony",
    ()=>AudioSymphony
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/core/Global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$component$2f$analysis$2f$Analyser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/component/analysis/Analyser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$effect$2f$Reverb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/effect/Reverb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$effect$2f$FeedbackDelay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/effect/FeedbackDelay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$instrument$2f$PolySynth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/instrument/PolySynth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$instrument$2f$Synth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/instrument/Synth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$event$2f$Sequence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/event/Sequence.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AudioSymphony({ data }) {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const synthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sequenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initAudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioSymphony.useCallback[initAudio]": async ()=>{
            if (isInitialized) return;
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["start"]();
            // Create analyzer for visualization
            analyserRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$component$2f$analysis$2f$Analyser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analyser"]("fft", 64);
            // Create synth with effects
            const reverb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$effect$2f$Reverb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reverb"]({
                decay: 2,
                wet: 0.3
            }).toDestination();
            const delay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$effect$2f$FeedbackDelay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeedbackDelay"]("8n", 0.2).connect(reverb);
            synthRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$instrument$2f$PolySynth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolySynth"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$instrument$2f$Synth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Synth"], {
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 0.5
                }
            }).connect(analyserRef.current).connect(delay);
            setIsInitialized(true);
        }
    }["AudioSymphony.useCallback[initAudio]"], [
        isInitialized
    ]);
    const generateMelody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioSymphony.useCallback[generateMelody]": ()=>{
            if (!data.contributionCalendar) return [];
            const notes = [
                "C4",
                "D4",
                "E4",
                "F4",
                "G4",
                "A4",
                "B4",
                "C5",
                "D5",
                "E5"
            ];
            const melody = [];
            // Flatten all contribution days
            const allDays = data.contributionCalendar.weeks.flatMap({
                "AudioSymphony.useCallback[generateMelody].allDays": (week)=>week.contributionDays
            }["AudioSymphony.useCallback[generateMelody].allDays"]);
            // Sample every 7th day for a reasonable melody length
            for(let i = 0; i < allDays.length; i += 7){
                const day = allDays[i];
                if (day && day.contributionCount > 0) {
                    // Map contribution count to note index
                    const noteIndex = Math.min(day.contributionCount, notes.length - 1);
                    melody.push(notes[noteIndex]);
                } else {
                    melody.push(null); // Rest
                }
            }
            return melody;
        }
    }["AudioSymphony.useCallback[generateMelody]"], [
        data.contributionCalendar
    ]);
    const playMelody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioSymphony.useCallback[playMelody]": async ()=>{
            await initAudio();
            if (!synthRef.current) return;
            const melody = generateMelody();
            if (melody.length === 0) return;
            // Stop any existing sequence
            if (sequenceRef.current) {
                sequenceRef.current.stop();
                sequenceRef.current.dispose();
            }
            // Calculate BPM based on average contributions
            const avgContributions = data.totalContributions / 365;
            const bpm = Math.min(180, Math.max(80, 100 + avgContributions * 2));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTransport"]().bpm.value = bpm;
            let noteIndex = 0;
            sequenceRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$event$2f$Sequence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sequence"]({
                "AudioSymphony.useCallback[playMelody]": (time, note)=>{
                    if (note && synthRef.current) {
                        synthRef.current.triggerAttackRelease(note, "8n", time);
                    }
                    noteIndex++;
                    setProgress(noteIndex / melody.length * 100);
                    if (noteIndex >= melody.length) {
                        setTimeout({
                            "AudioSymphony.useCallback[playMelody]": ()=>{
                                setIsPlaying(false);
                                setProgress(0);
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTransport"]().stop();
                            }
                        }["AudioSymphony.useCallback[playMelody]"], 500);
                    }
                }
            }["AudioSymphony.useCallback[playMelody]"], melody, "8n");
            sequenceRef.current.start(0);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTransport"]().start();
            setIsPlaying(true);
        }
    }["AudioSymphony.useCallback[playMelody]"], [
        initAudio,
        generateMelody,
        data.totalContributions
    ]);
    const stopMelody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioSymphony.useCallback[stopMelody]": ()=>{
            if (sequenceRef.current) {
                sequenceRef.current.stop();
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTransport"]().stop();
            setIsPlaying(false);
            setProgress(0);
        }
    }["AudioSymphony.useCallback[stopMelody]"], []);
    const toggleMute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioSymphony.useCallback[toggleMute]": ()=>{
            if (synthRef.current) {
                synthRef.current.volume.value = isMuted ? 0 : -100;
            }
            setIsMuted(!isMuted);
        }
    }["AudioSymphony.useCallback[toggleMute]"], [
        isMuted
    ]);
    // Visualization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioSymphony.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const draw = {
                "AudioSymphony.useEffect.draw": ()=>{
                    const width = canvas.width;
                    const height = canvas.height;
                    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
                    ctx.fillRect(0, 0, width, height);
                    if (analyserRef.current && isPlaying) {
                        const values = analyserRef.current.getValue();
                        const barWidth = width / values.length;
                        values.forEach({
                            "AudioSymphony.useEffect.draw": (value, i)=>{
                                const normalizedValue = (value + 140) / 140 // Normalize dB values
                                ;
                                const barHeight = normalizedValue * height * 0.8;
                                // Create gradient colors
                                const hue = i / values.length * 60 + 280 // Purple to pink
                                ;
                                ctx.fillStyle = `hsla(${hue}, 100%, 60%, 0.8)`;
                                const x = i * barWidth;
                                const y = height - barHeight;
                                ctx.fillRect(x, y, barWidth - 2, barHeight);
                                // Add glow effect
                                ctx.shadowColor = `hsla(${hue}, 100%, 60%, 1)`;
                                ctx.shadowBlur = 10;
                            }
                        }["AudioSymphony.useEffect.draw"]);
                    } else {
                        // Idle animation
                        const time = Date.now() / 1000;
                        for(let i = 0; i < 32; i++){
                            const barHeight = (Math.sin(time * 2 + i * 0.3) + 1) * 20 + 10;
                            const hue = i / 32 * 60 + 280;
                            ctx.fillStyle = `hsla(${hue}, 100%, 60%, 0.3)`;
                            ctx.fillRect(i * (width / 32), height - barHeight, width / 32 - 2, barHeight);
                        }
                    }
                    ctx.shadowBlur = 0;
                    animationRef.current = requestAnimationFrame(draw);
                }
            }["AudioSymphony.useEffect.draw"];
            draw();
            return ({
                "AudioSymphony.useEffect": ()=>{
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            })["AudioSymphony.useEffect"];
        }
    }["AudioSymphony.useEffect"], [
        isPlaying
    ]);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioSymphony.useEffect": ()=>{
            return ({
                "AudioSymphony.useEffect": ()=>{
                    if (sequenceRef.current) {
                        sequenceRef.current.dispose();
                    }
                    if (synthRef.current) {
                        synthRef.current.dispose();
                    }
                    if (analyserRef.current) {
                        analyserRef.current.dispose();
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTransport"]().stop();
                }
            })["AudioSymphony.useEffect"];
        }
    }["AudioSymphony.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-2xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-[#00ffff]/30 bg-card/50 backdrop-blur-sm overflow-hidden neon-border-purple",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-48 bg-black",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            width: 600,
                            height: 192,
                            className: "w-full h-full"
                        }, void 0, false, {
                            fileName: "[project]/components/audio-symphony.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/components/audio-symphony.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/audio-symphony.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[#00ffff]",
                                    children: "Now Playing: Your 2025 Commit History"
                                }, void 0, false, {
                                    fileName: "[project]/components/audio-symphony.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground mt-1",
                                    children: [
                                        data.totalContributions,
                                        " contributions transformed into sound"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/audio-symphony.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/audio-symphony.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 rounded-full bg-muted overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] transition-all duration-200",
                                style: {
                                    width: `${progress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/audio-symphony.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/audio-symphony.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    onClick: stopMelody,
                                    disabled: !isPlaying,
                                    className: "border-[#00ffff]/50 hover:bg-[#00ffff]/10 disabled:opacity-30 bg-transparent",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/audio-symphony.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/audio-symphony.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    onClick: isPlaying ? stopMelody : playMelody,
                                    className: "w-16 h-16 rounded-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] hover:from-[#ff33ff] hover:to-[#33ffff] text-white",
                                    children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/audio-symphony.tsx",
                                        lineNumber: 251,
                                        columnNumber: 28
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-6 h-6 ml-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/audio-symphony.tsx",
                                        lineNumber: 251,
                                        columnNumber: 60
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/audio-symphony.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    onClick: toggleMute,
                                    className: "border-[#00ffff]/50 hover:bg-[#00ffff]/10 bg-transparent",
                                    children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/audio-symphony.tsx",
                                        lineNumber: 260,
                                        columnNumber: 26
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/audio-symphony.tsx",
                                        lineNumber: 260,
                                        columnNumber: 60
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/audio-symphony.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/audio-symphony.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/audio-symphony.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/audio-symphony.tsx",
            lineNumber: 210,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/audio-symphony.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_s(AudioSymphony, "09q/hcUe5o4fYb+N0JQkY5f7wLg=");
_c = AudioSymphony;
var _c;
__turbopack_context__.k.register(_c, "AudioSymphony");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/code-city.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeCity",
    ()=>CodeCity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Grid.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function Building({ repo, position, index, maxScore }) {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Calculate a score based on multiple factors
    const repoScore = repo.stars * 3 + repo.commits * 2 + repo.prs * 5 + repo.forks * 2;
    // Normalize height between 2 and 15 based on max score in the dataset
    const normalizedHeight = maxScore > 0 ? 2 + repoScore / maxScore * 13 : 2 + index % 5 * 2.5 // Fallback: vary height by index if no data
    ;
    const height = Math.max(2, Math.min(15, normalizedHeight));
    const brightness = Math.min(1, repo.prs / 10);
    // Color based on language or position for variety
    const languageColors = {
        JavaScript: "#f1e05a",
        TypeScript: "#3178c6",
        Python: "#3572A5",
        Java: "#b07219",
        Go: "#00ADD8",
        Rust: "#dea584",
        Ruby: "#ff00ff",
        PHP: "#4F5D95",
        "C++": "#f34b7d",
        C: "#00ffff",
        "C#": "#00ff88",
        Swift: "#F05138",
        Kotlin: "#A97BFF"
    };
    const defaultColors = [
        "#ff00ff",
        "#00ffff",
        "#00ff88",
        "#8800ff",
        "#ff8800"
    ];
    const color = repo.language && languageColors[repo.language] ? languageColors[repo.language] : defaultColors[index % defaultColors.length];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Building.useFrame": (state)=>{
            if (meshRef.current) {
                meshRef.current.position.y = height / 2 + Math.sin(state.clock.elapsedTime + index) * 0.1;
            }
        }
    }["Building.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: meshRef,
                position: [
                    0,
                    height / 2,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.5,
                            height,
                            1.5
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/code-city.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        emissive: color,
                        emissiveIntensity: 0.3 + brightness * 0.5,
                        metalness: 0.8,
                        roughness: 0.2
                    }, void 0, false, {
                        fileName: "[project]/components/code-city.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/code-city.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            Array.from({
                length: Math.floor(height / 2)
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0.8,
                        i * 2 + 1,
                        0
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                0.1,
                                0.3,
                                0.3
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/code-city.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#ffffff",
                            emissive: "#ffffff",
                            emissiveIntensity: brightness + 0.3
                        }, void 0, false, {
                            fileName: "[project]/components/code-city.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/code-city.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                position: [
                    0,
                    height + 0.5,
                    0
                ],
                fontSize: 0.3,
                color: color,
                anchorX: "center",
                anchorY: "middle",
                children: repo.name.slice(0, 10)
            }, void 0, false, {
                fileName: "[project]/components/code-city.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/code-city.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(Building, "/vg1AmA8+P3+Fj0/y210JTVKtL0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Building;
function CityScene({ repositories }) {
    _s1();
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const maxScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CityScene.useMemo[maxScore]": ()=>{
            return Math.max(1, ...repositories.map({
                "CityScene.useMemo[maxScore]": (repo)=>repo.stars * 3 + repo.commits * 2 + repo.prs * 5 + (repo.forks || 0) * 2
            }["CityScene.useMemo[maxScore]"]));
        }
    }["CityScene.useMemo[maxScore]"], [
        repositories
    ]);
    // Generate city layout
    const buildings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CityScene.useMemo[buildings]": ()=>{
            const positions = [];
            const gridSize = Math.ceil(Math.sqrt(repositories.length));
            const spacing = 4;
            repositories.forEach({
                "CityScene.useMemo[buildings]": (_, index)=>{
                    const x = index % gridSize * spacing - gridSize * spacing / 2;
                    const z = Math.floor(index / gridSize) * spacing - gridSize * spacing / 2;
                    positions.push([
                        x,
                        0,
                        z
                    ]);
                }
            }["CityScene.useMemo[buildings]"]);
            return positions;
        }
    }["CityScene.useMemo[buildings]"], [
        repositories
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CityScene.useFrame": (state)=>{
            if (gridRef.current) {
                gridRef.current.rotation.y = state.clock.elapsedTime * 0.05;
            }
        }
    }["CityScene.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.2
            }, void 0, false, {
                fileName: "[project]/components/code-city.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    10,
                    20,
                    10
                ],
                intensity: 1,
                color: "#ff00ff"
            }, void 0, false, {
                fileName: "[project]/components/code-city.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    -10,
                    20,
                    -10
                ],
                intensity: 1,
                color: "#00ffff"
            }, void 0, false, {
                fileName: "[project]/components/code-city.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                position: [
                    0,
                    30,
                    0
                ],
                angle: 0.5,
                penumbra: 1,
                intensity: 0.5,
                color: "#8800ff"
            }, void 0, false, {
                fileName: "[project]/components/code-city.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
                position: [
                    0,
                    -0.01,
                    0
                ],
                args: [
                    50,
                    50
                ],
                cellSize: 2,
                cellThickness: 0.5,
                cellColor: "#ff00ff",
                sectionSize: 10,
                sectionThickness: 1,
                sectionColor: "#8800ff",
                fadeDistance: 50,
                fadeStrength: 1,
                followCamera: false
            }, void 0, false, {
                fileName: "[project]/components/code-city.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ref: gridRef,
                children: repositories.map((repo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Building, {
                        repo: repo,
                        position: buildings[index],
                        index: index,
                        maxScore: maxScore
                    }, repo.name, false, {
                        fileName: "[project]/components/code-city.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/code-city.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                attach: "fog",
                args: [
                    "#0a0a1a",
                    20,
                    60
                ]
            }, void 0, false, {
                fileName: "[project]/components/code-city.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(CityScene, "nEkS6lzXCkPJ2ZJ+L6WoS71ofrI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = CityScene;
function CodeCity({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-[#00ff88]/30 bg-card/50 backdrop-blur-sm overflow-hidden neon-border-green",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[400px] md:h-[500px] bg-[#0a0a1a]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                        camera: {
                            position: [
                                20,
                                15,
                                20
                            ],
                            fov: 60
                        },
                        gl: {
                            antialias: true
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CityScene, {
                                repositories: data.repositories
                            }, void 0, false, {
                                fileName: "[project]/components/code-city.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                                enablePan: true,
                                enableZoom: true,
                                enableRotate: true,
                                autoRotate: true,
                                autoRotateSpeed: 0.5,
                                maxPolarAngle: Math.PI / 2.2,
                                minDistance: 10,
                                maxDistance: 50
                            }, void 0, false, {
                                fileName: "[project]/components/code-city.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/code-city.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/code-city.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-[#00ff88]/30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-6 bg-gradient-to-t from-[#ff00ff]/50 to-[#ff00ff]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/code-city.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Height = Stars + Commits + PRs"
                                    }, void 0, false, {
                                        fileName: "[project]/components/code-city.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/code-city.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/code-city.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Windows = Activity"
                                    }, void 0, false, {
                                        fileName: "[project]/components/code-city.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/code-city.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#00ff88]",
                                    children: "Drag to explore"
                                }, void 0, false, {
                                    fileName: "[project]/components/code-city.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/code-city.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/code-city.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/code-city.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/code-city.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/code-city.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_c2 = CodeCity;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Building");
__turbopack_context__.k.register(_c1, "CityScene");
__turbopack_context__.k.register(_c2, "CodeCity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/video-generator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoGenerator",
    ()=>VideoGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function VideoGenerator({ data, vibeMode, onClose }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoUrl, setVideoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const WIDTH = 1080;
    const HEIGHT = 1920;
    const FPS = 30;
    const DURATION = 15 // seconds
    ;
    const starsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Initialize stars
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoGenerator.useEffect": ()=>{
            starsRef.current = Array.from({
                length: 200
            }, {
                "VideoGenerator.useEffect": ()=>({
                        x: Math.random() * WIDTH,
                        y: Math.random() * HEIGHT,
                        size: Math.random() * 2 + 0.5,
                        speed: Math.random() * 2 + 0.5,
                        opacity: Math.random() * 0.8 + 0.2
                    })
            }["VideoGenerator.useEffect"]);
        }
    }["VideoGenerator.useEffect"], []);
    const addParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoGenerator.useCallback[addParticles]": (x, y, count, color)=>{
            for(let i = 0; i < count; i++){
                particlesRef.current.push({
                    x,
                    y,
                    vx: (Math.random() - 0.5) * 10,
                    vy: (Math.random() - 0.5) * 10,
                    life: 1,
                    maxLife: 1,
                    color,
                    size: Math.random() * 4 + 2
                });
            }
        }
    }["VideoGenerator.useCallback[addParticles]"], []);
    const drawFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoGenerator.useCallback[drawFrame]": (ctx, frame)=>{
            const totalFrames = DURATION * FPS;
            const progress = frame / totalFrames;
            const scene = Math.floor(progress * 6) // 6 scenes
            ;
            // Clear and draw space background
            const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
            gradient.addColorStop(0, "#0a0a0a");
            gradient.addColorStop(0.5, "#1a0a2e");
            gradient.addColorStop(1, "#0a0a0a");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, WIDTH, HEIGHT);
            // Update and draw stars
            starsRef.current.forEach({
                "VideoGenerator.useCallback[drawFrame]": (star)=>{
                    star.y += star.speed;
                    if (star.y > HEIGHT) {
                        star.y = 0;
                        star.x = Math.random() * WIDTH;
                    }
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                    ctx.fill();
                }
            }["VideoGenerator.useCallback[drawFrame]"]);
            // Update and draw particles
            particlesRef.current = particlesRef.current.filter({
                "VideoGenerator.useCallback[drawFrame]": (p)=>p.life > 0
            }["VideoGenerator.useCallback[drawFrame]"]);
            particlesRef.current.forEach({
                "VideoGenerator.useCallback[drawFrame]": (p)=>{
                    p.x += p.vx;
                    p.y += p.vy;
                    p.life -= 0.02;
                    const radius = Math.max(0, p.size * p.life);
                    if (radius > 0) {
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                        ctx.fillStyle = p.color.replace("1)", `${Math.max(0, p.life)})`);
                        ctx.fill();
                    }
                }
            }["VideoGenerator.useCallback[drawFrame]"]);
            // Scene-specific content
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            const sceneProgress = progress * 6 % 1;
            if (scene === 0) {
                // Scene 1: Launch - Logo fade in
                const alpha = Math.min(sceneProgress * 2, 1);
                ctx.globalAlpha = alpha;
                // GitFM Logo
                ctx.font = "bold 120px 'Segoe UI', sans-serif";
                const logoGradient = ctx.createLinearGradient(WIDTH / 2 - 200, HEIGHT / 2, WIDTH / 2 + 200, HEIGHT / 2);
                logoGradient.addColorStop(0, "#ff00ff");
                logoGradient.addColorStop(1, "#00ffff");
                ctx.fillStyle = logoGradient;
                ctx.fillText("GitFM", WIDTH / 2, HEIGHT / 2 - 100);
                ctx.font = "48px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffd700";
                ctx.fillText("2025", WIDTH / 2, HEIGHT / 2);
                ctx.font = "36px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffffff";
                ctx.fillText(`Mission Report: @${data.user.login}`, WIDTH / 2, HEIGHT / 2 + 100);
                ctx.globalAlpha = 1;
                if (sceneProgress > 0.7) {
                    addParticles(WIDTH / 2, HEIGHT / 2, 5, "rgba(255, 0, 255, 1)");
                }
            } else if (scene === 1) {
                // Scene 2: Commits - Rocket launch
                const rocketY = HEIGHT - sceneProgress * HEIGHT * 0.6;
                // Draw rocket
                ctx.font = "100px 'Segoe UI', sans-serif";
                ctx.fillText("🚀", WIDTH / 2, rocketY);
                // Exhaust particles
                if (frame % 2 === 0) {
                    addParticles(WIDTH / 2, rocketY + 80, 3, "rgba(255, 136, 0, 1)");
                }
                // Stats
                ctx.font = "bold 72px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#00ff88";
                const displayCommits = Math.floor(data.totalCommits * sceneProgress);
                ctx.fillText(`${displayCommits.toLocaleString()}`, WIDTH / 2, HEIGHT / 2 - 50);
                ctx.font = "36px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffffff";
                ctx.fillText("COMMITS", WIDTH / 2, HEIGHT / 2 + 20);
                ctx.font = "28px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#888888";
                ctx.fillText("Altitude Reached", WIDTH / 2, HEIGHT / 2 + 70);
            } else if (scene === 2) {
                // Scene 3: PRs, Issues, Stars - Orbiting
                const centerX = WIDTH / 2;
                const centerY = HEIGHT / 2;
                const orbitRadius = 250;
                // Draw satellite
                ctx.font = "80px 'Segoe UI', sans-serif";
                ctx.fillText("🛰️", centerX, centerY);
                // Orbiting stats
                const stats = [
                    {
                        emoji: "⭐",
                        value: data.totalStarsEarned,
                        label: "Stars",
                        color: "#ffd700"
                    },
                    {
                        emoji: "🔀",
                        value: data.totalPRsMerged,
                        label: "PRs",
                        color: "#ff00ff"
                    },
                    {
                        emoji: "🐛",
                        value: data.totalIssuesOpened,
                        label: "Issues",
                        color: "#00ffff"
                    }
                ];
                stats.forEach({
                    "VideoGenerator.useCallback[drawFrame]": (stat, i)=>{
                        const angle = sceneProgress * Math.PI * 4 + i * (Math.PI * 2) / 3;
                        const x = centerX + Math.cos(angle) * orbitRadius;
                        const y = centerY + Math.sin(angle) * orbitRadius * 0.5;
                        ctx.font = "50px 'Segoe UI', sans-serif";
                        ctx.fillText(stat.emoji, x, y - 30);
                        ctx.font = "bold 42px 'Segoe UI', sans-serif";
                        ctx.fillStyle = stat.color;
                        ctx.fillText(stat.value.toLocaleString(), x, y + 30);
                        ctx.font = "24px 'Segoe UI', sans-serif";
                        ctx.fillStyle = "#ffffff";
                        ctx.fillText(stat.label, x, y + 70);
                    }
                }["VideoGenerator.useCallback[drawFrame]"]);
            } else if (scene === 3) {
                // Scene 4: Languages as constellations
                ctx.font = "bold 48px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#00ffff";
                ctx.fillText("TOP LANGUAGES", WIDTH / 2, 300);
                const topLangs = data.languages.slice(0, 5);
                const totalSize = topLangs.reduce({
                    "VideoGenerator.useCallback[drawFrame].totalSize": (sum, l)=>sum + l.size
                }["VideoGenerator.useCallback[drawFrame].totalSize"], 0);
                topLangs.forEach({
                    "VideoGenerator.useCallback[drawFrame]": (lang, i)=>{
                        const y = 450 + i * 120;
                        const percentage = totalSize > 0 ? lang.size / totalSize * 100 : 0;
                        const barWidth = percentage / 100 * 600 * Math.min(sceneProgress * 2, 1);
                        // Language bar
                        ctx.fillStyle = lang.color || "#888888";
                        ctx.fillRect(WIDTH / 2 - 300, y, barWidth, 40);
                        // Language name
                        ctx.font = "bold 32px 'Segoe UI', sans-serif";
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "left";
                        ctx.fillText(lang.name, WIDTH / 2 - 300, y - 20);
                        // Percentage
                        ctx.textAlign = "right";
                        ctx.fillText(`${percentage.toFixed(1)}%`, WIDTH / 2 + 300, y + 30);
                        ctx.textAlign = "center";
                    }
                }["VideoGenerator.useCallback[drawFrame]"]);
                // Constellation effect
                if (frame % 10 === 0) {
                    addParticles(Math.random() * WIDTH, Math.random() * HEIGHT, 2, "rgba(0, 255, 255, 1)");
                }
            } else if (scene === 4) {
                // Scene 5: Developer class reveal
                const classes = [
                    "Code Voyager",
                    "Binary Architect",
                    "Quantum Coder",
                    "Neural Navigator",
                    "Cosmic Creator"
                ];
                const classIndex = Math.min(Math.floor(data.totalContributions / 200), classes.length - 1);
                const developerClass = classes[classIndex];
                ctx.font = "bold 42px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffd700";
                ctx.fillText("DEVELOPER CLASS", WIDTH / 2, 400);
                // Class name with glow effect
                const glowIntensity = Math.sin(sceneProgress * Math.PI * 4) * 0.3 + 0.7;
                ctx.shadowColor = "#ff00ff";
                ctx.shadowBlur = 30 * glowIntensity;
                ctx.font = "bold 72px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ff00ff";
                ctx.fillText(developerClass, WIDTH / 2, HEIGHT / 2);
                ctx.shadowBlur = 0;
                // Streak stats
                ctx.font = "bold 48px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#00ff88";
                ctx.fillText(`🔥 ${data.longestStreak} Day Streak`, WIDTH / 2, HEIGHT / 2 + 150);
                ctx.font = "36px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffffff";
                ctx.fillText(`${data.totalContributions.toLocaleString()} Total Contributions`, WIDTH / 2, HEIGHT / 2 + 220);
                // Achievement particles
                if (sceneProgress > 0.5 && frame % 5 === 0) {
                    addParticles(WIDTH / 2, HEIGHT / 2, 10, "rgba(255, 215, 0, 1)");
                }
            } else if (scene === 5) {
                // Scene 6: Finale - CTA
                const scale = 1 + Math.sin(sceneProgress * Math.PI * 2) * 0.05;
                ctx.save();
                ctx.translate(WIDTH / 2, HEIGHT / 2 - 100);
                ctx.scale(scale, scale);
                ctx.font = "bold 64px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffffff";
                ctx.fillText("Generate Yours", 0, -50);
                const ctaGradient = ctx.createLinearGradient(-200, 0, 200, 0);
                ctaGradient.addColorStop(0, "#ff00ff");
                ctaGradient.addColorStop(1, "#00ffff");
                ctx.fillStyle = ctaGradient;
                ctx.font = "bold 96px 'Segoe UI', sans-serif";
                ctx.fillText("gitfm.com", 0, 50);
                ctx.restore();
                // Watermark
                ctx.font = "24px 'Segoe UI', sans-serif";
                ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
                ctx.fillText("gitfm.com", WIDTH / 2, HEIGHT - 100);
                // Explosion particles
                if (sceneProgress < 0.3 && frame % 2 === 0) {
                    addParticles(WIDTH / 2, HEIGHT / 2, 20, "rgba(255, 0, 255, 1)");
                    addParticles(WIDTH / 2, HEIGHT / 2, 20, "rgba(0, 255, 255, 1)");
                }
            }
            // Always show watermark
            ctx.font = "20px 'Segoe UI', sans-serif";
            ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
            ctx.textAlign = "right";
            ctx.fillText("gitfm.com", WIDTH - 40, HEIGHT - 40);
            ctx.textAlign = "center";
            // CRT scanlines effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
            for(let y = 0; y < HEIGHT; y += 4){
                ctx.fillRect(0, y, WIDTH, 2);
            }
        }
    }["VideoGenerator.useCallback[drawFrame]"], [
        data,
        addParticles
    ]);
    const generateVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoGenerator.useCallback[generateVideo]": async ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            setIsGenerating(true);
            setProgress(0);
            chunksRef.current = [];
            const ctx = canvas.getContext("2d");
            const stream = canvas.captureStream(FPS);
            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: "video/webm;codecs=vp9",
                videoBitsPerSecond: 8000000
            });
            mediaRecorderRef.current = mediaRecorder;
            mediaRecorder.ondataavailable = ({
                "VideoGenerator.useCallback[generateVideo]": (e)=>{
                    if (e.data.size > 0) {
                        chunksRef.current.push(e.data);
                    }
                }
            })["VideoGenerator.useCallback[generateVideo]"];
            mediaRecorder.onstop = ({
                "VideoGenerator.useCallback[generateVideo]": ()=>{
                    const blob = new Blob(chunksRef.current, {
                        type: "video/webm"
                    });
                    const url = URL.createObjectURL(blob);
                    setVideoUrl(url);
                    setIsGenerating(false);
                }
            })["VideoGenerator.useCallback[generateVideo]"];
            mediaRecorder.start();
            const totalFrames = DURATION * FPS;
            for(let frame = 0; frame <= totalFrames; frame++){
                drawFrame(ctx, frame);
                setProgress(frame / totalFrames * 100);
                await new Promise({
                    "VideoGenerator.useCallback[generateVideo]": (r)=>setTimeout(r, 1000 / FPS / 2)
                }["VideoGenerator.useCallback[generateVideo]"]); // Faster than realtime
            }
            mediaRecorder.stop();
        }
    }["VideoGenerator.useCallback[generateVideo]"], [
        drawFrame
    ]);
    const playPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoGenerator.useCallback[playPreview]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            setIsPlaying(true);
            const ctx = canvas.getContext("2d");
            let frame = 0;
            const totalFrames = DURATION * FPS;
            const animate = {
                "VideoGenerator.useCallback[playPreview].animate": ()=>{
                    drawFrame(ctx, frame);
                    frame++;
                    if (frame <= totalFrames) {
                        animationRef.current = requestAnimationFrame(animate);
                    } else {
                        setIsPlaying(false);
                    }
                }
            }["VideoGenerator.useCallback[playPreview].animate"];
            animate();
        }
    }["VideoGenerator.useCallback[playPreview]"], [
        drawFrame
    ]);
    const downloadVideo = ()=>{
        if (!videoUrl) return;
        const link = document.createElement("a");
        link.href = videoUrl;
        link.download = `gitfm-${data.user.login}-2025.webm`;
        link.click();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoGenerator.useEffect": ()=>{
            return ({
                "VideoGenerator.useEffect": ()=>{
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                    if (videoUrl) {
                        URL.revokeObjectURL(videoUrl);
                    }
                }
            })["VideoGenerator.useEffect"];
        }
    }["VideoGenerator.useEffect"], [
        videoUrl
    ]);
    // Initial preview frame
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoGenerator.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext("2d");
                drawFrame(ctx, 0);
            }
        }
    }["VideoGenerator.useEffect"], [
        drawFrame
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-card border border-[#ff00ff]/50 rounded-2xl p-6 max-w-lg mx-4 relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-4 right-4 text-muted-foreground hover:text-foreground",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/components/video-generator.tsx",
                        lineNumber: 421,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/video-generator.tsx",
                    lineNumber: 417,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-center mb-4 neon-pink",
                    children: "🚀 Create Your Video"
                }, void 0, false, {
                    fileName: "[project]/components/video-generator.tsx",
                    lineNumber: 424,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-muted-foreground text-sm mb-4",
                    children: "Generate a cinematic recap of your 2025 GitHub journey!"
                }, void 0, false, {
                    fileName: "[project]/components/video-generator.tsx",
                    lineNumber: 428,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-lg overflow-hidden border border-border/50 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            width: WIDTH,
                            height: HEIGHT,
                            className: "w-full",
                            style: {
                                maxHeight: "400px",
                                objectFit: "contain"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/video-generator.tsx",
                            lineNumber: 434,
                            columnNumber: 21
                        }, this),
                        isGenerating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/70 flex flex-col items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-10 h-10 text-[#ff00ff] animate-spin mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/video-generator.tsx",
                                    lineNumber: 443,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-bold",
                                    children: "Generating Video..."
                                }, void 0, false, {
                                    fileName: "[project]/components/video-generator.tsx",
                                    lineNumber: 444,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-48 h-2 bg-gray-700 rounded-full mt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-full transition-all",
                                        style: {
                                            width: `${progress}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/video-generator.tsx",
                                        lineNumber: 446,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/video-generator.tsx",
                                    lineNumber: 445,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 mt-1",
                                    children: [
                                        Math.round(progress),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/video-generator.tsx",
                                    lineNumber: 451,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/video-generator.tsx",
                            lineNumber: 442,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/video-generator.tsx",
                    lineNumber: 433,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: !videoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: playPreview,
                                disabled: isPlaying || isGenerating,
                                variant: "outline",
                                className: "flex-1 border-[#00ffff]/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/video-generator.tsx",
                                        lineNumber: 466,
                                        columnNumber: 33
                                    }, this),
                                    "Preview"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/video-generator.tsx",
                                lineNumber: 460,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: generateVideo,
                                disabled: isGenerating,
                                className: "flex-1 bg-gradient-to-r from-[#ff00ff] to-[#8800ff] hover:opacity-90",
                                children: isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 mr-2 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/video-generator.tsx",
                                            lineNumber: 476,
                                            columnNumber: 41
                                        }, this),
                                        "Generating..."
                                    ]
                                }, void 0, true) : "Generate Video"
                            }, void 0, false, {
                                fileName: "[project]/components/video-generator.tsx",
                                lineNumber: 469,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setVideoUrl(null),
                                variant: "outline",
                                className: "flex-1 border-border/50",
                                children: "Create New"
                            }, void 0, false, {
                                fileName: "[project]/components/video-generator.tsx",
                                lineNumber: 486,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: downloadVideo,
                                className: "flex-1 bg-gradient-to-r from-[#00ff88] to-[#00ffff] text-black font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/video-generator.tsx",
                                        lineNumber: 497,
                                        columnNumber: 33
                                    }, this),
                                    "Download"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/video-generator.tsx",
                                lineNumber: 493,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/components/video-generator.tsx",
                    lineNumber: 457,
                    columnNumber: 17
                }, this),
                videoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xs text-muted-foreground mt-3",
                    children: "✨ Video ready! Share it on TikTok, Reels, or Stories!"
                }, void 0, false, {
                    fileName: "[project]/components/video-generator.tsx",
                    lineNumber: 505,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/video-generator.tsx",
            lineNumber: 416,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/video-generator.tsx",
        lineNumber: 415,
        columnNumber: 9
    }, this);
}
_s(VideoGenerator, "M0C2CY8OJxTo1bwtCVkRUWwiQiE=");
_c = VideoGenerator;
var _c;
__turbopack_context__.k.register(_c, "VideoGenerator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/video-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoSection",
    ()=>VideoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function VideoSection({ data, vibeMode }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoUrl, setVideoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const WIDTH = 1080;
    const HEIGHT = 1920;
    const FPS = 30;
    const DURATION = 25 // 25 seconds for full story
    ;
    const starsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Initialize 3D stars for warp effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoSection.useEffect": ()=>{
            starsRef.current = Array.from({
                length: 400
            }, {
                "VideoSection.useEffect": ()=>({
                        x: (Math.random() - 0.5) * WIDTH * 2,
                        y: (Math.random() - 0.5) * HEIGHT * 2,
                        z: Math.random() * 1000,
                        size: Math.random() * 2 + 1
                    })
            }["VideoSection.useEffect"]);
        }
    }["VideoSection.useEffect"], []);
    const addParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoSection.useCallback[addParticles]": (x, y, count, color, spread = 10)=>{
            for(let i = 0; i < count; i++){
                particlesRef.current.push({
                    x,
                    y,
                    vx: (Math.random() - 0.5) * spread,
                    vy: (Math.random() - 0.5) * spread,
                    life: 1,
                    color,
                    size: Math.random() * 5 + 2
                });
            }
        }
    }["VideoSection.useCallback[addParticles]"], []);
    const easeOutCubic = (t)=>1 - Math.pow(1 - t, 3);
    const easeInOutSine = (t)=>-(Math.cos(Math.PI * t) - 1) / 2;
    const drawFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoSection.useCallback[drawFrame]": (ctx, frame)=>{
            const totalFrames = DURATION * FPS;
            const progress = frame / totalFrames;
            // Speed changes during journey
            const warpSpeed = progress < 0.1 ? progress * 10 : progress > 0.9 ? (1 - progress) * 10 : 1;
            // Deep space gradient background
            const bgGradient = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, 0, WIDTH / 2, HEIGHT / 2, HEIGHT);
            bgGradient.addColorStop(0, "#0a0015");
            bgGradient.addColorStop(0.3, "#050010");
            bgGradient.addColorStop(1, "#000005");
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, WIDTH, HEIGHT);
            // Nebula clouds moving
            const nebulaOffset = frame * 0.5;
            ctx.globalAlpha = 0.15;
            for(let i = 0; i < 3; i++){
                const nebula = ctx.createRadialGradient(WIDTH * (0.2 + i * 0.3) + Math.sin(nebulaOffset * 0.01 + i) * 100, HEIGHT * (0.3 + i * 0.2) + Math.cos(nebulaOffset * 0.01 + i) * 100, 0, WIDTH * (0.2 + i * 0.3), HEIGHT * (0.3 + i * 0.2), 300 + i * 100);
                const hue = (frame * 0.3 + i * 120) % 360;
                nebula.addColorStop(0, `hsla(${hue}, 70%, 40%, 0.5)`);
                nebula.addColorStop(1, "transparent");
                ctx.fillStyle = nebula;
                ctx.fillRect(0, 0, WIDTH, HEIGHT);
            }
            ctx.globalAlpha = 1;
            // 3D Star warp effect
            const centerX = WIDTH / 2;
            const centerY = HEIGHT / 2;
            starsRef.current.forEach({
                "VideoSection.useCallback[drawFrame]": (star)=>{
                    star.z -= 8 * warpSpeed;
                    if (star.z <= 0) {
                        star.z = 1000;
                        star.x = (Math.random() - 0.5) * WIDTH * 2;
                        star.y = (Math.random() - 0.5) * HEIGHT * 2;
                    }
                    const perspective = 500 / star.z;
                    const screenX = centerX + star.x * perspective;
                    const screenY = centerY + star.y * perspective;
                    const starSize = star.size * perspective * (warpSpeed * 0.5 + 0.5);
                    if (screenX > 0 && screenX < WIDTH && screenY > 0 && screenY < HEIGHT) {
                        // Draw star with trail when warping
                        if (warpSpeed > 0.5) {
                            const trailLength = starSize * 3 * warpSpeed;
                            const gradient = ctx.createLinearGradient(screenX, screenY, screenX - (screenX - centerX) * 0.1, screenY - (screenY - centerY) * 0.1);
                            gradient.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, perspective)})`);
                            gradient.addColorStop(1, "transparent");
                            ctx.strokeStyle = gradient;
                            ctx.lineWidth = starSize;
                            ctx.beginPath();
                            ctx.moveTo(screenX, screenY);
                            ctx.lineTo(screenX - (screenX - centerX) * 0.05 * warpSpeed, screenY - (screenY - centerY) * 0.05 * warpSpeed);
                            ctx.stroke();
                        }
                        ctx.beginPath();
                        ctx.arc(screenX, screenY, Math.max(0.5, starSize), 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, perspective * 2)})`;
                        ctx.fill();
                    }
                }
            }["VideoSection.useCallback[drawFrame]"]);
            // Update particles
            particlesRef.current = particlesRef.current.filter({
                "VideoSection.useCallback[drawFrame]": (p)=>p.life > 0.01
            }["VideoSection.useCallback[drawFrame]"]);
            particlesRef.current.forEach({
                "VideoSection.useCallback[drawFrame]": (p)=>{
                    p.x += p.vx;
                    p.y += p.vy;
                    p.vx *= 0.96;
                    p.vy *= 0.96;
                    p.life -= 0.02;
                    const radius = Math.max(0.1, p.size * p.life);
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = p.color.replace("1)", `${p.life})`);
                    ctx.fill();
                }
            }["VideoSection.useCallback[drawFrame]"]);
            // Astronaut position - floating animation
            const astronautX = WIDTH / 2 + Math.sin(frame * 0.05) * 30;
            const astronautY = HEIGHT / 2 + 200 + Math.cos(frame * 0.03) * 20;
            const astronautRotation = Math.sin(frame * 0.02) * 0.1;
            // Draw astronaut with glow
            ctx.save();
            ctx.translate(astronautX, astronautY);
            ctx.rotate(astronautRotation);
            // Astronaut glow
            const astroGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, 150);
            astroGlow.addColorStop(0, "rgba(100, 200, 255, 0.3)");
            astroGlow.addColorStop(1, "transparent");
            ctx.fillStyle = astroGlow;
            ctx.beginPath();
            ctx.arc(0, 0, 150, 0, Math.PI * 2);
            ctx.fill();
            // Astronaut emoji
            ctx.font = "150px 'Segoe UI', sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("👨‍🚀", 0, 0);
            // Jetpack particles
            if (frame % 3 === 0) {
                addParticles(astronautX, astronautY + 70, 3, "rgba(100, 200, 255, 1)", 8);
            }
            ctx.restore();
            // Text settings
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            // Story segments based on progress
            const storyPhase = Math.floor(progress * 10) // 10 phases
            ;
            // Phase 0-1: Launch & Introduction
            if (progress < 0.12) {
                const alpha = progress < 0.02 ? progress * 50 : progress > 0.10 ? (0.12 - progress) * 50 : 1;
                ctx.globalAlpha = alpha;
                // Mission start text
                ctx.font = "bold 72px 'Segoe UI', sans-serif";
                ctx.shadowColor = "#00ffff";
                ctx.shadowBlur = 30;
                ctx.fillStyle = "#ffffff";
                ctx.fillText("MISSION INITIATED", WIDTH / 2, 400);
                ctx.shadowBlur = 0;
                ctx.font = "48px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#00ffff";
                ctx.fillText(`Captain @${data.user.login}`, WIDTH / 2, 500);
                ctx.font = "32px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#888888";
                ctx.fillText("Launching into the code universe...", WIDTH / 2, 580);
                // GitFM badge
                ctx.font = "bold 100px 'Segoe UI', sans-serif";
                const logoGrad = ctx.createLinearGradient(WIDTH / 2 - 200, 250, WIDTH / 2 + 200, 250);
                logoGrad.addColorStop(0, "#ff00ff");
                logoGrad.addColorStop(1, "#00ffff");
                ctx.fillStyle = logoGrad;
                ctx.fillText("GitFM", WIDTH / 2, 250);
                ctx.globalAlpha = 1;
            } else if (progress >= 0.12 && progress < 0.24) {
                const phaseProgress = (progress - 0.12) / 0.12;
                const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : phaseProgress > 0.9 ? (1 - phaseProgress) * 10 : 1;
                ctx.globalAlpha = alpha;
                // Floating commit crystals
                for(let i = 0; i < 5; i++){
                    const crystalX = WIDTH * 0.2 + i * WIDTH * 0.15;
                    const crystalY = 350 + Math.sin(frame * 0.1 + i) * 30;
                    ctx.font = "60px 'Segoe UI', sans-serif";
                    ctx.fillText("💎", crystalX, crystalY);
                }
                ctx.font = "bold 48px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffd700";
                ctx.fillText("DISCOVERY: COMMIT CRYSTALS", WIDTH / 2, 500);
                // Big number with animation
                const displayCommits = Math.floor(data.totalCommits * easeOutCubic(phaseProgress));
                ctx.font = "bold 140px 'Segoe UI', sans-serif";
                ctx.shadowColor = "#00ff88";
                ctx.shadowBlur = 40;
                ctx.fillStyle = "#00ff88";
                ctx.fillText(displayCommits.toLocaleString(), WIDTH / 2, 700);
                ctx.shadowBlur = 0;
                ctx.font = "42px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffffff";
                ctx.fillText("COMMITS COLLECTED", WIDTH / 2, 800);
                ctx.globalAlpha = 1;
            } else if (progress >= 0.24 && progress < 0.36) {
                const phaseProgress = (progress - 0.24) / 0.12;
                const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : phaseProgress > 0.9 ? (1 - phaseProgress) * 10 : 1;
                ctx.globalAlpha = alpha;
                // Draw constellation pattern
                const constellationPoints = [
                    {
                        x: 300,
                        y: 300
                    },
                    {
                        x: 500,
                        y: 350
                    },
                    {
                        x: 700,
                        y: 280
                    },
                    {
                        x: 400,
                        y: 450
                    },
                    {
                        x: 600,
                        y: 480
                    },
                    {
                        x: 800,
                        y: 400
                    }
                ];
                ctx.strokeStyle = "rgba(0, 255, 255, 0.5)";
                ctx.lineWidth = 2;
                ctx.beginPath();
                constellationPoints.forEach({
                    "VideoSection.useCallback[drawFrame]": (point, i)=>{
                        if (i === 0) ctx.moveTo(point.x, point.y);
                        else ctx.lineTo(point.x, point.y);
                    }
                }["VideoSection.useCallback[drawFrame]"]);
                ctx.stroke();
                constellationPoints.forEach({
                    "VideoSection.useCallback[drawFrame]": (point, i)=>{
                        const delay = i * 0.1;
                        if (phaseProgress > delay) {
                            ctx.beginPath();
                            ctx.arc(point.x, point.y, 8 + Math.sin(frame * 0.1 + i) * 3, 0, Math.PI * 2);
                            ctx.fillStyle = "#00ffff";
                            ctx.fill();
                        }
                    }
                }["VideoSection.useCallback[drawFrame]"]);
                ctx.font = "bold 48px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#00ffff";
                ctx.fillText("CONTRIBUTION CONSTELLATION", WIDTH / 2, 600);
                const displayContribs = Math.floor(data.totalContributions * easeOutCubic(phaseProgress));
                ctx.font = "bold 120px 'Segoe UI', sans-serif";
                ctx.shadowColor = "#00ffff";
                ctx.shadowBlur = 30;
                ctx.fillStyle = "#ffffff";
                ctx.fillText(displayContribs.toLocaleString(), WIDTH / 2, 750);
                ctx.shadowBlur = 0;
                ctx.font = "36px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#888888";
                ctx.fillText("stars mapped in the code galaxy", WIDTH / 2, 850);
                ctx.globalAlpha = 1;
            } else if (progress >= 0.36 && progress < 0.50) {
                const phaseProgress = (progress - 0.36) / 0.14;
                const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : phaseProgress > 0.9 ? (1 - phaseProgress) * 10 : 1;
                ctx.globalAlpha = alpha;
                ctx.font = "bold 48px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffd700";
                ctx.fillText("🏆 ACHIEVEMENTS UNLOCKED", WIDTH / 2, 320);
                const badges = [
                    {
                        emoji: "⭐",
                        value: data.totalStarsEarned,
                        label: "Stars",
                        color: "#ffd700",
                        y: 480
                    },
                    {
                        emoji: "🔀",
                        value: data.totalPRsMerged + data.totalPRsOpened,
                        label: "Pull Requests",
                        color: "#ff00ff",
                        y: 650
                    },
                    {
                        emoji: "🐛",
                        value: data.totalIssuesOpened,
                        label: "Issues",
                        color: "#00ffff",
                        y: 820
                    },
                    {
                        emoji: "🍴",
                        value: data.totalForksEarned,
                        label: "Forks",
                        color: "#ff6600",
                        y: 990
                    }
                ];
                badges.forEach({
                    "VideoSection.useCallback[drawFrame]": (badge, i)=>{
                        const delay = i * 0.15;
                        const badgeProgress = Math.max(0, (phaseProgress - delay) * 3);
                        if (badgeProgress > 0) {
                            const scale = easeOutCubic(Math.min(1, badgeProgress));
                            ctx.save();
                            ctx.translate(WIDTH / 2, badge.y);
                            ctx.scale(scale, scale);
                            // Badge background
                            ctx.fillStyle = "rgba(20, 20, 40, 0.8)";
                            ctx.beginPath();
                            ctx.roundRect(-350, -60, 700, 120, 20);
                            ctx.fill();
                            ctx.strokeStyle = badge.color;
                            ctx.lineWidth = 3;
                            ctx.stroke();
                            // Emoji
                            ctx.font = "60px 'Segoe UI', sans-serif";
                            ctx.fillText(badge.emoji, -250, 10);
                            // Value
                            ctx.font = "bold 56px 'Segoe UI', sans-serif";
                            ctx.fillStyle = badge.color;
                            ctx.textAlign = "left";
                            const displayVal = Math.floor(badge.value * easeOutCubic(Math.min(1, badgeProgress)));
                            ctx.fillText(displayVal.toLocaleString(), -180, 10);
                            // Label
                            ctx.font = "32px 'Segoe UI', sans-serif";
                            ctx.fillStyle = "#aaaaaa";
                            ctx.textAlign = "right";
                            ctx.fillText(badge.label, 320, 10);
                            ctx.textAlign = "center";
                            ctx.restore();
                        }
                    }
                }["VideoSection.useCallback[drawFrame]"]);
                ctx.globalAlpha = 1;
            } else if (progress >= 0.50 && progress < 0.64) {
                const phaseProgress = (progress - 0.50) / 0.14;
                const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : phaseProgress > 0.9 ? (1 - phaseProgress) * 10 : 1;
                ctx.globalAlpha = alpha;
                ctx.font = "bold 48px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#00ffff";
                ctx.fillText("🌍 TECH PLANET DISCOVERED", WIDTH / 2, 350);
                const topLangs = data.languages.slice(0, 5);
                const totalSize = topLangs.reduce({
                    "VideoSection.useCallback[drawFrame].totalSize": (sum, l)=>sum + l.size
                }["VideoSection.useCallback[drawFrame].totalSize"], 0);
                topLangs.forEach({
                    "VideoSection.useCallback[drawFrame]": (lang, i)=>{
                        const y = 480 + i * 110;
                        const percentage = totalSize > 0 ? lang.size / totalSize * 100 : 0;
                        const delay = i * 0.1;
                        const barProgress = Math.max(0, (phaseProgress - delay) * 2.5);
                        const barWidth = percentage / 100 * 650 * easeOutCubic(Math.min(1, barProgress));
                        // Bar background
                        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
                        ctx.beginPath();
                        ctx.roundRect(WIDTH / 2 - 325, y, 650, 45, 10);
                        ctx.fill();
                        if (barWidth > 0) {
                            // Colored bar
                            const gradient = ctx.createLinearGradient(WIDTH / 2 - 325, 0, WIDTH / 2 - 325 + barWidth, 0);
                            gradient.addColorStop(0, lang.color || "#888");
                            gradient.addColorStop(1, `${lang.color}99` || "#88888899");
                            ctx.fillStyle = gradient;
                            ctx.beginPath();
                            ctx.roundRect(WIDTH / 2 - 325, y, barWidth, 45, 10);
                            ctx.fill();
                        }
                        ctx.font = "bold 28px 'Segoe UI', sans-serif";
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "left";
                        ctx.fillText(lang.name, WIDTH / 2 - 315, y - 15);
                        ctx.textAlign = "right";
                        ctx.fillStyle = lang.color || "#888";
                        ctx.fillText(`${percentage.toFixed(1)}%`, WIDTH / 2 + 315, y + 30);
                        ctx.textAlign = "center";
                    }
                }["VideoSection.useCallback[drawFrame]"]);
                ctx.globalAlpha = 1;
            } else if (progress >= 0.64 && progress < 0.76) {
                const phaseProgress = (progress - 0.64) / 0.12;
                const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : phaseProgress > 0.9 ? (1 - phaseProgress) * 10 : 1;
                ctx.globalAlpha = alpha;
                // Fire zone glow
                const fireGlow = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, 0, WIDTH / 2, HEIGHT / 2, 400);
                fireGlow.addColorStop(0, `rgba(255, 100, 0, ${0.3 + Math.sin(frame * 0.2) * 0.1})`);
                fireGlow.addColorStop(1, "transparent");
                ctx.fillStyle = fireGlow;
                ctx.fillRect(0, 0, WIDTH, HEIGHT);
                ctx.font = "bold 48px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ff6600";
                ctx.fillText("🔥 ENTERING STREAK FIRE ZONE", WIDTH / 2, 380);
                // Big fire emoji with animation
                const fireY = 550 + Math.sin(frame * 0.15) * 15;
                ctx.font = "180px 'Segoe UI', sans-serif";
                ctx.fillText("🔥", WIDTH / 2, fireY);
                // Streak number
                const displayStreak = Math.floor(data.longestStreak * easeOutCubic(phaseProgress));
                ctx.font = "bold 150px 'Segoe UI', sans-serif";
                ctx.shadowColor = "#ff6600";
                ctx.shadowBlur = 50;
                ctx.fillStyle = "#ffffff";
                ctx.fillText(`${displayStreak}`, WIDTH / 2, 820);
                ctx.shadowBlur = 0;
                ctx.font = "48px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffd700";
                ctx.fillText("DAY STREAK RECORD", WIDTH / 2, 920);
                ctx.font = "32px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#888888";
                ctx.fillText(`Current streak: ${data.currentStreak} days`, WIDTH / 2, 1000);
                // Fire particles
                if (frame % 2 === 0) {
                    addParticles(WIDTH / 2 + (Math.random() - 0.5) * 100, fireY + 80, 4, "rgba(255, 136, 0, 1)", 15);
                }
                ctx.globalAlpha = 1;
            } else if (progress >= 0.76 && progress < 0.88) {
                const phaseProgress = (progress - 0.76) / 0.12;
                const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : phaseProgress > 0.9 ? (1 - phaseProgress) * 10 : 1;
                ctx.globalAlpha = alpha;
                // Profile card
                const cardScale = 0.8 + easeOutCubic(phaseProgress) * 0.2;
                ctx.save();
                ctx.translate(WIDTH / 2, HEIGHT / 2 - 50);
                ctx.scale(cardScale, cardScale);
                // Card background
                ctx.fillStyle = "rgba(15, 15, 30, 0.95)";
                ctx.beginPath();
                ctx.roundRect(-380, -320, 760, 640, 30);
                ctx.fill();
                ctx.strokeStyle = "#ff00ff";
                ctx.lineWidth = 4;
                ctx.shadowColor = "#ff00ff";
                ctx.shadowBlur = 20;
                ctx.stroke();
                ctx.shadowBlur = 0;
                // Commander badge
                ctx.font = "bold 36px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ff00ff";
                ctx.fillText("⚡ SPACE COMMANDER ⚡", 0, -250);
                // Avatar
                ctx.font = "100px 'Segoe UI', sans-serif";
                ctx.fillText("👨‍🚀", 0, -130);
                // Name
                ctx.font = "bold 52px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffffff";
                ctx.fillText(data.user.name || data.user.login, 0, -20);
                // Rank based on contributions
                const ranks = [
                    "Cadet",
                    "Lieutenant",
                    "Captain",
                    "Commander",
                    "Admiral",
                    "Legend"
                ];
                const rankIndex = Math.min(Math.floor(data.totalContributions / 150), ranks.length - 1);
                ctx.font = "bold 42px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffd700";
                ctx.fillText(`★ ${ranks[rankIndex]} ★`, 0, 50);
                // Stats row
                const profileStats = [
                    {
                        label: "Repos",
                        value: data.user.publicRepos
                    },
                    {
                        label: "Followers",
                        value: data.user.followers
                    },
                    {
                        label: "Following",
                        value: data.user.following
                    }
                ];
                profileStats.forEach({
                    "VideoSection.useCallback[drawFrame]": (stat, i)=>{
                        const x = -200 + i * 200;
                        ctx.font = "bold 48px 'Segoe UI', sans-serif";
                        ctx.fillStyle = "#00ffff";
                        ctx.fillText(stat.value.toString(), x, 150);
                        ctx.font = "24px 'Segoe UI', sans-serif";
                        ctx.fillStyle = "#888888";
                        ctx.fillText(stat.label, x, 190);
                    }
                }["VideoSection.useCallback[drawFrame]"]);
                // Top repo badge
                if (data.mostActiveRepo) {
                    ctx.font = "28px 'Segoe UI', sans-serif";
                    ctx.fillStyle = "#00ff88";
                    ctx.fillText(`🏆 Top Repo: ${data.mostActiveRepo}`, 0, 270);
                }
                ctx.restore();
                ctx.globalAlpha = 1;
            } else if (progress >= 0.88) {
                const phaseProgress = (progress - 0.88) / 0.12;
                const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : 1;
                ctx.globalAlpha = alpha;
                // Victory burst
                if (phaseProgress < 0.3 && frame % 3 === 0) {
                    for(let i = 0; i < 6; i++){
                        const angle = i / 6 * Math.PI * 2;
                        addParticles(WIDTH / 2 + Math.cos(angle) * 150, HEIGHT / 2 - 100 + Math.sin(angle) * 150, 8, "rgba(255, 215, 0, 1)", 20);
                    }
                }
                ctx.font = "bold 64px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffd700";
                ctx.fillText("🎉 MISSION COMPLETE 🎉", WIDTH / 2, 400);
                // GitFM CTA
                const pulseScale = 1 + Math.sin(frame * 0.1) * 0.03;
                ctx.save();
                ctx.translate(WIDTH / 2, HEIGHT / 2);
                ctx.scale(pulseScale, pulseScale);
                ctx.font = "bold 56px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#ffffff";
                ctx.fillText("Start Your Journey", 0, -50);
                const ctaGradient = ctx.createLinearGradient(-250, 0, 250, 0);
                ctaGradient.addColorStop(0, "#ff00ff");
                ctaGradient.addColorStop(0.5, "#ffffff");
                ctaGradient.addColorStop(1, "#00ffff");
                ctx.fillStyle = ctaGradient;
                ctx.shadowColor = "#ff00ff";
                ctx.shadowBlur = 40;
                ctx.font = "bold 100px 'Segoe UI', sans-serif";
                ctx.fillText("gitfm.com", 0, 60);
                ctx.shadowBlur = 0;
                ctx.restore();
                ctx.font = "36px 'Segoe UI', sans-serif";
                ctx.fillStyle = "#00ffff";
                ctx.fillText("Create & share your code story!", WIDTH / 2, HEIGHT / 2 + 180);
                ctx.globalAlpha = 1;
            }
            // Always visible: GitFM watermark
            ctx.font = "24px 'Segoe UI', sans-serif";
            ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
            ctx.textAlign = "right";
            ctx.fillText("gitfm.com", WIDTH - 50, HEIGHT - 50);
            ctx.textAlign = "left";
            ctx.fillText(`@${data.user.login}`, 50, HEIGHT - 50);
            ctx.textAlign = "center";
            // Subtle scanlines
            ctx.fillStyle = "rgba(0, 0, 0, 0.015)";
            for(let y = 0; y < HEIGHT; y += 4){
                ctx.fillRect(0, y, WIDTH, 2);
            }
        }
    }["VideoSection.useCallback[drawFrame]"], [
        data,
        addParticles,
        easeOutCubic
    ]);
    const generateVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoSection.useCallback[generateVideo]": async ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            setIsGenerating(true);
            setProgress(0);
            chunksRef.current = [];
            const ctx = canvas.getContext("2d");
            const stream = canvas.captureStream(FPS);
            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: "video/webm;codecs=vp9",
                videoBitsPerSecond: 12000000
            });
            mediaRecorder.ondataavailable = ({
                "VideoSection.useCallback[generateVideo]": (e)=>{
                    if (e.data.size > 0) chunksRef.current.push(e.data);
                }
            })["VideoSection.useCallback[generateVideo]"];
            mediaRecorder.onstop = ({
                "VideoSection.useCallback[generateVideo]": ()=>{
                    const blob = new Blob(chunksRef.current, {
                        type: "video/webm"
                    });
                    setVideoUrl(URL.createObjectURL(blob));
                    setIsGenerating(false);
                }
            })["VideoSection.useCallback[generateVideo]"];
            mediaRecorder.start();
            const totalFrames = DURATION * FPS;
            for(let frame = 0; frame <= totalFrames; frame++){
                drawFrame(ctx, frame);
                setProgress(frame / totalFrames * 100);
                await new Promise({
                    "VideoSection.useCallback[generateVideo]": (r)=>setTimeout(r, 1000 / FPS / 3)
                }["VideoSection.useCallback[generateVideo]"]);
            }
            mediaRecorder.stop();
        }
    }["VideoSection.useCallback[generateVideo]"], [
        drawFrame
    ]);
    const playPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoSection.useCallback[playPreview]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            setIsPlaying(true);
            const ctx = canvas.getContext("2d");
            let frame = 0;
            const totalFrames = DURATION * FPS;
            let lastTime = performance.now();
            const animate = {
                "VideoSection.useCallback[playPreview].animate": (currentTime)=>{
                    if (currentTime - lastTime >= 1000 / FPS) {
                        drawFrame(ctx, frame);
                        frame++;
                        lastTime = currentTime;
                    }
                    if (frame <= totalFrames) {
                        animationRef.current = requestAnimationFrame(animate);
                    } else {
                        setIsPlaying(false);
                    }
                }
            }["VideoSection.useCallback[playPreview].animate"];
            animationRef.current = requestAnimationFrame(animate);
        }
    }["VideoSection.useCallback[playPreview]"], [
        drawFrame
    ]);
    const downloadVideo = ()=>{
        if (!videoUrl) return;
        const link = document.createElement("a");
        link.href = videoUrl;
        link.download = `gitfm-${data.user.login}-2025.webm`;
        link.click();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoSection.useEffect": ()=>{
            return ({
                "VideoSection.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                    if (videoUrl) URL.revokeObjectURL(videoUrl);
                }
            })["VideoSection.useEffect"];
        }
    }["VideoSection.useEffect"], [
        videoUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoSection.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext("2d");
                drawFrame(ctx, 0);
            }
        }
    }["VideoSection.useEffect"], [
        drawFrame
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold neon-purple flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/components/video-section.tsx",
                                lineNumber: 715,
                                columnNumber: 21
                            }, this),
                            "Your Space Mission Video",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/components/video-section.tsx",
                                lineNumber: 717,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/video-section.tsx",
                        lineNumber: 714,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-2",
                        children: "An astronaut's journey through your 2025 code universe!"
                    }, void 0, false, {
                        fileName: "[project]/components/video-section.tsx",
                        lineNumber: 719,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/video-section.tsx",
                lineNumber: 713,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-2xl overflow-hidden border-2 border-[#ff00ff]/50 shadow-lg shadow-[#ff00ff]/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasRef,
                                width: WIDTH,
                                height: HEIGHT,
                                className: "w-full",
                                style: {
                                    maxHeight: "500px",
                                    objectFit: "cover"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/video-section.tsx",
                                lineNumber: 726,
                                columnNumber: 21
                            }, this),
                            isGenerating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/80 flex flex-col items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-12 h-12 text-[#ff00ff] animate-spin mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/video-section.tsx",
                                        lineNumber: 735,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-bold text-lg",
                                        children: "Generating Video..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/video-section.tsx",
                                        lineNumber: 736,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-56 h-3 bg-gray-700 rounded-full mt-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-full transition-all",
                                            style: {
                                                width: `${progress}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/video-section.tsx",
                                            lineNumber: 738,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/video-section.tsx",
                                        lineNumber: 737,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400 mt-2",
                                        children: [
                                            Math.round(progress),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/video-section.tsx",
                                        lineNumber: 743,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/video-section.tsx",
                                lineNumber: 734,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/video-section.tsx",
                        lineNumber: 725,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 mt-4",
                        children: !videoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: playPreview,
                                    disabled: isPlaying || isGenerating,
                                    variant: "outline",
                                    className: "flex-1 border-[#00ffff]/50 hover:bg-[#00ffff]/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/video-section.tsx",
                                            lineNumber: 757,
                                            columnNumber: 33
                                        }, this),
                                        isPlaying ? "Playing..." : "Preview"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/video-section.tsx",
                                    lineNumber: 751,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: generateVideo,
                                    disabled: isGenerating,
                                    className: "flex-1 bg-gradient-to-r from-[#ff00ff] to-[#8800ff] hover:opacity-90",
                                    children: isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-4 h-4 mr-2 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/video-section.tsx",
                                                lineNumber: 767,
                                                columnNumber: 41
                                            }, this),
                                            "Creating..."
                                        ]
                                    }, void 0, true) : "🚀 Generate Video"
                                }, void 0, false, {
                                    fileName: "[project]/components/video-section.tsx",
                                    lineNumber: 760,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setVideoUrl(null),
                                    variant: "outline",
                                    className: "flex-1 border-border/50",
                                    children: "Create New"
                                }, void 0, false, {
                                    fileName: "[project]/components/video-section.tsx",
                                    lineNumber: 777,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: downloadVideo,
                                    className: "flex-1 bg-gradient-to-r from-[#00ff88] to-[#00ffff] text-black font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/video-section.tsx",
                                            lineNumber: 788,
                                            columnNumber: 33
                                        }, this),
                                        "Download"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/video-section.tsx",
                                    lineNumber: 784,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/video-section.tsx",
                        lineNumber: 748,
                        columnNumber: 17
                    }, this),
                    videoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-[#00ff88] mt-3",
                        children: "✨ Video ready! Share your space mission!"
                    }, void 0, false, {
                        fileName: "[project]/components/video-section.tsx",
                        lineNumber: 796,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/video-section.tsx",
                lineNumber: 724,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/video-section.tsx",
        lineNumber: 712,
        columnNumber: 9
    }, this);
}
_s(VideoSection, "UfB4exbUiFTn65geTHep5rVvEHQ=");
_c = VideoSection;
var _c;
__turbopack_context__.k.register(_c, "VideoSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/story-mode-video.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoryModeVideo",
    ()=>StoryModeVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function StoryModeVideo({ data }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [videoUrl, setVideoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Engine Refs
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const starsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Constants
    const WIDTH = 1080;
    const HEIGHT = 1920;
    const FPS = 30;
    const DURATION = 20 // Short & punchy for TikTok
    ;
    // Initialize Universe
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoryModeVideo.useEffect": ()=>{
            starsRef.current = Array.from({
                length: 800
            }, {
                "StoryModeVideo.useEffect": ()=>({
                        x: (Math.random() - 0.5) * WIDTH * 3,
                        y: (Math.random() - 0.5) * HEIGHT * 3,
                        z: Math.random() * 2000,
                        size: Math.random() * 2,
                        color: Math.random() > 0.9 ? "#00ffff" : "#ffffff"
                    })
            }["StoryModeVideo.useEffect"]);
        }
    }["StoryModeVideo.useEffect"], []);
    const addExplosion = (x, y, color, count = 20)=>{
        for(let i = 0; i < count; i++){
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 15;
            particlesRef.current.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1.0,
                color,
                size: Math.random() * 5 + 2,
                type: "spark"
            });
        }
    };
    // The Main Render Function
    const drawFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoryModeVideo.useCallback[drawFrame]": (ctx, frame)=>{
            const t = frame / (DURATION * FPS) // Normalized time 0 -> 1
            ;
            // --- 1. Background & Camera ---
            const warpFactor = t > 0.1 && t < 0.2 || t > 0.4 && t < 0.5 || t > 0.7 && t < 0.8 ? 50 : 2;
            // Shake effect during warp
            const shakeX = warpFactor > 10 ? (Math.random() - 0.5) * 10 : 0;
            const shakeY = warpFactor > 10 ? (Math.random() - 0.5) * 10 : 0;
            ctx.save();
            ctx.translate(shakeX, shakeY);
            // Deep Space
            ctx.fillStyle = "#050510";
            ctx.fillRect(-50, -50, WIDTH + 100, HEIGHT + 100);
            // 3D Stars
            const centerX = WIDTH / 2;
            const centerY = HEIGHT / 2;
            starsRef.current.forEach({
                "StoryModeVideo.useCallback[drawFrame]": (star)=>{
                    star.z -= 10 * warpFactor;
                    if (star.z <= 0) {
                        star.z = 2000;
                        star.x = (Math.random() - 0.5) * WIDTH * 3;
                        star.y = (Math.random() - 0.5) * HEIGHT * 3;
                    }
                    const perspective = 400 / star.z;
                    const sx = centerX + star.x * perspective;
                    const sy = centerY + star.y * perspective;
                    if (sx > 0 && sx < WIDTH && sy > 0 && sy < HEIGHT) {
                        const size = star.size * perspective * (warpFactor > 10 ? 0.5 : 1);
                        // Warp trails
                        if (warpFactor > 10) {
                            ctx.beginPath();
                            ctx.moveTo(sx, sy);
                            ctx.lineTo(centerX + (sx - centerX) * 0.9, centerY + (sy - centerY) * 0.9);
                            ctx.strokeStyle = `rgba(200, 255, 255, ${0.2 * perspective})`;
                            ctx.lineWidth = size;
                            ctx.stroke();
                        } else {
                            ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, perspective)})`;
                            ctx.beginPath();
                            ctx.arc(sx, sy, size, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }
                }
            }["StoryModeVideo.useCallback[drawFrame]"]);
            // --- 2. Narrative Scenes ---
            // SCENE 1: SYSTEM BOOT (0% - 15%)
            if (t < 0.15) {
                const opacity = Math.min(1, t * 10);
                ctx.globalAlpha = opacity;
                // Cyberpunk Grid
                ctx.strokeStyle = "rgba(0, 255, 255, 0.2)";
                ctx.lineWidth = 2;
                const gridY = HEIGHT / 2 + 200;
                ctx.beginPath();
                for(let i = -10; i <= 10; i++){
                    ctx.moveTo(WIDTH / 2 + i * 100 * t * 2, gridY);
                    ctx.lineTo(WIDTH / 2 + i * 200, HEIGHT);
                }
                ctx.stroke();
                // Text
                ctx.textAlign = "center";
                ctx.font = "bold 80px 'Courier New'";
                ctx.fillStyle = "#00ffff";
                ctx.shadowColor = "#00ffff";
                ctx.shadowBlur = 20;
                ctx.fillText("SYSTEM INITIALIZED", WIDTH / 2, HEIGHT / 2 - 100);
                ctx.font = "40px 'Courier New'";
                ctx.fillStyle = "#ffffff";
                ctx.shadowBlur = 0;
                ctx.fillText(`PILOT: @${data.user.login.toUpperCase()}`, WIDTH / 2, HEIGHT / 2 + 50);
                // Loading Bar
                const barW = 600;
                ctx.fillStyle = "#333";
                ctx.fillRect(WIDTH / 2 - barW / 2, HEIGHT / 2 + 150, barW, 20);
                ctx.fillStyle = "#00ff00";
                ctx.fillRect(WIDTH / 2 - barW / 2, HEIGHT / 2 + 150, barW * (t / 0.15), 20);
            } else if (t >= 0.15 && t < 0.40) {
                const localT = (t - 0.15) / 0.25;
                // Draw Wireframe Planet
                const planetX = WIDTH / 2;
                const planetY = HEIGHT / 2 + 100;
                const radius = 300;
                ctx.save();
                ctx.translate(planetX, planetY);
                ctx.rotate(frame * 0.01);
                ctx.strokeStyle = "#00ff88";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, Math.PI * 2);
                ctx.stroke();
                // Latitude lines
                for(let i = 0; i < 5; i++){
                    ctx.beginPath();
                    ctx.ellipse(0, 0, radius, radius * (0.2 + i * 0.15), 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
                ctx.restore();
                // Hologram Stats
                ctx.textAlign = "center";
                const scale = Math.min(1, localT * 5);
                ctx.save();
                ctx.translate(WIDTH / 2, 400);
                ctx.scale(scale, scale);
                ctx.font = "bold 120px 'Segoe UI'";
                ctx.fillStyle = "#ffffff";
                ctx.shadowColor = "#00ff88";
                ctx.shadowBlur = 30;
                ctx.fillText(data.totalCommits.toLocaleString(), 0, 0);
                ctx.font = "40px 'Segoe UI'";
                ctx.fillStyle = "#00ff88";
                ctx.shadowBlur = 0;
                ctx.fillText("COMMITS DEPLOYED", 0, 60);
                ctx.restore();
                // Particles
                if (frame % 5 === 0) {
                    addExplosion(WIDTH / 2, HEIGHT / 2, "#00ff88", 2);
                }
            } else if (t >= 0.40 && t < 0.65) {
                const localT = (t - 0.40) / 0.25;
                // Draw Nebula Clouds (Gradient blobs)
                const gradient = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, 50, WIDTH / 2, HEIGHT / 2, 600);
                gradient.addColorStop(0, "rgba(255, 0, 255, 0.2)");
                gradient.addColorStop(0.5, "rgba(0, 255, 255, 0.1)");
                gradient.addColorStop(1, "transparent");
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, WIDTH, HEIGHT);
                // Orbiting Languages
                const topLangs = data.languages.slice(0, 4);
                topLangs.forEach({
                    "StoryModeVideo.useCallback[drawFrame]": (lang, i)=>{
                        const angle = frame * 0.02 + i * (Math.PI * 2 / topLangs.length);
                        const orbitR = 350;
                        const lx = WIDTH / 2 + Math.cos(angle) * orbitR;
                        const ly = HEIGHT / 2 + Math.sin(angle) * orbitR;
                        // Connection line
                        ctx.beginPath();
                        ctx.moveTo(WIDTH / 2, HEIGHT / 2);
                        ctx.lineTo(lx, ly);
                        ctx.strokeStyle = "rgba(255,255,255,0.1)";
                        ctx.stroke();
                        // Planet/Node
                        ctx.beginPath();
                        ctx.arc(lx, ly, 40, 0, Math.PI * 2);
                        ctx.fillStyle = lang.color || "#fff";
                        ctx.fill();
                        // Label
                        ctx.font = "bold 30px 'Segoe UI'";
                        ctx.fillStyle = "#fff";
                        ctx.fillText(lang.name, lx, ly + 60);
                    }
                }["StoryModeVideo.useCallback[drawFrame]"]);
                // Center Stat
                ctx.font = "bold 50px 'Segoe UI'";
                ctx.fillStyle = "#fff";
                ctx.fillText("TOP LANGUAGES", WIDTH / 2, 200);
            } else if (t >= 0.65 && t < 0.85) {
                const localT = (t - 0.65) / 0.2;
                // Burning Sun
                const sunY = HEIGHT / 2 + 100;
                const glow = 100 + Math.sin(frame * 0.1) * 20;
                const sunGrad = ctx.createRadialGradient(WIDTH / 2, sunY, 100, WIDTH / 2, sunY, 500);
                sunGrad.addColorStop(0, "#ffff00");
                sunGrad.addColorStop(0.4, "#ff8800");
                sunGrad.addColorStop(1, "transparent");
                ctx.fillStyle = sunGrad;
                ctx.fillRect(0, 0, WIDTH, HEIGHT);
                ctx.fillStyle = "#fff";
                ctx.beginPath();
                ctx.arc(WIDTH / 2, sunY, 150, 0, Math.PI * 2);
                ctx.fill();
                // Fire Text
                ctx.font = "bold 180px 'Segoe UI'";
                ctx.fillStyle = "#000";
                ctx.fillText("🔥", WIDTH / 2, sunY + 60);
                ctx.font = "bold 140px 'Segoe UI'";
                ctx.fillStyle = "#ffffff";
                ctx.shadowColor = "#ff0000";
                ctx.shadowBlur = 40;
                ctx.fillText(`${data.longestStreak}`, WIDTH / 2, 400);
                ctx.font = "50px 'Segoe UI'";
                ctx.fillText("DAY STREAK", WIDTH / 2, 500);
                ctx.shadowBlur = 0;
            } else {
                const localT = (t - 0.85) / 0.15;
                // Card Slide In
                const cardY = HEIGHT / 2 + (1 - Math.min(1, localT * 2)) * 500;
                // Glassmorphism Card
                ctx.save();
                ctx.translate(WIDTH / 2, cardY);
                ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
                ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.roundRect(-400, -300, 800, 600, 40);
                ctx.fill();
                ctx.stroke();
                // Content
                ctx.fillStyle = "#fff";
                ctx.font = "bold 60px 'Segoe UI'";
                ctx.fillText("MISSION COMPLETE", 0, -200);
                ctx.font = "40px 'Segoe UI'";
                ctx.fillStyle = "#aaa";
                ctx.fillText("Class: " + getRank(data.totalContributions), 0, -120);
                // Mini Stats
                const stats = [
                    {
                        l: "Stars",
                        v: data.totalStarsEarned
                    },
                    {
                        l: "PRs",
                        v: data.totalPRsMerged
                    },
                    {
                        l: "Issues",
                        v: data.totalIssuesOpened
                    }
                ];
                stats.forEach({
                    "StoryModeVideo.useCallback[drawFrame]": (s, i)=>{
                        const x = (i - 1) * 250;
                        ctx.font = "bold 50px 'Segoe UI'";
                        ctx.fillStyle = "#00ffff";
                        ctx.fillText(s.v.toString(), x, 50);
                        ctx.font = "30px 'Segoe UI'";
                        ctx.fillStyle = "#fff";
                        ctx.fillText(s.l, x, 100);
                    }
                }["StoryModeVideo.useCallback[drawFrame]"]);
                // Footer
                ctx.font = "bold 50px 'Segoe UI'";
                ctx.fillStyle = "#ff00ff";
                ctx.fillText("gitfm.com", 0, 220);
                ctx.restore();
            }
            // --- 3. HUD Overlay (Always On) ---
            drawHUD(ctx, WIDTH, HEIGHT, frame, data);
            // Particles Update
            particlesRef.current = particlesRef.current.filter({
                "StoryModeVideo.useCallback[drawFrame]": (p)=>p.life > 0
            }["StoryModeVideo.useCallback[drawFrame]"]);
            particlesRef.current.forEach({
                "StoryModeVideo.useCallback[drawFrame]": (p)=>{
                    p.x += p.vx;
                    p.y += p.vy;
                    p.life -= 0.02;
                    ctx.globalAlpha = p.life;
                    ctx.fillStyle = p.color;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }["StoryModeVideo.useCallback[drawFrame]"]);
            ctx.globalAlpha = 1;
            ctx.restore(); // Restore shake
        }
    }["StoryModeVideo.useCallback[drawFrame]"], [
        data
    ]);
    const drawHUD = (ctx, w, h, f, data)=>{
        // Corners
        ctx.strokeStyle = "rgba(0, 255, 255, 0.5)";
        ctx.lineWidth = 4;
        const m = 40;
        const len = 60;
        // Top Left
        ctx.beginPath();
        ctx.moveTo(m, m + len);
        ctx.lineTo(m, m);
        ctx.lineTo(m + len, m);
        ctx.stroke();
        // Top Right
        ctx.beginPath();
        ctx.moveTo(w - m - len, m);
        ctx.lineTo(w - m, m);
        ctx.lineTo(w - m, m + len);
        ctx.stroke();
        // Bottom Left
        ctx.beginPath();
        ctx.moveTo(m, h - m - len);
        ctx.lineTo(m, h - m);
        ctx.lineTo(m + len, h - m);
        ctx.stroke();
        // Bottom Right
        ctx.beginPath();
        ctx.moveTo(w - m - len, h - m);
        ctx.lineTo(w - m, h - m);
        ctx.lineTo(w - m, h - m - len);
        ctx.stroke();
        // Scanning Line
        const scanY = f % 200 / 200 * h;
        ctx.fillStyle = "rgba(0, 255, 255, 0.05)";
        ctx.fillRect(0, scanY, w, 10);
        // Bottom Text
        ctx.font = "24px 'Courier New'";
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.textAlign = "left";
        ctx.fillText(`ALT: ${f * 123 % 99999} FT`, 60, h - 60);
        ctx.textAlign = "right";
        ctx.fillText(`V: ${Math.floor(299792 + Math.sin(f * 0.1) * 100)} km/s`, w - 60, h - 60);
        ctx.textAlign = "center";
    };
    const getRank = (contribs)=>{
        if (contribs > 1000) return "GALACTIC LEGEND";
        if (contribs > 500) return "FLEET ADMIRAL";
        if (contribs > 100) return "SPACE COMMANDER";
        return "STAR CADET";
    };
    // Video Recording Logic
    const generate = async ()=>{
        setStatus("generating");
        const canvas = canvasRef.current;
        if (!canvas) return;
        const stream = canvas.captureStream(FPS);
        const recorder = new MediaRecorder(stream, {
            mimeType: 'video/webm;codecs=vp9',
            videoBitsPerSecond: 8000000
        });
        recorder.ondataavailable = (e)=>{
            if (e.data.size > 0) chunksRef.current.push(e.data);
        };
        recorder.onstop = ()=>{
            const blob = new Blob(chunksRef.current, {
                type: 'video/webm'
            });
            setVideoUrl(URL.createObjectURL(blob));
            setStatus("done");
        };
        recorder.start();
        const ctx = canvas.getContext('2d');
        for(let i = 0; i < DURATION * FPS; i++){
            drawFrame(ctx, i);
            setProgress(i / (DURATION * FPS) * 100);
            await new Promise((r)=>setTimeout(r, 0)); // No delay for fast generation
        }
        recorder.stop();
    };
    const preview = ()=>{
        setStatus("playing");
        let f = 0;
        const loop = ()=>{
            if (canvasRef.current) drawFrame(canvasRef.current.getContext('2d'), f++);
            if (f < DURATION * FPS && status !== 'idle') requestAnimationFrame(loop);
            else setStatus("idle");
        };
        loop();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-6 w-full max-w-lg mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.3)] border border-[#333]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        width: WIDTH,
                        height: HEIGHT,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/story-mode-video.tsx",
                        lineNumber: 447,
                        columnNumber: 17
                    }, this),
                    status === 'generating' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/80 flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                className: "w-12 h-12 text-[#ff00ff] animate-bounce mb-4"
                            }, void 0, false, {
                                fileName: "[project]/components/story-mode-video.tsx",
                                lineNumber: 451,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#00ffff] font-mono text-xl mb-2",
                                children: "RENDERING UNIVERSE..."
                            }, void 0, false, {
                                fileName: "[project]/components/story-mode-video.tsx",
                                lineNumber: 452,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-64 h-2 bg-[#333] rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-[#00ffff]",
                                    style: {
                                        width: `${progress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/story-mode-video.tsx",
                                    lineNumber: 454,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/story-mode-video.tsx",
                                lineNumber: 453,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story-mode-video.tsx",
                        lineNumber: 450,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/story-mode-video.tsx",
                lineNumber: 446,
                columnNumber: 14
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 w-full",
                children: !videoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: preview,
                            variant: "outline",
                            className: "flex-1 h-12 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/story-mode-video.tsx",
                                    lineNumber: 464,
                                    columnNumber: 29
                                }, this),
                                " PREVIEW"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/story-mode-video.tsx",
                            lineNumber: 463,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: generate,
                            className: "flex-1 h-12 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-black font-bold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/story-mode-video.tsx",
                                    lineNumber: 467,
                                    columnNumber: 29
                                }, this),
                                " GENERATE"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/story-mode-video.tsx",
                            lineNumber: 466,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>{
                        const a = document.createElement('a');
                        a.href = videoUrl;
                        a.download = `gitfm-story-${data.user.login}.webm`;
                        a.click();
                    },
                    className: "w-full h-12 bg-[#00ff88] text-black font-bold text-lg animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                            className: "w-5 h-5 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/components/story-mode-video.tsx",
                            lineNumber: 477,
                            columnNumber: 25
                        }, this),
                        " DOWNLOAD VIDEO"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/story-mode-video.tsx",
                    lineNumber: 471,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/story-mode-video.tsx",
                lineNumber: 460,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/story-mode-video.tsx",
        lineNumber: 445,
        columnNumber: 9
    }, this);
}
_s(StoryModeVideo, "ieldDsr21uwY0vE448/IUTK+oLg=");
_c = StoryModeVideo;
var _c;
__turbopack_context__.k.register(_c, "StoryModeVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/results-dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResultsDashboard",
    ()=>ResultsDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tarot$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/tarot-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$audio$2d$symphony$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/audio-symphony.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$code$2d$city$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/code-city.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2d$generator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/video-generator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/video-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2d$mode$2d$video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/story-mode-video.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$pull$2d$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitPullRequest$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-pull-request.js [app-client] (ecmascript) <export default as GitPullRequest>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$commit$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitCommit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-commit-horizontal.js [app-client] (ecmascript) <export default as GitCommit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-fork.js [app-client] (ecmascript) <export default as GitFork>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dot.js [app-client] (ecmascript) <export default as CircleDot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function ResultsDashboard({ data, vibeMode, onReset, username }) {
    _s();
    const [showShareDialog, setShowShareDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showVideoGenerator, setShowVideoGenerator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dashboardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleShare = async ()=>{
        try {
            // Construct the shareable URL with the username path
            const shareableUsername = username || data.user.login;
            const baseUrl = window.location.origin;
            const shareUrl = `${baseUrl}/${encodeURIComponent(shareableUsername)}?mode=${vibeMode}`;
            await navigator.clipboard.writeText(shareUrl);
            setShowShareDialog(true);
        } catch  {
            alert("Failed to copy link");
        }
    };
    const handleDownload = async ()=>{
        if (!dashboardRef.current) return;
        setIsDownloading(true);
        try {
            const dataUrl = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"](dashboardRef.current, {
                backgroundColor: "#0a0a0a",
                pixelRatio: 2,
                skipFonts: true
            });
            const link = document.createElement("a");
            link.download = `gitfm-${data.user.login}-${vibeMode}.png`;
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error("Failed to download image:", error);
            alert("Failed to download image");
        } finally{
            setIsDownloading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crt-scanlines fixed inset-0 pointer-events-none z-50"
            }, void 0, false, {
                fileName: "[project]/components/results-dashboard.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            showShareDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card border border-[#00ff88]/50 rounded-2xl p-6 max-w-md mx-4 relative animate-in zoom-in-95",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowShareDialog(false),
                            className: "absolute top-4 right-4 text-muted-foreground hover:text-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/components/results-dashboard.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/results-dashboard.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-full bg-[#00ff88]/20 flex items-center justify-center mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-8 h-8 text-[#00ff88]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/results-dashboard.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-[#00ff88]",
                                    children: "Link Copied!"
                                }, void 0, false, {
                                    fileName: "[project]/components/results-dashboard.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Share your GitFM profile with friends and spread the word!"
                                }, void 0, false, {
                                    fileName: "[project]/components/results-dashboard.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/results-dashboard.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 my-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-px bg-gradient-to-r from-transparent via-[#ff00ff]/50 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/components/results-dashboard.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Made with ❤️ by"
                                }, void 0, false, {
                                    fileName: "[project]/components/results-dashboard.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-px bg-gradient-to-r from-transparent via-[#ff00ff]/50 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/components/results-dashboard.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/results-dashboard.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-foreground",
                                            children: "Aditya Sharma"
                                        }, void 0, false, {
                                            fileName: "[project]/components/results-dashboard.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Creator of GitFM"
                                        }, void 0, false, {
                                            fileName: "[project]/components/results-dashboard.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/results-dashboard.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "If you enjoyed GitFM, consider following me! 🙌"
                                }, void 0, false, {
                                    fileName: "[project]/components/results-dashboard.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://dub.sh/adityax",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium text-sm hover:bg-white/90 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/results-dashboard.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this),
                                                "X"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/results-dashboard.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://dub.sh/adityalinkedin",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] text-white font-medium text-sm hover:bg-[#0A66C2]/90 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/results-dashboard.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this),
                                                "LinkedIn"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/results-dashboard.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://dub.sh/adityagithub",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-[#24292e] text-white font-medium text-sm hover:bg-[#24292e]/90 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/results-dashboard.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this),
                                                "GitHub"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/results-dashboard.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/results-dashboard.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/results-dashboard.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 p-4 rounded-lg border border-[#ffd700]/30 bg-gradient-to-r from-[#ffd700]/10 to-[#ff00ff]/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-[#ffd700]/20 flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            children: "🏆"
                                        }, void 0, false, {
                                            fileName: "[project]/components/results-dashboard.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-[#ffd700] text-sm",
                                                children: "Join the GitFM 2025 Challenge!"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: "Share on social media & win prizes"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/challenge",
                                        className: "shrink-0 px-3 py-1.5 rounded-lg bg-[#ffd700] text-black font-bold text-xs hover:bg-[#ffd700]/90 transition-colors",
                                        children: "Join →"
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/results-dashboard.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/results-dashboard.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setShowShareDialog(false),
                            className: "w-full mt-4 bg-gradient-to-r from-[#ff00ff] to-[#8800ff] hover:from-[#ff33ff] hover:to-[#aa00ff] text-white font-bold",
                            children: "Done"
                        }, void 0, false, {
                            fileName: "[project]/components/results-dashboard.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/results-dashboard.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results-dashboard.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 grid-bg opacity-30"
            }, void 0, false, {
                fileName: "[project]/components/results-dashboard.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff00ff]/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/results-dashboard.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00ff88]/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/results-dashboard.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results-dashboard.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative z-10 sticky top-0 border-b border-border/50 bg-background/80 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            onClick: onReset,
                            className: "text-muted-foreground hover:text-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/results-dashboard.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                "Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/results-dashboard.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-bold neon-pink",
                            children: "GitFM 2025"
                        }, void 0, false, {
                            fileName: "[project]/components/results-dashboard.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>setShowVideoGenerator(true),
                                    className: "border-[#ffd700]/50 hover:bg-[#ffd700]/10 bg-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/results-dashboard.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this),
                                        "Video"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/results-dashboard.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: handleDownload,
                                    disabled: isDownloading,
                                    className: "border-[#00ff88]/50 hover:bg-[#00ff88]/10 bg-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/results-dashboard.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        isDownloading ? "..." : "Download"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/results-dashboard.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: handleShare,
                                    className: "border-[#ff00ff]/50 hover:bg-[#ff00ff]/10 bg-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/results-dashboard.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this),
                                        "Share"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/results-dashboard.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/results-dashboard.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/results-dashboard.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results-dashboard.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            showVideoGenerator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2d$generator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoGenerator"], {
                data: data,
                vibeMode: vibeMode,
                onClose: ()=>setShowVideoGenerator(false)
            }, void 0, false, {
                fileName: "[project]/components/results-dashboard.tsx",
                lineNumber: 247,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dashboardRef,
                className: "bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "relative z-10 container mx-auto px-4 py-8 space-y-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "text-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: data.user.avatarUrl || "/placeholder.svg",
                                            alt: data.user.name || data.user.login,
                                            className: "w-24 h-24 rounded-full border-4 border-[#ff00ff] neon-border-pink mx-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/components/results-dashboard.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl font-bold",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "neon-pink",
                                            children: data.user.name || data.user.login
                                        }, void 0, false, {
                                            fileName: "[project]/components/results-dashboard.tsx",
                                            lineNumber: 267,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: [
                                            "@",
                                            data.user.login
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    data.user.bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground max-w-md mx-auto",
                                        children: data.user.bio
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 270,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-4 text-sm flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/results-dashboard.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 17
                                                    }, this),
                                                    data.user.followers,
                                                    " followers"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/results-dashboard.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 17
                                                    }, this),
                                                    data.user.publicRepos,
                                                    " repos"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#ff00ff]",
                                                children: [
                                                    data.topLanguage || "Unknown",
                                                    " main"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/results-dashboard.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-6 text-center neon-green",
                                        children: "2025 Stats"
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$commit$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitCommit$3e$__["GitCommit"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 23
                                                }, void 0),
                                                value: data.totalContributions,
                                                label: "Contributions",
                                                color: "#00ff88"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$commit$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitCommit$3e$__["GitCommit"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 23
                                                }, void 0),
                                                value: data.totalCommits,
                                                label: "Commits",
                                                color: "#00ff88"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 295,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$pull$2d$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitPullRequest$3e$__["GitPullRequest"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 23
                                                }, void 0),
                                                value: data.totalPRsOpened,
                                                label: "PRs Opened",
                                                color: "#ff00ff"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$pull$2d$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitPullRequest$3e$__["GitPullRequest"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 23
                                                }, void 0),
                                                value: data.totalPRsMerged,
                                                label: "PRs Merged",
                                                color: "#ff00ff"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 307,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDot$3e$__["CircleDot"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 23
                                                }, void 0),
                                                value: data.totalIssuesOpened,
                                                label: "Issues Opened",
                                                color: "#00ffff"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 313,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDot$3e$__["CircleDot"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 23
                                                }, void 0),
                                                value: data.totalIssuesClosed,
                                                label: "Issues Closed",
                                                color: "#00ffff"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 319,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 23
                                                }, void 0),
                                                value: data.totalStarsEarned,
                                                label: "Stars Earned",
                                                color: "#ffd700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 23
                                                }, void 0),
                                                value: data.totalStarsGiven,
                                                label: "Stars Given",
                                                color: "#ffd700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__["GitFork"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 23
                                                }, void 0),
                                                value: data.totalForksEarned,
                                                label: "Forks Earned",
                                                color: "#ff6b6b"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 337,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 23
                                                }, void 0),
                                                value: data.longestStreak,
                                                label: "Longest Streak",
                                                color: "#ff4500",
                                                suffix: " days"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 343,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 23
                                                }, void 0),
                                                value: data.currentStreak,
                                                label: "Current Streak",
                                                color: "#ff4500",
                                                suffix: " days"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 350,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/results-dashboard.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 23
                                                }, void 0),
                                                value: data.mostActiveDay || "N/A",
                                                label: "Most Active Day",
                                                color: "#9b59b6",
                                                isText: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this),
                                    data.mostActiveRepo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center mt-4 text-sm text-muted-foreground",
                                        children: [
                                            "Most active repo: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#00ff88] font-mono",
                                                children: data.mostActiveRepo
                                            }, void 0, false, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 367,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/results-dashboard.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-6 text-center neon-cyan",
                                        children: "Language Breakdown"
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-2xl mx-auto space-y-3",
                                        children: data.languages.slice(0, 6).map((lang, index)=>{
                                            const total = data.languages.reduce((sum, l)=>sum + l.size, 0);
                                            const percentage = Math.round(lang.size / total * 100);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded-full",
                                                                        style: {
                                                                            backgroundColor: lang.color
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/results-dashboard.tsx",
                                                                        lineNumber: 383,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-foreground",
                                                                        children: lang.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/results-dashboard.tsx",
                                                                        lineNumber: 384,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/results-dashboard.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground",
                                                                children: [
                                                                    percentage,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/results-dashboard.tsx",
                                                                lineNumber: 386,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/results-dashboard.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2 rounded-full bg-black/50 overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full rounded-full transition-all duration-1000",
                                                            style: {
                                                                width: `${percentage}%`,
                                                                backgroundColor: lang.color,
                                                                boxShadow: `0 0 10px ${lang.color}`,
                                                                animationDelay: `${index * 100}ms`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/results-dashboard.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/results-dashboard.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, lang.name, true, {
                                                fileName: "[project]/components/results-dashboard.tsx",
                                                lineNumber: 380,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/results-dashboard.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-6 text-center neon-purple",
                                        children: "Your Developer Tarot"
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tarot$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TarotCard"], {
                                        data: data,
                                        vibeMode: vibeMode
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 408,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/results-dashboard.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-6 text-center neon-cyan",
                                        children: "Symphony of Code"
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$audio$2d$symphony$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioSymphony"], {
                                        data: data
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 414,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/results-dashboard.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-6 text-center neon-green",
                                        children: "Your Code City"
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 419,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$code$2d$city$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeCity"], {
                                        data: data
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 420,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/results-dashboard.tsx",
                                lineNumber: 418,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-6 text-center neon-purple",
                                        children: "Your Space Story"
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 424,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2d$mode$2d$video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StoryModeVideo"], {
                                        data: data
                                    }, void 0, false, {
                                        fileName: "[project]/components/results-dashboard.tsx",
                                        lineNumber: 425,
                                        columnNumber: 3
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/results-dashboard.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoSection"], {
                                data: data,
                                vibeMode: vibeMode
                            }, void 0, false, {
                                fileName: "[project]/components/results-dashboard.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results-dashboard.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "relative z-10 border-t border-border/50 py-8 text-center text-sm text-muted-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "GitFM 2025 • Built with Next.js, Three.js, and Tone.js"
                        }, void 0, false, {
                            fileName: "[project]/components/results-dashboard.tsx",
                            lineNumber: 434,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/results-dashboard.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results-dashboard.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results-dashboard.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(ResultsDashboard, "r54H1d6tDWcdUQZMR+MmxSxBnjE=");
_c = ResultsDashboard;
function StatCard({ icon, value, label, color, suffix = "", isText = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative p-4 rounded-xl border bg-black/30 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform",
        style: {
            borderColor: `${color}40`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
                style: {
                    background: `radial-gradient(circle at center, ${color}10, transparent)`
                }
            }, void 0, false, {
                fileName: "[project]/components/results-dashboard.tsx",
                lineNumber: 461,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center text-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color
                        },
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/components/results-dashboard.tsx",
                        lineNumber: 466,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl md:text-3xl font-bold font-mono",
                        style: {
                            color
                        },
                        children: [
                            isText ? value : typeof value === "number" ? value.toLocaleString() : value,
                            suffix
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results-dashboard.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-muted-foreground",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/results-dashboard.tsx",
                        lineNumber: 471,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results-dashboard.tsx",
                lineNumber: 465,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results-dashboard.tsx",
        lineNumber: 457,
        columnNumber: 5
    }, this);
}
_c1 = StatCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ResultsDashboard");
__turbopack_context__.k.register(_c1, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/[username]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/loading-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results-dashboard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function UserPage({ params }) {
    _s();
    const { username } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("loading");
    const [githubData, setGithubData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Get vibe mode from URL params, default to "hype"
    const vibeMode = searchParams.get("mode") || "hype";
    const useOAuth = searchParams.get("oauth") === "true";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserPage.useEffect": ()=>{
            const fetchData = {
                "UserPage.useEffect.fetchData": async ()=>{
                    try {
                        setState("loading");
                        setError(null);
                        // Start both the API call and a minimum delay timer
                        const minimumLoadingTime = new Promise({
                            "UserPage.useEffect.fetchData": (resolve)=>setTimeout(resolve, 18000)
                        }["UserPage.useEffect.fetchData"]);
                        const fetchPromise = fetch("/api/github", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                username: decodeURIComponent(username),
                                useOAuth
                            })
                        });
                        // Wait for both the API response AND the minimum delay
                        const [response] = await Promise.all([
                            fetchPromise,
                            minimumLoadingTime
                        ]);
                        const data = await response.json();
                        if (!response.ok) {
                            throw new Error(data.error || "Failed to fetch GitHub data");
                        }
                        setGithubData(data);
                        setState("results");
                    } catch (err) {
                        setError(err instanceof Error ? err.message : "An error occurred");
                        setState("error");
                    }
                }
            }["UserPage.useEffect.fetchData"];
            fetchData();
        }
    }["UserPage.useEffect"], [
        username,
        useOAuth
    ]);
    const handleReset = ()=>{
        window.location.href = "/";
    };
    if (state === "loading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingScreen"], {}, void 0, false, {
            fileName: "[project]/app/[username]/page.tsx",
            lineNumber: 65,
            columnNumber: 16
        }, this);
    }
    if (state === "error") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col items-center justify-center bg-background relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "crt-scanlines fixed inset-0 pointer-events-none z-50"
                }, void 0, false, {
                    fileName: "[project]/app/[username]/page.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 grid-bg opacity-30"
                }, void 0, false, {
                    fileName: "[project]/app/[username]/page.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff00ff]/10 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/app/[username]/page.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00ff88]/10 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/app/[username]/page.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[username]/page.tsx",
                    lineNumber: 76,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 text-center space-y-6 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 mx-auto rounded-full bg-[#ff0000]/20 flex items-center justify-center border border-[#ff0000]/50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl",
                                children: "⚠️"
                            }, void 0, false, {
                                fileName: "[project]/app/[username]/page.tsx",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/[username]/page.tsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl md:text-3xl font-bold text-[#ff0000]",
                            children: "Oops! Something went wrong"
                        }, void 0, false, {
                            fileName: "[project]/app/[username]/page.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground max-w-md mx-auto",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/[username]/page.tsx",
                            lineNumber: 90,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleReset,
                            className: "px-6 py-3 rounded-lg font-bold bg-gradient-to-r from-[#ff00ff] to-[#8800ff] hover:from-[#ff33ff] hover:to-[#aa00ff] text-white transition-all",
                            children: "Back to Home"
                        }, void 0, false, {
                            fileName: "[project]/app/[username]/page.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[username]/page.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/[username]/page.tsx",
            lineNumber: 70,
            columnNumber: 13
        }, this);
    }
    if (state === "results" && githubData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResultsDashboard"], {
            data: githubData,
            vibeMode: vibeMode,
            onReset: handleReset,
            username: username
        }, void 0, false, {
            fileName: "[project]/app/[username]/page.tsx",
            lineNumber: 106,
            columnNumber: 16
        }, this);
    }
    return null;
}
_s(UserPage, "rT6BKdRS0BmrTNo8/OpGvKQ2xyg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = UserPage;
var _c;
__turbopack_context__.k.register(_c, "UserPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_2aedea93._.js.map