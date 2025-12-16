
import z from "zod";

export const sectionSchema = z.object({
    title: z.string().min(5, "Section title is too short"),
    description: z.string().max(500, "Description is too long").optional(),
    //lessons: z.array(lessonSchema).default([])
});

export type Section = z.infer<typeof sectionSchema>;
