import {DefaultLayout} from "../../components/layout/DefaultLayout";
import {useRouter} from 'next/router'
import {TOC} from "../../components/TOC";
import {useEffect} from "react";
import {Article} from "../../components/Article";
import {AllArticles} from "../../components/articles";

export default function Index() {
  const router = useRouter()
  const {id} = router.query
  const article = AllArticles.find(e => e.meta.id === id) || AllArticles[0]
  useEffect(() => {
    if (router.isReady && id !== article.meta.id) {
      router.replace(`/article/${article.meta.id}`, undefined, {shallow: true})
    }
  }, [router.isReady, id, article.meta.id])

  if (!router.isReady)
    return null

  return (
    <DefaultLayout>
      <div className={'w-full h-full flex flex-row items-center'}>
        <div className={'max-w-2/12 h-full border-r p-1 mr-2 overflow-auto'}>
          <TOC selected={article}/>
        </div>
        <div className={'w-0 flex-grow h-full relative overflow-auto'}>
          <Article data={article}/>
        </div>
      </div>
    </DefaultLayout>
  )
}