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

import React from 'react';
import ResponsiveContainer from './responsivecontainer';
import {
  Container,
  Divider,
  Segment,
} from 'semantic-ui-react';

const Layout = () => (
  <ResponsiveContainer>
    <Segment style={{ paddingBottom: '8em' }} textAlign="center" basic>
    </Segment>
    <Segment style={{ paddingBottom: '8em' }} textAlign="center" basic>
      <Divider id="acknowledgements" horizontal>
        Acknowledgements
      </Divider>
      <Container text>
        <p>
          Copyright &copy; 2020-2022{' '}
          <a href="https://foreseeti.com">
            <span style={{ whiteSpace: 'nowrap' }}>Foreseeti AB</span>
          </a>
          , Licensed under the{' '}
          <a href="https://www.apache.org/licenses/LICENSE-2.0">
            <span style={{ whiteSpace: 'nowrap' }}>
              Apache License, Version 2.0
            </span>
          </a>
          .
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <img
            alt="MAL logo"
            style={{
              width: '3em',
              height: '3em',
              alignSelf: 'center',
            }}
            src="/helmet.svg"
          />
          <p>
            This work, &quot;
            <span style={{ whiteSpace: 'nowrap' }}>MAL logo</span>&quot;, is a
            derivative of &quot;
            <a href="https://thenounproject.com/term/diving-helmet/2448842/">
              <span style={{ whiteSpace: 'nowrap' }}>Diving Helmet</span>
            </a>
            &quot; icon by{' '}
            <a href="https://thenounproject.com/madexmadeicons/">
              <span style={{ whiteSpace: 'nowrap' }}>Made x Made Icons</span>
            </a>{' '}
            from{' '}
            <a href="https://thenounproject.com/">
              <span style={{ whiteSpace: 'nowrap' }}>the Noun Project</span>
            </a>
            , used under{' '}
            <a href="https://creativecommons.org/licenses/by/3.0/">
              <span style={{ whiteSpace: 'nowrap' }}>CC BY 3.0</span>
            </a>
            .
            <br />
            &quot;<span style={{ whiteSpace: 'nowrap' }}>MAL logo</span>&quot;
            is licensed under{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/">
              <span style={{ whiteSpace: 'nowrap' }}>CC BY 4.0</span>
            </a>{' '}
            by{' '}
            <a href="https://foreseeti.com">
              <span style={{ whiteSpace: 'nowrap' }}>Foreseeti AB</span>
            </a>
            .
          </p>
        </div>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default Layout;
