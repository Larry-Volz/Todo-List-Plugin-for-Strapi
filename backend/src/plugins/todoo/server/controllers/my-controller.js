'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('todoo')
      .service('myService')
      .getWelcomeMessage();
  },
};
