import { iconProps } from '@/@types/icons.interface'

const RealTechIcon = ({ width, height }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      width={width}
      height={height}>
      <rect
        width={width}
        height={height}
        fill="url(#a)"
        rx={75}
      />
      <defs>
        <pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <use
            xlinkHref="#b"
            transform="scale(.00098)"
          />
        </pattern>
        <image
          id="b"
          width={1024}
          height={1024}
        />
      </defs>
    </svg>
  )
}

export default RealTechIcon