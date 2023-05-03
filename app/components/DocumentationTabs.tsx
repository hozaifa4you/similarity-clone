"use client";
import React from "react";
import SimpleBar from "simplebar-react";

import {
   Tabs,
   TabsList,
   TabsTrigger,
   TabsContent,
} from "@/app/components/ui/Tabs";
import { Code } from "@/components";
import { nodejs, python } from "@/app/helpers/doc-code";

const DocumentationTabs = () => {
   return (
      <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
         <TabsList>
            <TabsTrigger value="nodejs">NodeJs</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
         </TabsList>
         <TabsContent value="nodejs">
            <SimpleBar>
               <Code language="javascript" code={nodejs} show animated />
            </SimpleBar>
         </TabsContent>
         <TabsContent value="python">
            <SimpleBar>
               <Code language="javascript" code={python} show animated />
            </SimpleBar>
         </TabsContent>
      </Tabs>
   );
};

export default DocumentationTabs;
