import { Post } from "@/api/post";
import { CommentResponse, Comment } from "@/api/comment";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  post: Post;
}

const PostDetail: FC<Props> = ({ post }) => {
  const router = useRouter();

  const { data: comment_list, isLoading } = useQuery(
    getCommentListQueryOptions(post.id)
  );

  console.log(comment_list);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <h1>{post.body}</h1>
      <ol className="mt-[20px]">
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          comment_list?.map((comment) => (
            <li key={comment.id}>
              <h2>{comment.name}</h2>
              <p>{comment.body}</p>
            </li>
          ))
        )}
      </ol>
    </main>
  );
};

export { PostDetail };

function getCommentListQueryOptions(
  post_id: number
): UseQueryOptions<
  CommentResponse,
  Error,
  CommentResponse["comments"],
  [string, typeof post_id]
> {
  return {
    queryKey: ["comment-list", post_id],
    queryFn: async () => {
      const result = await fetch(`/api/post/${post_id}/comment`);
      const data: CommentResponse = await result.json();
      return data;
    },
    select: (data) => data.comments,
  };
}
