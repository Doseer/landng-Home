import React, { Component } from 'react';
import { Link } from 'gatsby'
import './header.css'


class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="logo">
                    <Link to="/">
                        Doseer
                     </Link>
                </h1>
                <div className="menu-wrap">
                    <input type="checkbox" name="" className="toggler" />
                    <div className="hamburger"><div></div></div>
                    <div className="menu">
                        <div>

                            <div>
                                <ul>
                                    <li><Link to="/register">pricing</Link></li>
                                    <li><Link to="/about">School</Link></li>
                                    <li><Link to="/register">course</Link></li>
                                    <li><Link to="/register">tutoring</Link></li>
                                    <li><Link to="/register">Sign-in</Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="showcase">
                    <div className="container showcase-inner">
                        <h1>Get better grade</h1>
                        <p>instant <span>online</span> tutoring</p>
                        <div className='menu-wrapper'>
                            <form action="">
                                <div className="form-control">
                                    <input type="text" name="" id="show-input" placeholder="Search for courses...." />
                                    <Link className="btn" to="/search">search</Link>
                                </div>
                            </form>

                        </div>

                    </div>
                </header>
            </div>

        );
    }
};

export default Header;