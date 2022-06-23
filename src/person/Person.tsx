import { ThemeContext } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Component } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Image } from "theme-ui";

const APIObject = {
    name: '',
    age: '',
    jobTitle: '',
    image: ''
}

const Person: React.FC = () => {

    const personsName = useParams()
    
    const [state, setState] = useState({
        ...APIObject
    })

    useEffect(() => {
        fetch(`http://localhost:3001/people/${personsName.name}`)
            .then(res => res.json())
            .then(data => {
                data = Object.values(data)
                let person = data.filter((val: any) => val.name.toLowerCase() == personsName.name!.toLowerCase()).shift()
                setState(person); 
            })
    }, [])

    if (typeof state !== 'undefined' && Object.keys(state).length > 0) {
        return (
            <Box>
                <Heading>{state.name}</Heading>
                <Text>{state.age}</Text>
                <Text>{state.jobTitle}</Text>
                <Image srcSet={state.image} />
            </Box>
        )
    }
    
    return null
}

export default Person