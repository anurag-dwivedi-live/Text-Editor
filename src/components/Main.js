import React, {useState} from 'react'

function Main(props) {
    const [text, setText] = useState("")
    const [copiedText, setCopiedText] = useState(false)
    const upperText = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const lowerText = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const removeExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ');
        setText(newText)
    }
    const copyText = () => {
        navigator.clipboard.writeText(text)
        setCopiedText(true)
        setTimeout(() => {
            setCopiedText(false)
        }, 3000);
    }
    function dismissText() {
        setCopiedText(false)
    }
    function clearText() {
        setText("")
        document.getElementById("message").value = ""
    }
    const handleConvert = (e) => {
        setText(e.target.value)
    }
    return (
    <>
        <section className="text-gray-400 bg-gray-900 body-font relative" style={props.mode}>
            <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white" style={props.mode}>Text Editor</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={props.secMode}>Transform Your Text's Into Reality!</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2 mb-5">
                    <div className="p-2 w-full">
                        <div className="relative">
                        <textarea onChange={handleConvert} id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-56 text-base outline-none text-gray-100 py-3 px-4 leading-6 transition-colors duration-200 ease-in-out" placeholder='Start writing here...' style={props.mode}></textarea>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-span-5 m-auto mt-2">
                        <button onClick={upperText} className="text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded text-lg mt-3">Uppercase</button>

                        <button onClick={lowerText} className="text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded text-lg ml-3 mt-3">Lowercase</button>

                        <button onClick={removeExtraSpaces} className="text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded text-lg ml-3 mt-3">Remove Extra Spaces</button>

                        <button onClick={clearText} className="text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded text-lg ml-3 mt-3">Clear</button>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="container mt-5">
                    <h2 className='sm:text-3xl text-2xl font-medium title-font text-white text-center mt-3' style={props.mode}> Output &nbsp; <i onClick={copyText} className="fa-regular fa-copy text-2xl hover:cursor-pointer"></i></h2><br />

                    {copiedText === true ? (<div className="bg-gray-900 border border-black-400 text-white px-4 py-3 rounded relative mt-2 mb-4 w-auto text-center" role="alert" style={props.mode}>
                        <span className="block sm:inline text-center">Copied to clipboard!</span>
                        <span onClick={dismissText} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                        </span>
                    </div>) : ""}

                    <pre className="lg:w-2/3 mx-auto leading-relaxed text-base text-center whitespace-pre-wrap">{text === ""?"Preview will be shown here!":text}</pre>

                </div>
                <br /><hr /><br />
                <div className="container mt-5">
                    <h2 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white text-center mt-5'>Summary</h2>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center"><b>Characters Count : </b> {text.length}</p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center"><b>Words Count : </b> {text.split(" ").length}</p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center"><b>Estimated time to read : </b> {text.split(" ").length * 0.008} Minutes</p>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Main