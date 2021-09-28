import logo from './logo.svg';
import './App.css';
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { 
  AppProvider, 
  Page, 
  Card, 
  Button, 
  Layout, 
  SettingToggle,
  Link,
  Form,
  FormLayout,
  InlineError,
  TextField,
  FooterHelp,
  Heading,
  ChoiceList,
  TextContainer} from '@shopify/polaris';
import { useState, useCallback } from 'react';
import { useMutation } from 'graphql-hooks';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const LOGIN_MUTATION = `mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        refreshToken
        user {
            id
            username
        }
    }
  }`

  const [runLogin, state] = useMutation(LOGIN_MUTATION);

  let passwordError = false;

  if (state.error && state.error.graphQLErrors && state.error.graphQLErrors[0]
    && state.error.graphQLErrors[0].message === 'Invalid password')
  {
    passwordError = false;
  }


  const handleSubmit = (event) =>
  {
    runLogin({
      variables: {
        username: username,
        password: password
      }
    });
  };

  const handleUsernameChange = (val) =>
  {
    setUsername(val);
  }

  const handlePasswordChange = (val) =>
  {
    setPassword(val);
  }

  return (
    <Page title="Dahlia">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Form
              onSubmit={handleSubmit}
            >
              <FormLayout>
                <TextField
                  label="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />

                <TextField
                  id="passwordInput"
                  label="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && 
                  <InlineError message="Incorrect Password" fieldID="passwordInput" />
                }
                <Button submit>Sign In</Button>
              </FormLayout>
            </Form>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <FooterHelp>
            For more details on Polaris visit our {' '}
            <Link url="https://polaris.shopify.com">style guide</Link>.
          </FooterHelp>
        </Layout.Section>
      </Layout>
    </Page>
  );
}