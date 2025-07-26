import { Post } from "@/api/post";
import { FC } from "react";

interface Props {
  post: Post;
}

const PostDetail: FC<Props> = ({ post }) => {
  return (
    <main>
      <h1>{post.title}</h1>
      <h1>{post.body}</h1>
    </main>
  );
};

export { PostDetail };
