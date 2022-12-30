const os = require("os");

const osCore = os.platform();
const osArchitecture = os.arch();
const osRootFolder = os.homedir();
const totalMemry = os.totalmem();
const freeMemory = os.freemem();
const computerUpTime = os.uptime();
const cpuDetails = os.cpus();

// exercise
const machine = os.machine();
