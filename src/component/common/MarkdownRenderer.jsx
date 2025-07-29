import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 className="title" {...props} />,
          h2: ({ node, ...props }) => <h2 className="sub-title" {...props} />,
          h3: ({ node, ...props }) => <h3 className="font-bold" {...props} />,
          a: ({ node, ...props }) => (
            <a
              target="_blank"
              rel="noreferrer"
              className="link font-semibold"
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            <img
              className="rounded-xl m-2 overflow-hidden transition-all-1"
              {...props}
            />
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={atomDark}
                showLineNumbers={true}
                wrapLongLines={true}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
