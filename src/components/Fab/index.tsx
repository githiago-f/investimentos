import React, { useState } from 'react';
import plusSymbol from 'assets/img/plus.svg';
import { FabContext } from './FabContainer';

type Props = {
};

const Fab: React.FC<Props> = () => {
  const [closed, setClosed] = useState(true);
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end">
      <FabContext hidden={closed}/>
      <button
        title="Criar um ativo"
        onClick={() => setClosed(!closed)}
      >
        <img src={plusSymbol} alt="Plus icon" />
      </button>
    </div>
  );
};

export { Fab };
