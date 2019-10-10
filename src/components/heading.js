import PropTypes from 'prop-types'
import React from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';


const HeaderContent = () =>
  <div>
    <img
      alt="MAL logo"
      style={{
        width: '1.6em',
        marginRight: '0.3em',
      }}
  src="helmet.svg" />
    M A L
  </div>
const Heading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content={<HeaderContent />}
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Meta Attack Language'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Header
      as='h3'
      content='The open source platform for creation of cyber threat modeling systems'
      inverted
      style={{
        fontStyle: 'italic',
      }}
    />
    <Button as="a" href="https://github.com/mal-lang/exampleLang/blob/master/README.md" target="_blank" primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
);

Heading.propTypes = {
  mobile: PropTypes.bool,
};

export default Heading;