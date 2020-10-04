import React from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Left,
  Right,
  Icon,
  Segment,
  Body,
} from 'native-base';
import Linking from 'react-native'

const RegisterScreen = ({navigation}) => {
  return (
    <Container>
      <Header hasSegment style={{backgroundColor:"#087BC4"}}>
        <Left>
          <Button transparent onPress={() => navigation.navigate('Home')}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Segment style={{backgroundColor:"#087BC4"}}>
            <Button first active onPress={() => navigation.navigate('Login')}>
              <Text>Masuk</Text>
            </Button>
            <Button last onPress={() => navigation.navigate('Register')}>
              <Text>Daftar</Text>
            </Button>
          </Segment>
        </Body>
        <Right></Right>
      </Header>
      <Content>
        <Content padder>
          <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 25}}>
            Daftar ke akun SertifikasiKu
          </Text>
        </Content>
        <Form>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Email Address</Label>
            <Input />
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          <Button block style={{margin: 10, backgroundColor:"#087BC4"}}>
            <Text>Register</Text>
          </Button>
          <Text style={{fontWeight: 'normal', textAlign: 'center', fontSize: 15}}>
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://sertifikasiku.com/kebijakan-privasi/')}>privacy policy</Text>
          </Text>
        </Form>
      </Content>
    </Container>
  );
};

export default RegisterScreen;
