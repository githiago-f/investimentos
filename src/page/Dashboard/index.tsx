import React, { useContext } from 'react';
import { Container } from 'components/Container';
import { AuthenticationContext } from 'context/AuthenticationContext';
import { withRouter } from 'react-router';
import { Card } from 'components/Card';

const Dashboard = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <Container>
      <h3>Olá, {user?.nome}!</h3>
      <div className="flex">
        <Card/>
        <Card/>
      </div>
    </Container>
  );
};

export default withRouter(Dashboard);
