import React from 'react';
import Link from 'next/link'
import {useRouter} from "next/router";

import Branding from './Branding';
import {openCrisp} from '../crisp/Crisp';


const DesktopNavigation = () => {
    const router = useRouter();

    return (
        <div className="desktop-navigation">
            <ul className="main-navigation-branding">
                <li>
                    <Branding/>
                </li>
            </ul>
            <ul className="main-navigation-links">
                <li>
                    <Link href="/">
                        <a className={router.asPath == "/" ? "active" : ""}>
                            <div className="nav-link">Home</div>
                            <div className="active-bar"/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/daily">
                        <a className={router.asPath == "/daily" ? "active" : ""}>
                            <div className="nav-link">Daily</div>
                            <div className="active-bar"/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/curriculum">
                        <a className={router.asPath == "/curriculum" ? "active" : ""}>
                            <div className="nav-link">CV</div>
                            <div className="active-bar"/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a className={router.asPath == "/projects" ? "active" : ""}>
                            <div className="nav-link">Projects</div>
                            <div className="active-bar"/>
                        </a>
                    </Link>
                </li>
                <li>
                    <button className="nav-button" onClick={openCrisp}>
                        Contact me
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default DesktopNavigation;
