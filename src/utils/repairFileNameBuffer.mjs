import { ENCODING_REPAIRS } from "../constants.mjs";
import replaceMultipleBuffers from "./replaceMultipleBuffers.mjs";

export default function repairFileNameBuffer(fileNameBuffer) {
  return replaceMultipleBuffers(fileNameBuffer, ENCODING_REPAIRS);
}

