import React from 'react'

export const ProfileImage = ({src, alt, size = '600px'}) => (
  <img
    src={src}
    alt={alt}
    style={{
      borderRadius: '50%',
      width: size,
      height: size,
      objectFit: 'cover'
    }}
  />
)
