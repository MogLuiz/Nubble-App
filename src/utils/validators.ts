import {z} from 'zod';

export const schemas = {
  email: z.string().email('email inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
};
