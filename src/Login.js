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
  AccountConnection,
  TextField,
  FooterHelp,
  Heading,
  ChoiceList,
  TextContainer} from '@shopify/polaris';
import { useState, useCallback } from 'react'; 

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) =>
  {
    console.log(event);
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
                  label="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
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