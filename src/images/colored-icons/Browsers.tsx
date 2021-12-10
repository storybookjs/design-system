import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBrowsers = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <radialGradient
        id="browsers_svg__a"
        cx="85.913%"
        cy="-12.934%"
        r="128.347%"
        fx="85.913%"
        fy="-12.934%"
        gradientTransform="matrix(.81314 0 0 1 .16 0)"
      >
        <stop offset="12.9%" stopColor="#FFBD4F" />
        <stop offset="18.6%" stopColor="#FFAC31" />
        <stop offset="24.7%" stopColor="#FF9D17" />
        <stop offset="28.3%" stopColor="#FF980E" />
        <stop offset="40.3%" stopColor="#FF563B" />
        <stop offset="46.7%" stopColor="#FF3750" />
        <stop offset="71%" stopColor="#F5156C" />
        <stop offset="78.2%" stopColor="#EB0878" />
        <stop offset="86%" stopColor="#E50080" />
      </radialGradient>
      <radialGradient
        id="browsers_svg__b"
        cx="47.778%"
        cy="39.538%"
        r="128.347%"
        fx="47.778%"
        fy="39.538%"
        gradientTransform="matrix(.81314 0 0 1 .09 0)"
      >
        <stop offset="30%" stopColor="#960E18" />
        <stop offset="35.1%" stopColor="#B11927" stopOpacity={0.74} />
        <stop offset="43.5%" stopColor="#DB293D" stopOpacity={0.343} />
        <stop offset="49.7%" stopColor="#F5334B" stopOpacity={0.094} />
        <stop offset="53%" stopColor="#FF3750" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="browsers_svg__c"
        cx="49.996%"
        cy="-29.998%"
        r="314.953%"
        fx="49.996%"
        fy="-29.998%"
        gradientTransform="matrix(1 0 0 .58897 0 -.123)"
      >
        <stop offset="13.2%" stopColor="#FFF44F" />
        <stop offset="25.2%" stopColor="#FFDC3E" />
        <stop offset="50.6%" stopColor="#FF9D12" />
        <stop offset="52.6%" stopColor="#FF980E" />
      </radialGradient>
      <radialGradient
        id="browsers_svg__d"
        cx="19.455%"
        cy="110.087%"
        r="111.743%"
        fx="19.455%"
        fy="110.087%"
        gradientTransform="matrix(1 0 0 .91227 0 .097)"
      >
        <stop offset="35.3%" stopColor="#3A8EE6" />
        <stop offset="47.2%" stopColor="#5C79F0" />
        <stop offset="66.9%" stopColor="#9059FF" />
        <stop offset="100%" stopColor="#C139E6" />
      </radialGradient>
      <radialGradient
        id="browsers_svg__e"
        cx="58.238%"
        cy="36.619%"
        r="59.246%"
        fx="58.238%"
        fy="36.619%"
        gradientTransform="scale(1 .91227) rotate(-13.592 .73 .384)"
      >
        <stop offset="20.6%" stopColor="#9059FF" stopOpacity={0} />
        <stop offset="27.8%" stopColor="#8C4FF3" stopOpacity={0.064} />
        <stop offset="74.7%" stopColor="#7716A8" stopOpacity={0.45} />
        <stop offset="97.5%" stopColor="#6E008B" stopOpacity={0.6} />
      </radialGradient>
      <radialGradient
        id="browsers_svg__f"
        cx="208.116%"
        cy="-103.936%"
        r="293.24%"
        fx="208.116%"
        fy="-103.936%"
        gradientTransform="matrix(1 0 0 .9963 0 -.004)"
      >
        <stop offset="0%" stopColor="#FFE226" />
        <stop offset="12.1%" stopColor="#FFDB27" />
        <stop offset="29.5%" stopColor="#FFC82A" />
        <stop offset="50.2%" stopColor="#FFA930" />
        <stop offset="73.2%" stopColor="#FF7E37" />
        <stop offset="79.2%" stopColor="#FF7139" />
      </radialGradient>
      <radialGradient
        id="browsers_svg__g"
        cx="96.221%"
        cy="0%"
        r="153.29%"
        fx="96.221%"
        fy="0%"
        gradientTransform="matrix(.83955 0 0 1 .154 0)"
      >
        <stop offset="0%" stopColor="#FFF44F" />
        <stop offset="45.6%" stopColor="#FF980E" />
        <stop offset="62.2%" stopColor="#FF5634" />
        <stop offset="71.6%" stopColor="#FF3647" />
        <stop offset="100%" stopColor="#E31587" />
      </radialGradient>
      <radialGradient
        id="browsers_svg__h"
        cx="6.322%"
        cy="-10.342%"
        r="348.744%"
        fx="6.322%"
        fy="-10.342%"
        gradientTransform="scale(1 .47353) rotate(83.976 .127 -.16)"
      >
        <stop offset="0%" stopColor="#FFF44F" />
        <stop offset="6%" stopColor="#FFE847" />
        <stop offset="16.8%" stopColor="#FFC830" />
        <stop offset="30.4%" stopColor="#FF980E" />
        <stop offset="35.6%" stopColor="#FF8B16" />
        <stop offset="45.5%" stopColor="#FF672A" />
        <stop offset="57%" stopColor="#FF3647" />
        <stop offset="73.7%" stopColor="#E31587" />
      </radialGradient>
      <radialGradient
        id="browsers_svg__i"
        cx="15.372%"
        cy="-42.681%"
        r="238.693%"
        fx="15.372%"
        fy="-42.681%"
        gradientTransform="matrix(.9813 0 0 1 .003 0)"
      >
        <stop offset="13.7%" stopColor="#FFF44F" />
        <stop offset="48%" stopColor="#FF980E" />
        <stop offset="59.2%" stopColor="#FF5634" />
        <stop offset="65.5%" stopColor="#FF3647" />
        <stop offset="90.4%" stopColor="#E31587" />
      </radialGradient>
      <radialGradient
        id="browsers_svg__j"
        cx="155.387%"
        cy="-44.592%"
        r="312.831%"
        fx="155.387%"
        fy="-44.592%"
        gradientTransform="matrix(.89553 0 0 1 .162 0)"
      >
        <stop offset="9.4%" stopColor="#FFF44F" />
        <stop offset="23.1%" stopColor="#FFE141" />
        <stop offset="50.9%" stopColor="#FFAF1E" />
        <stop offset="62.6%" stopColor="#FF980E" />
      </radialGradient>
    </defs>
    <g fill="none" fillRule="nonzero">
      <path
        fill="#1EBBEE"
        d="M46.493 12.897a8.531 8.531 0 0 0-1.097-4.194c2.978-6.658-3.191-5.683-3.535-5.616a15.824 15.824 0 0 0-3.631 1.172 8.936 8.936 0 0 0-.497-.014c-4.162 0-7.646 2.868-8.538 6.712 2.194-2.431 3.729-3.412 4.649-3.805-.147.13-.29.26-.432.393l-.139.132c-.093.089-.186.177-.277.267l-.16.16-.24.244-.165.173a20.772 20.772 0 0 0-.748.831 25.034 25.034 0 0 0-.68.828l-.15.194-.167.217-.115.155a26.828 26.828 0 0 0-1.168 1.71l-.012.018c-.071.113-.14.225-.207.335l-.007.012c-.18.297-.347.583-.498.852-.789 1.412-1.173 2.4-1.19 2.458-2.49 8.797 5.285 5.082 6.37 4.528 1.168.57 2.483.89 3.874.89 3.809 0 7.05-2.401 8.256-5.755h-4.603c-.68 1.137-1.992 1.907-3.498 1.907-2.207 0-3.996-1.652-3.996-3.69h12.53c.046-.364.071-.736.071-1.114Zm-1.637-8.514c.755.503 1.36 1.292.32 3.952A8.765 8.765 0 0 0 40.9 4.828c.81-.387 2.818-1.205 3.957-.445ZM28.826 20.64c-.615-.623-.724-2.138.632-4.9a8.701 8.701 0 0 0 3.814 4.604c-.877.477-3.207 1.551-4.447.296Zm5.046-8.996c.07-1.98 1.815-3.565 3.959-3.565 2.143 0 3.888 1.585 3.958 3.565h-7.917Z"
      />
      <g transform="translate(1 3)">
        <path
          fill="#DB4437"
          d="m6.044 12.275 3.949-6.812 8.888-.02c-.072-.14-.147-.28-.226-.417C15.902.238 9.789-1.413 5 1.34a9.958 9.958 0 0 0-3.397 3.21l4.44 7.725Z"
        />
        <path
          fill="#0F9D58"
          d="M13.952 12.274 6.08 12.26 1.617 4.573c-.085.133-.168.267-.248.405C-1.4 9.756.226 15.875 5.004 18.645a9.959 9.959 0 0 0 4.479 1.337l4.47-7.708Z"
        />
        <path
          fill="#FFCD40"
          d="m9.982 5.426 3.937 6.818-4.411 7.716c.157.007.315.011.474.011 5.523 0 10-4.477 10-10a9.957 9.957 0 0 0-1.09-4.545h-8.91Z"
        />
        <circle cx={10.018} cy={10.005} r={4.545} fill="#F1F1F1" />
        <circle cx={10.018} cy={10.005} r={3.636} fill="#4285F4" />
      </g>
      <path
        fill="url(#browsers_svg__a)"
        d="M18.654 6.707c-.421-1.013-1.275-2.107-1.944-2.453.477.924.808 1.916.982 2.941v.01l.001.01a8.775 8.775 0 0 1-.301 6.54c-1.11 2.382-3.799 4.824-8.006 4.705-4.546-.128-8.55-3.502-9.299-7.92-.136-.697 0-1.05.069-1.617-.094.44-.146.888-.156 1.337v.05a9.69 9.69 0 0 0 19.238 1.639c.017-.125.03-.249.044-.375a9.964 9.964 0 0 0-.628-4.867Z"
        transform="translate(14 26.447)"
      />
      <path
        fill="url(#browsers_svg__b)"
        d="M18.654 6.707c-.421-1.013-1.275-2.107-1.944-2.453.477.924.808 1.916.982 2.941v.01l.001.01a8.775 8.775 0 0 1-.301 6.54c-1.11 2.382-3.799 4.824-8.006 4.705-4.546-.128-8.55-3.502-9.299-7.92-.136-.697 0-1.05.069-1.617-.094.44-.146.888-.156 1.337v.05a9.69 9.69 0 0 0 19.238 1.639c.017-.125.03-.249.044-.375a9.964 9.964 0 0 0-.628-4.867Z"
        transform="translate(14 26.447)"
      />
      <path
        fill="url(#browsers_svg__c)"
        d="M13.945 7.846c.021.014.041.03.06.044a5.275 5.275 0 0 0-.9-1.174c-3.01-3.012-.789-6.53-.414-6.71l.004-.005c-2.434 1.425-3.26 4.063-3.335 5.383.113-.008.225-.018.34-.018a4.89 4.89 0 0 1 4.245 2.48Z"
        transform="translate(14 26.447)"
      />
      <path
        fill="url(#browsers_svg__d)"
        d="M9.706 8.447C9.69 8.688 8.84 9.52 8.541 9.52c-2.755 0-3.203 1.667-3.203 1.667.122 1.404 1.1 2.56 2.283 3.171a5.376 5.376 0 0 0 .448.194c.405.144.83.226 1.26.244 4.83.226 5.765-5.775 2.28-7.517a3.345 3.345 0 0 1 2.336.568A4.89 4.89 0 0 0 9.7 5.366c-.115 0-.227.01-.34.018A4.847 4.847 0 0 0 6.693 6.41c.148.125.315.292.666.639.657.647 2.344 1.318 2.347 1.397Z"
        transform="translate(14 26.447)"
      />
      <path
        fill="url(#browsers_svg__e)"
        d="M9.706 8.447C9.69 8.688 8.84 9.52 8.541 9.52c-2.755 0-3.203 1.667-3.203 1.667.122 1.404 1.1 2.56 2.283 3.171a5.376 5.376 0 0 0 .448.194c.405.144.83.226 1.26.244 4.83.226 5.765-5.775 2.28-7.517a3.345 3.345 0 0 1 2.336.568A4.89 4.89 0 0 0 9.7 5.366c-.115 0-.227.01-.34.018A4.847 4.847 0 0 0 6.693 6.41c.148.125.315.292.666.639.657.647 2.344 1.318 2.347 1.397Z"
        transform="translate(14 26.447)"
      />
      <path
        fill="url(#browsers_svg__f)"
        d="M6.241 6.09c.079.05.144.093.2.132a4.492 4.492 0 0 1-.027-2.368 7.176 7.176 0 0 0-2.332 1.802c.047-.001 1.453-.026 2.16.433Z"
        transform="translate(14 26.447)"
      />
      <path
        fill="url(#browsers_svg__g)"
        d="M.088 10.54c.748 4.418 4.753 7.792 9.299 7.92 4.207.12 6.895-2.323 8.006-4.706a8.775 8.775 0 0 0 .302-6.54v-.009c0-.007-.002-.011 0-.009l.001.016c.344 2.245-.798 4.419-2.582 5.89l-.006.012c-3.476 2.831-6.804 1.708-7.478 1.25a5.041 5.041 0 0 1-.14-.07c-2.028-.97-2.865-2.817-2.686-4.4A2.488 2.488 0 0 1 2.51 8.45a3.655 3.655 0 0 1 3.562-.143 4.825 4.825 0 0 0 3.638.143c-.003-.079-1.69-.75-2.347-1.398-.351-.346-.518-.513-.666-.638a2.897 2.897 0 0 0-.25-.19l-.2-.132c-.707-.46-2.112-.435-2.159-.433h-.004c-.384-.487-.357-2.092-.335-2.427a1.732 1.732 0 0 0-.324.171 7.056 7.056 0 0 0-.947.812 8.461 8.461 0 0 0-.91 1.084V5.3 5.3a8.183 8.183 0 0 0-1.3 2.935C.264 8.254-.08 9.76.089 10.54Z"
        transform="translate(14 26.447)"
      />
      <path
        fill="url(#browsers_svg__h)"
        d="M13.106 6.716c.354.348.657.743.9 1.175.053.04.103.08.146.12 2.196 2.024 1.045 4.887.96 5.09 1.784-1.47 2.925-3.644 2.582-5.888C16.598 4.48 14.74 3.379 13.223.98a11.775 11.775 0 0 1-.229-.371 3.06 3.06 0 0 1-.106-.2 1.763 1.763 0 0 1-.145-.384.025.025 0 0 0-.022-.025.035.035 0 0 0-.018 0l-.005.003-.007.004c-.375.177-2.597 3.696.415 6.708Z"
        transform="translate(14 26.447)"
      />
      <path
        fill="url(#browsers_svg__i)"
        d="M14.15 8.009a2.02 2.02 0 0 0-.145-.119l-.06-.044a3.345 3.345 0 0 0-2.337-.568c3.485 1.743 2.55 7.743-2.28 7.517-.43-.018-.855-.1-1.26-.243a5.108 5.108 0 0 1-.285-.117c-.054-.025-.11-.05-.163-.078l.006.004c.674.46 4 1.583 7.478-1.25l.006-.012c.087-.203 1.238-3.066-.96-5.09Z"
        transform="translate(14 26.447)"
      />
      <path
        fill="url(#browsers_svg__j)"
        d="M5.338 11.186S5.787 9.52 8.541 9.52c.298 0 1.15-.83 1.165-1.072a4.825 4.825 0 0 1-3.638-.143 3.655 3.655 0 0 0-3.562.143 2.488 2.488 0 0 0 2.295 1.444c-.18 1.584.658 3.431 2.686 4.4.045.022.087.045.134.066-1.184-.611-2.16-1.767-2.283-3.17Z"
        transform="translate(14 26.447)"
      />
    </g>
  </svg>
);

export default SvgBrowsers;
