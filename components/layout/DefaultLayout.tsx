import {PropsWithChildren} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faReact} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import xdeanLogo from '../../public/favicon.ico'

export const DefaultLayout = (props: PropsWithChildren<{}>) => {
  return (
    <div className={'flex flex-col h-screen'}>
      <div className={'w-full shadow-md p-2 border-b bg-white z-10 flex flex-row items-center text-4xl'}>
        <FontAwesomeIcon icon={faReact} className={'text-react animate-spin-slow duration-1000'}/>
        <div className={'inline ml-2'}>
          XDean的React教程
        </div>
        <div className={'flex-grow w-0'}/>
        <a target={'_blank'}
           href={'https://xdean.cn'}
           className={'leading-[0px] hover:ring-2 rounded-[20px]'}
        >
          <Image src={xdeanLogo} alt={'XDean Logo'} height={40} width={40}/>
        </a>
        <a className={'ml-2'}
           target={'_blank'}
           href={'https://github.com/XDean/spark-tutorial'}
        >
          <FontAwesomeIcon icon={faGithub}/>
        </a>
      </div>
      <main className={'relative flex-grow w-full py-2 h-0'}>
        {props.children}
      </main>
    </div>
  )
}
