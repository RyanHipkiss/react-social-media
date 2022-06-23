import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text } from "theme-ui";

const APIObject = {
    title: '',
    body: ''
}

const Post: React.FC = () => {
    
    const params = useParams()
    const [state, setState] = useState({...APIObject})

    useEffect(() => {
        fetch(`http://localhost:3001/posts/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setState(data.shift())
            })
    }, [])

    useEffect(() => {
        console.log(state)
    }, [state])
    
    if (typeof state !== 'undefined' && Object.keys(state).length > 0) {
        return (
            <Box>
                <Heading>{state.title}</Heading>
                <Text>{state.body}</Text>
            </Box>
        )
    }

    return null
}

export default Post