export const GDRIVE_PATH = "G:\\Meine Ablage";
export const ICLOUD_PATH = "C:\\Users\\wieka\\iCloudDrive\\Archiv";
export const SCAN_ROOT_PATH = "Audioproduktion";
export const ENCODING_REPAIRS = [
  // Fix occurrences of "é"
  [Buffer.from([0x65, 0xcc, 0x81]), Buffer.from([0xc3, 0xa9])],
  // Fix occurences of "Ä"
  [Buffer.from([0x41, 0xcc, 0x88]), Buffer.from([0xc3, 0x84])],
  // Fix occurences of "ä"
  [Buffer.from([0x61, 0xcc, 0x88]), Buffer.from([0xc3, 0xa4])],
  // Fix occurences of "ü"
  [Buffer.from([0x75, 0xcc, 0x88]), Buffer.from([0xc3, 0xbc])],
  // Fix occurences of "Ö"
  [Buffer.from([0x4f, 0xcc, 0x88]), Buffer.from([0xc3, 0x96])],
  // Fix occurences of "ö"
  [Buffer.from([0x6f, 0xcc, 0x88]), Buffer.from([0xc3, 0xb6])],
];

