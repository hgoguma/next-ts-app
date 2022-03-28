import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { UserType } from '@/types/api/user'

const { persistAtom } = recoilPersist()

const userState = atom<UserType> ({
  key: 'userState',
  default: {},
  effects: [persistAtom]
});

export { userState }