const authRouter = require('./auth');
const settingsRouter = require('./settings');
const openaiRouter = require('./openai');

const setupRoutes = (app) => {
  app.use('/auth', authRouter);
  app.use('/settings', settingsRouter);
  app.use('/openai', openaiRouter);
};

module.exports = setupRoutes;
