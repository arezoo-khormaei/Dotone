const Request = (props: { fill?: string; width?: number; height?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? "18"}
    height={props.height ?? "18"}
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      stroke={props.fill ?? "#9F9F9F"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M1.5 6.375c0-2.625 1.5-3.75 3.75-3.75h7.5c2.25 0 3.75 1.125 3.75 3.75v5.25c0 2.625-1.5 3.75-3.75 3.75h-7.5"
    ></path>
    <path
      stroke={props.fill ?? "#9F9F9F"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="m12.75 6.75-2.347 1.875c-.773.615-2.04.615-2.813 0L5.25 6.75M1.5 12.375H6M1.5 9.375h2.25"
    ></path>
  </svg>
);

export default Request;
