const Profile = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
    className={props.className}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.12 8.153a1.4 1.4 0 0 0-.248 0A3.315 3.315 0 0 1 5.67 4.83 3.327 3.327 0 0 1 9 1.5a3.327 3.327 0 0 1 .12 6.653M5.37 10.92c-1.815 1.215-1.815 3.195 0 4.403 2.063 1.38 5.445 1.38 7.507 0 1.816-1.216 1.816-3.196 0-4.403-2.055-1.373-5.437-1.373-7.507 0"
    />
  </svg>
);

export default Profile;
