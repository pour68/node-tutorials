# Node

## History

founder: Ryan Dahl
birthdate: July 2011
story: An engineer name Ryan Dahl developed node.js by the help of c++ and chrome v8-engine.
goal: Run javascript codes out of browser or on computer.

## JavaScript engines

- Firefox (SpiderMonkey)
- Chrome (V8)
- Edge (V8)
- Internet Explorer (Chakra)
- Safari (JavaScriptCore)

## What is Node.js?

free, open source, cross platform, javascript runtime/server environment.
single thread/non-blocking asynchronous architecture, which is very memory efficient.

- open source: visit/modify code by community.
- cross platform: app is available in major oses.
- javascript runtime environment: provides necessary components in order to use and run js codes out of browser.
- great for prototyping and agile development
- superfast and highly scalable/data intensive/i/o intensive apps
- javascript everywhere
- cleaner and more consistent codebase
- large ecosystem of packages/modules
- it's not a language, library and framework

Note: [v8 engine official website](https://v8.dev/)

## What node.js can do?

- Node.js can generate dynamic page content
- Node.js can create, open, read, write, delete, and close files on the server
- Node.js can collect form data
- Node.js can add, delete, modify data in your database
- Node.js can build backend/real-time apps/streaming services/cli tools/multiplayer games/...

Note: node is not suitable for cpu intensive apps like video encoding.

## Setting up your development environment

- install node.js
- editor: vscode - atom - sublime - bracket - vim - ...

Note:

download Node.js from [here](https://nodejs.org)

## How to check node.js is sucessfully installed

- node --version || node -v

## Differences between vanilla js and node.js

- node runs on server
- console is terminal-window
- global object instead of window object
- build-in modules
- commonjs module instead of ES6 modules
- missing some APIs like fetch, ...

## Output

project root > terminal (ctrl + `) > node [filename].js

## Exercises

- find and favorite my github for node.js

## Node.js

binary > c > c++ > js

## Node wrapper function

```(function(exports, require, module,__filename,__dirname) {  })```

Note:

generate some error in order to see node wrapper. (example: const fullname = ;)
__dirname: return absolute path
__filename: return absolute path + current file + file extension

## Node module scope

Every file in a Node application is a module. Node automatically wraps the code in each file with an IIFE (Immediately-invoked Function Expression) to create scope. So, every variables and functions are encapsulated inside a js file and never attached to global object.

## exports vs module.exports

example:

math.js > add/multiple function > exports.add/exports.multiple/... || module.exports = {add, multiple,...}
but when you use exports = {add, multiple,...} nothing gonna return

Note:

always use module.exports.

### Custom module

- create a file
- create your own methods/props
- use module.exports and export them all
- in target file import them by commonjs method or in simple term require("relative address");
- use methods/props

Note: node 14 and above support ECMAScript module system format as well.

## Double starndard of import/export in js

- use commonjs syntax by default

- package.json > "type": "module"
- use ES7 syntax

## Importing JSON and watch mode

- create json file
- import it to js file

node --watch filename

## Node build-in modules/packages

[Node.js DOCS](https://nodejs.org/en/docs/)

### OS module

const os = require("node:os") || require("os");

- platform(): return os platform. (example: win32)
- arch(): return os architecture. (example: x64)
- cpus: return cpu core info. (example: object)
- type(): return the type of the os. (example: Windows_NT)
- version(): return the version of os. (example: Widnwos 10 Pro)
- homedir(): return os home directory. (example: C:\Users\PouriaNayeb)
- totalmem(): return total memory
- freemem(): return free memory
- uptime(): return number of seconds your computer is up and running.

### PATH module

const path = require("node:path") || require("path");

- dirname(__filename): return absolute path
- basename(__filename||__dirname): return filename with extension/folder name
- extname(__filename): return extension of the file
- parse(__filename): return an object with props like: root - dir - base - ext and name
- format(path.parse(__filename)): return absolute path
- isAbsolute(__filename): check if address is absolute
- join(__dirname, folderName, fileNameWithExt)
- resolve(__dirname, folderName, fileNameWithExt)

### Character set and encoding

#### binary data

computers store and represent data in binary format which is collection of 0s and 1s
each 0/1 is called binary digit/bit
to work with piece of data computer needs to convert that to binary format

character in binary format:
computers will first convert character to a number and then convert the number to binary format
example: 86 is numberic representation of "V" character that is also called charcter code

#### Character sets

are pre-defined lists of characters represented by numbers
Unicode and ASCII

#### Character encoding

dictiates how to represent a number in a character set in binary data before it can be stored in a computer
it dictiates how many bits to use to represent the number
example:
UTF-8 represent that characters should be encoded in bytes (8 bits)
4 => 100 => 00000100
V => 86 => 01010110

#### Stream

a sequence of data that is being moved from one point to another over time
a stream of data over the internet being moved from one computer to another
stream of data transfered from one file to another within the same computer
process streams of data in chunks as they arrive instead of waiting for the entire data to be available before processing

example:
youtube videos.
transfering data from fileA to fileB in a same computer.

types: reable stream (reading file) - writable stream (writing file) - duplex/hybrid stream (sockets) - transform stream (compress/decompress data)
advantage: prevent unnecessary data downloads and memory usage.

##### Stream and node

stream in fact is a build-in module inherits from EvenEmitter class.
other modules use streams for their functioning.

#### Buffer

a small capacity for processing streaming data at runtime before transfer.

example:

30 seating capacity

scenario 1: 100 people arrival > 30 people accummodated > 70 in queue (wating)
scenario 2: 1 person > at least for 10 people (wating)

example:

const buffer = new Buffer.from("Pouria");

- buffer.write("DevMedia.ir"); // output: DevMed (buffer have limited capacity)
- buffer.toString(); // output: Pouria
- buffer; // output: ```<Buffer collectionOfHexadecimalNo. >``` (hold data in binary format but represent in hexadecimal format)
- buffer.toJSON(); // output: { type: "Buffer", data: arrayOfDecimalNo. }

### FS module

const fs = require(node:fs) || require("fs");

#### File management

pattern:

- readFileAsync(path)
- readFileAsync(path, charset)
example: const fileContent = readFileSync("./files/log.txt", "utf-8");

- readFile(path, callback): read file but return buffer data
- readFile(path, charset, callback): read file and return data
- readFile(path, charset, callback): read file and return data
example: readFile("./files/log.txt", "utf-8", (err, data) => { ... });

- writeFileSync(path, content)
example: writeFileSync(path.join(__dirname, "files", "log.txt"), "write some content")

- writeFile(path, content, callback): write content in file, utf8 is by default
- writeFile(path, content, options, callback): write content in file, utf8 is by default
example: writeFile(path.join(__dirname, "files", "log.txt"), "write some content", err => {});
example: writeFile(path.join(__dirname, "files", "log.txt"), "write some content", { flag: "a" }, err => {});

- appendFile(path, content, callback): append content to file(after write content can use it in callback)

- open(path, flag, callback): create empty file with specified name
example: open("log.txt", "w", (err, file) => {});

- rename(startPath, endPath, callback): rename filename
example: rename("log1.txt", "log2.txt", (err) => {});

- unlink(path): delete file
example: unlink("log.txt", (err) => {});

- readdirSync(path): read all files in a folder
example: readdirSync("./");

- readdir(path, callback): read all files in a folder
example: readdir("./", (err, files) => {})

- createReadStream(path, config): chunk large files
- createWriteStream(path): write chunk large files

example:
const rs = fs.createReadStream(path, { encoding: "utf-8", highWaterMark: 2 });
const ws = fs.createWriteStream(path);
rs.on("data", (chunkData) => { ws.write(chunkData); }) || rs.pipe(ws)

Note: highWaterMark specified the bytes of chunks. (default: 18Bytes/64KB)

#### zlib module

const zlib = require("node:zlib") || require(zlib);

const gzip = zlib.createGzip();
const rs = createReadStream(path, config);
const ws = fs.writeStream(path); // file.txt.gz

rs.pipe(gzip).pipe(ws);

#### Folder management

- existsSync(raltivePath)

- mkdir(raltivePath, callback)
example: mkdir("./new", err => {})

- rmdir(raltivePath, callback)
example: rmdir("./new", err => {})

## FS promise module

const fsPromises = require(node:fs/promises) || require("fs").promises

const fileOps = async () => {
    try {
    const data = await fsPromises.readFile(relativePath, charset);
    await fsPromises.writeFile(relativePath, content);
    await fsPromises.appendFile(relativePath, content);
    await fsPromises.rename(startPath, endPath);
    } catch (err) { ... }
}

## Url module/package

The URL module splits up a web address into readable parts.

const myUrl = new URL("absolute address");

- myUrl.href: absolute url (example: https://example.com:8080/search?query=js-tuts#home)
- myUrl.toString(): absolute url (example: https://example.com:8080/search?query=js-tuts#home)
- myUrl.pathname: return url path (example: /search)
- myUrl.host: return host name (example: example.com:8080)
- myUrl.hostname: return host name (example: example.com)
- myUrl.origin: return referer origin
- myUrl.search: return all things after ? sign (example: ?query=js-tuts)
- myUrl.searchParams: return query strings (example: URLSearchParams { 'query' => 'js-tuts' }
- myUrl.hash.substring(1): return fragment (example: home)

- myUrl.searchParams.append("key", "value");
- myUrl.searchParams.forEach((value, key) => {});

or

let parsedUrl = url.parse("http://localhost:8080/default.htm?year=2017&month=february", true);

- parsedUrl.host (example: localhost:8080)
- parsedUrl.pathname (example: /default)
- parsedUrl.search (example: ?year=2017&month=february)
- const querydata = parsedUrl.query; (example: { year: 2017, month: 'february' })
- querydata.month (example: february)

### Process module (no need to import)

const port = process.env.PORT || 3500;

process.on("oncaughException", (err) => {
    // manage error
    process.exit(1);
});

## Event

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("event name", (param) => { ... });
eventEmitter.emit("event name", arg);

Note: Every class can extends EventEmitter class.

## HTTP module

const http = require("http");

const server = http.createServer((req, res) => {
    req.url
    req.headers
    req.body
    req.params
    req.query

    res.writeHead(statusCode, options);
    res.write();
    res.end();
});

server.listen(port, callback);

## NPM(node package manager)

NPM is a CLI tool

Note:

npm CLI exist in documentation

### npm commands

Collection of npm commands to manage modules/packages

#### Initialize npm files

- npm init: create initial file to manage modules/packages
- npm init -y: create initial file with default data to manage modules/packages

Note:

What is package.json?

#### node.js module scanner priorities

- core module
- file and folder
- node_modules

#### Install module/package

- npm install [package name]: install package with specified name
- npm i [package name]: install package with specified name
- npm i [package name] -D || --save-dev: install package with specified name just for development environment

npm i nodemon -D: start/run node file
npm i date-fns: format date/time
npm i uuid: generate unique id
npm i undersccore: a collection of helper/utils functions
npm i mongoose: is ODM/ORM package for mangodb
npm i -g npm@5.5.3: install specific version of a package globally

example:
const {format} = require("date-fns");
const {v4:uuid} = require("uuid");

const currentDate = new Date(new Date, yyyyMMdd\tHH:mm:ss);
const id = uuid();

Note:

- Imagine v1 of a library installed on node_modules and after there is a library that consumes v2 of that library, in this situations v2 of that specific package stored locally on the library consume it.
- Always exclude node_modules from source control.

#### Semantic versioning

package version pattern: major.minor.patch

- ^(caret): major never change.
- ~(Tilde): major and minor never change.
- no-sign: exact version.

#### module/package list

- npm list
- npm list --depth=0: main moudle/packages.

#### metadata(registry info) about module/package

- npm view mongoose
- npm view mongoose dependencies
- npm view mongoose versions

#### downgrade/upgrade packages

npm i mongoose@version
npm i underscore@version

#### updating local modules/packages

- npm outdated: watch outdated packages
- npm outdated -g: watch globally installed outdated packages
- npm update: update minor.patch version of packages
- npm i -g npm-check-updates > terminal + npm-check-updates > ncu -u > npm i: update all packages to latest version

#### Uninstall module/package

- npm uninstall/un/rm [package name]: uninstall package with specified name
- npm uninstall/un/rm -g [package name]: uninstall globally installed package with specified name

#### publishing a module/package

- create a folder with unique name
- create package.json
- create a file and export function
- npm adduser: create an account
- npm login: already have an account? login
- npm publish

Exercise:

create a project and consume created package.

#### updating published module/package

- npm version major/minor/patch
- npm publish

## Handling and logging errors

implement by loggerEvent file
