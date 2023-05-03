import Image from './Image';
import staringCat from './assets/staringCat.jpg';
import './App.css';

function App() {
  return (
    <main>
      <Image source={ staringCat } alternativeText='Cute cat staring' />
    </main>
  )
}

export default App
