import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const SheetContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  padding: 16px;
  max-height: 80%;
  overflow: auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
`;

export const Handle = styled.div`
  width: 40px;
  height: 5px;
  background: #ccc;
  border-radius: 5px;
  margin: 0 auto;
`;
