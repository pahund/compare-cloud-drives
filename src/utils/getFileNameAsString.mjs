import repairFileNameBuffer from "./repairFileNameBuffer.mjs";

export default function getFileNameAsString(fileNameBuffer) {
  return repairFileNameBuffer(fileNameBuffer).toString("utf8");
}

