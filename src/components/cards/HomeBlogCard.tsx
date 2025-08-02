import { useNavigate } from "react-router-dom";
import Calendar from "../../icons/Calendar";
import type { IHomeBlogCardProps } from "../../types/generalTypes";

export default function HomeBlogCard(props: IHomeBlogCardProps) {
  const {
    theme,
    size,
    tags,
    title,
    description,
    date,
    image,
    linkTo,
    showMore = false,
  } = props;
  const navigate = useNavigate();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-gray-200" : "bg-gray-100 text-black"
      }
      ${showMore ? "pt-16 pb-10 px-6" : "p-4"}
     rounded-3xl grid h-[260px] relative overflow-hidden ${
       size === "lg" ? "grid-cols-7" : "grid-cols-3"
     }`}
    >
      <div className={`${size === "lg" ? "col-span-4" : "col-span-2"}`}>
        {tags && (
          <div className="flex justify-start items-center gap-3 mb-6 relative z-20">
            {tags?.map((tag) => (
              <div
                key={tag}
                className="bg-white text-black rounded-[10px] text-center min-w-[50px] h-[26px] text-xs font-extralight px-4 py-3 flex items-center justify-center"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        <h4
          className={`${theme !== "dark" ? "text-black" : "text-white"}
          ${showMore && "mr-6"}
           lg:text-lg text-sm mb-3 font-semibold whitespace-pre`}
        >
          {title}
        </h4>
        {size === "lg" && (
          <p
            className={`${
              theme !== "dark" ? "text-black" : "text-white"
            } lg:text-[15px] text-xs font-extralight leading-6 text-justify`}
          >
            {description}
          </p>
        )}
      </div>

      {!showMore ? (
        <div
          className={`${
            size === "lg" ? "col-span-3" : "col-span-1"
          } flex flex-col justify-between items-end z-10`}
        >
          {date && (
            <div className="flex items-center justify-between gap-2">
              <Calendar fill={theme === "dark" ? "white" : "black"} />
              <p className="m-0 text-xs font-light leading-none">{date}</p>
            </div>
          )}
          <button
            onClick={() => linkTo && navigate(linkTo)}
            className="mt-auto ml-4 mb-4"
          >
            <img src="/icons/transitionButtonLight-icon.svg" />
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-baseline w-fit mr-auto">
          <button onClick={() => linkTo && navigate(linkTo)} className="">
            <img
              src="/icons/transitionButtonLight-icon.svg"
              className="w-16 h-16"
            />
          </button>
        </div>
      )}

      {/* background image */}
      {!showMore ? (
        <div
          className={`absolute z-0 rounded-2xl
                 ${
                   size === "lg"
                     ? "left-5 bottom-1/2 translate-y-1/2 lg:w-[320px] w-[200px] lg:h-[calc(100%-32px)] h-[calc(100%-50px)] lg:[mask-image:linear-gradient(to_right,black_40%,transparent_80%)] [mask-image:linear-gradient(to_right,black_20%,transparent_80%)]"
                     : "bottom-5 left-1/2 -translate-x-1/2 lg:w-[calc(100%-32px)] w-[calc(100%-42px)] lg:h-[150px] h-[120px] [mask-image:linear-gradient(to_bottom,transparent_10%,black_80%)]"
                 }`}
        >
          <img
            src={
              typeof image === "string" && image?.length > 0
                ? image
                : "/test-background1.jpeg"
            }
            alt="Background"
            className="h-full w-full object-cover object-left"
          />
        </div>
      ) : (
        <div className="flex w-full col-span-3 mt-6">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className={`${index !== 4 ? "-ml-[95px]" : ""} group`}
                style={{ zIndex: 4 - index }}
              >
                <img
                  src={`/test-background${index + 1}.jpeg`}
                  className="h-[80px] w-[180px] rounded-lg object-cover shadow-gray-300 shadow-xl
                    [mask-image:linear-gradient(to_right,black_5%,transparent_70%)]"
                  alt={`Background ${index + 1}`}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
