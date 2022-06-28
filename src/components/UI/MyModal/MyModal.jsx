import React from 'react';
import s from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {
  const rootClasses = [s.MyModal];
  if (visible) rootClasses.push(s.active);
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div onClick={e => e.stopPropagation()} className={s.MyModalContent}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
