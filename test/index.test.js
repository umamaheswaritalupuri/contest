import { test } from "node:test";
import assert from "node:assert/strict";
import { getAppInfo, getVersion, greet } from "../src/index.js";

test("greet returns a greeting", () => {
  assert.equal(greet("ci"), "Hello, ci!");
});

test("getVersion returns the app version", () => {
  assert.equal(getVersion(), "1.0.0");
});

test("getAppInfo returns name and version", () => {
  assert.deepEqual(getAppInfo(), {
    name: "nodejs-ci",
    version: "1.0.0",
  });
});
