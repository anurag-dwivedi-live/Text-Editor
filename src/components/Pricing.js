import React from 'react'

function Pricing(props) {
  return (
    <>
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden" style={props.mode}>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white" style={props.mode}>Pricing</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={props.secMode}>Unlock premium features with our flexible pricing plans tailored to suit your needs and budget</p>
            </div>
            <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium" style={props.secMode}>START</h2>
                <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none"  style={props.mode}>Free</h1>
                <p className="flex items-center text-gray-400 mb-2" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Unlimited Tests
                </p>
                <p className="flex items-center text-gray-400 mb-2" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Basic Analytics
                </p>
                <p className="flex items-center text-gray-400 mb-6" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Email Support
                </p>
                <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Button
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                <p className="text-xs text-gray-400 mt-3" style={props.secMode}>Get started with our free plan now.</p>
                </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium" style={props.secMode}>PRO</h2>
                <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800" style={props.mode}>
                    <span>$38</span>
                    <span className="text-lg ml-1 font-normal text-gray-400" style={props.secMode}>/mo</span>
                </h1>
                <p className="flex items-center text-gray-400 mb-2" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Everything in Basic
                </p>
                <p className="flex items-center text-gray-400 mb-2" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Advanced Analytics
                </p>
                <p className="flex items-center text-gray-400 mb-2" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Priority Email Support
                </p>
                <p className="flex items-center text-gray-400 mb-6" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Learning Management Systems
                </p>
                <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                <p className="text-xs text-gray-400 mt-3" style={props.secMode}>Upgrade to pro plan for the most recommended features.</p>
                </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium" style={props.secMode}>BUSINESS</h2>
                <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800" style={props.mode}>
                    <span>$56</span>
                    <span className="text-lg ml-1 font-normal text-gray-400" style={props.secMode}>/mo</span>
                </h1>
                <p className="flex items-center text-gray-400 mb-2" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Everything in Standard
                </p>
                <p className="flex items-center text-gray-400 mb-2" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Custom Question Types
                </p>
                <p className="flex items-center text-gray-400 mb-2" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Phone Support
                </p>
                <p className="flex items-center text-gray-400 mb-2" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>API Access
                </p>
                <p className="flex items-center text-gray-400 mb-6" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>LMS with Support
                </p>
                <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Button
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                <p className="text-xs text-gray-400 mt-3" style={props.secMode}>Get all the professional buisness suite tools to access the whole LMS.</p>
                </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium" style={props.secMode}>SPECIAL</h2>
                <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800" style={props.mode}>
                    <span>$72</span>
                    <span className="text-lg ml-1 font-normal text-gray-400" style={props.secMode}>/mo</span>
                </h1>
                <p className="flex items-center text-gray-400 mb-2" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Everything in Pro
                </p>
                <p className="flex items-center text-gray-400 mb-2" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Dedicated Account Manager
                </p>
                <p className="flex items-center text-gray-400 mb-2" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Customizable Certificates
                </p>
                <p className="flex items-center text-gray-400 mb-2" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>White-Labeling
                </p>
                <p className="flex items-center text-gray-400 mb-6" style={props.secMode}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0" style={props.secMode}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>Unlimited Test per Month
                </p>
                <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Button
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                <p className="text-xs text-gray-400 mt-3" style={props.secMode}>Unlock all the premium features to enjoy unlimited bandwidth per month.</p>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Pricing