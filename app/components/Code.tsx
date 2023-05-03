/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { themes, Highlight } from "prism-react-renderer";

interface PropTypes {
   code: string;
   show: boolean;
   language: string;
   animated?: boolean;
   animatedDelay?: number;
}

const Code = ({ code, language, show, animated, animatedDelay }: PropTypes) => {
   const [text, setText] = useState(animated ? "" : code);
   const { theme: applicationTheme } = useTheme();

   const lines = text.split(/\r\n|\r|\n/).length;
   const theme =
      applicationTheme === "light" ? themes.nightOwlLight : themes.nightOwl;

   useEffect(() => {
      if (show && animated) {
         let i = 0;
         setTimeout(() => {
            const intervalId = setInterval(() => {
               setText(code.slice(0, i));
               i++;
               if (i > code.length) {
                  clearInterval(intervalId);
               }
            }, 15);

            return () => clearInterval(intervalId);
         }, animatedDelay || 150);
      }
   }, [code, show, animated, animatedDelay]);

   return (
      <Highlight code={text} language={language} theme={theme}>
         {({ className, getLineProps, getTokenProps, style, tokens }) => (
            <pre
               className={
                  className +
                  "transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar"
               }
               style={{
                  maxHeight: show ? lines * 24 : 0,
                  opacity: show ? 1 : 0,
               }}
            >
               {tokens.map((line, i) => {
                  const { key, ...rest } = getLineProps({ line, key: i });

                  return (
                     <div
                        key={`line-${i}`}
                        style={{ position: "relative" }}
                        {...rest}
                     >
                        {line.map((token, index) => {
                           const { key, ...props } = getTokenProps({
                              token,
                              i,
                           });

                           return <span key={index} {...props} />;
                        })}
                     </div>
                  );
               })}
            </pre>
         )}
      </Highlight>
   );
};

export default Code;
