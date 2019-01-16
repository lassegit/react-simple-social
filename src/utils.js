import React from 'react'
import EmailIcon from './icons/email'
import FacebookIcon from './icons/facebook'
import LinkedinIcon from './icons/linkedin'
import RedditIcon from './icons/reddit'
import TwitterIcon from './icons/twitter'

export const getShareIcon = (site, width, height, color, theme) => {
  switch (site) {
    case 'facebook':
      return <FacebookIcon width={width} height={height} color={color} theme={theme} />
    case 'twitter':
      return <TwitterIcon width={width} height={height} color={color} theme={theme} />
    case 'reddit':
      return <RedditIcon width={width} height={height} color={color} theme={theme} />
    case 'linkedin':
      return <LinkedinIcon width={width} height={height} color={color} theme={theme} />
    case 'email':
      return <EmailIcon width={width} height={height} color={color} theme={theme} />
    default:
      return <span />
  }
}

export const getShareLink = (site, url, title) => {
  switch (site) {
    case 'facebook':
      return `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`
    case 'reddit':
      return `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    case 'linkedin':
      return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&text=${encodeURIComponent(
        title,
      )}`
    case 'email':
      return `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
    default:
      return '/'
  }
}
