const CheckCircle = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : "24"}
      height={props.size ? props.size : "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color ? props.color : "currentColor"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-check-circle"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
};

export default CheckCircle;
