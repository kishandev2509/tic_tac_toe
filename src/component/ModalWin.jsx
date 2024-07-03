import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalWin = ({ show, handleClose, onclose, player, setPlayers, draw }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header>
        <Modal.Title>
          <h3 className="text-center">{draw?`Match Draw`:`Woohoo ${player}! Won the Game!!`}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Would you like to have new game</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            handleClose();
            onclose(0);
            setPlayers[0]("Player 1");
            setPlayers[1]("Player 2");
          }}
        >
          No
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleClose();
            onclose(1);
          }}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWin;
