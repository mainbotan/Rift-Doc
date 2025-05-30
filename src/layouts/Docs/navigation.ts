export const docsNav = [
  {
    title: 'Introduction',
    path: 'introduction',
  },
  {
    title: "Basic Сoncepts",
    path: "basic-concepts",
    children: [
     { title: "Contract", path: "basic-concepts/contract" } 
    ]
  },
  {
    title: "Databases",
    path: "databases",
    children: [
     { title: "PDO", path: "databases/pdo" },
     { title: "Models", path: "databases/models" },
     { title: "Repositories", path: "databases/repositories" },
     { title: "Configurators", path: "databases/configurators" },
    ]
  },
  {
    title: 'Validator',
    path: 'validator',
    children: [
     { title: "Int Utils", path: "validator/int-utils" },
     { title: "String Utils", path: "validator/string-utils" },
     { title: "Schema Validator", path: "validator/schema-validator" },
     { title: "Interface", path: "validator/interface" },
    ]
  },
];