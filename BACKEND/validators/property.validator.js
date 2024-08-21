import z from 'zod';


const newPropertyValidatorSchema = z.object({
    owner: z.string().min(3).max(50).neccessary(),
    name: z.string().min(3).max(50).neccessary(),
    address: z.string().min(3).max(50).neccessary(),
    point: z.number().nonempty().neccessary(),
    coordinates: z.array(z.number()).length(2).nonempty().neccessary(),
    images: z.array(z.string()).nonempty().neccessary(),
    contactNo: z.string().neccessary(),
    approved: z.boolean().default(false),

})

const updatePropertyValidatorSchema = z.object({
    name: z.string().min(3).max(50).optional(),
    address: z.string().min(3).max(50).optional(),
    point: z.number().nonempty().optional(),
    coordinates: z.array(z.number()).length(2).nonempty().optional(),
    images: z.array(z.string()).nonempty().optional(),
    contactNo: z.string().optional(),
    approved: z.boolean().default(false).optional(),
})

export { newPropertyValidatorSchema, updatePropertyValidatorSchema }