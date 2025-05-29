
// Main
import { MainLayout } from '../layouts/Main/index';
import { MainPage } from '../pages/Main';

// Api
import { DocsLayout } from '../layouts/Docs/index';
import { IntroductionPage } from '../pages/Docs/introduction/index';
import { BasicConceptsMainPage } from '../pages/Docs/basic-concepts/main';
import { BasicConceptsContractPage } from '../pages/Docs/basic-concepts/contract';


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
      { path: 'introduction', element: <IntroductionPage /> },
      { path: 'basic-concepts', element: <BasicConceptsMainPage /> },
      { path: 'basic-concepts/contract', element: <BasicConceptsContractPage /> }
    ],
  }
];
