'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/add/question', controller.home.addRequestion);
  router.post('/api/question/list', controller.home.questionList);
  router.get('/api/code', controller.home.getCode);
};
