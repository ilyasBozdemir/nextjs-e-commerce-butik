import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

function CategoryProductPage() {
  const router = useRouter();
  const { slug, productSlug } = router.query;
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <>
        {slug}-{productSlug}

test link
        <>
          <Link
            href="/p/[slug]/[productSlug]"
            as={`/p/${'categorySlug'}/${'productSlug'}`}
            legacyBehavior
          >
            <a>{'name'}</a>
          </Link>
        </>
      </>
    </>
  );
}

export default CategoryProductPage;