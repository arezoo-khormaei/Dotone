import type { IDeviderProps } from "../types/generalTypes";

export default function Divider(props: IDeviderProps) {
  const { title, className } = props;
  return (
    <div className={`${className} w-full`}>
      <div className="flex justify-start items-center gap-2 relative">
        <p className="uppercase text-[8px] font-medium mb-0 absolute -top-1 right-0">
          One group
        </p>

        <div className="flex justify-start items-center w-40">
          <div className="w-full h-[1px] bg-gray-400" />
          <div className="w-1 h-1 bg-gray-400 rotate-45" />
        </div>

        <p className="text-gray-400 md:text-lg text-sm text-nowrap font-extralight">
          {title}
        </p>
      </div>
    </div>
  );
}
