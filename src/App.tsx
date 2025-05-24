
// App entrypoint 

import { Routes, Route } from 'react-router-dom';

// global styles
import './assets/fonts/index.scss'; // <- font
import './assets/styles/main.scss'; // <- base styles

// layouts
import { AppLayout } from './layouts/App/index.tsx';

// pages
import { MainPage } from './pages/Main/index.tsx'; // <- main page

function App() {
  return (
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<MainPage />}/>
        </Route>
      </Routes>
  );
}


export default App


// <Route path='video/:id' element={<VideoPage />}/>