import React from 'react';
import { withRouter } from 'react-router';
import { Container } from 'components/Container';
import { useDashboardHooks } from './hooks';
import { toBRL } from 'utils/toBRL';
import { Card } from 'components/Card';
import ir from 'assets/img/interest-rate.png';
import { PortfolioSelectedContext } from 'context/PortfolioSelectedContext';
import { AddCard } from 'components/AddCard';

const Dashboard = () => {
  const data = useDashboardHooks();

  return (
    <Container>
      <h2 className="text-3xl font-bold">
        <small className="font-medium">Patrimônio consolidado</small>
        <br/>
        {toBRL(data.consolidatedAssets)}
      </h2>
      <h3 className="text-xl my-5 font-bold">Carteiras</h3>
      <PortfolioSelectedContext.Provider value={{portfolio: data.currentPortfolio}}>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {data.portfolios.map((i, idx) => (
            <Card
              portfolio={i}
              icon={ir}
              title={i.descricao}
              transactions={i.transacoes}
              onClick={data.selectPortfolio}
              key={idx}
            />
          ))}
          <AddCard onClick={()=> {}}/>
        </div>
      </PortfolioSelectedContext.Provider>
    </Container>
  );
};

export default withRouter(Dashboard);
