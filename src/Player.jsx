import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    transform: 'perspective(1000px) rotateY(0deg)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    margin: '20px',
    maxWidth: '320px',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
  };

  const cardBodyStyle = {
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(10px)',
    padding: '20px',
    color: '#333',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#2c3e50',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  };

  const infoStyle = {
    fontSize: '0.95rem',
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const labelStyle = {
    fontWeight: '600',
    color: '#7f8c8d',
  };

  const valueStyle = {
    fontWeight: '500',
    color: '#2c3e50',
  };

  const jerseyStyle = {
    background: 'linear-gradient(45deg, #f39c12, #e74c3c)',
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  };

  return (
    <Card 
      style={cardStyle}
      className="fifa-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateY(10deg) translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateY(0px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
      }}
    >
      <Card.Img variant="top" src={imageUrl} style={imageStyle} />
      <Card.Body style={cardBodyStyle}>
        <Card.Title style={titleStyle}>{name}</Card.Title>
        
        <div style={infoStyle}>
          <span style={labelStyle}>Team:</span>
          <span style={valueStyle}>{team}</span>
        </div>
        
        <div style={infoStyle}>
          <span style={labelStyle}>Nationality:</span>
          <span style={valueStyle}>{nationality}</span>
        </div>
        
        <div style={infoStyle}>
          <span style={labelStyle}>Age:</span>
          <span style={valueStyle}>{age} years</span>
        </div>
        
        <div style={infoStyle}>
          <span style={labelStyle}>Jersey:</span>
          <div style={jerseyStyle}>{jerseyNumber}</div>
        </div>
      </Card.Body>
    </Card>
  );
};

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 25,
  imageUrl: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400"
};

export default Player;