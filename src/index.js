const APP_NAME = "nodejs-ci";
const APP_VERSION = "1.0.0";

export function getVersion() {
  return APP_VERSION;
}

export function greet(name = "world") {
  return `Hello, ${name}!`;
}

export function getAppInfo() {
  return {
    name: APP_NAME,
    version: APP_VERSION,
  };
}
