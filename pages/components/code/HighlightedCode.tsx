import classNames from 'classnames';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import diff from 'highlight.js/lib/languages/diff';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import php from 'highlight.js/lib/languages/php';
import python from 'highlight.js/lib/languages/python';
import ruby from 'highlight.js/lib/languages/ruby';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
// @ts-ignore
import curl from 'highlightjs-curl';
import React from 'react';
import HighlightedCodeHeader from './HighlightedCodeHeader';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('curl', curl);
hljs.registerLanguage('diff-html', diff);
hljs.registerLanguage('java', java);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('node', javascript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('python', python);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('shell', bash);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);

export interface HighlightedCodeProps {
  children: string;
  title?: string;
  className?: string;
  hideHeader?: boolean;
  noTopBorderRadius?: boolean;
}

/**
 * Component to render code highlighted with highlight.js.
 *
 * @example
 */
export default function HighlightedCode({
  children: code,
  title,
  className,
  hideHeader = false,
  noTopBorderRadius = false,
}: HighlightedCodeProps) {
  if (!code) return null;

  const language = className?.replace('language-', '') || 'bash';
  function parseCode(str: string) {
    return hljs.highlight(str, { language }).value;
  }

  return (
    <code className={classNames('block mb-4', className)}>
      {!hideHeader ? (
        <HighlightedCodeHeader title={title || language} code={code} />
      ) : null}
      <pre
        style={{ background: '#31324e' }}
        className={classNames(
          'hljs font-mono p-6 text-white overflow-x-scroll',
          !hideHeader || noTopBorderRadius ? 'rounded-b-md' : 'rounded-md',
        )}
        dangerouslySetInnerHTML={{ __html: parseCode(code) }}
      />
    </code>
  );
}
