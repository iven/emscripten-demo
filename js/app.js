import * as Sentry from "@sentry/browser";
import { wasmIntegration } from "@sentry/wasm";
import Module from "./wasm/demo";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  sendDefaultPii: true,
  attachStacktrace: true,
  integrations: [wasmIntegration()],
});

console.log(import.meta.env)

var module = await Module();
try {
  console.log('divide result: ' + module.divide(21, 7));
  console.log('divide result: ' + module.divide(1, 0));
} catch (e) {
  console.log("error: " + e.message);
  Sentry.captureException(e);
}
