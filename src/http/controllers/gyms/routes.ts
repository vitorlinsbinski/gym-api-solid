import { FastifyInstance } from 'fastify';
import { verifyJWT } from '../../middlewares/verify-jwt';

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT); // Todas as rotas em diante chamarão o middleware de verificar o token JWT

  
}
