import { NodeType, DynamicComponentProps } from "@/types/components/nodes";
import Task from "@/components/WorkflowComponents/Task";
import Parallel from "@/components/WorkflowComponents/Parallel";

export const renderDynamicComp = ({ index, component, props }: DynamicComponentProps) => {
  switch (component) {
    case NodeType.Task:
      return (<Task {...props} key={index} />);
    case NodeType.Parallel:
      return (<Parallel {...props} key={index} />);
  }
}