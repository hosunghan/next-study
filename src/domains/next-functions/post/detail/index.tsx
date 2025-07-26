import { Post } from "@/api/post";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  post: Post;
}

const PostDetail: FC<Props> = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <h1>{post.body}</h1>
    </main>
  );
};

export { PostDetail };
