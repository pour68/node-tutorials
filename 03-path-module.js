const path = require("path");

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
const pathDelimiter = path.delimiter;
const folderAddress = path.dirname(absoluteAddress);
