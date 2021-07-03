import './App.scss';
import HeroInputCard from './components/HeroInputCard';
import CarouselResponsive from './components/CarouselResponsive';
import img1 from './components/sample_images/image1.jpg'
import img2 from './components/sample_images/image2.jpg'
import img3 from './components/sample_images/image3.jpg'
import img4 from './components/sample_images/image4.jpg'

function App() {
  // Sample Images 
  const carousel_image_paths = [img1, img2, img3, img4];
  
  return (
    <div className="App">
      <HeroInputCard/>            
        <center>
        <CarouselResponsive imagePaths={carousel_image_paths}/>  
        </center>
    </div>
  );
}

export default App;