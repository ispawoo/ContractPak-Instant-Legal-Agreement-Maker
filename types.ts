
export interface Clause {
  id: string;
  title: string;
  content: string;
}

export interface ContractTemplate {
  id: string;
  name: string;
  description: string;
  clauses: Clause[];
}

export interface ContractData {
  [key: string]: string;
}
