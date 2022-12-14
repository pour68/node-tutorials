const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const EventEmitter = require("events");

class LoggerEvent extends EventEmitter {
  constructor() {
    super();

    this.currentDateTime = this.#formatDateTime();
    this.uniqueId = this.#generateUniqueId();
  }

  async log(msg) {
    const logRecord = this.#logRecord(msg);

    try {
      let relativePath = path.join(__dirname, "logs");

      if (!fs.existsSync(relativePath)) {
        await fsPromises.mkdir(relativePath);
      }

      await fsPromises.appendFile(
        path.join(__dirname, "logs", "log.txt"),
        logRecord
      );
    } catch (err) {
      console.error(err);
    }
  }

  #logRecord(msg) {
    return `${this.currentDateTime} \t ${this.uniqueId} \t ${msg} \n`;
  }

  #formatDateTime() {
    return format(new Date(), "yyyyMMdd\tHH:mm:ss");
  }

  #generateUniqueId() {
    return uuid();
  }
}

const loggerEvent = new LoggerEvent();

// create event
loggerEvent.on("log", (msg) => {
  loggerEvent.log(msg);
});

// target usage: loggerEvent.emit("log", "custom msg");

module.exports = loggerEvent;
