import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

type UserType = {
  accessToken: string;
  displayName: string;
  email: string;
  photoURL: string;
  phoneNumber?: string;
  uid: string;
}

const userState = atom<UserType> ({
  key: 'userState',
  default: {},
  effects_UNSTABLE: [persistAtom]
});

export { userState }