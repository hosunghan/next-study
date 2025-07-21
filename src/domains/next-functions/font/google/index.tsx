import React, { FC } from "react";
import { baskervville, noto_sans } from "@/styles/fonts";
import Head from "next/head";
import styles from "@/domains/next-functions/font/google/index.module.css";

type Props = {};

const GooogleMain: FC = (props: Props) => {
  return (
    <main>
      {/* <p style={{ fontSize: 50 }}>FONT : DEFALUT</p>
      <p>CLS TEST</p>
      <hr />
      <p className={noto_sans.className} style={{ fontSize: 50 }}>
        FONT : NOTO SANS
      </p>
      <p>CLS TEST</p>
      <hr /> */}
      <p className={baskervville.className} style={{ fontSize: 50 }}>
        FONT : NEXT
      </p>
      <p>CLS TEST</p>
      <hr />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baskervville&display=swap"
          rel="stylesheet"
        />
      </Head>
      <p className={styles.baskervville} style={{ fontSize: 50 }}>
        FONT : REMOTE
      </p>
      <p>CLS TEST</p>
    </main>
  );
};

export default GooogleMain;
