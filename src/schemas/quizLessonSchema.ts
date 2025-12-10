import z from "zod";
import { lessonBase } from "./lessonBase";
import { questionSchema } from "./questionSchema";

export const quizLessonSchema = lessonBase.extend({
    type: z.literal("quiz"),
    passingScore: z.number().min(0).max(100),
    questions: z.array(questionSchema).default([])
});