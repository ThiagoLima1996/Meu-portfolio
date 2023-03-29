import React, {useState} from "react";

import { contact } from '../data'

import emailjs from '@emailjs/browser'


const Contact = () => {

    function SendEmail(e) {
        e.preventDefault()
    
        if (name === '' || email === '' || subject === '' || message === '') {
            alert("Por favor, preencha todos os campos")
            return;
        } 

        const templeteParams = {
            from_name: name,
            message: message,
            subject: subject,
            email: email
        }

        emailjs.send("service_mp2c3l1", "template_mho3ssg", templeteParams, "4dHk6LUH1RUyiuqiR").then(() =>{
            setName('')
            setEmail('')
            setMessage('')
            setSubject('')
        })
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return (
        <section id="contact" className="section bg-primary">
            <div className="container mx-auto">
                {/* section title */}
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title before:content- relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">Fale comigo</h2>
                    <p className="subtitle">Se você gosto do que viu até agora entre em contato comigo, estou sempre aberto a uma nova proposta.</p>
                </div>

                <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                    {/* info */}
                    <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                        {contact.map((item, index) => {
                            const { icon, title, subtitle, description } = item;
                            return <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                                <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                                    {icon}
                                </div>
                                <div>
                                    <h4 className="font-body text-xl mb-1">{title}</h4>
                                    <p className="mb-1">{subtitle}</p>
                                    <p className="text-accent font-normal">{description}</p>
                                </div>
                            </div>
                        })}
                    </div>

                    {/* formulario de contato */}
                    <form className="form space-y-8 w-full max-w-[780px]" onSubmit={SendEmail}>
                        <div className="flex gap-8">

                            {/* Input nome */}
                            <input
                                type="text"
                                className="input"
                                placeholder="Seu nome"
                                onChange={(e) => setName(e.target.value)}
                                value={name} />

                            {/* Input email */}
                            <input
                                type="email"
                                className="input"
                                placeholder="Seu email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email} />

                        </div>
                        {/* input assunto */}
                        <input
                            type="text"
                            className="input"
                            placeholder="Assunto"
                            onChange={(e) => setSubject(e.target.value)}
                            value={subject} />

                        {/* input para comentario */}
                        <textarea
                            className="textarea"
                            placeholder="Sua mensagem"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}></textarea>

                        {/* Botão de enviar */}
                        <button className="btn btn-lg bg-accent hover:bg-accent-hover">
                            Enviar mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;