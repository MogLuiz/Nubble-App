import {z} from 'zod';
import {schemas} from '@utils/validators';

export const forgotPasswordSchema = z.object({
  email: schemas.email,
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
