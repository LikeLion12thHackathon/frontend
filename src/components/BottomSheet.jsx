import { useEffect, useState } from 'react';
import * as Styled from '../css/styled/bottom.sheet.styled';
import { motion } from 'framer-motion';

export const BottomSheet = ({ children }) => {
  const [isOpen, setIsOpen] = useState(() => {
    return savedState === 'true';
  });
  const [y, setY] = useState(isOpen ? 0 : 100);


  const handleDrag = (event, info) => {
    setY((prevY) => Math.max(prevY + info.delta.y, 0));

    if (info.offset.y < -50) {
      setIsOpen(true);
      setY(0);
    } else if (info.offset.y > 50) {
      setIsOpen(false);
      setY(100);
    }
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Handle />
        <button onClick={() => setIsOpen(false)}>닫기</button>
      </Styled.Header>
      <Styled.SheetContainer
        as={motion.div}
        initial={{ y: '100%' }}
        animate={{ y: isOpen ? 0 : y }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 100 }}
        onDrag={handleDrag}
      >
        {children}
      </Styled.SheetContainer>
    </Styled.Container>
  );
};

export default BottomSheet;
