import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateCourseGeneralInfoForm from "./components/CreateCourseGeneralInfoForm";
import { useState } from "react";
import CreateCourseSectionsForm from "./components/CreateCourseSectionsForm";
import CreateCourseLessonsForm from "./components/CreateCourseLessonsForm";

const CreateCourseTabs = () => {
  const [activeTab, setActiveTab] = useState("generalInfo");
  return (
    <Tabs value={activeTab} defaultValue="generalInfo" className="my-4 p-4">
      <TabsList className="w-full">
        <TabsTrigger value="generalInfo">General Info</TabsTrigger>
        <TabsTrigger value="sectionsInfo">Sections</TabsTrigger>
        <TabsTrigger value="lessonsInfo">Lessons</TabsTrigger>
      </TabsList>
      <TabsContent value="generalInfo">
        <CreateCourseGeneralInfoForm setActiveTab={setActiveTab} />
      </TabsContent>
      <TabsContent value="sectionsInfo">
        <CreateCourseSectionsForm setActiveTab={setActiveTab} />
      </TabsContent>

      <TabsContent value="lessonsInfo">
        <CreateCourseLessonsForm />
      </TabsContent>
    </Tabs>
  );
};
export default CreateCourseTabs;
