import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto hover:shadow-xl transition-shadow">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <a
          href={`mailto:${email}`}
          className="text-blue-600 hover:underline text-sm"
        >
          {email}
        </a>
      </div>

      {/* Address */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-1">
          📍 Address
        </h4>
        <p className="text-sm text-gray-600">
          {address.suite}, {address.street}, <br />
          {address.city}, {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
