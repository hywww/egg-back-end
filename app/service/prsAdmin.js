'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const ws = require('await-fs');

class prsService extends Service {
  async addToJson(reqData) {
    await fs.readFile('app/public/problemList.json', 'utf8', function(err, data) {
      if (err) {
        console.log(err);
        return {
          msg: '打开json失败',
        };
      }
      const dataJson = JSON.parse(data);
      if (!dataJson[reqData.name]) {
        dataJson[reqData.name] = [];
      }
      dataJson[reqData.name].push(reqData);
      const dataStr = JSON.stringify(dataJson);
      fs.writeFile('app/public/problemList.json', dataStr, function(err) {
        if (err) {
          console.log(err);
          return {
            msg: '写入json失败',
          };
        }
      });
      return {
        msg: '操作成功',
      };
    });
    return {
      status: 200,
      msg: '操作成功',
    };
  }
  async readJson(id) {
    try {
      const res = await ws.readFile('app/public/problemList.json', 'utf8');
      const dataJson = JSON.parse(res);
      return {
        status: 200,
        result: dataJson[id],
      };
    } catch (err) {
      console.log(err);
      return {
        status: 502,
        msg: '读取json失败',
      };
    }
  }
  async readCode() {
    try {
      const res = await ws.readFile('app/public/aelcr.sas', 'utf8');
      return {
        status: 200,
        result: res,
      };
    } catch (err) {
      console.log(err);
      return {
        status: 502,
        msg: '读取sas失败',
      };
    }
  }

}
module.exports = prsService;
