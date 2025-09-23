import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="flex flex-col rounded-lg border bg-white text-gray-800 shadow-md transition-shadow hover:shadow-lg">
      <div className="flex-grow p-6">
        <h3 className="mb-2 text-xl font-semibold tracking-tight capitalize">
          {title}
        </h3>
        <p className="text-gray-600">{body}</p>
      </div>
      <div className="border-t p-4 text-right text-xs text-gray-400">
        User ID: {userId}
      </div>
    </div>
  );
};

export default PostCard;