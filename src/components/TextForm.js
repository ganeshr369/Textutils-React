import React, { useState, useEffect, useRef } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("")

    // text = "a;lsdk";     // wrong way to change the state
    // setText("hello, using setText"); // correct way to change the state

    const [undoStack, setUndoStack] = useState([])
    const [redoStack, setRedoStack] = useState([])
    const [isListening, setIsListening] = useState(false)
    const recogRef = useRef(null)
    const handleOnChange = (event) => {
        setUndoStack([...undoStack, text])
        console.log('On Change');
        setText(event.target.value)
        setRedoStack([])
    }

    const handleUndo = () => {
        if (undoStack.length > 0) {
            setRedoStack([text, ...redoStack])
            setText(undoStack[undoStack.length - 1])
            setUndoStack(undoStack.slice(0, -1))
        }
    }

    const handleRedo = () => {
        if (redoStack.length > 0) {
            setUndoStack([...undoStack, text])
            setText(redoStack[0])
            setRedoStack(redoStack.slice(1))
        }
    }
    const handleUpperClick = () => {
        // console.log("Uppercase was clicked" + text);
        setUndoStack([...undoStack, text])
        let newText = text.toUpperCase();
        setText(newText);
        setRedoStack([])
        props.showAlert("Text converted to lower case", "success")
    }

    const handlelowerClick = () => {
        // console.log("loawercase was clicked" + text);
        setUndoStack([...undoStack, text])
        let newText = text.toLowerCase();
        setText(newText);
        setRedoStack([])
    }
    
    useEffect(() => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.log('Speech recognition is not supported by this browser.');
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recogRef.current = new SpeechRecognition();
        recogRef.current.continuous = true;
        recogRef.current.interimResults = true;
        recogRef.current.lang = 'en-US';

        recogRef.current.onresult = (event) => {
            let interimTranscript = '';
            let finalTranscript = text;

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }

            setText(finalTranscript + interimTranscript);
        };

        recogRef.current.onstart = () => {
            setIsListening(true);
            console.log('Speech recognition started.');
        };

        recogRef.current.onend = () => {
            setIsListening(false);
            console.log('Speech recognition ended.');
        };

        recogRef.current.onerror = (event) => {
            console.error('Speech recognition error', event);
        };

    }, [text]);

    const startListening = () => {
        if (recogRef.current && !isListening) {
            recogRef.current.start();
        }
    };

    const stopListening = () => {
        if (recogRef.current && isListening) {
            recogRef.current.stop();
        }
    };

    const handleTextToSpeech = () => {
        setUndoStack([...undoStack, text])
        let newText = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(newText);
        setRedoStack([])
    }

    const handleCopyToCboard = () => {
        setUndoStack([...undoStack, text])
        navigator.clipboard.writeText(text);
        setRedoStack([])
        alert("Text copied to clipboard")
    }

    const handleFindReplaceClick = () => {
        setUndoStack([...undoStack, text])
        let findText = prompt("Enter the text you want to replace");
        let replaceText = prompt("Enter the text you want to replace with");
        setText(text.replace(findText, replaceText));
        setRedoStack([])
    }

    const handleUndoClick = () => {
        setUndoStack([...undoStack, text])
        let newText = text.substring(0, text.length - 1);
        setText(newText);
        setRedoStack([])
    }

    const handleUndoLastWordClick = () => {
        setUndoStack([...undoStack, text])
        let newText = text.trim().split(/\s+/)
        newText.pop()
        newText = newText.join(" ");
        setText(newText);
        setRedoStack([])
    }
    const handleReverseClick = () => {
        setUndoStack([...undoStack, text])
        let newText = text.split("").reverse().join("");
        setText(newText);
        setRedoStack([])
    }

    const handleEraseClick = () => {
        setUndoStack([...undoStack, text])
        let newText = "";
        setText(newText);
        setRedoStack([])
        props.showAlert("You erased all the text", "danger")
    }


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark'? 'white':'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark'? '#afafaf':'white', color : props.mode === 'dark'? 'white':'black' }} rows="6" value={text}></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2 btn-sm" onClick={handleUpperClick} disabled={text.length === 0}>Convert to Uppercase </button>
                <button className="btn btn-primary mx-2 my-2 btn-sm" onClick={handlelowerClick} disabled={text.length === 0}>Convert to Lowercase </button>
                <button className="btn btn-primary mx-2 my-2 btn-sm" onClick={startListening} disabled={isListening}> Start Listening</button>
                <button className="btn btn-primary mx-2 my-2 btn-sm" onClick={stopListening} disabled={!isListening}> Stop listening</button>
                <button className="btn btn-success mx-2 my-2 btn-sm" onClick={handleTextToSpeech} disabled={text.length === 0}>Text to Speech </button>
                <button className="btn btn-secondary mx-2 my-2 btn-sm" onClick={handleCopyToCboard} disabled={text.length === 0}>Copy to Clipboard </button>
                <button className="btn btn-warning mx-2 my-2 btn-sm" onClick={handleFindReplaceClick} disabled={text.length === 0}>Find & Replace </button>
                <button className="btn btn-warning mx-2 my-2 btn-sm" onClick={handleReverseClick} disabled={text.length === 0}>Reverse Text </button>
                <button className="btn btn-danger mx-2 my-2 btn-sm" onClick={handleUndoClick} disabled={text.length === 0}>Delete Last Char </button>
                <button className="btn btn-danger mx-2 my-2 btn-sm" onClick={handleUndoLastWordClick} disabled={text.length === 0}>Delete Last Word </button>
                <button className="btn btn-danger mx-2 my-2 btn-sm" onClick={handleEraseClick} disabled={text.length === 0}>Erase All Text </button>
                <button className="btn btn-secondary btn-sm mx-2 my-2" onClick={handleUndo} disabled={undoStack.length === 0}>Undo Action</button>
                <button className="btn btn-secondary mx-2 my-2 btn-sm" onClick={handleRedo} disabled={redoStack.length === 0}>Redo Action</button>
                <a className="btn btn-info mx-2 my-2 btn-sm" href="https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" target="_blank" rel="noreferrer">Code Source on <i className="fab fa-youtube text-danger" ></i></a>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark'? 'white':'black' }}>
                <h1>Your Text Summary</h1>
                {text.length > 0 ? (
                    <>
                        <p>{text.split(/\s+/).filter(word => word).length} words, {text.length} characters</p>
                        <p>{text.split(" ").filter(word => word).length * 0.082} minutes read</p>
                    </>
                ) : (
                    <p>0 words, 0 characters</p>
                )}
                <hr />
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "No text is entered!"}</p>
            </div>
        </>
    )
} 
