import { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
  const [characters, setCharacters] = useState([]);

  // Fetch all characters from the database
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/characters') // Fetch all characters
      .then(response => {
        // Limit to the first 3 characters
        setCharacters(response.data.slice(0, 3));
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h3>Welcome to the Marvel Character Creator!</h3>
          <p>
            This app allows you to explore, edit, and create characters from the Marvel Universe or even invent your own! 
            Dive into the world of superheroes and villains, and bring your imagination to life.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Carousel
            prevIcon={
                <span
                  className="carousel-control-prev-icon bg-dark"
                  aria-hidden="true"
                />
              }
              nextIcon={
                <span
                  className="carousel-control-next-icon bg-dark"
                  aria-hidden="true"
                />
              }>
            {characters.length > 0 ? (
              characters.map((character, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={character.image_url || 'https://www.shutterstock.com/image-vector/gender-neutral-profile-avatar-front-260nw-1994872016.jpg'} // Default image if no URL is provided
                    alt={`${character.name}`}
                    style={{ maxHeight: '400px', objectFit: 'contain', objectPosition: 'top'  }}
                  />
                  <Carousel.Caption style={{ textShadow: '2px 2px black' }}>
                    <h3>{character.name}</h3>
                    <p>Alignment: {character.alignment}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            ) : (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/1200x600"
                  alt="Placeholder"
                />
                <Carousel.Caption style={{ textShadow: '2px 2px black' }}>
                  <h3>No Characters Found</h3>
                  <p>Add some characters to get started!</p>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        </Col>
      </Row>

      <Row className="mb-4 text-center">
        <Col>
          <Button as={Link} to="/characters" variant="primary" className="me-2">
            View All Characters
          </Button>
          <Button as={Link} to="/create" variant="success">
            Add New Character
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>Features:</h4>
          <ul>
            <li>View all Marvel characters in the database.</li>
            <li>Edit existing characters to update their details.</li>
            <li>Add new characters from the Marvel Universe or create your own unique heroes and villains.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;