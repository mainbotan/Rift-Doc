
// Main
import { MainLayout } from '../layouts/Main/index';
import { MainPage } from '../pages/Main';

// Api
import { DocsLayout } from '../layouts/Docs/index';
import { IntroductionPage } from '../pages/Docs/Introduction/index';
import { ArchitectureMainPage } from '../pages/Docs/Architecture/main';
import { ArchitectureContractPage } from '../pages/Docs/Architecture/contract';


export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: 'docs/:version',
    element: <DocsLayout />,
    children: [
      { index: true, path: 'introduction', element: <IntroductionPage /> },
      { path: 'architecture', element: <ArchitectureMainPage /> },
      { path: 'architecture/contract', element: <ArchitectureContractPage /> }
    ],
  }
];
