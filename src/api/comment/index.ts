/**
 * @DIR /src/api/comment/index.ts
 */

import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "../types";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

async function fetchComments(post_id: string): Promise<Comment[]> {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}/comments`
  );
  const data: Comment[] = await result.json();

  return data;
}

interface ExtendNextApiRequest extends NextApiRequest {
  query: {
    id: string;
  };
}

interface CommentResponse {
  comments: Comment[];
}

export async function commentsApiHandler(
  req: ExtendNextApiRequest,
  res: NextApiResponse<CommentResponse | ErrorResponse>
) {
  console.log("LOG", req.query.id);

  if (req.method !== "GET") {
    return res.status(400).json({ error_message: "Method not allowed" });
  }

  const post_id = req.query.id;
  if (Number.isNaN(Number(post_id))) {
    return res.status(400).json({ error_message: "Invalid post id" });
  }

  try {
    const result = await fetchComments(post_id);
    return res.status(200).json({ comments: result });
  } catch (error) {
    return res.status(500).json({ error_message: "Internal server error" });
  }
}
