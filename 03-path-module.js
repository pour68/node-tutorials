const path = require("path");
const win32Path = require("node:path").win32;
const posixPath = require("node:path").posix;

const absoluteAddress = __dirname + "\\index.js";
const relativeAddress = "./index.js";

const fileName = path.basename(absoluteAddress);
const fileExtension = path.extname(absoluteAddress);
const isAbsolute = path.isAbsolute(relativeAddress);
const indexAbsoluteAddress = path.join(__dirname, "index.js");
const indexAbsoluteAddressPrime = path.resolve(__dirname, "index.js");
const addressObject = path.parse(absoluteAddress);
const theAbsoluteAddress = path.format(addressObject);

// exercise
const folderAddress = path.dirname(absoluteAddress);
const arrayOfProgramFilesPath = process.env.PATH.split(path.delimiter);
const relativePath = path.normalize("C:\\temp\\\\foo\\bar\\..\\");
const relativeDir = path.relative(__dirname + "\\index.js", __dirname + "\\01-base-exercise-01.js");
const seperator = path.sep;
const projectDirectory = path.toNamespacedPath(__dirname);
