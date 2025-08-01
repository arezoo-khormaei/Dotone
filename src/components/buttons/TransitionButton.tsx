import { useNavigate } from "react-router-dom";
import type { ITransitionButtonProps } from "../../types/generalTypes";

export default function TransitionButton({
  label,
  linkTo,
}: ITransitionButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => linkTo && navigate(linkTo)}
      className="group relative w-full h-full px-4 sm:px-6 md:px-8 hover:px-4 py-1 sm:py-4 bg-black text-white hover:bg-gray-200 hover:text-black rounded-2xl overflow-hidden transition-all duration-700"
    >
      <span
        className="w-full flex items-center justify-center text-sm md:text-xl 
                      transition-[transform] duration-700 
                      group-hover:translate-x-[30px] sm:group-hover:translate-x-[40px] md:group-hover:translate-x-[50px]"
      >
        {label}
      </span>

      <img
        src="/icons/transitionButton-icon.svg"
        alt=""
        className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 
                   opacity-0 translate-x-6 sm:translate-x-8 md:translate-x-10 
                   group-hover:opacity-100 group-hover:translate-x-0 
                   transition-all duration-700 w-4 sm:w-5 md:w-auto"
      />
    </button>
  );
}
