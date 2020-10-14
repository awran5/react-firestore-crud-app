import React, { memo } from "react"

export default memo(function Loading({ width, height, fill, fullwidth }) {
  const style = {
    width: `${fullwidth ? "100vw" : width + "px"}`,
    height: `${fullwidth ? "100vh" : height + "px"}`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    minHeight: `inherit`
  }
  return (
    <span className="loader" style={style}>
      <svg
        viewBox="0 0 100 100"
        className="loader-svg"
        width={width || 65}
        height={height || 65}
        fill={fill || "inherit"}
      >
        <path
          d="M50,87.5c-20.7,0-37.5-16.8-37.5-37.5h-5c0,23.4,19.1,42.5,42.5,42.5S92.5,73.4,92.5,50h-5
          C87.5,70.7,70.7,87.5,50,87.5z"
        ></path>
      </svg>
    </span>
  )
})
