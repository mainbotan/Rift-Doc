export const ThenAndMapMermaExample01 = `
sequenceDiagram
    participant Caller
    participant Operation
    participant thenCallback
    participant mapCallback

    Caller->>Operation: demoThenAndMap()
    Operation->>Operation: Create initial success(['id'=>1, 'name'=>'Alice'])
    
    Note right of Operation: then() - Creates NEW ResultType
    Operation->>thenCallback: Invoke with original data
    thenCallback-->>Operation: New ResultType with timestamp
    
    Note right of Operation: map() - Transforms CURRENT data
    Operation->>mapCallback: Invoke with current data
    mapCallback-->>Operation: Modified data (name uppercased)
    
    Operation-->>Caller: Final ResultType
    Note left of Caller: Final structure:<br/>{<br/>  "user": {<br/>    "id": 1,<br/>    "name": "ALICE"<br/>  },<br/>  "timestamp": 1678901234<br/>}
`;