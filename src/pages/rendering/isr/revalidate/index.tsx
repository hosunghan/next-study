import dayjs from "dayjs";
import { GetStaticProps } from "next";
import { FC } from "react";

interface Props {
  timestamp: string;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      timestamp: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    },
    revalidate: 10,
  };
};

const RevalidatePage: FC<Props> = (props) => {
  const { timestamp } = props;
  return (
    <main>
      <h1 className="text-2xl font-bold">{timestamp}</h1>
    </main>
  );
};

export default RevalidatePage;
