import type { NextPage } from 'next'
import { useCallback, useState, ChangeEvent } from 'react';
import styles from './Login.module.scss';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { useInput } from '@/hooks/index'

const Login: NextPage = () => {
  
  const idPlaceHolder = '아이디를 입력해주세요.'
  const pwdPlaceHolder = '비밀번호를 입력해주세요.'
  const [id, setId, handleId] = useInput<string>('')
  const [pwd, setPwd, handlePwd] = useInput <string> ('')

  const handleClick = useCallback(() => {
    if (!id || !pwd) {
      alert('')
    }
    console.log(id)
    console.log(pwd)
  }, [id, pwd])

  return ( 
    <>
      <div className={styles.login__container}>
        <div className={styles.login__form}>
          <div className={styles.login__form__item}>
            <div className={styles.login__form__label}>
              <InputLabel>아이디</InputLabel>
            </div>
            <div>
              <TextField
                placeholder={idPlaceHolder}
                onChange={handleId}
              />
            </div>
            
          </div>
          <div className={styles.login__form__item}>
            <div className={styles.login__form__label}>
              <InputLabel>비밀번호</InputLabel>
            </div>
            <TextField
              type="password"
              placeholder={pwdPlaceHolder}
              autoComplete="current-password"
              onChange={handlePwd}
            />
          </div>
          <Button variant="outlined" onClick={handleClick}>Outlined</Button>
          {/* <div className='cs-warnning' :className='errMsg ? 'is-show' : '''>
            {{ errMsg }}
          </div> */}
          {/* <button className='cs-button btn__login' @click='clickLogin'>로그인</button> */}
        </div>
      </div>
    </>
  )
}

export default Login
