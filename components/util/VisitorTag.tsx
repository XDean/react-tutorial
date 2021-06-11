import React from "react";

export const VisitorTag = ({id}: { id: string }) => {
  const dev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  const prefix = dev ? 'xdean.react.dev.' : 'xdean.react.'
  return (
    <img
      className={'inline'}
      alt={'visitor'}
      src={`https://visitor-badge.laobi.icu/badge?page_id=${prefix}${id}`}/>
  )
}