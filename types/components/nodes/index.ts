export interface Node {
  Name: string;
  Type: string;
  Resource: string;
  Next: string;
  Branches?: Node[]
  States?: Node;
  StartAt?: string;
  Comment?: string;
  End?: boolean;
}


export enum NodeType {
  Task = 'Task',
  Parallel = 'Parallel'
}

export type DynamicComponentProps = {
  index: number;
  component: string;
  props: Node;
}