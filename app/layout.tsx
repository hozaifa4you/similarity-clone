import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/libs/utils";
import { Navbar, Providers } from "@/components";
import { Toaster } from "@/app/components/ui/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Similarity Clone with Yousuf Ahamad",
   description: "Similarity application clone with nextjs 13",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html
         lang="en"
         className={cn("bg-white text-slate-900 antialiased", inter.className)}
      >
         <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
            <Providers>
               {/* @ts-expect-error server component */}
               <Navbar />
               <Toaster position="bottom-right" />
               {children}
            </Providers>

            {/* allow for more height on mobile devices */}
            <div className="h-40 md:hidden" />
         </body>
      </html>
   );
}
