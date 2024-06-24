import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black',
    //     border: '1px solid white'
    // })
    // const [btnText, setBtnText] = useState("Enable Light Mode")
    // const toggleDarkMode = () => {
    //     if (myStyle.color === "white") {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     } else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }
    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'gray' : 'white', border: props.mode === 'dark' ? '1px solid white' : '1px solid black' }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'gray' : 'white', border: props.mode === 'dark' ? '1px solid white' : '1px solid black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Introduction ot TextUtils
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            A text utils application is a software tool that provides various functions for manipulating and analyzing text. These utilities can range from basic text transformations to more complex text processing features. Such applications are commonly used to perform repetitive or complex text-related tasks more efficiently.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'gray' : 'white', border: props.mode === 'dark' ? '1px solid white' : '1px solid black' }}>
                    <h2 className="accordion-header" id="headingTwo" >
                        <button className="accordion-button collapsed" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'gray' : 'white', border: props.mode === 'dark' ? '1px solid white' : '1px solid black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Common Features of a Text Utils App
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ol>
                            <li>Text Transformation:</li>
                            <p>with the help of text transformations we can transform any text into desired format. Exmaple of text transformations are:uppercase/lowercase Conversion, reverse text, remove extra spaces</p>
                            <li>Text Analysis</li>
                            <p>with the help of text analysis we can analyze any text. Exmaple of text analysis are:Word Count, Character Count, Sentence Count, Reading Time Estimation</p>
                            <li>Text Formatting</li>
                            <p>with the help of text formatting we can format any text. Exmaple of text formatting are:Bold, Italic, Underline</p>
                            <li>Text Cleaning</li>
                            <p>In text cleaning, we can removes duplicates, find and replace, spell check etc</p>
                            <li>Text Encription/Decryption</li>
                            <p>The Encription is a technique to hide information for thirdparties and only can understand receiver. Some exaples are Encrypt or decrypt, hashing </p>
                            <li>Text-to-Speech and Speech-to-Text</li>
                            <p>The text utils also facilitates to the person who are lazy in writing by their hand.</p>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'gray' : 'white', border: props.mode === 'dark' ? '1px solid white' : '1px solid black' }}>
                    <h2 className="accordion-header" id="headingThree" >
                        <button className="accordion-button collapsed" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'gray' : 'white', border: props.mode === 'dark' ? '1px solid white' : '1px solid black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Resources
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            My best youtube channel is codewihharry to learn any programming language. Visit <a href="https://www.youtube.com/c/CodewithHarry" target="_blank" rel="noreferrer">CodewithHarry</a> for more.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className="btn btn-primary my-2" type="button" onClick={toggleDarkMode}> {btnText}</button> */}
        </div>
    )
}
