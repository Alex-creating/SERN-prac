import React from "react";
import axios from "axios";
import { BACKEND_URL, GET_ALL_RUN } from "../config/Constants.json";



export default class ShowAllExercises extends React.Component {

componentDidMount() {
    const runData = axios.get(`${BACKEND_URL}${GET_ALL_RUN}`) 
}

    render() {
        return (
            <div>
                {runData.map(i => (<h2 key={i.runId}>{i.runDistance}</h2>))}
            </div>
        );
    }
}