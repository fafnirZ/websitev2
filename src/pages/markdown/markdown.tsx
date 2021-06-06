import ReactMarkdown from 'react-markdown'
import react from 'react';
import md from './md.md'
import './markdown.css'




export function Markdown() {
    const [read, setRead] = react.useState(false);
    const [text, setText] = react.useState("");

    react.useEffect(()=> {
        fetch(md)
        .then(response => {
            return response.text();
        })
        .then(text=> {
            setText(text)
        })
    },[])

    return (
        <ReactMarkdown 
        children={text} 
        className="body-container"
        components={{
            h1: 'h2',
            a: ({node, ...props}) => <a className="hello" {...props} />
        }}
        />

    );
}