"use client";

import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";

export default function HomePage() {
  const [posts, setPosts] = useState<CardProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Posts</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            + Add Post
          </button>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Card key={index} title={post.title} content={post.content} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">No posts yet</h3>
            <p className="mt-2 text-gray-500">
              Click the "Add Post" button to create your first post!
            </p>
          </div>
        )}

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
}
