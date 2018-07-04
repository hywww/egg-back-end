'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async addRequestion() {
    if (this.ctx.request.body.name && this.ctx.request.body.text) {
      const result = await this.ctx.service.prsAdmin.addToJson(this.ctx.request.body);
      this.ctx.body = result;
    }
  }
  async questionList() {
    if (this.ctx.request.body.name) {
      const result = await this.ctx.service.prsAdmin.readJson(this.ctx.request.body.name);
      this.ctx.body = result;
    }
  }
  async getCode() {
    const result = await this.ctx.service.prsAdmin.readCode();
    this.ctx.body = result;
  }
}

module.exports = HomeController;
