import {DefaultLayout} from "../components/layout/DefaultLayout";
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <DefaultLayout>
      <div className={'w-full h-full flex flex-col items-center justify-center pb-32'}>
        <FontAwesomeIcon icon={faReact}
                         className={"text-[500px] text-react animate-spin-slow duration-1000"}/>
        <div className={'text-6xl font-bold'}>
          欢迎来到XDean的React教程
        </div>
        <div className={'text-3xl font-bold p-4 mt-8 shadow-xl bg-white border-gray-500 border rounded-lg ' +
        'transition hover:bg-blue-600 hover:text-white cursor-pointer'}>
          <Link href={'/article/basic/introduce'}>
            <div>
              开始阅读
            </div>
          </Link>
        </div>
      </div>
    </DefaultLayout>
  )
}
