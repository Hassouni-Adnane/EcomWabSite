import PopupContext from '../components/PopupContext';
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements';
import Slider from '../components/Slider';
import Products from '../components/Products';

const Home = () => {
  const { showPopup, togglePopup } = useContext(PopupContext);
  return (
    <div className='pop_up'>
      <Announcements />
      <Navbar showPopup={showPopup} togglePopup={togglePopup}/>
      <Slider />
      <Products />
    </div>
  )
}

export default Home
