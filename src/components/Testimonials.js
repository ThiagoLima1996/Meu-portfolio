//sem uso

import React from "react";

import TestimonialsSlider from '../components/TestimonialsSlider'

const Testimonials = () => {
    return(
        <section id="testimonials" className="section bg-secondary">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
                        What other people say
                    </h2>
                    <p className="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <TestimonialsSlider />
            </div>
        </section>
    )
}

export default Testimonials;