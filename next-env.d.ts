/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.mdx' {
  let MDXComponent: () => JSX.Element
  export default MDXComponent
}

declare module '*.djsx' {
  export default string
}
