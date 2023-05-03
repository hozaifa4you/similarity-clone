"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

interface PropTypes {
   children: ReactNode;
}

const Providers = ({ children }: PropTypes) => {
   return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
         <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
   );
};

export default Providers;
