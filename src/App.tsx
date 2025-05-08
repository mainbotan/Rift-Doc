
// App entrypoint 

// global styles
import './assets/fonts/index.scss'; // <- font
import './assets/styles/main.scss'; // <- base styles

// layouts
import { AppLayout } from './layouts/App/index.tsx';

// pages
import { MainPage } from './pages/Main/index.tsx'; // <- main page

function App() {
  return (
    <AppLayout>
      <MainPage />
    </AppLayout>
  );
}


export default App
