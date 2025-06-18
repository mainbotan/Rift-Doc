
// Main
import { MainLayout } from '../layouts/Main/index';
import { MainPage } from '../pages/Main';

// tsxes
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
import { BasicConceptsContractMethodsPage } from '../pages/Docs/basic-concepts/contract/methods';
import { BasicConceptsUseContractPage } from '../pages/Docs/basic-concepts/contract/chains';
import { ContractThenMethodPage } from '../pages/Docs/basic-concepts/contract/methods/then';
import { ContractMapMethodPage } from '../pages/Docs/basic-concepts/contract/methods/map';
import { ContractCatchMethodPage } from '../pages/Docs/basic-concepts/contract/methods/catch';
import { ContractTapMethodPage } from '../pages/Docs/basic-concepts/contract/methods/tap';
import { ContractEnsureMethodPage } from '../pages/Docs/basic-concepts/contract/methods/ensure';
import { ContractMergeMethodPage } from '../pages/Docs/basic-concepts/contract/methods/merge';


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
      { path: 'basic-concepts/contract/methods', element: <BasicConceptsContractMethodsPage /> },
      { path: 'basic-concepts/contract/methods/then', element: <ContractThenMethodPage /> },
      { path: 'basic-concepts/contract/methods/map', element: <ContractMapMethodPage /> },
      { path: 'basic-concepts/contract/methods/catch', element: <ContractCatchMethodPage /> },
      { path: 'basic-concepts/contract/methods/tap', element: <ContractTapMethodPage /> },
      { path: 'basic-concepts/contract/methods/ensure', element: <ContractEnsureMethodPage /> },
      { path: 'basic-concepts/contract/methods/merge', element: <ContractMergeMethodPage /> },
      { path: 'basic-concepts/contract/chains', element: <BasicConceptsUseContractPage /> },
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
