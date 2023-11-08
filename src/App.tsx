import { useQuery } from "@tanstack/react-query";

import { getPosts } from "./api";
import { CreatePost } from "./createPost";
import { Post } from "./Post";

export const App = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <CreatePost />
      <ul>
        {data.map((d) => (
          <Post post={d} key={d.id} />
        ))}
      </ul>
    </div>
  );
};
