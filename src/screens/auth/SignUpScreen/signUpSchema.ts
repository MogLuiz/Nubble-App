import {z} from 'zod';
import {schemas} from '@utils/validators';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'username inválido').toLowerCase(),
  fullName: z
    .string()
    .min(5, 'nome muito curto')
    .max(50, 'nome muito longo')
    .refine(value =>
      value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' '),
    ),
  email: schemas.email,
  password: schemas.password,
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
