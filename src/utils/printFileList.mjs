export default function printFileList(fileList, maxItems = 100) {
  console.log(
    fileList.length === 0
      ? "(no files)"
      : fileList.length > maxItems
      ? [
          ...fileList.slice(0, maxItems),
          `(${fileList.length - maxItems} more)`,
        ].join("\n")
      : fileList.join("\n")
  );
}
