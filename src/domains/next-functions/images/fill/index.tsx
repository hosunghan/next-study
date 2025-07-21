import { FC } from "react";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import styls from "./index.module.css";
import Image from "next/image";

const FillMain: FC = () => {
  return (
    <main>
      <div className={styls.grid}>
        <div className="image-wrapper">
          <Image src={image1} alt="" fill />
        </div>
        <div className="image-wrapper">
          <Image
            src={image2}
            alt=""
            fill
            sizes="
          (max-width: 749px) 100vx,
          (min-width: 750px) 50vw"
          />
        </div>
      </div>
    </main>
  );
};

export { FillMain };
