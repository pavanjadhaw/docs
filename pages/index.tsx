import { GetStaticProps } from "next";
import React from "react";

export default function index() {
  return <div></div>;
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
