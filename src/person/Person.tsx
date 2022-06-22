import React from 'react'
import Theme, { Box, ThemeUIStyleObject, Image, Heading, Text } from 'theme-ui'
import logo from '../logo.svg'
import { useParams } from 'react-router-dom'

const Person: React.FC = () => {

    const { name, age } = useParams();

    const style: ThemeUIStyleObject = {
        width: '33.33%',
        display: 'inline-block',
        backgroundColor: 'red'
    }

    const text: ThemeUIStyleObject = {
        display: 'inline'
    }

    const ageSx: ThemeUIStyleObject = {
        ...text,
        marginLeft: '5px'
    }

    const detailsSx: ThemeUIStyleObject = {
        paddingX: '15px',
        paddingBottom: '20px',
        backgroundColor: 'grey'
    }
    return (
        <Box sx={ style }>
            <Image srcSet={ logo } />
            <Box sx={ detailsSx }>
                <Heading sx={ text }>{ name }</Heading>
                <Text sx={ ageSx }>{ age }</Text>
            </Box>
        </Box>
    )
}

export default Person