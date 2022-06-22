import React from "react"
import { Box, Heading, Image, ThemeUIStyleObject } from "theme-ui"
import Post from "../post/Post"
import Navbar from "../generic/Navbar"

const Home: React.FC = () => {

    const innerContainerSx: ThemeUIStyleObject = {
        width: '960px',
        margin: '20px auto 0px auto'
    }

    const postContainerSx: ThemeUIStyleObject = {
        width: '740px',
        float: 'left',
        marginLeft: '20px'
    }

    const sideBarSx: ThemeUIStyleObject = {
        width: '200px',
        height: '1000px',
        float: 'left',
        backgroundColor: 'lightsteelblue'
    }

    const profileSx: ThemeUIStyleObject = {
        borderRadius: '50%',
        width: '190px',
        height: '190px',
        margin: '20px auto 0 auto',
        display: 'block'
    }

    const profileNameSx: ThemeUIStyleObject = {
        fontFamily: 'sans-serif',
        textAlign: 'center',
        marginTop: '10px'
    }

    return (
        <Box>
            <Navbar />

            <Box sx={innerContainerSx}>
                <Box sx={sideBarSx}>
                    <Image sx={profileSx} srcSet="https://avatars.githubusercontent.com/u/6339498?v=4"/>
                    <Heading sx={profileNameSx}>Ryan</Heading>
                </Box>
                <Box sx={postContainerSx}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </Box>
            </Box>
        </Box>
    )

}

export default Home