/*
 * Copyright 2020-2022 Foreseeti AB <https://foreseeti.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Heading from './heading';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react';

const MobileContainer = ({ children, location }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const handleSidebarHide = () => setSidebarIsOpen(false);
  const handleToggle = () => setSidebarIsOpen(true);

  const menuItemStyle = {
    height: '44.2px',
    width: '100%',
    padding: '13px 16px',
  };

  return (
    <div>
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarIsOpen}
      >
        <Menu.Item
          fitted={true}
          onClick={handleSidebarHide}
          active={location.hash === ''}
        >
          <Link to="/">
            <div style={menuItemStyle}>Home</div>
          </Link>
        </Menu.Item>
        <Menu.Item
          fitted={true}
          onClick={handleSidebarHide}
          active={location.hash === '#what'}
        >
          <Link to="/#what">
            <div style={menuItemStyle}>About</div>
          </Link>
        </Menu.Item>
        <Menu.Item
          fitted={true}
          onClick={handleSidebarHide}
          active={location.hash === '#learnmore'}
        >
          <Link to="/#learnmore">
            <div style={menuItemStyle}>Learn more</div>
          </Link>
        </Menu.Item>
        <Menu.Item
          fitted={true}
          onClick={handleSidebarHide}
          active={location.hash === '#who'}
        >
          <Link to="/#who">
            <div style={menuItemStyle}>Who uses MAL?</div>
          </Link>
        </Menu.Item>
        <Menu.Item
          fitted={true}
          onClick={handleSidebarHide}
          active={location.hash === '#resources'}
        >
          <Link to="/#resources">
            <div style={menuItemStyle}>Resources</div>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Button
            as="a"
            href="https://github.com/mal-lang/exampleLang/blob/master/README.md"
            target="_blank"
            primary
            size="large"
          >
            Get Started
          </Button>
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarIsOpen}>
        <Segment
          inverted
          textAlign="center"
          style={{
            backgroundImage: 'url(/Forerunner.jpg)',
            backgroundSize: 'cover',
            minHeight: 350,
            padding: '1em 0em',
          }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu>
          </Container>
          <Heading mobile />
        </Segment>

        {children}
      </Sidebar.Pusher>
    </div>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.any,
    key: PropTypes.string,
  }).isRequired,
};

export default MobileContainer;
