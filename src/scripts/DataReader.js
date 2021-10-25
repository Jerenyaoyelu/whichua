import data from "../data/db.txt";

export default class DataReader {
  constructor() {
    this.dataMap = {};
    this.__init();
  }

  __init() {
    const db = data.split("\n");
    db.forEach((item) => {
      const [device, system, browser, ua] = item.trim().split("|");
      if (!this.dataMap[device]) this.dataMap[device] = {};
      this.dataMap[device][browser] = {
        system,
        browser,
        ua,
      };
    });
  }
}
