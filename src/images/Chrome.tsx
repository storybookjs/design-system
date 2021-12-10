import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgChrome = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 600"
    xmlSpace="preserve"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      style={{
        fill: '#db4437',
      }}
      d="m191.3 362.5 108.5-187.2 244.2-.6c-2-3.8-4-7.7-6.2-11.5C462.2 31.8 294.2-13.6 162.6 62c-39 22.4-70.4 52.9-93.3 88.2l122 212.3z"
    />
    <path
      style={{
        fill: '#0f9d58',
      }}
      d="m408.6 362.5-216.3-.4L69.7 150.9c-2.3 3.6-4.6 7.3-6.8 11.1-76.1 131.3-31.4 299.4 99.9 375.5 38.9 22.6 81 34.5 123.1 36.7l122.7-211.7z"
    />
    <path
      style={{
        fill: '#ffcd40',
      }}
      d="m299.5 174.3 108.2 187.3-121.2 212c4.3.2 8.7.3 13 .3 151.8 0 274.8-123 274.8-274.8 0-45-10.8-87.4-30-124.9H299.5v.1z"
    />
    <radialGradient
      id="chrome_svg__a"
      cx={-257.826}
      cy={444.38}
      r={648.839}
      gradientTransform="matrix(1 0 0 -1 304 595)"
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        style={{
          stopColor: '#3e2723',
          stopOpacity: 0.2,
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: '#3e2723',
          stopOpacity: 0,
        }}
      />
    </radialGradient>
    <path
      style={{
        fill: 'url(#chrome_svg__a)',
      }}
      d="M300.5 175.2v65.4l244.8-65.4H300.5zM69.4 151.7l178.8 178.7-55.8 32.2-123-210.9zm218.1 422.9 65.4-244.2 55.8 32.2-121.2 212z"
    />
    <circle
      style={{
        fill: '#f1f1f1',
      }}
      cx={300.5}
      cy={300.1}
      r={124.9}
    />
    <circle
      style={{
        fill: '#4285f4',
      }}
      cx={300.5}
      cy={300.1}
      r={99.9}
    />
  </svg>
);

export default SvgChrome;
