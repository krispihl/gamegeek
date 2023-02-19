import { useState, useRef, useEffect } from "react";
import cx from 'classnames';
import ExpandArrow from '../../icons/expand.png';
import styles from './index.module.scss';

const Accordion = ({ triggerTitle, children }) => {
    const [open, setOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(false);
    const contentRef = useRef();

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [open])

    return (
        <div className={styles.accordion}>
            <div className={styles.toggle} onClick={() => setOpen(!open)}>
                <h3>{triggerTitle}</h3>
                <img className={cx(styles.icon, open && styles['icon--open'])} src={ExpandArrow} alt='Expand filter icon' />
            </div>
            <div className={styles['content-wrapper']} style={open ? { height: `${contentHeight}px` } : { height: '0px' }}>
                {open && <div ref={contentRef} className={styles.content}>{children}</div>}
            </div>
        </div>
    )
}

export default Accordion;