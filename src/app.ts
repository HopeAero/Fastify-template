import cors from '@fastify/cors';
import formbody from '@fastify/formbody';
import helmet from '@fastify/helmet';
import Fastify from 'fastify';

import loadConfig from './config/env.config';

loadConfig();

const port = Number(process.env.API_PORT) || 3000;
const host = String(process.env.API_HOST);

const startServer = async () => {
  const server = Fastify({ logger: true });

  server.register(formbody);
  server.register(cors);
  server.register(helmet);

  // Set error handler
  server.setErrorHandler((error, _request, reply) => {
    server.log.error(error);
    reply.status(500).send({ error: 'Something went wrong' });
  });

  server.get('/', (request, reply) => {
    reply.status(200).send({ message: 'Hello from fastify template!' });
  });

  const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM'];
  signals.forEach((signal) => {
    process.on(signal, async () => {
      try {
        await server.close();
        server.log.info(`Closed application on ${signal}`);
        process.exit(0);
      } catch (err) {
        server.log.error(`Error closing application on ${signal}`, err);
        process.exit(1);
      }
    });
  });

  /* Start server */
  try {
    await server.listen({
      port,
      host,
    });
    console.log(`Server is running at http://${host}:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

startServer();
