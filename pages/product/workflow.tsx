import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from 'react-query';
import RightPanel from "@/components/UIComponents/RightPanel";
import dummyData from '@/config/nodes.json'
import { Node, NodeType } from "@/types/components/nodes";
import { renderDynamicComp } from '@/utils/component/index'
import { css } from '@emotion/react';
// recoil
import { useRecoilState } from 'recoil';
import { nodeState } from '@/recoil/nodes/index';

const ContainerStyle = css({
  maxWidth: '500px',
  padding: '20px',
})

const getDummyData = () => {
  return useQuery('data', () => {
    const data = dummyData
    const nodes = []
    for (const key of Object.keys(data['States'])) {
      const node: Node = data.States[key]
      nodes.push(node)
    }
    return nodes
  })
}

const Workflow = () => {
  const [open, setOpen] = useState(false);
  const { status, data, error, isFetching } = getDummyData();
  const handleRightPanel = useCallback(() => {
    setOpen(!open)
  }, [open])

  const [nodes, setNodes] = useRecoilState(nodeState);

  useEffect(() => {
    if (status === 'success') {
      setNodes(data)
    }
  }, [status, data])

  
  return (
    <div css={ContainerStyle}>
      {
        data?.map((item: Node, index: number) => {
          const component: string = NodeType[item.Type]
          return renderDynamicComp({ index, component, props: item })
        })
      }
      {/* <button onClick={handleRightPanel}>열기</button> */}
      {/* <RightPanel open={open} handleClose={handleRightPanel} /> */}
    </div>
  )
}

export default Workflow;