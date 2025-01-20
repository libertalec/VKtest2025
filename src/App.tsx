import { RepositoriesList } from './pages/repositories-list/Page.tsx';
import { Layout } from './pages/repositories-layout/Layout.tsx';

function App() {
  return (
    <>
      <Layout>
        <RepositoriesList />
      </Layout>
    </>
  );
}

export default App;
