import z from 'zod';

export const signupInput = z.object({
    username:z.string().email(),
    password:z.string().min(8),
    name:z.string().optional()
})

export type signupInput = z.infer<typeof signupInput>;