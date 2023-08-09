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

  const logoStyle = {
    maxWidth: '10%',
    height: 'auto',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>

          <ul>
            <li>This website was made using</li>
            <li>the Rick and Morty Api at</li>
            <li><a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">https://rickandmortyapi.com/</a></li>
            {/* <h5>
            <img src="/footerpic.png" alt="Rick and Morty Logo" />
          </h5> */}
          </ul>
        </div>
        <div style={columnStyle}>

          <ul>
            <li></li>
            <li></li>
            <li> <p><a href="https://www.linkedin.com/in/ryanzwade/">Visit Ryan Z Wade's LinkedIn</a></p></li>
          </ul>

        </div>
        <div style={columnStyle}>
          <p><a href="https://ryanzwade.netlify.app/">Visit Ryan Z Wade's website</a></p>
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
