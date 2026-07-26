import { mkdir, writeFile } from "node:fs/promises";
import { getVersion } from "../src/index.js";

const distDir = "dist";

await mkdir(distDir, { recursive: true });
await writeFile(`${distDir}/version.txt`, `${getVersion()}\n`);
