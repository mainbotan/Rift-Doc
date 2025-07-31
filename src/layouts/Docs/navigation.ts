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
      title: "From The Inside",
      path: "from-the-inside",
      sign: "",
      // children: [
      //   { title: "DI", path: "di", sign: "#" }
      // ]
     },
     { 
      title: "Contract", 
      path: "contract", 
      sign: "",
      children: [
        { 
          title: "Methods", 
          path: "methods",
          sign: "",
          children: [
            { title: "then", path: "then", sign: "@" },
            { title: "map", path: "map", sign: "@" },
            { title: "catch", path: "catch", sign: "@" },
            { title: "tap", path: "tap", sign: "@" },
            { title: "ensure", path: "ensure", sign: "@" },
            { title: "merge", path: "merge", sign: "@" }
          ]
        },
        { title: "Metadata", path: "metadata", sign: "" },         
        { title: "Serialize", path: "serialize", sign: "" },
        { title: "Benchmark", path: "benchmark", sign: "", } 
      ]
    },
    ]
  },
  {
    title: "Architecture",
    path: "architecture",
    children: [
      {
        title: "Directory Structure",
        path: "directory-structure",
        sign: ''
      },
      {
        title: "Entrypoint",
        path: "entrypoint",
        sign: ''
      },
      {
        title: "Routing",
        path: "routing",
        sign: '',
        children: [
          { title: "Request Object", path: "request-object", sign: "#", },
          { title: "Routes Configuration", path: "routes-configuration", sign: "#" },
          { title: "Middlewares", path: "middlewares", sign: "#" }
        ]
      },
      {
        title: "Logic Layer",
        path: "logic-layer",
        sign: '',
        children: [
          { title: "UseCases", path: "use-cases", sign: "#" },
          { title: "Dependency Injection", path: "di", sign: "#" }
        ]
      },
      {
        title: "Databases",
        path: "databases",
        sign: '',
        children: [
        { title: "Connection", path: "connection", sign: "" },
        { 
          title: "Models", 
          path: "models",
          sign: "",
          children: [
            { title: "Schema", path: "schema", sign: "#" },
            { title: "Keys", path: "keys", sign: "#" },
            { title: "Validation Rules", path: "validation-rules", sign: "i" }
          ]
        },
        { 
          title: "Repositories", 
          path: "repositories", 
          sign: "",
          children: [
            { title: "Router", path: "router", sign: "#" },
            { title: "Repository Structure", path: "repository-structure", sign: "#" }
          ]
        },
        { title: "Configurators", path: "configurators", sign: "" },
        ]
      },
    ]
  },
  {
    title: "Modules",
    path: "modules",
    children: [
      {
        title: 'Validator',
        path: 'validator',
        sign: "",
        children: [
        { title: "Int Utils", path: "int-utils", sign: "#" },
        { title: "String Utils", path: "string-utils", sign: "#" },
        { title: "Schema Validator", path: "schema-validator", sign: "#" },
        { title: "Interface", path: "interface", sign: "#" },
        ]
      },
    ]
  }
];