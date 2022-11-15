import type { LayoutConfig } from "../types";

export function findClosetsMatch(folterPath: string, ops: LayoutConfig) : string | undefined {
  if (folterPath === "") {
    return ops.default;
  }
  if (ops[folterPath]) {
    return ops[folterPath];
  }
  const parent = folterPath.split("/").slice(0, -1).join("/");
  return findClosetsMatch(parent, ops);
}