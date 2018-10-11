import React from 'react';
import PropTypes from 'prop-types';
import { confirmable } from 'react-confirm';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';


const Confirmable = ({ show, proceed, dismiss, cancel, confirmation, options }) => (
  <Modal toggle={dismiss} isOpen={show} className={options.className || 'modal-primary'}>
    <ModalHeader toggle={cancel}>Xác nhận</ModalHeader>
    <ModalBody>
      {confirmation}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={proceed}><i className="fa fa-check"/> Đồng ý</Button>{' '}
      <Button color="secondary" onClick={cancel}><i className="fa fa-ban"/> Không</Button>
    </ModalFooter>
  </Modal>);


Confirmable.propTypes = {
  show: PropTypes.bool,      // from confirmable. indicates if the dialog is shown or not.
  proceed: PropTypes.func,      // from confirmable. call to close the dialog with promise resolved.
  cancel: PropTypes.func,       // from confirmable. call to close the dialog with promise rejected.
  dismiss: PropTypes.func,         // from confirmable. call to only close the dialog.
  confirmation: PropTypes.string,  // arguments of your confirm function
  options: PropTypes.object        // arguments of your confirm function
};

// confirmable HOC pass props `show`, `dismiss`, `cancel` and `proceed` to your component.
export default confirmable(Confirmable);
