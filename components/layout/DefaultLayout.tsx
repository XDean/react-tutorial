import {PropsWithChildren} from "react";

export const DefaultLayout = (props: PropsWithChildren<{}>) => {
  return (
    <div className={'flex flex-col h-screen'}>
      <div className={'w-full shadow-md p-2 border-b bg-white z-10 flex flex-row items-center text-4xl'}>
        <i className="fab fa-react text-react animate-spin-slow duration-1000"/>
        <div className={'inline ml-2'}>
          XDean的React教程
        </div>
        <div className={'flex-grow w-0'}/>
        <a className={'cursor-pointer'}
           target={'_blank'}
           href={'https://github.com/XDean/react-tutorial'}>
          <i className="fab fa-github"/>
        </a>
      </div>
      <main className={'relative flex-grow w-full p-2 h-0'}>
        {props.children}
      </main>
    </div>
  )
}
