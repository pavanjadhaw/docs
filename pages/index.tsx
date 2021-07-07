import fs from "fs";
import * as matter from "gray-matter";
import { GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import React from "react";
import Callout from "./components/Callout";
import Code from "./components/Code";
import Page from "./components/layout/Page";

interface Props {
  metadata?: { [key: string]: any };
  mdxSource?: MDXRemoteSerializeResult;
}

export default function index({ mdxSource, metadata = {} }: Props) {
  return (
    <Page title="Docs">
      <h1 className="mt-12">{metadata.title}</h1>
      {mdxSource ? (
        <div className="main-content">
          <MDXRemote
            {...mdxSource}
            components={{ Note: Callout, code: Code }}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <section className="mt-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="">Latest Updates</h2>
        </div>
        <ul className="bg-gray-50 rounded-3xl p-2 sm:p-5 xl:p-6 list-none space-y-0 m-0">
          <li>
            <article>
              <a className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-white text-gray-600">
                <h3 className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0">
                  MagicBell Ruby v2.1.0
                </h3>
                <time
                  dateTime="2021-07-07T19:00:00.000Z"
                  className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
                >
                  <svg
                    viewBox="0 0 12 12"
                    className="w-3 h-3 mr-6 overflow-visible text-purple-600"
                  >
                    <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                    <circle
                      cx="6"
                      cy="6"
                      r="11"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></circle>
                    <path
                      d="M 6 18 V 500"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="text-gray-200"
                    ></path>
                  </svg>
                  Jun 17, 2021
                </time>
                <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0 text-gray-600">
                  Over the last few weeks, we've been having a ton of fun
                  dumping new and exciting features into Tailwind.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article>
              <a className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-white text-gray-600">
                <h3 className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0">
                  Mobile push notifications
                </h3>
                <time
                  dateTime="2021-03-15T16:30:00.000Z"
                  className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
                >
                  <svg
                    viewBox="0 0 12 12"
                    className="w-3 h-3 mr-6 overflow-visible text-gray-300"
                  >
                    <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                    <path
                      d="M 6 -6 V -30"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="text-gray-200"
                    ></path>
                    <path
                      d="M 6 18 V 500"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="text-gray-200"
                    ></path>
                  </svg>
                  Mar 15, 2021
                </time>
                <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0 text-gray-600">
                  One of the hardest constraints we've had to deal with as we've
                  improved Tailwind CSS over the years is the generated file
                  size in development. With enough customizations to your config
                  file, the generated CSS can reach 10mb or more, and there's
                  only so much CSS that build tools and even the browser itself
                  will comfortably tolerate.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article>
              <a className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-white text-gray-600">
                <h3 className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0">
                  Compose notification UI
                </h3>
                <time
                  dateTime="2020-11-18T17:45:00.000Z"
                  className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
                >
                  <svg
                    viewBox="0 0 12 12"
                    className="w-3 h-3 mr-6 overflow-visible text-gray-300"
                  >
                    <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                    <path
                      d="M 6 -6 V -30"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="text-gray-200"
                    ></path>
                  </svg>
                  Nov 18, 2020
                </time>
                <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
                  Today we're finally releasing Tailwind CSS v2.0, including an
                  all-new color palette, dark mode support, and tons more!
                </p>
              </a>
            </article>
          </li>
        </ul>
      </section>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const docsDirectory = path.join(process.cwd(), "docs");
  const filePath = path.join(docsDirectory, "index.mdx");
  const fileContents = fs.readFileSync(filePath, "utf8");

  // @ts-ignore
  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content);
  return { props: { mdxSource, metadata: data } };
};
