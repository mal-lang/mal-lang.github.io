import PropTypes from 'prop-types'
import React, { useState } from 'react';
import Heading from './heading';
import { Link, withRouter } from 'react-router-dom';
import { getWidth } from './util';
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react';

const MobileContainer = ({ children, location }) => {
  const [ sidebarIsOpen, setSidebarIsOpen ] = useState(false);
  const handleSidebarHide = () => setSidebarIsOpen(false);
  const handleToggle = () => setSidebarIsOpen(true);


  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation='push'
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarIsOpen}
      >
        <Menu.Item onClick={handleSidebarHide} active={location.hash === ''}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item onClick={handleSidebarHide} active={location.hash === '#what'}>
          <Link to="/#what">About</Link></Menu.Item>
        <Menu.Item onClick={handleSidebarHide} active={location.hash === '#learnmore'}>
          <Link to="/#learnmore">Learn more</Link>
        </Menu.Item>
        <Menu.Item onClick={handleSidebarHide} active={location.hash === '#who'}>
          <Link to="/#who">Who uses MAL?</Link>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" href="https://github.com/mal-lang/exampleLang/blob/master/README.md" target="_blank" primary size='large'>
            Get Started
          </Button>
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarIsOpen}>
        <Segment
          inverted
          textAlign='center'
          style={{
            backgroundImage: 'url(/Forerunner.jpg)',
            backgroundSize: 'cover',
            minHeight: 350,
            padding: '1em 0em'
          }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item onClick={handleToggle}>
                <Icon name='sidebar' />
              </Menu.Item>
            </Menu>
          </Container>
          <Heading mobile />
        </Segment>

        {children}
      </Sidebar.Pusher>
    </Responsive>
  );
}

MobileContainer.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.any,
    key: PropTypes.string
  }).isRequired
}

export default withRouter(MobileContainer);