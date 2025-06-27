export const MergeMermaExample01 = `
flowchart TD
    A[Start demoMerge function] --> B[Create userData Operation: id=1, name='Alice']
    A --> C[Create userStats Operation: logins=42, last_login='2023-01-01']
    B --> D[Call merge on userData with userStats]
    C --> D
    D --> E[Merge callback combines data]
    E --> F[Return merged OperationOutcome]

    subgraph Merge Process
    D --> D1["Merge function receives:"]
    D1 --> D2["userData: {id: 1, name: 'Alice'}"]
    D1 --> D3["userStats: {logins: 42, last_login: '2023-01-01'}"]
    D3 --> D4["array_merge creates nested structure"]
    end

    subgraph Result
    F --> G["{
        code: 200,
        result: {
            id: 1,
            name: 'Alice',
            stats: {
                logins: 42,
                last_login: '2023-01-01'
            }
        }
    }"]
    end
`;