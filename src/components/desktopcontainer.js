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
import {
  Segment,
  Visibility,
} from 'semantic-ui-react';

const DesktopContainer = ({ children }) => {
  return (
    <div>
      <Visibility
        once={false}
      >
        <Segment
          inverted
          textAlign="center"
          style={{
            backgroundImage: 'url(/Forerunner.jpg)',
            backgroundSize: 'cover',
            minHeight: 700,
            padding: '1em 0em',
          }}
          vertical
        >
        </Segment>
      </Visibility>

      {children}
    </div>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.any,
    key: PropTypes.string,
  }).isRequired,
};

export default DesktopContainer;
