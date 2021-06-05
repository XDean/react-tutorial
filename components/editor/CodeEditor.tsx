import dynamic from "next/dynamic";
import {useCallback} from "react";

const Ace = dynamic(
  async () => {
    const ace = await import('react-ace');
    require('ace-builds/src-noconflict/mode-jsx');
    require('ace-builds/src-noconflict/mode-css');
    require('ace-builds/src-noconflict/theme-monokai');
    return ace;
  },
  {
    loading: () => (
      <>Loading...</>
    ),
    ssr: false,
  })
type Props = {
  mode: 'jsx' | 'css'
  code: string
  setCode: (v: string) => void
}

export const CodeEditor = (props: Props) => {
  return (
    <Ace
      mode={props.mode}
      theme="monokai"
      width={'100%'}
      fontSize={18}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={props.code}
      onChange={useCallback(e => props.setCode(e), [props.setCode])}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
        wrap: true,
      }}/>
  )
}