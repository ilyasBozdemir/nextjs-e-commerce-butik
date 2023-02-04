import React from "react";

function HeaderBottom() {
  return <></>;
}

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}

export async function getStaticPaths() {


  return {
    fallback: false,
  };
}

export default HeaderBottom;
