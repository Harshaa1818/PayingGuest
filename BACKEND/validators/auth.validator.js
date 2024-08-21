import z from 'zod';
const signUpValidationSchema = z.object({
    email: z.string().email(),
    username: z.string(),
    password: z.string(),
    role: z.enum(['visitor', 'owner', 'admin']),
    contactNo: z.string().optional()

})
const signInValidationSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export { signUpValidationSchema, signInValidationSchema }