import React from "react";
import Footer from "../components/Footer"

function Home() {
    return (
        <div className="homepage h-full">
            <div className="border-2 border-green-500 h-full flex">
                <h1 className="m-auto text-4xl font-medium slide-top">Home page!</h1> 
            </div>
            <Footer />
        </div>
    )
}
export default Home