import {useCallback, useEffect, useState} from "react";
import {useDebounce} from "react-use";
import {CodeEditor} from "./CodeEditor";
import {ReactPreviewer} from "./ReactPreviewer";
import {Code} from "./type";
import clsx from "clsx";

type Props = {
  code: Code
  css?: boolean // show css tab, default true
  className?:string
}

export const ReactEditor = (props: Props) => {
  const css = props.css || true
  const [type, setType] = useState<keyof Code>('js')
  const [code, setCode] = useState(props.code)
  const [previewCode, setPreviewCode] = useState(props.code)
  useEffect(() => setCode(props.code), [props.code])
  useDebounce(() => setPreviewCode(code), 500, [code])

  return (
    <div className={clsx('my-2 mx-1 flex flex-row ring-1 ring-gray-500 w-9/12 h-[300px]', props.className)}>
      <div className={'w-0 flex-grow border-r flex-col flex'}>
        {css && (
          <div className={'bg-black text-white text-lg'}>
          <span
            className={clsx('m-1 w-8 cursor-pointer hover:underline hover:text-gray-300', type === 'js' && 'underline')}
            onClick={useCallback(() => setType('js'), [])}
          >
            JSX
          </span>
            <span
              className={clsx('m-1 w-8 cursor-pointer hover:underline hover:text-gray-300', type === 'css' && 'underline')}
              onClick={useCallback(() => setType('css'), [])}>
            CSS
          </span>
          </div>
        )}
        {['js', 'css'].map(t => (
          <div className={clsx('relative h-0 flex-grow', t === type ? 'block' : 'hidden')} key={t}>
            <CodeEditor code={code[t as keyof Code]}
                        onCodeChange={useCallback((v) => setCode(c => ({...c, [t]: v})), [])}
                        mode={t === 'js' ? 'jsx' : 'css'}/>
          </div>
        ))}
      </div>
      <ReactPreviewer code={previewCode} className={'w-0 flex-grow'}/>
    </div>
  )
}