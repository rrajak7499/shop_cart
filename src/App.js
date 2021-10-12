// import logo from './logo.svg';
import './App.css';
import NavMenu from './components/NavMenu';
import Scroller from './components/Scroller';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <NavMenu title="Hello" link="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"/>
        <NavMenu title="Grocery" link="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"/>
        <NavMenu title="Mobiles" link="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"/>
        <NavMenu title="Fashon" link="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"/>
        <NavMenu title="Electronics" link="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"/>
        <NavMenu title="Home" link="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"/>
        <NavMenu title="Appliances" link="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"/>
        <NavMenu title="Travel" link="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"/>
        <NavMenu title="Toys & More" link="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"/>
      </div>
      <Scroller />
    </>
  );
}

export default App;
