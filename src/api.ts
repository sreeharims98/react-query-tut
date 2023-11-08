import axios from "axios";
import { NewPostProps, PostProps } from "./types";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/",
});

export async function getPosts(): Promise<PostProps[]> {
  const { data } = await axiosClient.get("posts");
  return data;
}

export async function createPost(newPost: NewPostProps) {
  await axiosClient.post("posts", newPost);
}

export async function deletePost(id: number) {
  await axiosClient.delete(`posts/${id}`);
}
