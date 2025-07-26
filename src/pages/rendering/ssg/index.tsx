import { FC } from "react";
import { GetStaticProps } from "next";
import dayjs from "dayjs";

interface Props {
  title: string;
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      title: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    },
  };
};

const SsgPage: FC<Props> = (props) => {
  return (
    <main>
      {props.title}
      <p>{dayjs().format("YYYY-MM-DD HH:mm:ss")}</p>
    </main>
  );
};

export default SsgPage;
