import request from 'supertest';
import { app } from '@/app';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user';
import { prisma } from '@/lib/prisma';

describe('Create check-in (e2e)', () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be able to create a check-in', async () => {
    const { token } = await createAndAuthenticateUser(app);

    // Caso eu não tenha acesso à rota de criar a academia, eu posso fazer a inserção direto no banco de dados, mas é preferível evitar esse tipo de abordagem:
    const gym = await prisma.gym.create({
      data: {
        title: 'JavaScript Gym',
        latitude: -11.831316,
        longitude: -55.492018,
      },
    });

    const response = await request(app.server)
      .post(`/gyms/${gym.id}/check-ins`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        latitude: -11.831316,
        longitude: -55.492018,
      });

    expect(response.statusCode).toEqual(201);
  });
});
