export const TapMermaExample01 = `
flowchart TD
    A[Start demoTap function] --> B[Create Operation with success: value=42]
    B --> C[Call tap #1: log original value]
    C --> D[Call map: double the value]
    D --> E[Call tap #2: log doubled value]
    E --> F[Return final ResultType]

    subgraph Tap #1: Initial Log
    C --> C1["error_log('Processing value: 42')"]
    end

    subgraph Map Transformation
    D --> D1["result['value'] *= 2"]
    D1 --> D2["Update result to {value: 84}"]
    end

    subgraph Tap #2: Post-Map Log
    E --> E1["error_log('Doubled value: 84')"]
    end

    subgraph Result
    F --> G["{
        code: 200,
        result: {
            value: 84
        }
    }"]
    end
`;