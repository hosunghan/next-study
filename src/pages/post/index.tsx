import { fetchPost } from "@/api/post";
import PostMain from "@/domains/next-functions/post";
import dayjs from "dayjs";
import { GetStaticProps } from "next";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<typeof PostMain>;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const post = await fetchPost("1");
  return {
    props: {
      post,
      date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    },
  };
};
const PostMainPage: FC<Props> = (props) => {
  const { post } = props;
  console.log(post);

  return (
    <main>
      <PostMain {...props} />
    </main>
  ); // 또는 원하는 다른 텍스트
};

export default PostMainPage;
