import dynamic from "next/dynamic";
import {useCallback, useState} from "react";
import {useDebounce} from "react-use";

const Ace = dynamic(
  async () => {
    const ace = await import('react-ace');
    require('ace-builds/src-noconflict/mode-javascript');
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
  code: string
}

export const Editor = (props: Props) => {
  const [code, setCode] = useState(props.code)
  const [iframeCode, setIframeCode] = useState("")
  useDebounce(() => setIframeCode(code), 1000, [code])

  return (
    <div className={'my-2 mx-1 flex flex-row ring-1 ring-gray-500'}>
      <div className={'w-0 flex-grow'}>
        <Ace
          mode="javascript"
          theme="monokai"
          width={'100%'}
          fontSize={18}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={code}
          onChange={useCallback(e => setCode(e), [])}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}/>
      </div>
      <iframe
        className={'flex-grow w-0'}
        srcDoc={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title></title>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
  const root = document.getElementById('root')
  try {
    ${iframeCode}
    ReactDOM.render(
      <App/>,
      root
    );
  } catch (e) {
    ReactDOM.render(
      <div>{e.message}</div>,
      root
    )
  }
</script>
</body>
</html>`}/>
    </div>
  )
}