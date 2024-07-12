import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react';
import { CustomizedTypogrgaphy } from '../styles/styles';

const ContentItem = ({title,description,img, swap}) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box display={'flex'} flexDirection={isMatch?"column":"row"} padding={3} bgcolor={swap && "#efefef"}>
      {swap ? 
        <>
          <Box flexGrow={1}>
            <CustomizedTypogrgaphy variant='h3' fontSize={{lg:32, md:28, sm:24, xs:21}}>
              {title}
            </CustomizedTypogrgaphy>
            <Typography variant='body1'>
              {description}
            </Typography>
          </Box>
          <Box paddingLeft={isMatch?0:3}>
            <img src={img} alt={title} loading='lazy' width={"100%"} height={"auto"} style={{boxShadow:"10px 10px 20px #ccc", borderRadius:25}}/>
          </Box>
          
        </>
        :
        <>
            <Box paddingRight={isMatch?0:3}>
              <img src={img} alt={title} loading='lazy' width={"100%"} height={"auto"} style={{boxShadow:"10px 10px 20px #ccc", borderRadius:25}}/>
            </Box>
            <Box flexGrow={1}>
              <CustomizedTypogrgaphy variant='h3' fontSize={{lg:32, md:28, sm:24, xs:21}}>
                {title}
              </CustomizedTypogrgaphy>
              <Typography variant='body1'>
                {description}
              </Typography>
            </Box>
        </>
        }
        
      </Box>
    
  )
}

export default ContentItem
