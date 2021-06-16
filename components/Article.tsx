import {BasicArticles} from "./article/basic/articles";
import {useMemo} from "react";
import {GithubComment} from "./util/GithubComment";
import Link from 'next/link'
import {VisitorTag} from "./util/VisitorTag";
import css from './Article.module.css'
import {ArticleData} from "./article/article";

type Props = {
  data: ArticleData
}

export const Article = (props: Props) => {
  const {prev, next} = useMemo(() => {
    const idx = BasicArticles.indexOf(props.data)
    return {
      prev: idx === 0 ? undefined : BasicArticles[idx - 1],
      next: idx === BasicArticles.length - 1 ? undefined : BasicArticles[idx + 1],
    }
  }, [props.data])
  return (
    <div className={'w-full h-full relative p-2'}>
      <article className="markdown-body">
        <h1 className={'flex flex-row items-end'}>
          <div className={'mr-2'}>
            {props.data.meta.title || props.data.meta.name}
          </div>
          <VisitorTag id={props.data.meta.id}/>
        </h1>
        <props.data.Component/>
      </article>
      <div className={'flex flex-row justify-center pb-4 pt-8'}>
        <Link href={`/article/${prev?.meta.id}`}>
          <div className={css.navButton}>
            {prev && `上一节：${prev.meta.name}`}
          </div>
        </Link>
        <Link href={`/article/${next?.meta.id}`}>
          <div className={css.navButton}>
            {next && `下一节：${next.meta.name}`}
          </div>
        </Link>
      </div>
      <hr/>
      <GithubComment/>
    </div>
  )
}