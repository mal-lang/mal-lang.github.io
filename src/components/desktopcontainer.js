import PropTypes from 'prop-types'
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Heading from './heading';
import { getWidth } from './util';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';

const DesktopContainer = ({ children, location }) => {
  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign='center'
          style={{
            backgroundImage: 'url(/Forerunner.jpg)',
            backgroundSize: 'cover',
            minHeight: 700,
            padding: '1em 0em',
          }}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container>
              <Menu.Item active={location.hash === ''}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item active={location.hash === '#what'}>
                <Link to="/#what">About</Link></Menu.Item>
              <Menu.Item active={location.hash === '#learnmore'}>
                <Link to="/#learnmore">Learn more</Link>
              </Menu.Item>
              <Menu.Item active={location.hash === '#video'}>
                <Link to="/#video">Watch video</Link>
              </Menu.Item>
              <Menu.Item active={location.hash === '#who'}>
                <Link to="/#who">Who uses MAL?</Link>
              </Menu.Item>
              <Menu.Item active={location.hash === '#resources'}>
                <Link to="/#resources">Resources</Link>
              </Menu.Item>
              <Menu.Item>
                <Button as="a" href="https://github.com/mal-lang/exampleLang/blob/master/README.md" target="_blank" primary size='large'>
                  Get Started
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <Heading />
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  );
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.any,
    key: PropTypes.string
  }).isRequired
};

export default withRouter(DesktopContainer);
