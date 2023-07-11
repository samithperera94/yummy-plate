import React from 'react'
import classes from "./ProgressBar.module.scss";

interface Props {
    content: string
}
const ProgressBar = ({ content }: Props) => {
    return (
        <div className={classes.progress}>
            <span className={[classes.step, classes.active].join(" ")}>1</span>
            <span className={classes.line}></span>
            <span
                className={[classes.step, content === 'PaymentMethod' || content === 'SuccessPage' ? classes.active : undefined].join(" ")}
            >2</span>
            <span className={classes.line}></span>
            <span
                className={[classes.step, content === 'SuccessPage' ? classes.active : undefined].join(" ")}
            >3</span>
        </div>
    )
}

export default ProgressBar