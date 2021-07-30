import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import CMS from '../components/corporate/cms';
import Loading from "../components/loading/";



export default function index() {
  const router = useRouter();
  const corporate_detail = useSelector(
    (state) => state["corporate"]["corporate_detail"]
  );
  useEffect(() => {
    if (!corporate_detail) {
      router.push("/signup/corporate");
    }
  }, [corporate_detail]);
  if (!corporate_detail)
  return <Loading/>;

  return (
    <>
      <CMS/>
    </>
  )
}
