import {z} from 'zod';
import {schemas} from '@utils/validators';

export const loginSchema = z.object({
  email: schemas.email,
  password: schemas.password,
});

export type LoginSchema = z.infer<typeof loginSchema>;
