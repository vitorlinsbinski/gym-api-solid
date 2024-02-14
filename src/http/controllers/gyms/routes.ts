import { FastifyInstance } from 'fastify';
import { verifyJWT } from '../../middlewares/verify-jwt';
import { search } from './search-controller';
import { nearby } from './nearby-controller';
import { create } from './create-controller';

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT); // Todas as rotas em diante chamarão o middleware de verificar o token JWT

  app.get('/gyms/search', search);

  app.get('/gyms/nearby', nearby);

  app.post('/gyms', create);
}
