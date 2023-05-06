import useModal from 'my-modal-jeremyyyy';
import React from 'react';

function App() {
  const { Modal } = useModal(false);

  return (
    <div className='App'>
      <Modal modalOpen={true}>
        <div>하이</div>
      </Modal>
    </div>
  );
}

export default App;
