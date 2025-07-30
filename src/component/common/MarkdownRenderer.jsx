import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import useMode from "../../hooks/useMode";
import Gallery from "../Gallery";

const MarkdownRenderer = ({ content }) => {
  const { mode } = useMode();
  return (
    <div className="markdown-body">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 className={mode ? "title" : "title-light"} {...props} />,
          h2: ({ node, ...props }) => <h2 className={mode ? "sub-title" : "sub-title-light"} {...props} />,
          h3: ({ node, ...props }) => <h3 className="title-pos" {...props} />,
          a: ({ node, ...props }) => (
            <a
              target="_blank"
              rel="noreferrer"
              className="link font-semibold"
              {...props}
            />
          ),
          img: ({ node, children, ...props }) => (
            <div className="flex align-middle justify-center">
              {/* <img
              className="image-post rounded-xl m-2 overflow-hidden transition-all-1"
              {...props}
            /> */}
            <Gallery images={[{id: 1, url: props.src, name:props.alt, size:"image-post"}]}{...props}/>
            </div>
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={mode ? nord : oneLight}
                showLineNumbers={true}
                wrapLongLines={true}
                language={match[1]}
                PreTag="div"
                className="code-block"
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
