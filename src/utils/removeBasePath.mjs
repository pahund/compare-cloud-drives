export default function removeBasePath(path, basePath) {
  return path.startsWith(basePath) ? path.substring(basePath.length) : path;
}

