import { FC, useEffect } from "react"
import { Node } from "@/types/components/nodes";
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { nodeState } from '@/recoil/nodes/index';

const nodeStyle = css({
  border: '1px dashed grey',
  width: '100px',
  padding: '10px',
  margin: '20px auto',
  cursor: 'pointer'
})

const Task: FC<Node> = ({ Name }) => {
  const [nodes, setNodes] = useRecoilState(nodeState);

  // useEffect(() => {
  //   console.log(nodes)
  // }, [nodes])
  
  return (
    <div css={nodeStyle}>
      { Name }
    </div>
  )
}

export default Task;