const MinusIcon = ({ className, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={24}
      height={24}
    
      viewBox="0 0 128 128" // Updated viewBox to fit the path
      className={className}
      {...props}
    >
      <path
      d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z"
      fill="currentColor"
    />
    </svg>
  );
  
  export default MinusIcon;
  