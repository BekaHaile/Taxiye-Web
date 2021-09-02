import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import CMS from "../components/corporate/cms";
import Loading from "../components/loading/";
import store from "../redux/store";
import {
  changeCompanyName,
  changeFullName,
  changeEmail,
  validateAndChangePhone,
  changePhone
} from "../redux/actions/corporate/account";

export default function index() {
  const router = useRouter();
  const corporate_detail = useSelector(
    (state) => state["corporate"]["corporate_detail"]
  );
  const company_detail = useSelector(
    (state) => state["corporate"]["company_detail"]
  );
  useEffect(() => {
    if (!corporate_detail && !company_detail) {
      router.push("/signup/corporate");
    } else {
      store.dispatch(changeFullName(company_detail["contact_person"]));
      store.dispatch(changeEmail(company_detail["email"]));
      store.dispatch(changeCompanyName(company_detail["company_name"]));
      store.dispatch(validateAndChangePhone(company_detail["phone_no"]));
    }
  }, [corporate_detail]);
  if (!corporate_detail) return <Loading />;

  return (
    <>
      <CMS />
    </>
  );
}
