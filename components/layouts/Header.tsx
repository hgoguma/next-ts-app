import styles from '@/styles/layouts/Header.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { Manager } from 'socket.io-client'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { deepOrange } from '@mui/material/colors';
import { useRecoilState, useResetRecoilState } from 'recoil'
import { userState } from '@/recoil/user/index'
import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from '@/firebase/index'

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
  const [user, setUser] = useRecoilState(userState);
  const classes = useStyles();
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // socketInitializer()
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
    socket.on('disconnect', () => {
      console.log('disconnected')
      
    })
  }
  

  const resetUser = useResetRecoilState(userState);

  const handleLogout = useCallback(() => {
    const auth = getAuth(firebaseApp);
    try {
      signOut(auth)
      resetUser()
      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }, [])

  const toMain = useCallback(() => {
    router.push('/')
  }, [])

  return (
    <header className={styles['header']}>
      <div className={styles['left-area']}>
        <HomeIcon onClick={toMain} />
      </div>
      <div className={styles['right-area']}>
        <div className={styles['alarm-container']}>
          <NotificationsNoneIcon className={styles['alarm-bell']} />
          <div className={styles['count']}>{count}</div>
        </div>
        <div className={styles['avatar-container']}>
          <Avatar src={user.photoURL} alt={user.displayName} />
        </div>
        <Button variant="contained" disableElevation size={'medium'} className={classes.logoutBtn} onClick={handleLogout}>로그아웃</Button>
      </div>
    </header>
  );
};

export default Header;