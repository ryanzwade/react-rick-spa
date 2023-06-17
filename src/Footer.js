import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#c2dedc',
    padding: '20px',
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  };

  const columnStyle = {
    flex: '1',
    minWidth: '200px',
    marginBottom: '20px',
  };

  const bottomStyle = {
    width: '100%',
    textAlign: 'center',
    marginTop: '20px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h4>
            <img src="/rmlogo.png" alt="Rick and Morty Logo" />
          </h4>
          <ul>
            <li>This website was made using</li>
            <li>the Rick and Morty Api at</li>
            <li><a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">https://rickandmortyapi.com/</a></li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h4></h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h4></h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div style={bottomStyle}>
        <p>&copy; {new Date().getFullYear()} Rick and Morty Universe</p>
      </div>
    </footer>
  );
};

export default Footer;
