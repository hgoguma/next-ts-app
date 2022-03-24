import styles from '@/styles/layouts/Header.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { Manager } from 'socket.io-client'

const Header = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    socketInitializer()
  }, [])
  
  const socketInitializer = async () => {
    console.log('socketInitializer')
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
    <header className={styles.header}>
      <div style={{color: 'red'}}>
        {count}
      </div>
    </header>
  );
};

export default Header;