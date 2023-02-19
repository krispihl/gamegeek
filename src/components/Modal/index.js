import { useEffect, useCallback } from 'react';
import styles from './index.module.scss';

const getCleanDescription = (description) => {
    return description
            .replace(/(&amp;quot;)/g,"\"")
            .replace(/(&amp;ndash;)/g,"-")
            .replace(/(&amp;mdash;)/g,"-")
            .replace(/(&amp;#10;)/g," ")
            .replace(/(&amp;auml;)/g,"ä")
            .replace(/(&amp;bull;)/g,"*")
            .replace(/(&amp;rsquo;)/g,"'");
}

const Modal = ({ shown, close, description }) => {
    const handleKeyDown = useCallback((event) => {
        if ( event.keyCode === 27 ) {
            close();
            event.target.blur();
        }
    }, [close]);
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);
    
    return shown ? (
      <div className={styles.modal} onClick={() => { close() }}>
        <div className={styles.content} onClick={e => { e.stopPropagation() }}>
          <p>{getCleanDescription(description)}</p>
          <button className={styles.closeButton} onClick={() => { close() }}>BACK</button>
        </div>
      </div>
    ) : null;
  }

export default Modal;