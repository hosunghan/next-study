import dayjs from "dayjs";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  timestamp: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      timestamp: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    },
  };
};

const OnDemandRevalidationPage: FC<Props> = (props) => {
  const { timestamp } = props;
  const router = useRouter();
  const revalidate = async () => {
    const res = await fetch("/api/revalidate");
    const data = await res.json();
    console.log(data);
    if (data.revalidated) {
      alert("Revalidated");
      router.reload();
    } else {
      alert("Failed to revalidate");
    }
  };
  return (
    <main>
      <h1 className="text-2xl font-bold">{timestamp}</h1>
      <button onClick={revalidate}>Revalidate</button>
    </main>
  );
};

export default OnDemandRevalidationPage;
