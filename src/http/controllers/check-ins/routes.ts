import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/http/middlewares/verify-jwt';
import { create } from './create-controller';
import { validate } from './validate-controller';
import { history } from './history-controller';
import { metrics } from './metrics-controller';

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT); // Todas as rotas em diante chamarão o middleware de verificar o token JWT

  app.get('/check-ins/history', history);

  app.get('/check-ins/metrics', metrics);

  app.post('/gyms/:gymId/check-ins', create);

  app.patch('/check-ins/:checkInId/validate', validate);
}
