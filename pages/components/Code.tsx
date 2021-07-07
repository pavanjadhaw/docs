import classNames from "classnames";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import diff from "highlight.js/lib/languages/diff";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import php from "highlight.js/lib/languages/php";
import python from "highlight.js/lib/languages/python";
import ruby from "highlight.js/lib/languages/ruby";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import curl from "highlightjs-curl";
import React from "react";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("curl", curl);
hljs.registerLanguage("diff-html", diff);
hljs.registerLanguage("java", java);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("node", javascript);
hljs.registerLanguage("php", php);
hljs.registerLanguage("python", python);
hljs.registerLanguage("ruby", ruby);
hljs.registerLanguage("shell", bash);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

export interface CodeProps {
  children: string;
  className?: string;
}

export default function Code({ children: code, className }: CodeProps) {
  const language = className?.replace("language-", "") || "bash";

  function parseCode(str: string) {
    return hljs.highlight(language, str).value;
  }

  return (
    <code className={classNames("block my-4", className)}>
      <div
        className="px-6 py-2 rounded-t-md uppercase text-xs font-bold"
        style={{
          background: "#222337",
          color: "#c792ea",
        }}
      >
        {language}
      </div>
      <pre
        style={{
          background: "#31324e",
          fontFamily:
            'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        }}
        className="hljs font-mono rounded-b-md p-6 text-white overflow-x-scroll"
        dangerouslySetInnerHTML={{ __html: parseCode(code) }}
      />
    </code>
  );
}
