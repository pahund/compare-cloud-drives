import replaceBuffer from "./replaceBuffer.mjs";

export default function replaceMultipleBuffers(mainBuffer, bufferPairs) {
  bufferPairs.forEach(([oldBuffer, newBuffer]) => {
    mainBuffer = replaceBuffer(mainBuffer, oldBuffer, newBuffer);
  });

  return mainBuffer;
}

