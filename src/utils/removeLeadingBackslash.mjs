export default function removeLeadingBackslash(path) {
  return path.startsWith("\\") ? path.substring(1) : path;
}
