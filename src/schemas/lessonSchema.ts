
import z from "zod";
import { videoLessonSchema } from "./videoLessonSchema";
import { textLessonSchema } from "./textLessonSchema";
import { quizLessonSchema } from "./quizLessonSchema";

export const lessonSchema = z.discriminatedUnion("type", [
    videoLessonSchema,
    textLessonSchema,
    quizLessonSchema,
])

export type Lesson = z.infer<typeof lessonSchema>;