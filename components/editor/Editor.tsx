import {useCallback, useState} from "react";
import {useDebounce} from "react-use";
import {CodeEditor} from "./CodeEditor";
import {ReactPreviewer} from "./ReactPreviewer";
import {Code} from "./type";
import clsx from "clsx";


type Props = {
  code: Code
  css?: boolean // show css tab, default true
}

export const Editor = (props: Props) => {
  const css = props.css || true
  const [type, setType] = useState<keyof Code>('js')
  const [code, setCode] = useState(props.code)
  const [previewCode, setPreviewCode] = useState(props.code)
  useDebounce(() => setPreviewCode(code), 1000, [code])

  return (
    <div className={'my-2 mx-1 flex flex-row ring-1 ring-gray-500'}>
      <div className={'w-0 flex-grow border-r'}>
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
        <CodeEditor code={code[type]}
                    setCode={useCallback((v) => setCode(c => ({...c, [type]: v})), [type])}
                    mode={type === 'js' ? 'jsx' : 'css'}/>
      </div>
      <ReactPreviewer code={previewCode} className={'w-0 flex-grow'}/>
    </div>
  )
}