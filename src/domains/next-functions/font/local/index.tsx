import { gilroy } from "@/styles/fonts";
import React, { FC } from "react";

type Props = {};

const LocalMain: FC = (props: Props) => {
  return (
    <main>
      <p className={gilroy.className} style={{ fontSize: 50 }}>
        Gilroy
      </p>
      <p>CLS TEST</p>
    </main>
  );
};

export default LocalMain;
