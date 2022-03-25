import styles from '@/styles/layouts/Header.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { Manager } from 'socket.io-client'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { deepOrange } from '@mui/material/colors';

const avatarSize = {
  width: '30px',
  height: '30px'
}

const logoutBtn = {
  color: '#fff',
  bgColor: '#73c78a',
  hoverColor: '#7fdb98'
}

const useStyles = makeStyles(() => ({
  orangeAvatar: {
    backgroundColor: deepOrange[500],
    width: avatarSize.width,
    height: avatarSize.height
  },
  logoutBtn: {
    color: logoutBtn.color,
    backgroundColor: logoutBtn.bgColor,
    '&:hover': {
      backgroundColor: logoutBtn.hoverColor,
    }
  }
}));

const Header = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  useEffect(() => {
    socketInitializer()
  }, [])

  const socketInitializer = async () => {
    const url = `http://localhost:9000`
    const manager = new Manager(url)
    const socket = manager.socket('/');
    socket.on('connect', () => {
      console.log('connected')
    })
    socket.on('getAlarmCount', (res) => {
      setCount(res.count)
    })
  }

  return (
    <header className={styles['header']}>
      <div className={styles['left-area']}>
      </div>
      <div className={styles['right-area']}>
        <div className={styles['alarm-container']}>
          <NotificationsNoneIcon className={styles['alarm-bell']} />
          <div className={styles['count']}>{count}</div>
        </div>
        <div className={styles['avatar-container']}>
          <Avatar alt="H.ONE" className={classes.orangeAvatar}>H</Avatar>
        </div>
        <Button variant="contained" disableElevation size={'small'} className={classes.logoutBtn}>로그아웃</Button>
      </div>
    </header>
  );
};

export default Header;