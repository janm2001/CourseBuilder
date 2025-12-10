import { currencyEnum } from "@/enums/CurrencyEnum";
import z from "zod";
import { sectionSchema } from "./sectionSchema";

export const courseSchema = z.object({
    title: z.string().min(5, "Course title is too short"),
    description: z.string().max(500, "Description is too long").optional(),
    price: z.number().min(5),
    currency: z.enum(currencyEnum),
    curriculum: z.array(sectionSchema).default([])
});