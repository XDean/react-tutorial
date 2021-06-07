import {ArticleData} from "./articles";

type Props = {
  data: ArticleData
}

export const Article = (props: Props) => {
  return (
    <div className={'w-full h-full relative p-2'}>
      <div key={'doc'}>
        <article className="markdown-body pb-40">
          <props.data.Component/>
        </article>
      </div>
    </div>
  )
}