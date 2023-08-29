import isBrowser from "@/utils/isBrowser";
import isDevelopment from "@/utils/isDevelopment";

function log(...args: unknown[]) {
  if (!isDevelopment()) {
    return;
  }

  // Only add the styled prefix in a browser context.
  const prefix = isBrowser()
    ? [
        "%cMy firebase log:",
        "background: #ffa000; color: #fff; border-radius: 2px; padding: 2px 6px",
      ]
    : ["My firebase log:"];

  // eslint-disable-next-line no-console
  console.log(...prefix, ...args);
}

export default log;
