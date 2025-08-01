export const DirectoryStructureExample01 = `
📦 project/
|
├── 📂 bootstrap/                  # bootstrap layer
|   ├── 📜 app.php  
│   ├── 📜 dependencies.php
│   └── 📜 environment.php
|
├── 📂 config/                     # configurations
|   ├── 📜 app.php  
│   ├── 📜 di.php
│   └── 📜 routes.php
|
├── 📂 public/                     # public directory
│   └── 📜 index.php               # entrypoint
|
├── 📂 src/                        # app sources
|   |
│   ├── 📂 Core/                   # the system core of the application
|   |   |
│   |   ├── 📜 RepositoriesRouter.php
│   |   ├── 📜 RepositoriesFactory.php
|   |   |     
│   │   ├── 📂 Middlewares/  
│   │   └── 📂 Tenant/  
|   |   |   |── 📂 UseCases/
|   |   |   |── 📜 Model.php
|   |   |   └── 📜 Repository.php
|   |
│   ├── 📂 Tenant/                  # individual client's work modules
|   |   |
│   |   ├── 📜 RepositoriesRouter.php
│   |   ├── 📜 RepositoriesFactory.php
|   |   |     
│   │   ├── 📂 Modules/  
|   |   |   |
│   │   |   |── 📂 ExampleModule/  
|   |   |   |   |── 📂 UseCases/
|   |   |   |   |── 📜 Model.php
|   |   |   |   └── 📜 Repository.php
|   |   |   |
│   │   |   └── 📂 .../  
|
├── 📂 storage/
│   ├── 📂 cache/      
│   └── 📂 migrations/
|
└── 📂 tests/
`;