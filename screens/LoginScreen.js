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
import {TextInput, View} from 'react-native';
import {Formik} from 'formik';

const LoginScreen = ({navigation}) => {
  return (
    <Container>
      <Header hasSegment style={{backgroundColor: '#087BC4'}}>
        <Left>
          <Button transparent onPress={() => navigation.navigate('Home')}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Segment style={{backgroundColor: '#087BC4'}}>
            <Button first active>
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
            Masuk ke akun SertifikasiKu
          </Text>
        </Content>
        {/* <Form>
            <Item stackedLabel>
              <Label>Username or email address</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button block style={{margin: 10, backgroundColor:"#087BC4"}}>
              <Text>Log In</Text>
            </Button>
          </Form> */}
        <Formik
          initialValues={{email: ''}}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              {/* <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              /> */}
              <Label>Username or email address</Label>
              <Input 
                 onChangeText={handleChange('email')}
                 onBlur={handleBlur('email')}
                 value={values.email}
              />
              <Button onPress={handleSubmit} title="Submit">
                <Text>Log In</Text>
              </Button>
            </View>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default LoginScreen;
