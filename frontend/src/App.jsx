import { useState, useEffect } from "react";
import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import axios from "axios";
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'  


const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
// axios.get(`${API_URL}/api/test`);


function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try{
      const response = await axios.post(`${API_URL}/ai/generate`, { code });
      console.log(response.data);
      setReview(response.data);
    } catch(error){
      const response = await axios.post(`${API_URL}/ai/grokai`, {
        code
      });
      console.log(response.data);
      setReview(response.data);
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 15,
                border: "1px solid #333131",
                borderRadius: "0.7rem",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="review" onClick={reviewCode}>
            Review
          </div>
        </div>
        <div className="right">
            <ReactMarkdown
              rehypePlugins={[rehypeHighlight]}
            >{review}</ReactMarkdown>
        </div>
      </main>
    </>
  );
}

export default App;
