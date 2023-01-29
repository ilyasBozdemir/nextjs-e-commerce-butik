import React from "react";
import Head from "next/head";
import Link from "next/link";
function ProductFilterPage() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <>
        test link
        <>
          <>
            <Link
              href="/p/[slug]/[[productDetail]]"
              as={`/p/${"1"}/${"test-urun"}`}
              legacyBehavior
            >
              <a>{"name"}</a>
            </Link>
          </>
        </>
      </>
    </>
  );
}

export default ProductFilterPage;
