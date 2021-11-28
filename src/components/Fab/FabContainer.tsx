import { FixedInterest } from 'components/FixedInterest';
import { FormDialog } from 'components/FormDialog';
import { VariableInterest } from 'components/VariableInterest';
import React, { useState } from 'react';
import './FabConteiner.style.css';

type Props = {
  hidden: boolean;
}

const FabContext: React.FC<Props> = ({ hidden }) => {
  const [viOpen, setVIOpen] = useState(false);
  const [fiOpen, setFIOpen] = useState(false);
  return (
    <>
      <FormDialog open={viOpen} onClose={() => setVIOpen(false)} formName="Renda Variável">
        <VariableInterest callClose={() => setVIOpen(false)}/>
      </FormDialog>
      <FormDialog open={fiOpen} onClose={() => setFIOpen(false)} formName="Renda Fixa">
        <FixedInterest/>
      </FormDialog>
      <div className={hidden ? 'invisible' : 'fab-context'} hidden={hidden}>
        <button
          onClick={() => setVIOpen(true)}
          className="fab-context-button"
        >Renda Variável</button>
        <button
          onClick={() => setFIOpen(true)}
          className="fab-context-button"
        >Renda fixa</button>
      </div>
    </>
  );
};

export { FabContext };
