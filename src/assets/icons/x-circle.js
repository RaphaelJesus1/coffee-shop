const XCircle = (props) => {
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
      class="feather feather-x-circle"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
  );
};

export default XCircle;
