/*
 * Copyright 2020 Foreseeti AB
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
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';

const referenceButtonStyle = {
  width: "100%",
  maxWidth: "500px"
}

const Layout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} basic>
      <Grid container stackable divided='vertically'>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header id="what" as='h3' style={{ fontSize: '2em' }}>
              What is MAL?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              A language to create cyber threat modeling systems for specific domains
              such as SCADA/OT, automotive and cloud.
            </p>
            <p style={{ fontSize: '1.33em' }}>
              In turn, such a system allows for cyber threat modeling and attack
              simulations of specific environments – a power grid, a vehicle
              platform or a particular cloud infrastructure.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Why MAL?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              The first open source framework that allows creation of quantitative
              cyber threat modeling systems for any domain.
            </p>
            <p style={{ fontSize: '1.33em' }}>
              MAL is open source under a permissive Apache 2.0 license and
              based on a decade of research at KTH Royal Institute of Technology.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header id="learnmore" as='h3' style={{ fontSize: '2em' }}>
              How do I use MAL?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Create a language specification in MAL syntax that describes the
              domain. This language should capture the assets, the relationships
              between assets and the access techniques an attacker can utilize.
            </p>
            <p style={{ fontSize: '1.33em' }}>
              Assets can e.g. be servers and networks where a server can be
              connected to a network. Access techniques are both natural ones -
              such as being able to send network packets from a host to other
              hosts connected to the same network - or CAPEC/ATT&ACK adversary
              techniques that an attacker may use.
            </p>
            <p style={{ fontSize: '1.33em' }}>
              A MAL language specification is run through the MAL compiler to
              create a Java library that implements the language through a set
              of APIs. This library can in turn be used to programatically
              create threat models to analyze an attacker’s ability and
              likelihood of reaching designated high value assets.
            </p>
            <p style={{ fontSize: '1.33em' }}>
              The MAL compiler can also be used to generate a Java library
              compatible with foreseeti’s securiCAD that provides graphical
              modeling support, high performance statistical simulations and
              advanced reporting capabilities.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Getting started
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              The tutorial provides the quickest and easiest way to set up a
              working language project. Once the example specification can be
              compiled into a working language JAR, the MAL documentation
              provides the necessary insights into the MAL language itself and
              the methodology considerations to design and implement a working
              language specification. Watch the video below for a quick
              introduction.
            </p>
            <Button as="a" href="https://github.com/mal-lang/exampleLang/blob/master/README.md" target="_blank" primary size='huge'>
              Get Started
              <Icon name='right arrow' />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ paddingBottom: '8em' }} textAlign='center' basic>
      <Divider id="who" horizontal>Who uses MAL?</Divider>
      <Grid relaxed container stackable columns={4} verticalAlign="middle">
        <Grid.Column>
          <Image as="a" href="https://energy-shield.eu/" size="small" centered src='/energyshield.png' />
        </Grid.Column>
        <Grid.Column>
          <Image as="a" href="https://www.foreseeti.com/" size="small" centered src='/foreseeti.png' />
        </Grid.Column>
        <Grid.Column>
          <Image as="a" href="https://www.kth.se/" size="small" centered src='/kth.png' />
        </Grid.Column>
        <Grid.Column>
          <Image as="a" href="https://autosec.se/" size="small" centered src='/autosec.png' />
        </Grid.Column>
      </Grid>
    </Segment>
    <Segment style={{ paddingBottom: '8em' }} textAlign='center' basic>
      <Divider id="resources" horizontal>Resources</Divider>
      <Container text>
        <List link>
          <List.Item>
            <Button as="a" style={referenceButtonStyle} href="https://github.com/mal-lang/mal-documentation/wiki" target="_blank" primary size='huge'>
              Platform documentation
              <Icon name='right arrow' />
            </Button>
          </List.Item>
          <List.Item>
            <Button as="a" style={referenceButtonStyle} href="https://github.com/mal-lang/malcompiler" target="_blank" primary size='huge'>
              MAL compiler repository
              <Icon name='right arrow' />
            </Button>
          </List.Item>
          <List.Item>
            <Button as="a" style={referenceButtonStyle} href="https://github.com/mal-lang/malcompiler/wiki/MAL-language-specification" target="_blank" primary size='huge'>
              MAL syntax specification
              <Icon name='right arrow' />
            </Button>
          </List.Item>
          <List.Item>
            <Button as="a" style={referenceButtonStyle} href="https://github.com/mal-lang/exampleLang" target="_blank" primary size='huge'>
              Language template project repository
              <Icon name='right arrow' />
            </Button>
          </List.Item>
        </List>
      </Container>
    </Segment>
    <Segment style={{ paddingBottom: '8em' }} textAlign='center' basic>
      <Divider id="acknowledgements" horizontal>Acknowledgements</Divider>
      <Container text>
        <p>
          Copyright &copy; 2020{' '}
          <a href="https://www.foreseeti.com/">
            <span style={{ whiteSpace: 'nowrap' }}>Foreseeti AB</span>
          </a>
          , Licensed under the{' '}
          <a href="https://www.apache.org/licenses/LICENSE-2.0">
            <span style={{ whiteSpace: 'nowrap' }}>Apache License, Version 2.0</span>
          </a>
          .
        </p>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <img
            alt="MAL logo"
            style={{
              width: '3em',
              height: '3em',
              alignSelf: 'center'
            }}
            src="/helmet.svg"
          />
          <p>
            This work, &quot;<span style={{ whiteSpace: 'nowrap' }}>MAL logo</span>&quot;, is a derivative of &quot;
            <a href="https://thenounproject.com/term/diving-helmet/2448842/">
              <span style={{ whiteSpace: 'nowrap' }}>Diving Helmet</span>
            </a>
            &quot; icon by{' '}
            <a href="https://thenounproject.com/madexmadeicons/">
              <span style={{ whiteSpace: 'nowrap' }}>Made x Made Icons</span>
            </a>
            {' '}from{' '}
            <a href="https://thenounproject.com/">
              <span style={{ whiteSpace: 'nowrap' }}>the Noun Project</span>
            </a>
            , used under{' '}
            <a href="https://creativecommons.org/licenses/by/3.0/">
              <span style={{ whiteSpace: 'nowrap' }}>CC BY 3.0</span>
            </a>
            .
            <br/>
            &quot;<span style={{ whiteSpace: 'nowrap' }}>MAL logo</span>&quot; is licensed under{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/">
              <span style={{ whiteSpace: 'nowrap' }}>CC BY 4.0</span>
            </a>
            {' '}by{' '}
            <a href="https://www.foreseeti.com/">
              <span style={{ whiteSpace: 'nowrap' }}>Foreseeti AB</span>
            </a>
            .
          </p>
        </div>
      </Container>
    </Segment>
  </ResponsiveContainer>
)



export default Layout;
