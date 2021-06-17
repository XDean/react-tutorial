import React, {useEffect, useState} from "react";
// @ts-ignore
import ReactUtterences from 'react-utterances'
import {useRouter} from 'next/router'

export const GithubComment = () => {
  const [show, setShow] = useState(true)
  const router = useRouter();
  useEffect(() => {
    const listener = () => {
      setShow(false);
      setTimeout(() => setShow(true), 50)
    }
    router.events.on('routeChangeComplete', listener)
    return () => {
      router.events.off('routeChangeComplete', listener)
    };
  }, [router.events]);
  return show && <ReactUtterences type={'pathname'} repo={'XDean/blog-comment'}/>
}