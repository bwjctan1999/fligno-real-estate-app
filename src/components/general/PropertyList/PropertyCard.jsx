import IconArea from "../../../assets/icons/IconArea";
import IconBed from "../../../assets/icons/IconBed";
import IconBathroom from "../../../assets/icons/IconBathroom";
import ImageNotFound from "../../../assets/imgs/ImageNotFound.png";
import { useState } from "react";

export default function PropertyCard({
  title = "No Title",
  location = "No location",
  area = 0,
  bednum = 0,
  bathnum = 0,
  price = 0,
  img,
  onClick,
  type,
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className=" relative rounded-md shadow-lg hover:cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`${
          type === 1 ? "bg-BGSecondary" : "bg-BtnPrimary-start"
        } absolute mt-2 ml-2 rounded-full p-1 px-4 shadow`}
      >
        <p
          className={`${
            type === 1 ? "text-TextPrimary" : "text-TextOnDark"
          } text-sm font-medium`}
        >
          {type === 1 ? "For Rent" : "For Sale"}
        </p>
      </div>
      <img
        className="aspect-video rounded-t-lg object-cover"
        src={img ? img : ImageNotFound}
        onError={(e) => {
          if (!imageError) {
            setImageError(true);
            e.target.src = ImageNotFound;
          }
        }}
      />
      <div className="flex flex-col gap-3 p-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <h2 className="text-sm font-light underline">{location}</h2>
        <div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <IconArea />
              <p>
                {area}
                <span> sq.ft</span>
              </p>
            </div>

            <div className="h-6 w-px bg-LineSecondary"></div>

            <div className="flex gap-2">
              <IconBed />
              <p>{bednum}</p>
            </div>

            <div className="h-6 w-px bg-LineSecondary"></div>

            <div className="flex gap-2">
              <IconBathroom />
              <p>{bathnum}</p>
            </div>
          </div>
          <div className="mt-1 h-px w-full bg-LineSecondary"></div>
        </div>
        <h3 className="text-xl font-medium">
          Price: ₱<span>{price.toLocaleString()}</span>
        </h3>
      </div>
    </div>
  );
}
