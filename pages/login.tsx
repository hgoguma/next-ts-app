import type { NextPage } from 'next'
import { useCallback, useEffect } from 'react';
import styles from '@/styles/pages/Login.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useInput } from '@/hooks/index'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from '@/firebase/index'
import { userState } from '@/recoil/user/index'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router';
import { UserType } from '@/types/api/user'

const Login: NextPage = () => {

  const router = useRouter()

  const [user, setUser] = useRecoilState(userState);

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

  const handleGoogleLogin = useCallback(async () => {
    const auth = getAuth(firebaseApp)
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const userData: UserType = result.user
      
      console.log(user)
      setUser(user)
      router.push('/')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  }, [])

  // useEffect(())

  return ( 
    <div className={styles.login__wrap}>
      <div className={styles.login__container}>
    <div className={styles.login__image__container}>
      <div className={styles.login__image}></div>
    </div>
      <div className={styles.login__form}>
        <div className={styles.login__form__item}>
          <TextField
            placeholder={idPlaceHolder}
            onChange={handleId}
          />
        </div>
        <div className={styles.login__form__item}>
          <TextField
            type="password"
            placeholder={pwdPlaceHolder}
            autoComplete="current-password"
            onChange={handlePwd}
          />
          </div>
        <div className={styles.login__form__btn__container}>
          <Button className={styles.login__form__btn} style={{backgroundColor: '#61a4bc'}} size="large" variant="contained" onClick={handleClick}>
            로그인
          </Button>
          <Button className={styles.login__form__btn} style={{color: '#61a4bc'}} size="large" onClick={handleGoogleLogin}>
            구글 로그인
          </Button>
        </div>
        {/* <div className='cs-warnning' :className='errMsg ? 'is-show' : '''>
          {{ errMsg }}
        </div> */}
      </div>
    </div>
    </div>
    
  )
}

export default Login
