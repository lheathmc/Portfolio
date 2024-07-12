import React from 'react';
import {Box, Button} from "@mui/material";
import ContentItem from './ContentItem';
import { CustomizedTypogrgaphy } from '../styles/styles';

const contentArray = [
    {
    title:"Putting your users center stage",
    description: "Using human centric design to connect you to your users.",
    img: "http://localhost:3000/Portfolio/app/images/illustrations/OurMcDonaldFamilyTree2.jpg"
    },
    {
    title:"Sunt adipisicing deserunt est ullamco adipisicing ullamco et.",
    description: "Cillum eiusmod ut esse aliqua esse labore. Qui Lorem commodo duis aute. Sint elit excepteur non reprehenderit officia cillum ut culpa proident tempor deserunt ex fugiat. Ut ex quis cillum reprehenderit deserunt non sint id elit culpa. Excepteur ut do Lorem velit aute qui voluptate. Voluptate officia proident aliquip incididunt reprehenderit sunt. Est elit occaecat mollit commodo nisi sunt Lorem duis laboris nisi pariatur Lorem aliqua.",
    img: "http://localhost:3000/Portfolio/app/images/illustrations/BotSwing2-Painting.jpg"
    },
];

const Home = () => {
  return (
    <Box>
        <Box sx={{padding:10, backgroundImage:"url('http://localhost:3000/Portfolio/app/images/illustrations/Nature.jpg')"}} backgroundColor="#efefef" display="flex" justifyContent={"center"} flexDirection="column">
            <CustomizedTypogrgaphy variant='h1' textAlign={"center"} fontSize={{lg:42, md:38, sm:34, xs:28}}>Home</CustomizedTypogrgaphy>
            <Box display="flex" width="100%">
                <CustomizedTypogrgaphy margin='auto' variant='h4' color="black" textAlign={"center"} fontSize={{lg:30, md:24, sm:20, xs:18}}>Creating great user experiences</CustomizedTypogrgaphy>
            </Box>
            <Box width="100%" display="flex" justifyContent={"center"} margin="auto" marginTop={5}>
                <Button sx={{mr: 1}} variant='contained'>Sign up</Button>
            </Box>
        </Box>
        <Box display="flex" flexDirection={'column'}>
            {contentArray.map((cont, index)=>(<ContentItem title={cont.title} description={cont.description} img={cont.img} key={index} swap={index%2===0}/>))}
        </Box>
    </Box>
  )
}

export default Home
