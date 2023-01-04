const os = require("node:os");

const osCore = os.platform();
const osArchitecture = os.arch();
const osRootFolder = os.homedir();
const totalMemry = os.totalmem();
const freeMemory = os.freemem();
const computerUpTime = os.uptime();
const cpuDetails = os.cpus();

// exercise
const endOfLineMarker = os.EOL;
const osVersion = os.release();
const osWithVersion = os.version();
const tempDir = os.tmpdir();
const hostName = os.hostname();
const osType = os.type();
const machineType = os.machine();
const userInfo = os.userInfo();
const loadAvg = os.loadavg();
const networkObj = os.networkInterfaces();
const osConstantsCodes = os.constants;
const endiannessOfCpuForBinaryCompile = os.endianness();
const devNullPath = os.devNull;

// const priorityOfProcess = os.getPriority();
// os.setPriority();
