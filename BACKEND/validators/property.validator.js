import z from 'zod';


const newPropertyValidatorSchema = z.object({
    owner: z.string().min(3,{ message: "This field has to be filled." }).max(50),
    name: z.string().min(3).max(50),
    address: z.string().min(3).max(50),
    point: z.number(),
    coordinates: z.array(z.number()).length(2),
    images: z.array(z.string()),
    contactNo: z.string(),
    approved: z.boolean().default(false),

})

const updatePropertyValidatorSchema = z.object({
    name: z.string().min(3).max(50).optional(),
    address: z.string().min(3).max(50).optional(),
    point: z.number().optional(),
    coordinates: z.array(z.number()).length(2).optional(),
    images: z.array(z.string()).optional(),
    contactNo: z.string().optional(),
    approved: z.boolean().default(false).optional(),
})

export { newPropertyValidatorSchema, updatePropertyValidatorSchema }