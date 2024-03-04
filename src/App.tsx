import './App.css'
import ReactMarkdown from 'react-markdown'
import {useState} from "react";

function App() {
  const [markdown, setMarkdown] = useState('## Lets is do it')
  const handleDownload = () => {
    const fileName = 'your_file_name.md';
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };
  return (
    <div className='markdown__wrap'>
      <header>
      </header>
      <div className="markdown">
        <div className='markdown-bigwrap'>
          <h1 className='title'>Write markdown, check it and download it as file.</h1>
          <textarea className='markdown__input' value={markdown} onChange={(e: any) => setMarkdown(e.target.value)}/>
        </div>
        <div className='markdown-bigwrap'>
          <button onClick={handleDownload} className='download'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 9h-4v-1h4v1zm0-3v1h-4v-1h4zm-2 13l-6-6h4v-3h4v3h4l-6 6z"/>
            </svg>
          </button>
          <article className='result'>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>
      </div>
      <footer>
        created by <a href="https://t.me/ubuntuous">@ubuntuos</a>
      </footer>
    </div>
  )
}

export default App
