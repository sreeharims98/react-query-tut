import React, { useState } from "react";
import { createPost } from "./api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const CreatePost = () => {
  const queryClient = useQueryClient();

  const { mutate, error, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      setData({ title: "", author: "" });
      queryClient.invalidateQueries();
    },
  });

  const [data, setData] = useState({ title: "", author: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={data.author}
          onChange={(e) => setData({ ...data, author: e.target.value })}
        />
        <button type="submit" disabled={isPending}>
          Create Post
        </button>
      </form>
      <h4 style={{ color: "red" }}>{error?.message}</h4>
    </div>
  );
};
