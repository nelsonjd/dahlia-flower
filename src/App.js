import './App.css';
import '@shopify/polaris/dist/styles.css';
import AuthorizationRouter from './AuthorizationRouter';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

const client = new GraphQLClient({
  url: 'http://localhost:8080/graphql'
});

function App() {

  return (
    <ClientContext.Provider value={client}>
      <AuthorizationRouter>
      </AuthorizationRouter>
    </ClientContext.Provider>
  );
}

export default App;
