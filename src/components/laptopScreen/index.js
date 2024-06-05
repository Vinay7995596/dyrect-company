import SideNavigation from '../sideNavbarsection';
import Lastsidenavbar from '../lastSideNavbar';
import Maincomponent from '../mainComponent';
const Laptop = () => {
  return (
    <div className='main-bg-container-main '>
      <SideNavigation className="leftlisgn-component" />
      <Maincomponent  className="center-alignment"/>
      <Lastsidenavbar className="right-lisgn-component"/>
    </div>
  );
}

export default Laptop;
