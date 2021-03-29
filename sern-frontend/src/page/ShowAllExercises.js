import React from "react";
import axios from "axios";
import { BACKEND_URL, GET_ALL_RUN } from "../config/Constants.json";



export default class ShowAllExercises extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            runs : []
        }
    }

componentDidMount() {
    axios.get(`${BACKEND_URL}${GET_ALL_RUN}`).
    then(response => {
        const runs = response.data[0];
        this.setState({ runs });
        console.log(this.state.runs);
        //console.log(response.data[0]);
        //this.setState =({runData : response.data[0]});
    });
    //console.log(this.state.runData);
}



    render() {

        
        return (
            <div>
                <h2>hi</h2>
                {this.state.runs.map(i => (<h2 key={i.runId}>{i.runDistance} , {i.runName}</h2>))}
            </div>
        );
    }
}
