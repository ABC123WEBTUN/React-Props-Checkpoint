import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player.jsx';
import players from './players';

const PlayersList = () => {
  const containerStyle = {
    background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    minHeight: '100vh',
    paddingTop: '40px',
    paddingBottom: '40px',
  };

  const titleStyle = {
    textAlign: 'center',
    color: 'white',
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '40px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    letterSpacing: '2px',
  };

  const subtitleStyle = {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.9)',
    fontSize: '1.2rem',
    marginBottom: '50px',
    fontWeight: '300',
  };

  return (
    <div style={containerStyle}>
      <Container fluid>
        <h1 style={titleStyle}>⚽ FIFA LEGENDS</h1>
        <p style={subtitleStyle}>Discover the world's most talented football players</p>
        
        <Row className="justify-content-center">
          {players.map((player, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <Player {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PlayersList;