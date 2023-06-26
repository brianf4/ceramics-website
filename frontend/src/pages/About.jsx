import React from "react";
import Footer from "../components/Footer"
function About() {
    return (
        <section className="flex flex-col justify-between">
            <section className="border-2 border-black flex justify-around gap-x-8 p-12">
                <img className="block border-2 border-purple-900 w-3/6 h-full" /> 
                <section className="w-3/6 flex flex-col gap-y-8">
                    <p className="text-xl font-semibold leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi amet laborum ducimus obcaecati officiis saepe doloribus, illum, quidem porro suscipit culpa deserunt alias nam voluptates tempora magni rem expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure minima sequi officiis nisi eos, quam omnis dolore harum aliquid! Ad, eos. Animi eveniet eum vel veniam accusamus eaque repellat?</p>
                    <p className="text-xl font-semibold leading-loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora voluptatum, quod ad sit atque voluptatem iste, omnis reprehenderit obcaecati odio possimus corporis quia nulla illo consectetur? Nobis accusamus temporibus et?</p>
                </section>
            </section>
            <Footer />
        </section>
    )
}
export default About