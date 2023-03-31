import Alert from 'react-bootstrap/Alert';

function Footer() {
  return (
    // Aplicando componente 'Alert' de React Bootstrap 
    <Alert className='footer'>
      <Alert.Heading>¡Hey! Llegaste al final.</Alert.Heading>
      <p>
        Esta galeria fue inspirada en mis dos perritos: Rocco y Bruno. 
      </p>
      <p className="sinMargin">Realizado por Daniela Zambrano para Academia Desafio Latam - 2023 </p>
    </Alert>
  );
}

export default Footer;