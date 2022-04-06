import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { Node } from "@/types/components/nodes";

const { persistAtom } = recoilPersist()

const nodeState = atom<Node[]> ({
  key: 'nodeState',
  default: [],
  effects: [persistAtom]
});

export { nodeState }