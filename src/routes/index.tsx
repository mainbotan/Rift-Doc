
// Main
import { MainLayout } from '../layouts/Main/index';
import { MainPage } from '../pages/Main';

// tsxes
import { DocsLayout } from '../layouts/Docs/index';
import { IntroductionPage } from '../pages/Docs/introduction/index';
import { BasicConceptsMainPage } from '../pages/Docs/basic-concepts';
import { BasicConceptsContractPage } from '../pages/Docs/basic-concepts/contract';
import { ValidatorPage } from '../pages/Docs/validator';
import { ValidatorIntUtilsPage } from '../pages/Docs/validator/int-utils';
import { ValidatorStringUtilsPage } from '../pages/Docs/validator/string-utils';
import { ValidatorSchemaValidatorPage } from '../pages/Docs/validator/schema-validator';
import { ValidatorInterfacePage } from '../pages/Docs/validator/interface';
import { BasicConceptsContractMethodsPage } from '../pages/Docs/basic-concepts/contract/methods';
import { ContractThenMethodPage } from '../pages/Docs/basic-concepts/contract/methods/then';
import { ContractMapMethodPage } from '../pages/Docs/basic-concepts/contract/methods/map';
import { ContractCatchMethodPage } from '../pages/Docs/basic-concepts/contract/methods/catch';
import { ContractTapMethodPage } from '../pages/Docs/basic-concepts/contract/methods/tap';
import { ContractEnsureMethodPage } from '../pages/Docs/basic-concepts/contract/methods/ensure';
import { ContractMergeMethodPage } from '../pages/Docs/basic-concepts/contract/methods/merge';
import { ContractMetaPage } from '../pages/Docs/basic-concepts/contract/meta';
import { ContractSerializePage } from '../pages/Docs/basic-concepts/contract/serialize';
import { ContractBenchmarkPage } from '../pages/Docs/basic-concepts/contract/benchmark';
import { ArchitectureMainPage } from '../pages/Docs/architecture';
import { EntrypointPage } from '../pages/Docs/architecture/entrypoint';
import { RoutingMainPage } from '../pages/Docs/architecture/routing';
import { RoutingRequestObjectPage } from '../pages/Docs/architecture/routing/request-object';
import { RoutingRoutesConfigPage } from '../pages/Docs/architecture/routing/routes-config';
import { RoutingMiddlewaresPage } from '../pages/Docs/architecture/routing/middlewares';
import { LogicLayerMainPage } from '../pages/Docs/architecture/logic-layer';
import { LogicLayerUseCasesPage } from '../pages/Docs/architecture/logic-layer/use-cases';
import { LogicLayerDIPage } from '../pages/Docs/architecture/logic-layer/di';
import { DatabasesConnectionPage } from '../pages/Docs/architecture/databases/connection';
import { DatabasesModelsMainPage } from '../pages/Docs/architecture/databases/models';
import { DatabasesModelsSchemaPage } from '../pages/Docs/architecture/databases/models/schema';
import { DatabasesModelsKeysPage } from '../pages/Docs/architecture/databases/models/keys';
import { DatabasesModelsValidationRulesPage } from '../pages/Docs/architecture/databases/models/validation-rules';
import { DatabasesRepositoriesMainPage } from '../pages/Docs/architecture/databases/repositories';
import { DatabasesRepositoriesRouterPage } from '../pages/Docs/architecture/databases/repositories/router';
import { DatabasesRepositoriesRepositoryPage } from '../pages/Docs/architecture/databases/repositories/repository';
import { DatabasesMainPage } from '../pages/Docs/architecture/databases';
import { DatabasesConfiguratorsPage } from '../pages/Docs/architecture/databases/configurators';
import { DirectoryStructurePage } from '../pages/Docs/architecture/directory-structure';
import { FromTheInsideMainPage } from '../pages/Docs/basic-concepts/from-the-inside';


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
      
      // Basic Concepts
      { path: 'basic-concepts', element: <BasicConceptsMainPage /> },
      { path: 'basic-concepts/from-the-inside', element: <FromTheInsideMainPage /> },
      
      // Contract
      { path: 'basic-concepts/contract', element: <BasicConceptsContractPage /> },
      { path: 'basic-concepts/contract/methods', element: <BasicConceptsContractMethodsPage /> },
      { path: 'basic-concepts/contract/methods/then', element: <ContractThenMethodPage /> },
      { path: 'basic-concepts/contract/methods/map', element: <ContractMapMethodPage /> },
      { path: 'basic-concepts/contract/methods/catch', element: <ContractCatchMethodPage /> },
      { path: 'basic-concepts/contract/methods/tap', element: <ContractTapMethodPage /> },
      { path: 'basic-concepts/contract/methods/ensure', element: <ContractEnsureMethodPage /> },
      { path: 'basic-concepts/contract/methods/merge', element: <ContractMergeMethodPage /> },
      { path: 'basic-concepts/contract/metadata', element: <ContractMetaPage /> },
      { path: 'basic-concepts/contract/serialize', element: <ContractSerializePage /> },
      { path: 'basic-concepts/contract/benchmark', element: <ContractBenchmarkPage /> },

      // Architecture
      { path: 'architecture', element: <ArchitectureMainPage /> },
      { path: 'architecture/directory-structure', element: <DirectoryStructurePage /> },
      { path: 'architecture/entrypoint', element: <EntrypointPage /> },
      { path: 'architecture/routing', element: <RoutingMainPage /> },
      { path: 'architecture/routing/request-object', element: <RoutingRequestObjectPage /> },
      { path: 'architecture/routing/routes-configuration', element: <RoutingRoutesConfigPage /> },
      { path: 'architecture/routing/middlewares', element: <RoutingMiddlewaresPage /> },
      { path: 'architecture/logic-layer', element: <LogicLayerMainPage /> },
      { path: 'architecture/logic-layer/use-cases', element: <LogicLayerUseCasesPage /> },
      { path: 'architecture/logic-layer/di', element: <LogicLayerDIPage /> },
      { path: 'architecture/databases', element: <DatabasesMainPage /> },
      { path: 'architecture/databases/connection', element: <DatabasesConnectionPage /> },
      { path: 'architecture/databases/models', element: <DatabasesModelsMainPage /> },
      { path: 'architecture/databases/models/schema', element: <DatabasesModelsSchemaPage /> },
      { path: 'architecture/databases/models/keys', element: <DatabasesModelsKeysPage /> },
      { path: 'architecture/databases/models/validation-rules', element: <DatabasesModelsValidationRulesPage /> },
      { path: 'architecture/databases/repositories', element: <DatabasesRepositoriesMainPage /> },
      { path: 'architecture/databases/repositories/router', element: <DatabasesRepositoriesRouterPage /> },
      { path: 'architecture/databases/repositories/repository-structure', element: <DatabasesRepositoriesRepositoryPage /> },
      { path: 'architecture/databases/configurators', element: <DatabasesConfiguratorsPage /> },

      // Modules
      { path: 'modules/validator', element: <ValidatorPage /> },
      { path: 'modules/validator/int-utils', element: <ValidatorIntUtilsPage /> },
      { path: 'modules/validator/string-utils', element: <ValidatorStringUtilsPage /> },
      { path: 'modules/validator/schema-validator', element: <ValidatorSchemaValidatorPage /> },
      { path: 'modules/validator/interface', element: <ValidatorInterfacePage /> },
    ],
  }
];
