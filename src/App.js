import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topnav from './components/Topnav/Topnav';
import Content from './components/Content/Content';
import Slider from './components/Slider/Slider';
import Content2 from './components/Content2/Content2';
import Footer from './components/Footer/Footer';

function App() {
  return (        
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={
              <>
                <Topnav />
                <Content />
                <Slider />
                <Footer />
              </>
            } />   
            <Route path="/content2" element={<Content2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;