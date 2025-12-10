import z from "zod";
import { lessonBase } from "./lessonBase";

export const textLessonSchema = lessonBase.extend({
    type: z.literal("text"),
    content: z.string().min(10, "Content is too short")
});