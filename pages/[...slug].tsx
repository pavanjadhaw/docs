import fs from "fs";
import * as matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import { flatten, reject } from "ramda";
import React from "react";
import sitemap from "../lib/sitemap";
import PageLayout from "./components/layout/PageLayout";
import Note from "./components/note";

interface Props {
  metadata?: { [key: string]: any };
  mdxSource?: MDXRemoteSerializeResult;
}

export default function Document({ mdxSource, metadata = {} }: Props) {
  const { title = "Docs" } = metadata;

  return (
    <PageLayout>
      <Head>
        <title>{title} | MagicBell</title>
      </Head>
      <h1 className="mt-12">{title}</h1>
      {mdxSource ? (
        <MDXRemote {...mdxSource} components={{ Note }} />
      ) : (
        <p>Loading...</p>
      )}
    </PageLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Load routes from the sitemap
  const [root, ...allRoutes] = flatten(
    reject((item) => item.to === undefined, sitemap)
  );

  return {
    paths: allRoutes.map((item) => item.to),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Read the file that contains the content for the route
  const { slug } = params!;

  // @ts-ignore
  const filename = slug?.join("/") + ".mdx";
  const docsDirectory = path.join(process.cwd(), "docs");
  const filePath = path.join(docsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");

  // @ts-ignore
  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content);
  return { props: { mdxSource, metadata: data } };
};
