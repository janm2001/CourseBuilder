import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { courseSchema, type Course } from "@/schemas/courseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateCourseGeneralInfoForm = () => {
  const form = useForm<Course>({ resolver: zodResolver(courseSchema) });
  const onSubmit: SubmitHandler<Course> = () => {
    toast.success("Data has been submited successfuly");
  };
  console.log();
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6 my-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Input placeholder="Course Title" {...form.register("title")} />
        {form.formState.errors.title && (
          <div className="text-red-600">
            {form.formState.errors.title.message}
          </div>
        )}
        <Textarea
          placeholder="Course Description"
          {...form.register("description")}
        />
        {form.formState.errors.description && (
          <div className="text-red-600">
            {form.formState.errors.description.message}
          </div>
        )}
        <div className="flex justify-between align-middle gap-4">
          <Input
            type="number"
            placeholder="Course Price"
            {...form.register("price", { valueAsNumber: true })}
          />
          <FormField
            control={form.control}
            name="currency"
            render={({ field, fieldState }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger
                    aria-invalid={fieldState.invalid}
                    className="w-[250px]"
                  >
                    <SelectValue placeholder="Select Course Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Currency</SelectLabel>
                      <SelectItem value="EUR">Euro</SelectItem>
                      <SelectItem value="USD">Dollar</SelectItem>
                      <SelectItem value="GBP">British Pound</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end my-4">
          <Button type="submit" className="w-[250px]">
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateCourseGeneralInfoForm;
