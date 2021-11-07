import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type Props = {
  formName: string;
  open: boolean;
  onClose: () => void;
}

export const FormDialog: React.FC<Props> = ({formName, children, onClose, open}) => (
  <Transition appear as={Fragment} show={open}>
    <Dialog
      as="div"
      className="fixed inset-0 z-10 overflow-y-auto"
      onClose={onClose} open={open}
    >
      <div className="min-h-screen px-4 text-center">
        <Dialog.Overlay className="fixed inset-0" />
        <Dialog.Title>{formName}</Dialog.Title>
        <div>
          {children}
        </div>
      </div>
    </Dialog>
  </Transition>
);
