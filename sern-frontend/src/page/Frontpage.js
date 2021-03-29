import axios from "axios";
import React from "react";
import RecordCard from "../components/RecordCard.js";
import { BACKEND_URL, CREATE_RUN, CREATE_CYCLE} from "../config/Constants.json";

export default class Frontpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            runName: "",
            runDistance: 0,
            runTime: 0,
            breaks: 0,
            difficulty: 0,
            cycleName: "",
            cycleDistance: 0,
            cycleTime: 0
        }
    }

    handleChange = ({target}) => {
        console.log("changing " + `${target.name}`);
        this.setState( { [target.name] : [target.value] } );
    }

    submitRun = e => {
        e.preventDefault();
        console.log(this.state.runName[0]);
        axios.post(`${BACKEND_URL}${CREATE_RUN}`, {
            runName: this.state.runName[0],
            runDistance: this.state.runDistance[0],
            runTime: this.state.runTime[0],
            breaks: this.state.breaks[0],
            difficulty: this.state.difficulty[0]}).then(response => console.log(response));
        }

    submitCycle = e => {
        e.preventDefault();
        axios.post(`${BACKEND_URL}${CREATE_CYCLE}`, {
            cycleName: this.state.cycleName[0],
            cycleDistance: this.state.cycleDistance[0],
            cycleTime: this.state.cycleTime[0]
    })
    .then(response => console.log(response));
}

    render() {
        return (<div >
            <RecordCard onChange={this.handleChange} handleSubmit={this.submitRun} typeOfExercise="run"></RecordCard>
            <RecordCard onChange={this.handleChange} handleSubmit={this.submitCycle} typeOfExercise="cycle"></RecordCard>
        </div>
        );
    }
}
