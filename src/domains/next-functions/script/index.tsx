import { FC, useState } from "react";
import { SomeScript } from "./SomeScript";
import Link from "next/link";
import Script from "next/script";

declare global {
  interface Window {
    dayjs: () => {
      format: (format: string) => string;
    };
  }
}

const ScriptMain: FC = () => {
  const [visible, setVisible] = useState(false);

  const onLoad = () => {
    console.log("onLoad");
  };

  const onReady = () => {
    console.log("onReady", window.dayjs().format("YYYY-MM-DD"));
  };

  return (
    <main>
      {visible && <SomeScript />}
      <button onClick={() => setVisible(true)}>LOAD SCRIPT</button>
      <Link href={`/next-functions/script/some-route`}>Go to OtherPage</Link>

      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/dayjs@1.11.11/dayjs.min.js"
        strategy="afterInteractive"
        onLoad={onLoad}
        onReady={onReady}
      />
    </main>
  );
};

export { ScriptMain };
