import React from 'react'
import PropTypes from 'prop-types'

const EmailIcon = props => {
  const { width, height, color, theme } = props

  switch (theme) {
    case 'minimal':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}`}
          height={`${height}`}
          fill={`${color}`}
          viewBox="0 0 24 24"
        >
          <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
        </svg>
      )
    case 'roundedunfilled':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}`}
          height={`${height}`}
          fill={`${color}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
        </svg>
      )
    case 'round':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}`}
          height={`${height}`}
          fill={`${color}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
        </svg>
      )
    case 'text':
      return 'Email'
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}`}
          height={`${height}`}
          fill={`${color}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
        </svg>
      )
  }
}

EmailIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.string
}

export default EmailIcon
