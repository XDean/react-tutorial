import Link from 'next/link'
import clsx from "clsx";
import {AllArticles, ArticleData} from "./articles";

type Props = {
  selected: ArticleData
}

export const TOC = (props: Props) => {
  return (
    <ul className={'text-xl'}>
      {AllArticles.map((e, i) => (
        <li key={i}>
          <Link href={`/article/${e.meta.id}`}>
            <div className={clsx(
              'px-2 py-1 cursor-pointer hover:underline',
              e.meta.id === props.selected.meta.id ?
                'bg-blue-300 text-white rounded-md' :
                'hover:text-gray-700'
            )}>
              {e.meta.name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}