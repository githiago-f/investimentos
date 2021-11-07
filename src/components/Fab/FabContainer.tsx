import { FormDialog } from 'components/FormDialog';
import React, { useState } from 'react';
import './FabConteiner.style.css';

type Props = {
  hidden: boolean;
}

const FabContext: React.FC<Props> = ({ hidden }) => {
  const [rvOpen, setRVOpen] = useState(false);
  const [rfOpen, setRFOpen] = useState(false);
  return (
    <>
      <FormDialog open={rvOpen} onClose={() => setRVOpen(false)} formName="Renda Variável">
        <h3>Teste</h3>
      </FormDialog>
      <div className={hidden ? 'invisible' : 'fab-context'} hidden={hidden}>
        <button
          onClick={() => setRVOpen(true)}
          className="fab-context-button"
        >Renda Variável</button>
        <button
          onClick={() => setRFOpen(true)}
          className="fab-context-button"
        >Renda fixa</button>
      </div>
    </>
  );
};

export { FabContext };
