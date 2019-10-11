import React from 'react';
import ResponsiveContainer from '../components/responsivecontainer';
import {
  Container,
  Segment,
} from 'semantic-ui-react';


const Layout = () =>
  <ResponsiveContainer>
    <Container>
      <Segment style={{ padding: '8em 0em' }} basic>
        <h1>Oops! Page not found</h1>
      </Segment>
    </Container>
  </ResponsiveContainer>

export default Layout;