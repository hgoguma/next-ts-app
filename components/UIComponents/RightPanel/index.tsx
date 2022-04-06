import Drawer from '@mui/material/Drawer';
import { FC, useState } from 'react';
import { DrawerProps } from '@mui/material';

const RightPanel: FC<DrawerProps> = ({ open, handleClose }) => {
  return (
    <div>
      <Drawer
        anchor={'right'}
        open={open}
      >
        저기요
        <button onClick={() => handleClose()}>닫기</button>
      </Drawer>
    </div>
  )
}

export default RightPanel