import "./globals.css";
import { Inter } from "next/font/google";

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
      <html lang="en">
         <body className={inter.className}>{children}</body>
      </html>
   );
}
