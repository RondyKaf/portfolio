import React, { useRef } from 'react';
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebook,
    FaGithub,
    FaYoutube,
    FaDribbble
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './contact.css';
import emailjs from '@emailjs/browser'


const contact = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_48bfdwg',
            'template_wyl2j7y',
            form.current,
            'T4tXLKYFLVN3_kJYN')
            .then((result) => {
                console.log(result.text);
                console.log("message send");
            }, (error) => {
                console.log(error.text);
                console.log("error")
            });
    };
    return (
        <section className="contact section">
            <h2 className="section__title">
                Get In <span>Touch</span>
            </h2>
            <div className="contact__container container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">Don't be Shy !</h3>

                    <p className="contact__description">
                        Feel free to get in touch with me. I am always open to discussingnew
                        projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen />

                            <div>
                                <span className='info__title'>Mail mee</span>
                                <h4 className='info__desc'>Rondykfm@gmail.com</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaPhoneSquareAlt />

                            <div>
                                <span className='info__title'>Call me</span>
                                <h4 className='info__desc'>+243 974 853 467</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <a href="https://facebook.com" className='contact__social-link'>
                            <FaFacebook />
                        </a>
                        <a href="https://facebook.com" className='contact__social-link'>
                            <FaGithub />
                        </a>
                        <a href="https://facebook.com" className='contact__social-link'>
                            <FaYoutube />
                        </a>
                        <a href="https://facebook.com" className='contact__social-link'>
                            <FaDribbble />
                        </a>
                    </div>
                </div>

                <form ref={form} action="contact__from" onSubmit={sendEmail}>
                    <div className="form__input-groupe">

                        <div className="form__input-div">
                            <input type="text"
                                placeholder='Your Name...'
                                className='form__control'
                                name='to_name'
                            />
                        </div>

                        <div className="form__input-div">
                            <input type="emailt"
                                placeholder='Your mail...'
                                className='form__control'
                                name='from_name'
                            />
                        </div>
                        <div className="form__input-div">
                            <input type="text"
                                placeholder='Your Subject...'
                                className='form__control'
                            />
                        </div>
                    </div>

                    <div className="form__input-div">
                        <textarea placeholder='Your Message' className="form__control textarea" name='message'></textarea>
                    </div>

                    <button className="button" value="send">
                        Send Message
                        <span className='home__icon contact__button-icon'>
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default contact;