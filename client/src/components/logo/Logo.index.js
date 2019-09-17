import React from "react";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 127 39"
      height={47}
      width={128}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fillRule="nonzero">
          <path
            fill="#3FE2A8"
            d="M29.378 31.27L31.511 33h-9.78c-6.197 0-11.268-5.07-11.268-11.268 0-.282 0-.564.04-.845a11.232 11.232 0 0010.384-10.383c.281-.04.563-.04.845-.04 6.197 0 11.268 5.07 11.268 11.268 0 3.139-1.328 6.197-3.662 8.29-.161.16-.282.402-.282.604.04.281.12.483.322.644z"
            transform="translate(-657 -73) translate(656 73) translate(94.9)"
          />
          <path
            fill="#00C0FF"
            d="M19.317 9.659C19.317 4.346 14.971 0 9.66 0 4.346 0 0 4.346 0 9.659c0 2.696 1.127 5.312 3.139 7.123.161.16.282.402.282.603 0 .242-.121.443-.322.604l-1.61 1.328h8.17c5.312 0 9.658-4.346 9.658-9.658z"
            transform="translate(-657 -73) translate(656 73) translate(94.9)"
          />
        </g>
        <text
          fill="#000"
          fontFamily="Avenir-Heavy, Avenir"
          fontSize="24"
          fontWeight="600"
          opacity="0.9"
          transform="translate(-657 -73) translate(656 73)"
        >
          <tspan x="0" y="37.6">
            Live Chat
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default Logo;
