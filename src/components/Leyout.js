import React from 'react'
import Header from './items/Header'
import Image from './items/Image'
import Main from './items/Main'
import Footer from './items/Footer'
import Footermid from './Footer_elements/Footermid'
import Footertwo from './Footer_elements/Footertwo'
import { Box } from '@material-ui/core'
const Leyout = () => {
    return (
        <Box>
            <Header />
            <Image />
            <Main />
            <Footer/>
            <Footermid/>
            <Footertwo/>
            
            
        </Box>
    )
}

export default Leyout;
