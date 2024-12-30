import React from "react";
import Layout from "../components/arrangement/Layout";
import Link from "next/link";
import style from "../style/Home.module.css";

const Profile = () => {
  return (
    <Layout>
      <div className={style.element}>
        <h1>Profile Page</h1>
        <p>ここにcontents/profile.mdを読み込む</p>
        <p>臨時リンク: <Link href="/">back to home</Link></p>
      </div>
    </Layout>
  )
};
  
export default Profile;