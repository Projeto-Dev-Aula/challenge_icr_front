import { iconProps } from '@/@types/icons.interface'

const PencilIcon = ({
  width = 40,
  height = 40,
  fill = '#fff',
  className
}: iconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <g clipPath="url(#clip0_81_294)">
        <path
          d="M32.055 18.047l.883-.883-2.649-2.648-4.851-4.852-2.649-2.648-.883.882-1.765 1.766L4.578 25.227a6.929 6.929 0 00-1.734 2.921L.078 37.555a1.852 1.852 0 00.477 1.851 1.892 1.892 0 001.852.477l9.398-2.766a6.928 6.928 0 002.922-1.734L30.289 19.82l1.766-1.773zM12.5 31.203l-.71 1.774a3.294 3.294 0 01-1.04.539l-6.11 1.797 1.798-6.102c.11-.383.297-.734.539-1.04l1.773-.71v2.5c0 .687.563 1.25 1.25 1.25h2.5v-.008zM28.336 1.461l-1.125 1.133-1.765 1.765-.891.883 2.648 2.649 4.852 4.851 2.648 2.649.883-.883 1.766-1.766 1.133-1.133a4.998 4.998 0 000-7.07l-3.07-3.078a4.998 4.998 0 00-7.071 0h-.008zm-3.703 13.125l-11.25 11.25a1.254 1.254 0 01-1.765 0 1.254 1.254 0 010-1.766l11.25-11.25a1.254 1.254 0 011.765 0 1.254 1.254 0 010 1.766z"
          fill="#888787"
        />
      </g>
      <defs>
        <clipPath id="clip0_81_294">
          <path
            fill={fill}
            d="M0 0H40V40H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default PencilIcon