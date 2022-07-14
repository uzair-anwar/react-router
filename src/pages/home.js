import React, { Component } from 'react';

import {useParams} from "react-router-dom"

function Home() {

    let {name} = useParams()
    return ( 
        <div>This is home and yout name is {name}</div>
     );
}

export default Home;

