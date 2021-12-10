import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBug = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M11.802 15.211c2.815-3.172 6.415-5.25 10.115-5.992v-4.61a2.589 2.589 0 0 1 5.178 0v4.467a13.516 13.516 0 0 1 8.152 4.465l3.66-2.113a2.589 2.589 0 0 1 2.588 4.485l-3.598 2.077c1.41 3.7 1.486 8.088.074 12.33L11.802 15.21Zm4.01 28.178 8.462-14.657 11.192 6.462c-4.603 7.218-12.824 10.538-19.655 8.195ZM11.326 40.8c-5.444-4.744-6.68-13.524-2.73-21.12l11.192 6.463L11.327 40.8Z"
      fill="#FA7240"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgBug;
