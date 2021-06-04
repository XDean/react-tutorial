type Props = {
  code: string
}

export const Editor = (props: Props) => {
  return (
    <div>
      {props.code}
    </div>
  )
}