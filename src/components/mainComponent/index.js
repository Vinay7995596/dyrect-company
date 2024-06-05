import { BsThreeDotsVertical } from "react-icons/bs";
import './index.css'
import '../sideNavbarsection/index.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { TbClockPlay } from "react-icons/tb";


const Maincomponent = () => {
    return (
        <div>
            <nav className="nav-link-main-conayiner ">
                <div>
                    <button className="buttons-main-navbar-1">Medium</button>
                    <button className="buttons-main-navbar">Warranty Claim</button>
                    <button className="buttons-main-navbar">Assignee</button>
                    <button className="buttons-main-navbar">Surabh Agarwal</button>
                </div>
                <div>
                    <div>
                        <span><FaChevronLeft /></span>
                        <span><FaChevronRight /></span>

                    </div>
                </div>
            </nav>
            <div className="columns-displaying-main-content">
                <div className="main-content-flexing-nav-sidebar">
                    <div className="main-content-flexing-nav-sidebar-main-bg">
                        <FaRegMessage className="main-content-flexing-nav-sidebar-main-bg-icons"/>
                    </div>
                    <div className="main-content-flexing-nav-sidebar-main-bg">
                        <LuMessageCircle className="main-content-flexing-nav-sidebar-main-bg-icons"/>
                    </div>
                    <div className="main-content-flexing-nav-sidebar-main-bg">
                        <TbTruckDelivery className="main-content-flexing-nav-sidebar-main-bg-icons"/>
                    </div>
                    <div className="main-content-flexing-nav-sidebar-main-bg">
                        <FaWallet className="main-content-flexing-nav-sidebar-main-bg-icons"/>
                    </div>
                    <div className="main-content-flexing-nav-sidebar-main-bg">
                        <GoArrowSwitch className="main-content-flexing-nav-sidebar-main-bg-icons"/>
                    </div>
                    <div className="main-content-flexing-nav-sidebar-main-bg">
                        <TbClockPlay />
                    </div>
                </div>
                <div>
                    <div>
                        <div className="problem-of-product-container">
                            <h2 className="problem-of-product">Product Stopped Working</h2>
                            <button className="button-probles-beside-container">
                                <BsThreeDotsVertical />
                            </button>
                        </div>
                        <hr />
                        <div className="conatiner-profile-main-component-span-content">
                            <div className="conatiner-profile-main-component">
                                <div>
                                    <img src="https://www.bhphotovideo.com/images/images2500x2500/apple_mj3t2ll_a_watch_sport_smartwatch_42mm_1187199.jpg" alt='user product' className="images-of-watch" />
                                </div>
                                <div>
                                    <h2 className='product-dectails-name'>Surabh Agrawal</h2>
                                    <h3 className='product-dectails-heading'>Created via email</h3>
                                </div>
                            </div>
                            <div className="span-container-element-main">
                                <span className='product-dectails-heading'>30Min ago</span>
                            </div>
                        </div>
                    </div>

                    {/* purchase details */}

                    <div>
                        <div className="purchase-details-container">
                            <h3>Product details</h3>
                        </div>
                        <div className="main-container-products-information">
                            <div>
                                <h2 className='product-dectails-heading'>Product name</h2>
                                <p className="main-descreption-content">Victor(Mid night)</p>
                            </div>
                            <div>
                                <h2 className='product-dectails-heading'>Product Group</h2>
                                <p className="main-descreption-content">Werables</p>
                            </div>
                            <div>
                                <h2 className='product-dectails-heading'>Operating Systems</h2>
                                <p className="main-descreption-content">Android</p>
                            </div>
                            <div>
                                <h2 className='product-dectails-heading'>Product</h2>
                                <p className="main-descreption-content">AcousticWave speaker</p>
                            </div>
                        </div>
                        <div>
                            <h2 className='product-dectails-heading'>Problem descreption</h2>
                            <p className="main-descreption-content">Iam writing to intiate a warranty for my claim for Victor Noise Watch, which I purchased on06-03-2034. Unfortunitly. It stopped working . I would to claim for replacemnt</p>
                        </div>
                    </div>

                    {/* purchase details - 2 */}
                    <div>
                        <div className="purchase-details-container">
                            <h3>Product details</h3>
                        </div>
                        <div className="main-container-products-information">
                            <div>
                                <h2 className='product-dectails-heading'>Purchase Date</h2>
                                <p className="main-descreption-content">24 July 2023</p>
                            </div>
                            <div>
                                <h2 className='product-dectails-heading'>Product Image</h2>
                                <p className="main-descreption-content">AcousticWave speaker</p>
                            </div>

                        </div>
                    </div>

                    {/* User details */}

                    <div>
                        <div className="purchase-details-container">
                            <h3>User details</h3>
                        </div>
                        <div className="main-container-products-information">
                            <div>
                                <h2 className='product-dectails-heading'>Full name</h2>
                                <p className="main-descreption-content">Saurabh Agrawal</p>
                            </div>
                            <div>
                                <h2 className='product-dectails-heading'>Email Id</h2>
                                <p className="main-descreption-content">saurabh123@gmail.com</p>
                            </div>
                            <div>
                                <h2 className='product-dectails-heading'>Mobile Number</h2>
                                <p className="main-descreption-content">8934527373</p>
                            </div>
                            <div>
                                <h2 className='product-dectails-heading'>GSTIN Number</h2>
                                <p className="main-descreption-content">23AA00002345</p>
                            </div>
                            <div>
                                <h2 className='product-dectails-heading'>Purchase Channel</h2>
                                <p className="main-descreption-content">Amazon</p>
                            </div>
                        </div>
                    </div>

                    {/* shipping billing */}

                    <div>
                        <div className="purchase-details-container">
                            <h3>Shippping & Billing Details</h3>
                        </div>
                        <div className="main-container-products-information">
                            <div>
                                <h2 className='product-dectails-heading'>Shippping PickUp Address</h2>
                                <p className="main-descreption-content">204 malad</p>
                            </div>
                            <div>
                                <h2 className='product-dectails-heading'>Landmark</h2>
                                <p className="main-descreption-content">Nearby Infinity Mall</p>
                            </div>
                            <div>
                                <h2 className='product-dectails-heading'>Pincode</h2>
                                <p className="main-descreption-content">400001</p>
                            </div>
                            <div>
                                <h2 className='product-dectails-heading'>State</h2>
                                <p className="main-descreption-content"> Maharastra</p>
                            </div>
                            <div>
                                <h2 className='product-dectails-heading'>City</h2>
                                <p className="main-descreption-content">Mumbai</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Maincomponent