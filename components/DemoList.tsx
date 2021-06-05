import {Demos} from "./demos/demos";
import Link from 'next/link'
import clsx from "clsx";
import {Demo} from "./demos/demo";

type Props = {
  selected: Demo
}

export const DemoList = (props: Props) => {
  return (
    <ul className={'text-xl'}>
      {Demos.map((e, i) => (
        <li key={i}>
          <Link href={`/page/${e.id}`}>
            <div className={clsx(
              'px-2 py-1 cursor-pointer hover:underline',
              e.name === props.selected.name ?
                'bg-blue-300 text-white rounded-md' :
                'hover:text-gray-700'
            )}>
              {e.name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}