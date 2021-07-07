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
      <h1 className="mt-12 mb-2">{metadata.title}</h1>
      <h3 className="mb-12 font-normal text-gray-500">{metadata.subtitle}</h3>
      {mdxSource ? (
        <article className="mdx-content">
          <MDXRemote
            {...mdxSource}
            components={{ Note: Callout, code: Code }}
          />
        </article>
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
                  This update allows you to have create instances of the
                  MagicBell client with different keys.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article>
              <a className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-white text-gray-600">
                <h3 className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0">
                  Multiple Mobile-Push apps per project
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
                  We've added support for multiple push apps per project. This
                  is useful if you use different app bundles for
                  test/canary/production. Please see the updated documentation
                  or write us if you have any questions.
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
                <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0 text-gray-600">
                  We rolled out a compose button in our dashboard that lets you
                  send notifications to your users. You can add multiple email
                  addresses or external IDs. We have had some requests for
                  sending notifications to a group or to all users, and if you'd
                  like to see that, please let us know - we are looking for some
                  feedback on this use case.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article>
              <a className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-white text-gray-600">
                <h3 className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0">
                  Postmark Integration
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
                  We've added support for delivering email notifications via
                  Postmark. If you'd like it setup, please contact us. We'll
                  roll out integrations to our dashboard in the coming months,
                  but we are happy to set them up for you in the meantime. . We
                  also support Mailgun, and Sendgrid.
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
