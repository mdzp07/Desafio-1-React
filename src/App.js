import './App.css';
import Header from './components/Header';
import CardImg from './components/Card';
import img1 from './beagledog.jpg';
import img2 from './goldendog.jpg';
import img3 from './labradordog.jpg';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header titulo="Galería de Imágenes con React" />
      <div className='containerCard'>
        <CardImg raza="Beagle Ingles" descripcion="Son un paquete de diversión y aventura, con un gran olfato para los buenos momentos." img={img1} />
        <CardImg raza="Golden Retriever" descripcion="Son una mezcla perfecta entre un osito de peluche y un atleta de alto rendimiento." img={img2} />
        <CardImg raza="Labrador Retriever" descripcion="Son amigos fieles, compañeros de juegos, astutos y amantes de la comida, todo en uno." img={img3} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
