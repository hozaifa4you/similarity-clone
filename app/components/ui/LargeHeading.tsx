import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/app/libs/utils";

const largeHeadingVariants = cva(
   "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
   {
      variants: {
         size: {
            default: "text-4xl md:text-5xl lg:text-6xl",
            lg: "text-5xl md:text-6xl lg:text-7xl",
            sm: "text-2xl md:text-3xl lg:text-4xl",
         },
      },
      defaultVariants: {
         size: "default",
      },
   }
);

interface PropTypes
   extends HTMLAttributes<HTMLHeadingElement>,
      VariantProps<typeof largeHeadingVariants> {}

const LargeHeading = forwardRef<HTMLHeadingElement, PropTypes>(
   function paragraph({ className, size, children, ...props }, ref) {
      return (
         <p
            {...props}
            ref={ref}
            className={cn(largeHeadingVariants({ size, className }))}
         >
            {children}
         </p>
      );
   }
);

LargeHeading.displayName = "Large Heading";

export default LargeHeading;
