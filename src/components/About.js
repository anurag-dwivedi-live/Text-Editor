import React from 'react'

function About(props) {
  return (
    <>
    <section className="bg-gray-900 body-font text-white" style={props.mode}>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 bg-gray-900 text-white" style={props.mode}>About Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-3 text-gray-300" style={props.mode}>
              Good stories humanize your brand, providing context and meaning for your offering. What's more, good stories are sticky — which means people are more likely to connect with them and pass them on.
              Yellow Leaf Hammocks tell users about its product by describing how the hammocks empower artisan weavers and their families. The company breaks down different pieces of the story into sections that combine words and easily digestible graphics.
              People want to know what your business does and how it can help them. After all, if people can't figure out what you do, how will they know they need your product or service?
              So, skip the industry lingo — that's what Apptopia does on its about us page. Their simple but polished language effectively communicates the company's offering while still allowing the average person to understand it.
              At Apptopia, we want to solve the biggest problem in mobile: everyone is guessing.
              Publishers need to know what apps to build, how to monetize them, and where to price them. Advertisers and brands need to identify their target users, and determine where to allocate resources in order to reach them most effectively. Investors need to know which apps and genres are growing the quickest, and where users are really spending their time and money.
              In business, we need data to make informed decisions. Apptopia provides the most actionable mobile app insights in the industry. We aim to make this data available to as many people as possible.
            </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default About