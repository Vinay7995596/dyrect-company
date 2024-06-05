import { useState } from 'react';
import './index.css'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const SideNavigation = () => {

    const [isavailble, notavailble] = useState(true)
    const [userDetails, notUserdetails] = useState(true)

    const collapsedWay = () => {
        notavailble(!isavailble)
    }

    const userDetailsShow = () => {
        notUserdetails(!userDetails)
    }

    return (
        <div>
            <nav>
                <div className='icon-tickect-container'>
                    <FaChevronLeft className='tickect-heading'/>
                    <h3 className='tickect-heading'>Ticket#3454321</h3>
                </div>
            </nav>
            <div className='main-bg-container'>
                <div>
                    <button className='product-details-button' onClick={collapsedWay}>
                            <h2>Product Details</h2>
                            <FaChevronUp />
                    </button>
                    <hr/>
                </div>
                <div className={isavailble ? 'showing-products-list' : 'notshowing'}>
                    <div>
                    <div className='container-inages-content'>
                    <div>
                        <img src="https://www.bhphotovideo.com/images/images2500x2500/apple_mj3t2ll_a_watch_sport_smartwatch_42mm_1187199.jpg" alt='user product' className="images-of-watch" />
                    </div>
                    <div>
                        <h3 className='product-dectails-heading'>Poduct Name</h3>
                        <h3 className='product-dectails-name'>AcousticWave speaker</h3>
                        <p className='warant-name-para'>Active Warraanty</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className='product-dectails-heading'>Product Category</h3>
                        <h3 className='product-dectails-name'>Wearables</h3>
                    </div>
                    <div>
                        <h3 className='product-dectails-heading'>Model No.</h3>
                        <h3 className='product-dectails-name'>Model AW-100</h3>
                    </div>
                    <div>
                        <h3 className='product-dectails-heading'>Order ID</h3>
                        <h3 className='product-dectails-name'>#1233443</h3>
                    </div>
                    <div>
                        <h3 className='product-dectails-heading'>Purchase Platform</h3>
                        <h3 className='product-dectails-name'>Amazon</h3>
                    </div>
                    <div>
                        <h3 className='product-dectails-heading'>Purchase Date</h3>
                        <h3 className='product-dectails-name'>24 June 2023</h3>
                    </div>
                </div>
                    </div>
                </div>
            </div>

            <div className='main-bg-container'>
                <div>
                    <button className='product-details-button' onClick={userDetailsShow}>
                            <h2>Customer Details</h2>
                            <FaChevronUp />
                    </button>
                    <hr />
                </div>
                <div className={userDetails ? 'showing-products-list' : 'notshowing'}>
                    <div>
                    <div className='container-inages-content '>
                    <div>
                        <img src="https://www.bhphotovideo.com/images/images2500x2500/apple_mj3t2ll_a_watch_sport_smartwatch_42mm_1187199.jpg" alt='user product' className="images-of-watch" />
                    </div>
                    <div>
                        <h3 className='product-dectails-name'>Saurabh Agrwal</h3>
                        <h3 className='product-dectails-heading'>GMT +5:30 Kolkata</h3>
                        <p className='warant-name-para'>Premium</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className='product-dectails-heading'>Email</h3>
                        <h3 className='product-dectails-name'>surabh123@gmail.com</h3>
                    </div>
                    <div>
                        <h3 className='product-dectails-heading'>Contact</h3>
                        <h3 className='product-dectails-name'>987778899</h3>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNavigation