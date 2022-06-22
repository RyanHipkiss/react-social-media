import React from "react"
import { Box, Heading, Text, ThemeUIStyleObject } from "theme-ui"

const Post: React.FC = () => {

    const wrapperSx: ThemeUIStyleObject = {
        backgroundColor: '#f0f0f0',
        width: '740px',
        padding: '15px',
        minHeight: '150px',
        borderRadius: '5px',
        boxShadow: '0px 2px #f0f0f0',
        marginBottom: '10px'
    }

    const titleSx: ThemeUIStyleObject = {
        fontFamily: 'sans-serif'
    }

    const textSx: ThemeUIStyleObject = {
        display: 'block',
        fontFamily: 'sans-serif',
        marginTop: '15px'
    }

    return (
        <Box sx={wrapperSx}>
            <Heading sx={titleSx}>
                This is my post
            </Heading>
            <Text sx={textSx}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Illum, odio sint eum placeat, dignissimos, 
                eligendi fugiat exercitationem earum quidem 
                obcaecati consectetur dolor dolorum perferendis 
                ex ea ad delectus? Dignissimos, debitis.
            </Text>
        </Box>
    )
}

export default Post