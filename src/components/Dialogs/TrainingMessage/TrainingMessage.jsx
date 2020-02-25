import classes from "./TrainingMessage.module.css";
import React from "react";

const TrainingMessage = (props) => {
    return (
        <div>
            <div className={classes.block3}>{props.trainingMessage}</div>
        </div>
    );
}

export default TrainingMessage;