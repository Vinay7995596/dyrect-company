import './App.css';
import Laptop from './components/laptopScreen';
import Mobile from './components/Mobilescomponents/upwardSection';
function App() {
  return (
    <div className='main-bg-container-main '>
      <div className="laptop-shows-not">
        <Laptop/>
      </div>
      <div className='mobiles-devices'>
        <Mobile   />
      </div>
    </div>
  );
}

export default App;
