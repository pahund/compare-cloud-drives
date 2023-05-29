import { Buffer } from "node:buffer";

export default function replaceBuffer(mainBuffer, oldBuffer, newBuffer) {
  let pos;
  let offset = 0;
  const parts = [];

  // Split the mainBuffer into parts around oldBuffer occurrences
  while ((pos = mainBuffer.indexOf(oldBuffer, offset)) !== -1) {
    parts.push(mainBuffer.slice(offset, pos));
    offset = pos + oldBuffer.length;
  }
  // Push the remaining part after the last oldBuffer occurrence
  parts.push(mainBuffer.slice(offset));

  // Concatenate all parts with newBuffer in between
  const resultBuffer = Buffer.concat(
    parts
      .reduce((arr, part) => {
        arr.push(part);
        arr.push(newBuffer);
        return arr;
      }, [])
      .slice(0, -1)
  ); // Remove the last, unnecessary newBuffer

  return resultBuffer;
}

