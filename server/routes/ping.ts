import { Router } from 'express';

import { config } from '../config.js';

export const pingRouter = Router();

// Health/diagnostic endpoint: echoes a client message plus runtime metadata.
pingRouter.post('/ping', async (req, res) => {
  // Body is untyped from Express; narrow with a runtime check below.
  const { message } = req.body as { message?: unknown };

  if (typeof message !== 'string') {
    res.status(400).json({ error: 'invalid message' });
    return;
  }

  // this is a delay to simulate a real-world scenario
  if (config.pingDelayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, config.pingDelayMs));
  }

  res.status(200).json({
    echo: message, // request payload
    env: config.env, // deployment target 
    timestamp: Math.floor(Date.now() / 1000),
    version: config.version, // from VERSION env, default 0.0.0
  });
});
