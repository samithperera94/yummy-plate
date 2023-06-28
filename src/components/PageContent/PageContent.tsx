import classes from './PageContent.module.scss';
import { ReactNode } from 'react';

interface Props {
    title?: string,
    children: ReactNode
}
function PageContent({ title, children }: Props) {
    return (
        <div className={classes.content}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default PageContent;