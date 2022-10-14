import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


export default function App() {
    return (
        <Router>
            <div>
                {/* 👇️ react router link */}
                <Link to="/about">
                    <img
                        src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
                        alt="example"
                    />
                </Link>

                <br />
                <br />

            </div>
        </Router>
    );
}
