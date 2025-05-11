
// App entrypoint 

import { Routes, Route } from 'react-router-dom';

// global styles
import './assets/fonts/index.scss'; // <- font
import './assets/styles/main.scss'; // <- base styles

// layouts
import { AppLayout } from './layouts/App/index.tsx';

// pages
import { MainPage } from './pages/Main/index.tsx'; // <- main page
import { VideoPage } from './pages/Video/index.tsx'; // <- video page

function App() {
  return (
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<MainPage />}/>
          <Route path='video/:id' element={<VideoPage />}/>
          <Route path='model/:id' element={<VideoPage />}/>
        </Route>
      </Routes>
  );
}


export default App
