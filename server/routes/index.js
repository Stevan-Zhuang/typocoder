const authRouter = require('./auth');
const settingsRouter = require('./settings');
const statsRouter = require('./stats');
const openaiRouter = require('./openai');

const setupRoutes = (app) => {
  app.use('/auth', authRouter);
  app.use('/settings', settingsRouter);
  app.use('/stats', statsRouter);
  app.use('/openai', openaiRouter);
};

module.exports = setupRoutes;
