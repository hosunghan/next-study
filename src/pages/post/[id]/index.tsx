import { fetchPost, fetchPostList, Post } from "@/api/post";
import { PostDetail } from "@/domains/next-functions/post/detail";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";

type Params = {
  id: string;
};

type Props = {
  post: Post;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const result = await fetchPostList();
  const sliced_post_list = result.slice(0, 3);
  const paths = sliced_post_list.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const id = context.params?.id;
  if (!id) {
    return {
      notFound: true,
    };
  }
  const post = await fetchPost(id);
  return {
    props: {
      post,
    },
  };
};

const PostDetailPage: FC<Props> = ({ post }) => {
  return (
    <main>
      <PostDetail post={post} />
    </main>
  );
};

export default PostDetailPage;
