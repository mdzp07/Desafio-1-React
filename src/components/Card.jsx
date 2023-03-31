import Card from 'react-bootstrap/Card';

function CardImg(atributo) {
    return (
        <div>
            <Card className="formatCard">
                <Card.Img variant="top" className="formatImg" src={atributo.img} />
                <Card.Body>
                    <Card.Title>{atributo.raza}</Card.Title>
                    <Card.Text>
                        {atributo.descripcion}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardImg;