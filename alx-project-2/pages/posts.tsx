"use client";

import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { useState } from "react";
import Button from "@/components/common/Button";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts: initialPosts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostProps[]>(initialPosts);

  const handleAddPost = (title: string, body: string) => {
    const newPost: PostProps = {
      userId: 999, // Placeholder user ID for new posts
      id: Date.now(), // Simple unique ID generation
      title,
      body,
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Latest Posts</h1>
          <Button
            onClick={() => setModalOpen(true)}
            className="bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600"
          >
            + Add Post
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts?.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
              id={post.id}
            />
          ))}
        </div>
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts: posts.slice(0, 20), // Fetch only the first 20 posts for better performance
    },
  };
}

export default Posts;