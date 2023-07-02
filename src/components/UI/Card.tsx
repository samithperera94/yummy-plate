import classes from './Card.module.scss';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode,
    className?: string
}

const Card = ({ children, className }: Props) => {
    return <div className={[classes.card, className ? classes[className] : ''].join(" ")}>
        {children}
    </div>
}

export default Card