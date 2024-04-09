import { Link } from "lucide-react";
import { unique } from "next/dist/build/utils";
import React from "react";
import { buttonVariants } from "../ui/button";

const Card = ({
  id,
  title,
  price,
  image,
}: {
  id: string;
  title: string;
  price: number;
  image: string;
}) => {
  return (
    <div
      key={id}
      className="p-4 border w-48 rounded-xl flex flex-col text-neutral-800 transition-all duration-150 hover:bg-gray-100 hover:scale-105 cursor-pointer "
    >
      <img src={image} alt={title} className="w-full rounded-lg" />
      <h6 className="font-bold py-4 h-2/4">{title}</h6>
      <div className="flex justify-between items-center w-full self-end">
        <p className="font-bold text-xl text-green-600">$ {price}</p>
        <a
          href={""}
          className={buttonVariants({
            variant: "outline",
            className:
              "w-20 h-8 border-1  border-green-700 text-green-700 hover:bg-green-800 hover:text-green-200 ",
          })}
        >
          Add item
        </a>
      </div>
    </div>
  );
};

export default Card;
