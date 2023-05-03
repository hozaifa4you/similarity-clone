import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/libs/utils";

const paragraphVariants = cva(
   "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
   {
      variants: {
         size: { default: "text-base sm:text-lg", sm: "text-sm sm:text-base" },
      },
      defaultVariants: { size: "default" },
   }
);

interface PropTypes
   extends HTMLAttributes<HTMLParagraphElement>,
      VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, PropTypes>(
   function paragraph({ className, size, children, ...props }, ref) {
      return (
         <p
            {...props}
            ref={ref}
            className={cn(paragraphVariants({ size, className }))}
         >
            {children}
         </p>
      );
   }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
