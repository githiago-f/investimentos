import React, { useContext } from 'react';
import { Container } from 'components/Container';
import { AuthenticationContext } from 'context/AuthenticationContext';
import { withRouter } from 'react-router';
import { Card } from 'components/Card';

import fixedInterest from 'assets/img/interest-rate.png';
import { Transaction } from 'components/Transaction';

const Dashboard = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <Container>
      <h2 className="text-3xl font-bold">
        <small className="font-medium">Total investido</small>
        <br/>
        R$ 1.000.000,00
      </h2>
      <div className="mt-10 grid gap-5 grid-cols-2">
        <Card
          icon={fixedInterest}
          title='Renda fixa'
          value={'R$ 1.000,00'}
        />
        <Card
          icon={fixedInterest}
          title='Renda variavel'
          value={'R$ 1.000,00'}
        />
      </div>
      <div className="mt-5">
        <div className="sm:w-6/12">
          <h3 className="text-xl font-bold pb-5">Transações</h3>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
        </div>
      </div>
    </Container>
  );
};

export default withRouter(Dashboard);
