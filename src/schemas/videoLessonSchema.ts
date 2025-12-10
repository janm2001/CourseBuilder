import z from "zod";
import { lessonBase } from "./lessonBase";

export const videoLessonSchema = lessonBase.extend({
    type: z.literal("video"),
    videoUrl: z.url("Must be a valid video URL"),
    duration: z.number().min(1, "Duration is required"),
});