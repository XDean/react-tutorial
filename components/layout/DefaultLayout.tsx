import {PropsWithChildren} from "react";

export const DefaultLayout = (props: PropsWithChildren<{}>) => {
  return (
    <div className={'flex flex-col h-screen'}>
      <div className={'w-full shadow-md p-2 border-b bg-white z-10 flex flex-row items-center'}>
        <i className="fab fa-react text-4xl text-react animate-spin-slow duration-1000"/>
        <div className={'inline text-4xl ml-2'}>
          XDean's React Tutorial
        </div>
      </div>
      <main className={'relative flex-grow w-full p-2 h-0'}>
        {props.children}
      </main>
    </div>
  )
}
