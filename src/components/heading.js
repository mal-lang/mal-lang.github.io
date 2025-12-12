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
import React from 'react';
import { Button, Container, Header, Icon } from 'semantic-ui-react';

const HeaderContent = () => (
  <div
    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
  >
    <img
      alt="MAL logo"
      style={{
        width: '4em',
        height: '4em',
        marginRight: '0.3em',
      }}
      src="/helmet.svg"
    />
  </div>
);
const Heading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
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
      as="h2"
      content="Meta Attack Language - M A L"
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Header
      as="h3"
      content="The open source platform cyber threat modeling and attack simulations"
      inverted
      style={{
        fontStyle: 'italic',
      }}
    />
    <Button
      as="a"
      href="https://github.com/mal-lang"
      target="_blank"
      primary
      size="huge"
    >
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

Heading.propTypes = {
  mobile: PropTypes.bool,
};

export default Heading;
