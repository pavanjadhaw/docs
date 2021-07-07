import React from "react";

export default function Footer() {
  return (
    <footer className="w-full ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center pt-8 pb-24 space-x-12">
        <div className="mb-8 ml-12 md:pr-24 md:ml-0">
          <span className="text-2xl font-bold">MagicBell</span>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/company/magicbell-io/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.8205 1.50098H3.29437C2.33672 1.50098 1.5 2.19004 1.5 3.13644V20.7014C1.5 21.653 2.33672 22.501 3.29437 22.501H20.8153C21.7781 22.501 22.5 21.6474 22.5 20.7014V3.13644C22.5056 2.19004 21.7781 1.50098 20.8205 1.50098ZM8.00953 19.0055H5.00109V9.6516H8.00953V19.0055ZM6.60937 8.22941H6.58781C5.625 8.22941 5.00156 7.51269 5.00156 6.61551C5.00156 5.70191 5.6414 5.00207 6.62578 5.00207C7.61015 5.00207 8.2125 5.69676 8.23406 6.61551C8.23359 7.51269 7.61015 8.22941 6.60937 8.22941ZM19.0045 19.0055H15.9961V13.891C15.9961 12.6657 15.5583 11.8285 14.4698 11.8285C13.6383 11.8285 13.1461 12.391 12.9272 12.9389C12.8451 13.1358 12.8231 13.4039 12.8231 13.6777V19.0055H9.81468V9.6516H12.8231V10.9533C13.2609 10.3299 13.9448 9.43269 15.5362 9.43269C17.5111 9.43269 19.005 10.7344 19.005 13.5408L19.0045 19.0055Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a href="https://twitter.com/magicbell_io">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M24 4.55705C23.117 4.94905 22.168 5.21305 21.172 5.33205C22.189 4.72305 22.97 3.75805 23.337 2.60805C22.386 3.17205 21.332 3.58205 20.21 3.80305C19.313 2.84605 18.032 2.24805 16.616 2.24805C13.437 2.24805 11.101 5.21405 11.819 8.29305C7.728 8.08805 4.1 6.12805 1.671 3.14905C0.381 5.36205 1.002 8.25705 3.194 9.72305C2.388 9.69705 1.628 9.47605 0.965 9.10705C0.911 11.388 2.546 13.522 4.914 13.997C4.221 14.185 3.462 14.229 2.69 14.081C3.316 16.037 5.134 17.46 7.29 17.5C5.22 19.123 2.612 19.848 0 19.54C2.179 20.937 4.768 21.752 7.548 21.752C16.69 21.752 21.855 14.031 21.543 7.10605C22.505 6.41105 23.34 5.54405 24 4.55705Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCqz_KjolBVyaxHnxEeO1RCQ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <title>Stockholm-icons / Media / Youtube</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="Stockholm-icons-/-Media-/-Youtube"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                  <path
                    d="M4.22266882,4 L19.8367728,4.00001353 C21.3873185,4.00001353 22.6823897,5.1816009 22.8241881,6.72564925 C22.9414021,8.00199653 23.0000091,9.40113909 23.0000091,10.9230769 C23.0000091,12.7049599 22.9196724,14.4870542 22.758999,16.26936 L22.7589943,16.2693595 C22.6196053,17.8155637 21.3235899,19 19.7711155,19 L4.22267091,19.0000022 C2.6743525,19.0000022 1.38037032,17.8217109 1.23577882,16.2801587 C1.07859294,14.6043323 1,13.0109461 1,11.5 C1,9.98905359 1.07859298,8.39566699 1.23577893,6.7198402 L1.23578022,6.71984032 C1.38037157,5.17828994 2.67435224,4 4.22266882,4 Z"
                    id="Combined-Shape"
                    fill="white"
                  ></path>
                  <path
                    d="M11.1821576,14.8052934 L15.5856084,11.7952868 C15.8135802,11.6394552 15.8720614,11.3283211 15.7162299,11.1003494 C15.6814583,11.0494808 15.6375838,11.0054775 15.5868174,10.970557 L11.1833666,7.94156929 C10.9558527,7.78507001 10.6445485,7.84263875 10.4880492,8.07015268 C10.4307018,8.15352258 10.3999996,8.25233045 10.3999996,8.35351969 L10.3999996,14.392514 C10.3999996,14.6686564 10.6238572,14.892514 10.8999996,14.892514 C11.000689,14.892514 11.0990326,14.8621141 11.1821576,14.8052934 Z"
                    id="Path-10"
                    fill="#532f70"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="mb-8">
          <h6 className="uppercase mb-4 text-sm">Learn</h6>
          <ul>
            <li className="mb-3">
              <a href="https://magicbell.com/docs/api-reference">
                API Documentation
              </a>
            </li>
            <li className="mb-3">
              <a href="https://magicbell.com/docs">Reference Guides</a>
            </li>
            <li className="mb-3">
              <a href="https://community.magicbell.io/">
                Developer Community Forum
              </a>
            </li>
            <li className="mb-3">
              <a href="https://magicbell.com/blog/building-a-user-notification-system">
                Building a Notification System
              </a>
            </li>
            <li className="mb-3">
              <a href="https://magicbell.com/blog/notification-system-design">
                Notification System Design
              </a>
            </li>
            <li className="mb-3">
              <a href="https://magicbell.com/blog/slack-notifications-flowchart">
                Slack Notification Chart Explained
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h6 className="uppercase mb-4 text-sm">Product</h6>
          <ul>
            <li className="mb-3">
              <a href="https://github.com/magicbell-io/magicbell-ruby">
                Ruby Gem
              </a>
            </li>
            <li className="mb-3">
              <a href="https://www.npmjs.com/package/@magicbell/core">
                Node.js Package
              </a>
            </li>
            <li className="mb-3">
              <a href="https://www.npmjs.com/package/@magicbell/magicbell-react">
                React SDK
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h6 className="uppercase mb-4 text-sm">Legal</h6>
          <ul>
            <li className="mb-3">
              <a href="/terms">Terms of Service</a>
            </li>
            <li className="mb-3">
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li className="mb-3">
              <a href="/cookie-policy">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
