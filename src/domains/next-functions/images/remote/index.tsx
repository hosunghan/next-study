import Image, { ImageLoaderProps } from "next/image";
import { FC } from "react";

const RemoteMain: FC = () => {
  return (
    <main>
      <Image
        src={"/img/image.jpg"}
        alt="butterfly"
        width={300} // 원하는 값으로 설정
        height={200} // 원하는 값으로 설정
        placeholder="blur"
        blurDataURL="https://lh3.googleusercontent.com/DNkLjRt828GnOy2XSilPhYaqW8lijSir6PlFNX2Tba01NoBzI4UEkjeZggUSS59xjfi7LJvgaFgJtoata-oU4fnp4Q=s1280-w1280-h800"
        priority
        // quality={100}
        // loader={ImageLoader}
      />
    </main>
  );
};

export { RemoteMain };

// function ImageLoader(params: ImageLoaderProps) {
//   const { src, width, quality } = params;
//   console.log(src, width, quality);

//   return `${src}?w=${width}&q=${quality}`;
// }
