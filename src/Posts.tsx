import { useQueryClient } from "@tanstack/react-query";

export default function Posts() {
  const queryClient = useQueryClient();
  console.log(queryClient.getQueryData(["posts"]));
  return (
    <div style={{ background: "red" }}>
      {queryClient.getQueryData(["posts"]).map((d) => (
        <div>{d.title}</div>
      ))}
    </div>
  );
}
