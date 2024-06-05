import '../upwardSection/Details/index.css';
import './index.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";


const Normalheading = () => {
    return (
        <div>
            <div className='main-flexing-mobile-nav-bar-section'>
                <div>
                    <div>
                    <h5 className='order-id-in-top-heading'><IoIosArrowBack />#456325</h5>
                    </div>
                </div>
                <div className='normal-dropdown-way-think-selected'>
                <select className='option-open-clain-button-dropdown'>
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                        <option value="pending">Pending</option>
                    </select>
              <div>
                <button className='normal-dropdown-way-think-selected-button'><BsThreeDotsVertical /></button>
              </div>
            </div>
            </div>
            <div className='movile-container-to-contining-background'>
        <div>
          <h4>Issue - Warranty Claim / Victor Blue (Wearables)</h4>
          <p className='main-container-bg-action-required-para'>Created Via email  30m ago</p>
        </div>
        <div className='warranty-claiming-betting-container'>
        <div>
          <button className='warranty-claiming-betting'>Warranty Clain</button>
        </div>
        <div>
          <button className='warranty-claiming-betting'>Warranty Clain</button>
        </div>
        <div>
          <button className='warranty-claiming-betting'>Warranty Clain</button>
        </div>
        <div>
          <button className='warranty-claiming-betting'>Warranty Clain</button>
        </div>
        <div>
          <button className='warranty-claiming-betting'>Warranty Clain</button>
        </div>
        </div>
      </div>
        </div>
    )
}

export default Normalheading;