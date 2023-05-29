import path from "node:path";
import { GDRIVE_PATH, ICLOUD_PATH, SCAN_ROOT_PATH } from "./constants.mjs";
import {
  removeBasePath,
  getFilePaths,
  printFileList,
  printHeadline,
  removeLeadingBackslash,
  mergeFileArrays,
} from "./utils/index.mjs";

const gDriveScanRootPath = path.join(GDRIVE_PATH, SCAN_ROOT_PATH);
const iCloudScanRootPath = path.join(ICLOUD_PATH, SCAN_ROOT_PATH);

const removeGDriveBasePath = (path) => removeBasePath(path, GDRIVE_PATH);
const removeICloudBasePath = (path) => removeBasePath(path, ICLOUD_PATH);

console.log("Reading Google Drive files");
const gDriveFilePaths = getFilePaths(gDriveScanRootPath)
  .map(removeGDriveBasePath)
  .map(removeLeadingBackslash)
  .sort();

console.log("Reading iCloud files");
const iCloudFilePaths = getFilePaths(iCloudScanRootPath)
  .map(removeICloudBasePath)
  .map(removeLeadingBackslash)
  .sort();

const onlyInICloud = iCloudFilePaths.filter(
  (path) => !gDriveFilePaths.includes(path)
);
const onlyInGDrive = gDriveFilePaths.filter(
  (path) => !iCloudFilePaths.includes(path)
);
const inBothClouds = mergeFileArrays(gDriveFilePaths, iCloudFilePaths).filter(
  (path) => !onlyInGDrive.includes(path) && !onlyInICloud.includes(path)
);

printHeadline(`In both clouds: ${inBothClouds.length} files`);
printFileList(inBothClouds, 10);
printHeadline(`Only in Google Drive: ${onlyInGDrive.length} files`);
printFileList(onlyInGDrive);
printHeadline(`Only in iCloud: ${onlyInICloud.length} files`);
printFileList(onlyInICloud);
