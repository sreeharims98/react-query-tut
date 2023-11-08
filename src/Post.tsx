import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostProps } from "./types";
import { deletePost } from "./api";

export const Post = ({ post }: { post: PostProps }) => {
  const queryClient = useQueryClient();

  const { mutate, error, isPending } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const handleDelete = (id: number) => {
    mutate(id);
  };

  return (
    <li>
      <h2 style={{ display: "inline" }}>{`${post.title} - ${post.author}`}</h2>
      <button onClick={() => handleDelete(post.id)} disabled={isPending}>
        Delete
      </button>
      <h4 style={{ color: "red" }}>{error?.message}</h4>
    </li>
  );
};
