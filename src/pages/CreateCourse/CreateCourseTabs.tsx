import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateCourseGeneralInfoForm from "./components/CreateCourseGeneralInfoForm";

const CreateCourseTabs = () => {
  return (
    <Tabs defaultValue="generalInfo" className="my-4 p-4">
      <TabsList className="w-full">
        <TabsTrigger value="generalInfo">General Info</TabsTrigger>
        <TabsTrigger value="sectionsInfo">Sections</TabsTrigger>
        <TabsTrigger value="lessonsInfo">Lessons</TabsTrigger>
      </TabsList>
      <TabsContent value="generalInfo">
        <CreateCourseGeneralInfoForm />
      </TabsContent>
      <TabsContent value="sectionsInfo">Sections works</TabsContent>

      <TabsContent value="lessonsInfo">Lessons works</TabsContent>
    </Tabs>
  );
};
export default CreateCourseTabs;
