//A component for recording a run or cycle

import InputBox from "./InputBox.js";
import SubmitButton from "./SubmitButton.js";

function RecordCard(props) {

    if (props.typeOfExercise === "run") {
        return (
            <form onSubmit={props.submiter} onChange={props.onChange}>
                Name your run: 
                <InputBox type="text" placeholder="EG: Aternoon Run" name="runName" required={true}/>

                Distance (km): 
                <InputBox type="number" min="0" placeholder="2.5 km" name="runDistance" required={true}/>

                Time: 
                <InputBox type="time" placeholder="12:23" name="runTime" required={true}/>

                No. of Breaks: 
                <InputBox type="number" placeholder="2 breaks" name="breaks" min="0" max="10" required={false}/>

                Difficulty: 
                <InputBox type="number" name="difficulty" min="0" max="10" required={false}/>

                <button>Submit {props.typeOfExercise}</button>
            </form>
        )
    }
    else {
        return (
            <form onSubmit={props.submiter} onChange={props.onChange}>
                Name your cycle:
                <InputBox type="text" placeholder="EG: Aternoon Cycle" name="cycleName" required={true}/>

                Distance (km): 
                <InputBox type="number" min="0" placeholder="12.5 km" name="cycleDistance" required={true}/>

                Time: 
                <InputBox type="time" placeholder="12:23" name="cycleTime" required={true}/>

                <button>Submit {props.typeOfExercise}</button>
            </form>
        )
    }
}
  
export default RecordCard;