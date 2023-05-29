import fs from "node:fs";
import path from "node:path";
import getFileNameAsString from "./getFileNameAsString.mjs";

export default function getFilePaths(dir, dir2 = dir, arr = []) {
  return fs
    .readdirSync(dir, { withFileTypes: true, encoding: "buffer" })
    .reduce((acc, curr) => {
      switch (true) {
        case curr.isFile():
          return [...acc, path.join(dir2, getFileNameAsString(curr.name))];
        case curr.isDirectory():
          return [
            ...getFilePaths(
              path.join(dir, curr.name.toString("utf8")),
              path.join(dir2, getFileNameAsString(curr.name)),
              acc
            ),
          ];
        default:
          throw new Error("Encountered weird directory entity:", curr);
      }
    }, arr);
}
