import React, { FC } from "react";
import butterfly from "./image.jpg";
import Image from "next/image";

const LocalMain: FC = () => {
  console.log(butterfly);
  return (
    <main>
      <Image
        src={butterfly}
        alt="butterfly"
        width={300}
        placeholder="blur"
        quality={100}
        priority
      />
    </main>
  );
};

export default LocalMain;
