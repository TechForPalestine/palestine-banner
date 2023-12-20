import hljs from "highlight.js";
import "highlight.js/styles/github.min.css";

import { HTMLAttributes, useEffect, useRef } from "react";

const CodeSnippet = ({
  children,
  ...rest
}: { children: string } & HTMLAttributes<HTMLPreElement>) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    hljs.highlightBlock(codeRef.current as HTMLElement);
  }, [children]);

  return (
    <pre {...rest}>
      <code ref={codeRef}>{children}</code>
    </pre>
  );
};

export { CodeSnippet };
