const authRouter = require('./auth');
const settingsRouter = require('./settings');

const setupRoutes = (app) => {
  app.use('/auth', authRouter);
  app.use('/settings', settingsRouter);
};

module.exports = setupRoutes;
