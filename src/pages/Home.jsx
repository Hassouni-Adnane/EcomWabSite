import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements';
import Slider from '../components/Slider';
import Products from '../components/Products';

const Home = () => {
  return (
    <div className='pop_up'>
      <Announcements />
      <Navbar />
      <Slider />
      <Products />
    </div>
  )
}

export default Home
