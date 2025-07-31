// App entrypoint 
import { Analytics } from '@vercel/analytics/react';
import { Routes, Route } from 'react-router-dom';

// global styles
import './assets/fonts/index.scss';
import './assets/styles/main.scss';
import './assets/styles/custom-prism.scss';
import './assets/styles/docs-markup.scss';

// routes
import { routes } from './routes/index';
import ScrollToTop from './utils/ScrollToTop';
import { ModalMessage } from './components/ModalMessage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element}>
            {route.children?.map((child, j) => {
              if (!child) return null;
              return (
                <Route
                  key={j}
                  index={child.index ? true : undefined}
                  path={child.path}
                  element={child.element}
                />
              );
            })}
          </Route>
        ))}
      </Routes>
      <ModalMessage />
      <Analytics />
    </>
  );
}

export default App;