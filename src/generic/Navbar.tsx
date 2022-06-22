import React from "react";
import { Box, Heading, ThemeUIStyleObject } from "theme-ui";

const Navbar: React.FC = () => {
    const wrapperSx: ThemeUIStyleObject = {
        width: '100%',
        backgroundColor: 'lightgreen',
        height: '50px'
    }

    const innerContainerSx: ThemeUIStyleObject = {
        width: '960px',
        margin: '0 auto',
        height: '50px',
        backgroundColor: 'lightcoral',
        paddingX: '10px'
    }

    const headingSx: ThemeUIStyleObject = {
        fontFamily: 'sans-serif',
        lineHeight: '50px'
    }

    return (
        <Box sx={wrapperSx}>
            <Box sx={innerContainerSx}>
                <Heading sx={headingSx}>Humphrey's Place</Heading>
            </Box>
        </Box>
    )
}

export default Navbar