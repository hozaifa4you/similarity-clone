"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";

import { Button } from "@/components";
import { toast } from "@/app/components/ui/toast";

const SignInOutButton = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const signingOutHandler = async () => {
      setIsLoading(true);

      try {
         await signOut();
      } catch (error) {
         toast({
            title: "Error signing out",
            message: "Please try again later",
            type: "error",
         });
      }
   };

   return (
      <Button onClick={signingOutHandler} isLoading={isLoading}>
         Sign Out
      </Button>
   );
};

export default SignInOutButton;
