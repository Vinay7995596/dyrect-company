// src/About.js
import React from 'react';
import SideNavigation from '../../../sideNavbarsection';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { FiRefreshCcw } from "react-icons/fi";
import { IoIosCart } from "react-icons/io";
import './index.css'

const About = () => {
  return (
    <div id="about" className="content">
      <div className='main-container-bg-action-required'>
        <h2>Actions</h2>
        <div>
          <div className='icons-mobile-devices-to-creating-icons-container-main'>
            <div className='icons-mobile-devices-to-creating-main-way'>
              <div className='icons-mobile-devices-to-creating'>
                <IoChatboxEllipsesOutline className='icons-mobile-devices-to-creating-icons' />
              </div >
            </div>
            <div className='icons-mobile-devices-to-creating'>
              <RiBillLine className='icons-mobile-devices-to-creating-icons' />
            </div >
            <div className='icons-mobile-devices-to-creating'>
              <FiRefreshCcw className='icons-mobile-devices-to-creating-icons' />
            </div>
            <div className='icons-mobile-devices-to-creating'>
              <IoIosCart className='icons-mobile-devices-to-creating-icons' />
            </div>
          </div>
        </div>
        <SideNavigation />
      </div>
    </div>
  );
};

export default About;
