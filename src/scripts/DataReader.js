import data from "../data/db.txt";

export default class DataReader {
  constructor() {
    this.dataMap = {};
    this.__init();
  }

  __init() {
    const db = data.split("\n");
    db.forEach((item) => {
      const [brand, device, system, browser, ua] = item.trim().split("|");
      if (!this.dataMap[brand]) this.dataMap[brand] = {};
      if (!this.dataMap[brand][device]) this.dataMap[brand][device] = [];
      this.dataMap[brand][device].push({
        brand,
        device,
        system,
        browser,
        ua,
      });
    });
  }
}
