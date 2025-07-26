import Head from "next/head";
import { FC, useState, useEffect } from "react";
import { SomeComponent } from "./SomeComponent";

const HeadMain: FC = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("TITLE TEST");

  return (
    <main>
      {/* <Head>
        <title>{title}</title>
        <meta name="description" content="DESCRIPTION TEST" />
      </Head> */}
      <button onClick={() => setVisible(!visible)}>MOUNT SOME COMPONENT</button>
      {visible && <SomeComponent onMount={() => setTitle("MOUNTED TITLE")} />}
    </main>
  );
};

export { HeadMain };
