
// App entrypoint 

// styles
import './assets/fonts/index.scss'; // <- font
import './assets/styles/main.scss'; // <- base styles

// components
import { AppLayout } from './layouts/App/index.tsx';

function App() {
  return (
    <AppLayout>
      <div></div>
    </AppLayout>
  );
}


export default App
