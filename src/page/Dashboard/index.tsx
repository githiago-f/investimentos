import React, { useContext } from 'react';
import { Container } from 'components/Container';
import { AuthenticationContext } from 'context/AuthenticationContext';
import { withRouter } from 'react-router';

const Dashboard = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <Container>
      <h3>Bem vindo, {user?.nome}! </h3>
    </Container>
  );
};

export default withRouter(Dashboard);
