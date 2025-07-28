
// App entrypoint 
import { Analytics } from '@vercel/analytics/next';
import { Routes, Route } from 'react-router-dom';

// global styles
import './assets/fonts/index.scss'; // <- font
import './assets/styles/main.scss'; // <- base 
import './assets/styles/custom-prism.scss'; // <- global prism
import './assets/styles/docs-markup.scss'; // <- docs markup

// routes
import { routes } from './routes/index';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
      <>
        <ScrollToTop />
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element}>
              {route.children?.map((child, j) => (
                <Route
                  key={j}
                  index={'index' in child ? child.index : undefined}
                  path={'path' in child ? child.path : undefined}
                  element={child.element}
                />
              ))}
            </Route>
          ))}
        </Routes>
        <Analytics />
      </>
  );
}


export default App


// <Route path='video/:id' element={<VideoPage />}/>