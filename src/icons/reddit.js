import React from 'react'
import PropTypes from 'prop-types'

const RedditIcon = props => {
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
          <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" />
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
          <path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z" />
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
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 11.889c0-.729-.596-1.323-1.329-1.323-.358 0-.681.143-.92.373-.905-.595-2.13-.975-3.485-1.023l.742-2.334 2.008.471-.003.029c0 .596.487 1.082 1.087 1.082.599 0 1.086-.485 1.086-1.082s-.488-1.082-1.087-1.082c-.46 0-.852.287-1.01.69l-2.164-.507c-.094-.023-.191.032-.22.124l-.827 2.603c-1.419.017-2.705.399-3.65 1.012-.237-.219-.552-.356-.9-.356-.732.001-1.328.594-1.328 1.323 0 .485.267.905.659 1.136-.026.141-.043.283-.043.429-.001 1.955 2.404 3.546 5.359 3.546 2.956 0 5.36-1.591 5.36-3.546 0-.137-.015-.272-.038-.405.416-.224.703-.657.703-1.16zm-8.612.908c0-.434.355-.788.791-.788.436 0 .79.353.79.788 0 .434-.355.787-.79.787-.436.001-.791-.352-.791-.787zm4.53 2.335c-.398.396-1.024.589-1.912.589l-.007-.001-.007.001c-.888 0-1.514-.193-1.912-.589-.073-.072-.073-.19 0-.262.072-.072.191-.072.263 0 .325.323.864.481 1.649.481l.007.001.007-.001c.784 0 1.324-.157 1.649-.481.073-.072.19-.072.263 0 .073.072.073.19 0 .262zm-.094-1.547c-.436 0-.79-.353-.79-.787 0-.434.355-.788.79-.788.436 0 .79.353.79.788 0 .434-.354.787-.79.787z" />
        </svg>
      )
    case 'roundedsquare':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}`}
          height={`${height}`}
          fill={`${color}`}
          viewBox="0 0 24 24"
        >
          <path d="M14.558 15.827c.097.096.097.253 0 .349-.531.529-1.365.786-2.549.786l-.009-.002-.009.002c-1.185 0-2.018-.257-2.549-.786-.097-.096-.097-.253 0-.349.096-.096.254-.096.351 0 .433.431 1.152.641 2.199.641l.009.002.009-.002c1.046 0 1.765-.21 2.199-.641.095-.097.252-.097.349 0zm-.126-3.814c-.581 0-1.054.471-1.054 1.05 0 .579.473 1.049 1.054 1.049.581 0 1.054-.471 1.054-1.049 0-.579-.473-1.05-1.054-1.05zm-3.806 1.05c0-.579-.473-1.05-1.054-1.05-.581 0-1.055.471-1.055 1.05 0 .579.473 1.049 1.055 1.049.581.001 1.054-.47 1.054-1.049zm13.374-8.063v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 6.853c0-.972-.795-1.764-1.772-1.764-.477 0-.908.191-1.227.497-1.207-.794-2.84-1.299-4.647-1.364l.989-3.113 2.677.628-.004.039c0 .795.65 1.442 1.449 1.442.798 0 1.448-.647 1.448-1.442 0-.795-.65-1.442-1.448-1.442-.613 0-1.136.383-1.347.919l-2.886-.676c-.126-.031-.254.042-.293.166l-1.103 3.471c-1.892.023-3.606.532-4.867 1.35-.316-.292-.736-.474-1.2-.474-.975-.001-1.769.79-1.769 1.763 0 .647.355 1.207.878 1.514-.034.188-.057.378-.057.572 0 2.607 3.206 4.728 7.146 4.728 3.941 0 7.146-2.121 7.146-4.728 0-.183-.019-.362-.05-.54.555-.299.937-.876.937-1.546z" />
        </svg>
      )
    case 'square':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}`}
          height={`${height}`}
          fill={`${color}`}
          viewBox="0 0 24 24"
        >
          <path d="M14.558 15.827c.097.096.097.253 0 .349-.531.529-1.365.786-2.549.786l-.009-.002-.009.002c-1.185 0-2.018-.257-2.549-.786-.097-.096-.097-.253 0-.349.096-.096.254-.096.351 0 .433.431 1.152.641 2.199.641l.009.002.009-.002c1.046 0 1.765-.21 2.199-.641.095-.097.252-.097.349 0zm-.126-3.814c-.581 0-1.054.471-1.054 1.05 0 .579.473 1.049 1.054 1.049.581 0 1.054-.471 1.054-1.049 0-.579-.473-1.05-1.054-1.05zm9.568-12.013v24h-24v-24h24zm-4 11.853c0-.972-.795-1.764-1.772-1.764-.477 0-.908.191-1.227.497-1.207-.794-2.84-1.299-4.647-1.364l.989-3.113 2.677.628-.004.039c0 .795.65 1.442 1.449 1.442.798 0 1.448-.647 1.448-1.442 0-.795-.65-1.442-1.448-1.442-.613 0-1.136.383-1.347.919l-2.886-.676c-.126-.031-.254.042-.293.166l-1.103 3.471c-1.892.023-3.606.532-4.867 1.35-.316-.292-.736-.474-1.2-.474-.975-.001-1.769.79-1.769 1.763 0 .647.355 1.207.878 1.514-.034.188-.057.378-.057.572 0 2.607 3.206 4.728 7.146 4.728 3.941 0 7.146-2.121 7.146-4.728 0-.183-.019-.362-.05-.54.555-.299.937-.876.937-1.546zm-9.374 1.21c0-.579-.473-1.05-1.054-1.05-.581 0-1.055.471-1.055 1.05 0 .579.473 1.049 1.055 1.049.581.001 1.054-.47 1.054-1.049z" />
        </svg>
      )
    default:
      return 'Reddit'
  }
}

RedditIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.string
}

export default RedditIcon
