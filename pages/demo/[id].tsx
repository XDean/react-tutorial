import {DefaultLayout} from "../../components/layout/DefaultLayout";
import {useRouter} from 'next/router'

export default function Index() {
  const router = useRouter()
  const {id} = router.query

  return (
    <DefaultLayout>
      {id}
    </DefaultLayout>
  )
}