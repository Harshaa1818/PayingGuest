import z from 'zod';
const signUpValidationSchema = z.object({
    email: z.string().email(),
    username: z.string(),
    password: z.string(),
    contactNo: z.string().optional()

})
const signInValidationSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export { signUpValidationSchema, signInValidationSchema }