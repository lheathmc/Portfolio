import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Typography variant='h3' paddingTop={10} textAlign={'center'} fontSize={{lg:42, md:38, sm:34, xs:28}}>Let's Connect!</Typography>
      <Typography variant='div' textAlign={'center'} padding={4}>
        Excepteur magna anim sint cupidatat id quis exercitation quis voluptate do proident commodo laboris nulla.
      </Typography>
      <Box display={'flex'} margin="auto" justifyContent={'center'} padding={5}>
        <Button variant='text'>LinkedIn</Button>
        <Button variant='text'>Instagram</Button>
        <Button variant='text'>Facebook</Button>
      </Box>
    </Box>
  )
}

export default Footer
