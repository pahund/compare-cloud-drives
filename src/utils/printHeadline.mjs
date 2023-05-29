export default function printHeadline(text) {
  console.log(
    `\n${"-".repeat(text.length)}\n${text}\n${"-".repeat(text.length)}`
  );
}
