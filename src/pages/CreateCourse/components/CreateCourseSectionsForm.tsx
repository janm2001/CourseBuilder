import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { sectionSchema, type Section } from "@/schemas/sectionSchema";

interface SectionsFormProps {
  setActiveTab: (active: string) => void;
}

const CreateCourseSectionsForm = ({ setActiveTab }: SectionsFormProps) => {
  const form = useForm<Section>({ resolver: zodResolver(sectionSchema) });
  const onSubmit: SubmitHandler<Section> = () => {
    toast.success("Section data has been submited successfuly");
    setActiveTab("lessonsInfo");
  };
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6 my-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Input placeholder="Section Title" {...form.register("title")} />
        {form.formState.errors.title && (
          <div className="text-red-600">
            {form.formState.errors.title.message}
          </div>
        )}
        <Textarea
          placeholder="Section Description"
          {...form.register("description")}
        />
        {form.formState.errors.description && (
          <div className="text-red-600">
            {form.formState.errors.description.message}
          </div>
        )}
        <div className="flex justify-end my-4">
          <Button type="submit" className="w-[250px]">
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateCourseSectionsForm;
