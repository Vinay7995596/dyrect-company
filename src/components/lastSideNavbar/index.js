import { IoMdSettings } from "react-icons/io";
import './index.css'

const Lastsidenavbar = () => {
    return(
        <div>
            <nav>
                <div className="nav-link-align-left-side">
                    <div>
                        <button className="nav-link-align-left-side-open">status</button>
                        <button className="nav-link-align-left-side-normal">open</button>
                    </div>
                </div>
            </nav>
            <div className="main-bg-last-sidenav">
                <div className="icon-nav-container-side-nav">
                    <IoMdSettings className="icon-setting-side-nav"/>
                    <h3 className='side-nav-link-normal-heading'>Properties</h3>
                </div>
                <hr />
                <div>
                <div>
                    <h3 className="dropdown-heading-last-sidebar">Assignee</h3>
                    <select className='dropdown-content-container-last-sidenav'>
                        <option value="abhishek yargnik">Abhishek Yargnik</option>
                        <option value="ramesh">Ramesh</option>
                        <option value="suresh">Suresh</option>
                    </select>
                </div>
                <div>
                    <h3 className="dropdown-heading-last-sidebar">Status</h3>
                    <select className='dropdown-content-container-last-sidenav'>
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>
                <div>
                    <h3 className="dropdown-heading-last-sidebar">Tags</h3>
                    <select className='dropdown-content-container-last-sidenav'>
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>
                <div>
                    <h3 className="dropdown-heading-last-sidebar">Priority</h3>
                    <select className='dropdown-content-container-last-sidenav'>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div>
                    <h3 className="dropdown-heading-last-sidebar">Ticket Category</h3>
                    <select className='dropdown-content-container-last-sidenav'>
                        <option value="warrantyclaim">Warranty Claim</option>
                        <option value="warrantyongoing">Warranty On Going</option>
                        <option value="warantyexpire">Warranty Expire</option>
                    </select>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Lastsidenavbar;