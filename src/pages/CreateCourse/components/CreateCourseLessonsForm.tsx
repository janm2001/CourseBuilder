import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import { lessonSchema, type Lesson } from "@/schemas/lessonSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const CreateCourseLessonsForm = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(lessonSchema),
    defaultValues: {
      title: "",
      type: "video",
      isPreview: false,
      videoUrl: "",
      duration: 0,
    },
  });

  const lessonType = useWatch({
    control: form.control,
    name: "type",
  });

  const onSubmit: SubmitHandler<Lesson> = (data) => {
    console.log("Submitting:", data);
    toast.success("Lessons data has been successfully submitted!");
    navigate("/");
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6 my-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lesson Title</FormLabel>
              <FormControl>
                <Input placeholder="Introduction to React" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lesson Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lesson type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="video">Video Lesson</SelectItem>
                  <SelectItem value="text">Text Lesson</SelectItem>
                  <SelectItem value="quiz">Quiz</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* --- CONDITIONAL FIELDS --- */}

        {/* Video Specific Fields */}
        {lessonType === "video" && (
          <div className="space-y-4 border-l-2 pl-4 border-blue-500">
            <FormField
              control={form.control}
              name="videoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Video URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration (minutes)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {/* Text Specific Fields */}
        {lessonType === "text" && (
          <div className="space-y-4 border-l-2 pl-4 border-green-500">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lesson Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your lesson content here..."
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {/* Quiz Specific Fields */}
        {lessonType === "quiz" && (
          <div className="space-y-4 border-l-2 pl-4 border-purple-500">
            <FormField
              control={form.control}
              name="passingScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Passing Score (%)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormDescription>
              To add Questions, you would typically use a "useFieldArray" here.
            </FormDescription>
          </div>
        )}

        {/* isPreview Checkbox (Common) */}
        <FormField
          control={form.control}
          name="isPreview"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Free Preview</FormLabel>
                <FormDescription>
                  Allow students to watch this lesson without purchasing.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <div className="flex justify-end my-4">
          <Button type="submit" className="w-[250px]">
            Create Lesson
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateCourseLessonsForm;
