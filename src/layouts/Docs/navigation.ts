export const docsNav = [
  {
    title: 'Introduction',
    path: 'introduction',
    sign: '/'
  },
  {
    title: "Basic Сoncepts",
    path: "basic-concepts",
    sign: '/',
    children: [
     { 
      title: "Contract", 
      path: "contract", 
      children: [
        { 
          title: "Methods", 
          path: "methods",
          children: [
            { title: "then", path: "then", sign: "@" },
            { title: "map", path: "map", sign: "@" },
            { title: "catch", path: "catch", sign: "@" },
            { title: "tap", path: "tap", sign: "@" },
            { title: "ensure", path: "ensure", sign: "@" },
            { title: "merge", path: "merge", sign: "@" }     
          ]
        },
        { title: "Chains", path: "chains" } 
      ]
    },
    ]
  },
  {
    title: "Databases",
    path: "databases",
    sign: '/',
    children: [
     { title: "PDO", path: "pdo" },
     { title: "Models", path: "models" },
     { title: "Repositories", path: "repositories" },
     { title: "Configurators", path: "configurators" },
    ]
  },
  {
    title: 'Validator',
    path: 'validator',
    sign: "/",
    children: [
     { title: "Int Utils", path: "int-utils" },
     { title: "String Utils", path: "string-utils" },
     { title: "Schema Validator", path: "schema-validator" },
     { title: "Interface", path: "interface" },
    ]
  },
];