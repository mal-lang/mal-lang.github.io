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
              Asset can e.g. be a server and network where a server can be
              connected to a network.
              Access technique are both natural ones, such as being able to send
              network packets when connected to the network, or
              CAPEC/ATT&ACK adversary techniques that an attacker may use.
            </p>
            <p style={{ fontSize: '1.33em' }}>
              A MAL language specification can then be run through the MAL
              compiler to create a Java library, which in turn can be used to
              programatically create models and analyse an attacker’s ability and
              likelyhood of reaching designated high value assets.
            </p>
            <p style={{ fontSize: '1.33em' }}>
              The MAL compiler can also be used to generate a Java library
              compatible with foreseeti’s securiCAD that provides graphical
              modelling support, high performance statistical simulations and
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
              provides the necessary insights into the MAL language itself and the
              methodology considerations to design and implement a working
              language specification.
            </p>
            <Button as="a" href="https://github.com/mal-lang/exampleLang/blob/master/README.md" target="_blank" primary size='huge'>
              Get Started
              <Icon name='right arrow' />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} textAlign='center' basic>
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
    <Divider horizontal>Resources</Divider>
    <Segment style={{ padding: '8em 0em' }} textAlign='center' basic>
      <Container text>
        <List link>
          <List.Header style={{ fontWeight: 700 }}>Platform documentation</List.Header>
          <List.Item as="a" href="https://github.com/mal-lang/mal-documentation/wiki" target="_blank">https://github.com/mal-lang/mal-documentation/wiki</List.Item>
          <List.Header style={{ fontWeight: 700 }}>MAL compiler repository</List.Header>
          <List.Item as="a" href="https://github.com/mal-lang/malcompiler" target="_blank">https://github.com/mal-lang/malcompiler</List.Item>
          <List.Header style={{ fontWeight: 700 }}>MAL syntax specification</List.Header>
          <List.Item as="a" href="https://github.com/mal-lang/malcompiler/wiki/MAL-language-specification" target="_blank">https://github.com/mal-lang/malcompiler/wiki/MAL-language-specification</List.Item>
          <List.Header style={{ fontWeight: 700 }}>Language template project repository</List.Header>
          <List.Item as="a" href="https://github.com/mal-lang/exampleLang" target="_blank">https://github.com/mal-lang/exampleLang</List.Item>
        </List>
      </Container>
    </Segment>  </ResponsiveContainer>
)



export default Layout;