import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

import copyImg from '../../assets/images/copy.svg';

type ButtonProps = {
  code: string;
}

export function RoomCode(props: ButtonProps) {
  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText(props.code)
  }

  return (
    <Container type="button" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="room code" />
      </div>
      <span>{`Sala #${props.code}`}</span>
    </Container>
  );
}