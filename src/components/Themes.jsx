import React, { useState } from 'react';
import { themes } from '../data';
import ThemesItem from './ThemesItem';
import { FaCog } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import './theme.css';
import { useEffect } from 'react';

const getStorageColor = () => {
    let color = 'hsl(19, 96%, 52%)';
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color');
    }
    return color;
}
const Themes = () => {
    const [showSwitcher, setshowSwitcher] = useState(false);
    const [color, setColor] = useState(getStorageColor());
    const [theme, setTheme] = useState('light-theme');

    const changeColor = (color) => {
        setColor(color);
    };

    const togglerTheme = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme");
        } else {
            setTheme('light-theme');
        }

    }
    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color]);

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);
    return (
        <div>
            <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>

                <div className="style__switcher-toggler"
                    onClick={() => setshowSwitcher(!showSwitcher)}
                >
                    <FaCog />
                </div>

                <div className="theme__toggler" onClick={togglerTheme}>
                    {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                </div>


                <h3 className="style__switcher-title">Style Switcher </h3>
                <div className="style__switcher-items">
                    {themes.map((theme, index) => {
                        return (
                            <ThemesItem key={index} {...theme} changeColor={changeColor} />
                        )
                    })}
                </div>

                <div className="style__switcher-close"
                    onClick={() => setshowSwitcher(!showSwitcher)}
                >&times;</div>
            </div>
        </div>
    );
};

export default Themes;