import React from 'react'
import { useState, useEffect } from 'react'
import { marked } from 'marked';


const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('# Hello World\n\nStart writing your Markdown here...');
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }, []);
  
    const handleMarkdownChange = (e) => {
      setMarkdown(e.target.value);
    };
  
    if (isLoading) {
      return <div className="loading">Loading editor...</div>;
    }
  
    return (
      <div className="markdown-container">
        <div className="editor-section">
          <h2>Editor</h2>
          <textarea
            className="textarea"
            value={markdown}
            onChange={handleMarkdownChange}
            placeholder="Write your Markdown here..."
          />
        </div>
        <div className="preview-section">
          <h2>Preview</h2>
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>
    );
  }
  

export default MarkdownEditor
