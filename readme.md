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

## Node build-in modules/packages

[Node.js DOCS](https://nodejs.org/en/docs/)

### OS module

const os = require("os");

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

const path = require("path");

- dirname(__filename): return absolute path
- basename(__filename): return filename with extension
- extname(__filename): return extension of the file
- parse(__filename): return an object with props like: root - dir - base - ext and name
- join(__dirname, folderName, fileNameWithExt)

### FS module

const fs = require("fs");

#### File management

pattern:

- readFile(relativePath, callback): read file but return buffer data
- readFile(relativePath, charset, callback): read file and return data
example: readFile("./files/log.txt", "utf8", (err, data) => { ... });

- writeFile(relativePath, content, callback): write content in file, utf8 is by default
example: writeFile(path.join(__dirname, "files", "log.txt"), "write some content", err => {});

- appendFile(relativePath, content, callback): append content to file(after write content can use it in callback)

- open(relativePath, flag, callback): create empty file with specified name
example: open("log.txt", "w", (err, file) => {});

- rename(startPath, endPath, callback): rename filename
example: rename("log1.txt", "log2.txt", (err) => {});

- unlink(relativePath): delete file
example: unlink("log.txt", (err) => {});

- readdir(relativePath, callback)
- readdirSync(relativePath): read all files

examples:
readdir("./", (err, files) => {})
readdirSync("./");

- createReadStream(relativePath, config): chunk large files
- createWriteStream(relativePath): write chunk large files

example:
const rs = fs.createReadStream(relativePath, { encoding: "utf8" });
const ws = fs.createWriteStream(relativePath);

rs.on("data", (chunkData) => { ws.write(chunkData); }) || rs.pipe(ws)

#### Folder management

- existsSync(raltivePath)

- mkdir(raltivePath, callback)
example: mkdir("./new", err => {})

- rmdir(raltivePath, callback)
example: rmdir("./new", err => {})

## FS promise module

const fsPromises = require("fs").promises;

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

#### Change values of npm file properties

- name

#### Install module/package

- npm install [package name]: install package with specified name
- npm i [package name]: install package with specified name
- npm i [package name] -D: install package with specified name just for development environment

npm i nodemon -D: start/run node file
npm i date-fns: format date/time
npm i uuid: generate unique id

example:
const {format} = require("date-fns");
const {v4:uuid} = require("uuid");

const currentDate = new Date(new Date, yyyyMMdd\tHH:mm:ss);
const id = uuid();

#### Uninstall module/package

- npm uninstall [package name]: uninstall package with specified name
- npm un [package name]: uninstall package with specified name
- npm rm [package name]: uninstall package with specified name

#### Update module/package

npm update: update all installed packages by the rules in package.json

## Handling and logging errors

implement by loggerEvent file

## Unit and Integration testing

## Test-Driven development

## Clean code and refactoring

## Security best practices

## Useful libraries

## Deployment
