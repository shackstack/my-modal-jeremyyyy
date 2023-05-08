import useModal from './lib';
import React from 'react';

function App() {
  const { Modal, closeModal, openModal, modalOpen } = useModal(false);

  return (
    <div className='App'>
      <button onClick={openModal}>열기</button>
      <Modal modalOpen={modalOpen}>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
}

export default App;
