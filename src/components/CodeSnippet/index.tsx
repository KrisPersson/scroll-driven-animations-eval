type CodeSnippetProps = {
  code: string;
};

import "./index.css";

export default function CodeSnippet({ code }: CodeSnippetProps) {
  return (
    <div className="code-snippet-wrapper">
      <code className="code-snippet">{code}</code>
    </div>
  );
}
