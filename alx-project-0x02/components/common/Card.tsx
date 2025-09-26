import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="rounded-xl border bg-white text-gray-800 shadow-md">
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      </div>
      <div className="p-6 pt-0">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
