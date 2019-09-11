/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Box } from 'theme-ui'
import PropTypes from 'prop-types'
import PackTitle from '../packTitle'

const PackInit = ({ frontmatter, matches }) => {
  const { title, color, numero, excerpt } = frontmatter
  return (
    <>
      <PackTitle pack={`Pack ${numero}`} title={title} color={color} />
      <Box
        sx={{
          width: `100%`,
          position: matches ? 'absolute' : null,
          top: matches ? `50%` : null,
          left: 0
        }}
      >
        <p sx={{ fontSize: [0, 1] }}>{excerpt}</p>
      </Box>
    </>
  )
}

PackInit.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    matches: PropTypes.bool.isRequired
  }).isRequired
}

export default PackInit