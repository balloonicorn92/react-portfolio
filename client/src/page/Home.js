import React from 'react'

function Home(){
    return (
        <section className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                WELCOME.
                <br className="hidden lg:inline-block"/> My name is Fernanda Frers and I like to build applications.
                <br></br>
                Get to know <a href="/about" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"> me</a>.
            </h1>
            </div>
        </section>
    )
}

export default Home;