import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAccessibility = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <circle fillOpacity={0.3} fill="#A849FF" cx={24} cy={24} r={24} />
      <path
        d="M23.917 7.99a3.596 3.596 0 0 1 3.61 3.595 3.596 3.596 0 0 1-3.61 3.595 3.596 3.596 0 0 1-3.609-3.595c0-1.926 1.611-3.595 3.61-3.595Zm-2.662 18.287c.258-1.027.278-3.33.342-4.614 0-.45-.258-.834-.644-.963l-7.927-2.375c-1.031-.32-1.611-1.412-1.29-2.375.323-.963 1.419-1.412 2.385-1.155 0 0 7.25 2.31 9.828 2.31 2.578 0 10.022-2.375 10.022-2.375.967-.256 2.062.321 2.32 1.284.258.963-.322 2.054-1.289 2.311L27.075 20.7c-.387.129-.709.514-.644.963.064 1.284.07 3.587.328 4.614.604 2.768 3.865 10.049 4.27 10.95.15.378.226.676.226.89a1.872 1.872 0 0 1-1.873 1.873c-.846 0-1.422-.593-1.793-1.331-.247-.492-1.46-2.972-3.64-7.44l-3.64 7.768-.062.102a1.871 1.871 0 0 1-3.474-.971c0-.323.082-.626.225-.89.402-.897 3.653-8.182 4.257-10.951Z"
        fill="#A470D5"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgAccessibility;
