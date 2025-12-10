import z from "zod";

export const lessonBase = z.object({
    title: z.string().min(3, "Lesson title is required"),
    isPreview: z.boolean().default(false),
});