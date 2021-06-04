import {Demo} from "./demos/demo";
import {Editor} from "./editor/Editor";

type Props = {
  demo: Demo
}

export const DemoView = (props: Props) => {
  return (
    <div className={'w-full h-full relative p-2'}>
      <div key={'doc'}>
        <article className="markdown-body">
          <props.demo.doc/>
        </article>
      </div>
      <Editor code={props.demo.code}/>
    </div>
  )
}