import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import { runCode } from './api/api';

export function CodeMirrorComponent(props) {

    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('python');
    
    const handleSubmit = () => {
        runCode(code, language)
    }

    const handleLanguageChange = ({target}) => {
        setLanguage(target.value)
    }

    return(
        <div style={{width: "80%", height: "300px", marginLeft:"auto", marginRight:"auto", marginTop: "30px"}}>
            <CodeMirror
                value={code}
                options={{
                    theme: 'monokai',
                    keyMap: 'sublime',
                    mode: language
                }}
                onChange={(editor, data, value) => {
                    setCode(editor.getValue())
                }}
            />
            <select onChange={handleLanguageChange} value={language}>
                <option value="python">Python</option>
                <option value="jsx">JSX</option>
                <option value="java">Java</option>
                <option value="c">C</option>
                <option value="go">Go</option>
                <option value="cpp">C++</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}