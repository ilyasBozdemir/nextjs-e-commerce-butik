import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
function ProductFilterPage() {
  const router = useRouter();
  const { slug, productDetail } = router.query;
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <>
        test link
        <>
          {slug}-{productDetail}
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
