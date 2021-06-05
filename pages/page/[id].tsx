import {DefaultLayout} from "../../components/layout/DefaultLayout";
import {useRouter} from 'next/router'
import {DemoList} from "../../components/DemoList";
import {Demos} from "../../components/demos/demos";
import {useEffect} from "react";
import {DemoView} from "../../components/DemoView";

export default function Index() {
  const router = useRouter()
  const {id} = router.query
  const demo = Demos.find(e => e.id === id) || Demos[0]
  useEffect(() => {
    if (id !== demo.id) {
      router.replace(`/page/${demo.id}`, undefined, {shallow: true})
    }
  }, [id, demo.id])

  return (
    <DefaultLayout>
      <div className={'w-full h-full flex flex-row items-center'}>
        <div className={'w-2/12 max-w-6xl h-full border-r p-1'}>
          <DemoList selected={demo}/>
        </div>
        <div className={'w-0 flex-grow h-full relative'}>
          <DemoView demo={demo}/>
        </div>
      </div>
    </DefaultLayout>
  )
}