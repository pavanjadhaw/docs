import Document, { Html, Main, NextScript } from "next/document";
import IntercomScripts from "./components/scripts/IntercomScripts";
import SegmentScripts from "./components/scripts/SegmentScripts";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Main />
          <NextScript />
          <SegmentScripts />
          <IntercomScripts />
        </body>
      </Html>
    );
  }
}
