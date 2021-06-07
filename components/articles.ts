import A0, {meta as m0} from './article/0-introduce.mdx'
import A1, {meta as m1} from './article/1-hello-world.mdx'
import A2, {meta as m2} from './article/2-jsx.mdx'
import A3, {meta as m3} from './article/3-render.mdx'
import A4, {meta as m4} from './article/4-component.mdx'
import A5, {meta as m5} from './article/5-state.mdx'
import A6, {meta as m6} from './article/6-condition.mdx'
import A7, {meta as m7} from './article/7-list.mdx'
import A8, {meta as m8} from './article/8-controlled.mdx'

export type ArticleData = {
  Component: React.ComponentType
  meta: {
    id: string
    name: string
  }
}

export const AllArticles: ArticleData[] = [
  {Component: A0, meta: m0},
  {Component: A1, meta: m1},
  {Component: A2, meta: m2},
  {Component: A3, meta: m3},
  {Component: A4, meta: m4},
  {Component: A5, meta: m5},
  {Component: A6, meta: m6},
  {Component: A7, meta: m7},
  {Component: A8, meta: m8},
]