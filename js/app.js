import * as Sentry from "@sentry/browser";
import { wasmIntegration } from "@sentry/wasm";
import Module from "./wasm/demo";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  sendDefaultPii: true,
  attachStacktrace: true,
  integrations: [wasmIntegration()],
});

console.debug(import.meta.env)

var module = await Module();
try {
  console.log('divide result: ' + module.divide(21, 7));
  console.log('divide result: ' + module.divide(1, 0));
} catch (e) {
  console.error("error: " + e.message);
  Sentry.captureException(e);
}
