import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as cn } from "./router-fA54dPWS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-FwlNuia2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	ref,
	className: cn("flex h-11 w-full rounded-md bg-surface px-3 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-muted outline-none focus-visible:shadow-[var(--shadow-border-hover)]", className),
	...props
}));
Input.displayName = "Input";
//#endregion
export { Input as t };
