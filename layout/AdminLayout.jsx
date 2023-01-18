import Head from "next/head";
import React from "react";

function AdminLayout({ children }) {
  return (
    <>
      <Head>
        <title>My Admin App</title>
      </Head>
      <>{children}</>
    </>
  );
}

export default AdminLayout;
