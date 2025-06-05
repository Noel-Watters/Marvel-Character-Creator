//PorductCard.tsx
import Card from 'react-bootstrap/Card';
import { Character } from '../types/types';


const CharacterCard:React.FC<{character: Character; onClick?: () => void}> = ({character, onClick}) => {

    return (                        
    <Card className="shadow-sm"onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
        <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text >
                Class: {character.class} <br />
                Race: {character.race} <br />
                Age: {character.age} <br />
                Alignment: {character.alignment} <br />
                Character Level: {character.level} <br />
            </Card.Text>
            <Card.Img variant="top" src={character.img} alt={character.name} 
            style={{ height: '200px', objectFit: 'contain' }} />
        </Card.Body>
    </Card>

    );
};

export default CharacterCard;