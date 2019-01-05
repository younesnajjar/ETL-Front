export interface Info {
    test: string;
}

export interface Column {
    name: string;
    state: boolean;
}

export interface NodeDataArray {
    category: string;
    info: Info;
    key: number;
    columns: Column[];
    query: string;
    name: string;
    type: string;
    loc: string;
}

export interface LinkDataArray {
    from: number;
    to: number;
    points: number[];
}

export interface Graph {
    class: string;
    nodeDataArray: NodeDataArray[];
    linkDataArray: LinkDataArray[];
}