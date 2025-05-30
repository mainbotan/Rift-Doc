
// Main
import { MainLayout } from '../layouts/Main/index';
import { MainPage } from '../pages/Main';

// Api
import { DocsLayout } from '../layouts/Docs/index';
import { IntroductionPage } from '../pages/Docs/introduction/index';
import { BasicConceptsMainPage } from '../pages/Docs/basic-concepts';
import { BasicConceptsContractPage } from '../pages/Docs/basic-concepts/contract';
import { ValidatorPage } from '../pages/Docs/validator';
import { DatabasesMainPage } from '../pages/Docs/databases';
import { DatabasesPDOPage } from '../pages/Docs/databases/pdo';
import { DatabasesModelsPage } from '../pages/Docs/databases/models';
import { DatabasesRepositoriesPage } from '../pages/Docs/databases/repositories';
import { DatabasesConfiguratorsPage } from '../pages/Docs/databases/configurators';
import { ValidatorIntUtilsPage } from '../pages/Docs/validator/int-utils';
import { ValidatorStringUtilsPage } from '../pages/Docs/validator/string-utils';
import { ValidatorSchemaValidatorPage } from '../pages/Docs/validator/schema-validator';
import { ValidatorInterfacePage } from '../pages/Docs/validator/interface';


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
      { path: 'basic-concepts/contract', element: <BasicConceptsContractPage /> },
      { path: 'databases', element: <DatabasesMainPage /> },
      { path: 'databases/pdo', element: <DatabasesPDOPage /> },
      { path: 'databases/models', element: <DatabasesModelsPage /> },
      { path: 'databases/repositories', element: <DatabasesRepositoriesPage /> },
      { path: 'databases/configurators', element: <DatabasesConfiguratorsPage /> },
      { path: 'validator', element: <ValidatorPage /> },
      { path: 'validator/int-utils', element: <ValidatorIntUtilsPage /> },
      { path: 'validator/string-utils', element: <ValidatorStringUtilsPage /> },
      { path: 'validator/schema-validator', element: <ValidatorSchemaValidatorPage /> },
      { path: 'validator/interface', element: <ValidatorInterfacePage /> },
    ],
  }
];
