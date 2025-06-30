export const DirectoryStructureExample01 = `
📦 project/
├── 📂 configs/                    # configurations
|   ├── 📜 app.php  
│   ├── 📜 di.php
│   └── 📜 routes.php
|
├── 📂 public/                     # public directory
│   └── 📜 index.php               # entrypoint
|
├── 📂 src/                        # app sources
│   ├── 📂 Models/       
│   │   ├── 📂 System/  
│   │   └── 📂 Tenant/  
|   |
│   ├── 📂 Repositories/
│   │   ├── 📂 System/  
│   │   └── 📂 Tenant/  
|   |
│   ├── 📂 Configurators/
|   |   ├── 📜 AppSystemConfigurator.php
│   |   ├── 📜 AppTenantConfigurator.php
|   |
│   |── 📂 UseCases/               # busines logic
|   |
│   |── 📂 Services/               # optional
│   |── 📂 Factories/              # optional
│   |── 📂 Validators/             # optional
│   └── 📂 Middlewares/            # optional
|
├── 📂 storage/
│   ├── 📂 cache/      
│   └── 📂 migrations/
|
└── 📂 tests/
`;