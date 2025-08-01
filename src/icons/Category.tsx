const Category = (props: { fill?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      stroke={props.fill ?? "#9F9F9F"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M3.75 7.5h1.5q2.25 0 2.25-2.25v-1.5q0-2.25-2.25-2.25h-1.5Q1.5 1.5 1.5 3.75v1.5q0 2.25 2.25 2.25M12.75 7.5h1.5q2.25 0 2.25-2.25v-1.5q0-2.25-2.25-2.25h-1.5q-2.25 0-2.25 2.25v1.5q0 2.25 2.25 2.25M12.75 16.5h1.5q2.25 0 2.25-2.25v-1.5q0-2.25-2.25-2.25h-1.5q-2.25 0-2.25 2.25v1.5q0 2.25 2.25 2.25M3.75 16.5h1.5q2.25 0 2.25-2.25v-1.5q0-2.25-2.25-2.25h-1.5q-2.25 0-2.25 2.25v1.5q0 2.25 2.25 2.25"
    ></path>
  </svg>
);

export default Category;
