import classes from './Card.module.scss';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode
}

const Card = ({ children }: Props) => {
    return <div className={classes.card}>
        {children}
    </div>
}

export default Card