// src/App.js
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import Home from "./Tickectdetails";
import About from "./Details";
import Contact from "./Activelog";
import './index.css';
import Normalheading from "../downwards";

function Mobile() {
    return (
        <>
            <div>
                <Normalheading />
            </div>
            <BrowserRouter>

                <div className="link-betweenrouters">
                    <div>
                        <NavLink to="/" style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "black",
                        })}
                        >
                            Details
                        </NavLink>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <NavLink to="/about" style={({ isActive }) => ({
                            olor: isActive
                                ? "greenyellow"
                                : "black",
                        })}
                        >
                            TickectDetails
                        </NavLink>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <NavLink to="/contact"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "black",
                            })}
                        >
                            Active Log
                        </NavLink>
                    </div>
                </div>
                <Routes classname="nav-section-display-row">
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Mobile;
