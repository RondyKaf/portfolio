/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Profile from "../../assets/profil.jpeg";
import './home.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import About from '../about/About';

const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className='home__img' />
            <div className="home__content">
                <div className="home__date">
                    <h1 className="home__title"><span>I'm Rondy Kafumu.</span> web & mobile developper</h1>
                    <p className="home__description">
                    I am passionate about new technology and I specialize in web and mobile development. 
                    With several years of experience in the field, I am always looking for new ways to 
                    innovate and improve my skills to offer the best solutions to my clients. While I enjoy 
                    technical challenges, my priority is always to create exceptional user experiences and 
                    top quality results. Contact me if you are interested in a partnership on an interesting 
                    development project!
                    </p>
                    
                    <Link to={About} className='button'>
                        More About Me <span className="home__icon"><FaArrowRight /> </span>
                    </Link>
                </div>
            </div>
            <div className="color__block"></div>
        </section>
    );
};

export default Home;