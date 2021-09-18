import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

export const framework = atom({
  key: 'framework',
  default: undefined,
})

export const topic = atom({
  key: 'topic',
  default: undefined,
})
