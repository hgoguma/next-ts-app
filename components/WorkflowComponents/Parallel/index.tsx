import { FC } from "react";
import { Node } from "@/types/components/nodes";
import { renderDynamicComp } from '@/utils/component/index';
import { css } from '@emotion/react';

const nodeStyle = css({
  border: '1px dashed red',
  padding: '20px',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
})
const Parallel: FC<Node> = ({ Branches }) => {
  
  return (
    <div css={nodeStyle}>
      {
        Branches?.map((item: Node, index: number) => {
          const node = item?.States[item.StartAt]
          const component: string = node.Type
          return renderDynamicComp({ index, component, props: node })
        })  
      }
    </div>
  )
}

export default Parallel