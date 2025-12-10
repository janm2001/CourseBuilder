import z from "zod";

export const questionSchema = z.object({
    questionText: z.string().min(5, "Question cannot be empty"),
    options: z.array(z.object({
        text: z.string().min(1, "Options are required"),
        isCorrect: z.boolean(),
    })).min(2, "Must have at least 2 options")
})