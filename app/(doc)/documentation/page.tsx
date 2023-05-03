import React from "react";
import { type Metadata } from "next";
import "simplebar-react/dist/simplebar.min.css";

import { LargeHeading, Paragraph, DocumentationTabs } from "@/app/components";

export const metadata: Metadata = {
   title: "Similarity API | Documentation",
   description: "Free & Open-Source text similarity api.",
};

const Documentation = () => {
   return (
      <div className="container max-w-7xl mx-auto mt-12">
         <div className="flex flex-col items-center gap-6">
            <LargeHeading>Making a request</LargeHeading>
            <Paragraph>/api/v1/similarity</Paragraph>

            <DocumentationTabs />
         </div>
      </div>
   );
};

export default Documentation;
