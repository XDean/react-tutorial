import {ReactEditor, ReactEditorProps} from "./ReactEditor";
import useSWR from "swr";
import {fetchStatic} from "../util/fetch";

type Props = {
  js: string
  css?: string
} & Omit<ReactEditorProps, 'code'>

export const SrcReactEditor = ({js, css, ...rest}: Props) => {
  const jsCode = useSWR(js, fetchStatic);
  const cssCode = useSWR(css || null, fetchStatic);

  return (
    <ReactEditor
      code={{
        js: jsCode.data || "",
        css: cssCode.data || "",
      }}
      {...rest}
    />
  )
}