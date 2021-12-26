import React from 'react';
import { withRouter } from 'react-router';
import { Container } from 'components/Container';
import { useDashboardHooks } from './hooks';
import { toBRL } from 'utils/toBRL';
import { FixedInterestCard, PortfolioCard } from 'components/Card';
import ir from 'assets/img/interest-rate.png';
import { PortfolioSelectedContext, usePortfolioSelectedHooks } from 'context/PortfolioSelectedContext';
import { AddCard } from 'components/AddCard';
import { Fab } from 'components/Fab';
import { NewPortfolioForm } from 'components/NewPortfolioForm';
import { FormDialog } from 'components/FormDialog';
import { PortfolioTransactionsForm } from 'components/PortfolioTransactionsForm';

const Dashboard = () => {
  const data = useDashboardHooks();
  const toggleOpen = () => data.setOpen(!data.open);
  const portfolioSelected = usePortfolioSelectedHooks(data.currentPortfolio);

  return (
    <Container>
      <h2 className="text-3xl font-bold">
        <small className="font-medium">Patrimônio consolidado</small>
        <br/>
        {toBRL(data.consolidatedAssets)}
      </h2>
      <PortfolioSelectedContext.Provider value={portfolioSelected}>
        <h3 className="text-xl my-5 font-bold">Carteiras</h3>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {data.portfolios.map((i, idx) => (
            <PortfolioCard
              portfolio={i}
              icon={ir}
              title={i.descricao}
              transactions={i.transacoes}
              onClick={(portfolio) => {
                data.selectPortfolio(portfolio);
                portfolioSelected.toggleOpen();
              }}
              key={idx}
            />
          ))}
          <PortfolioTransactionsForm/>
          <FormDialog formName="Nova carteira" onClose={toggleOpen} open={data.open}>
            <NewPortfolioForm onClose={toggleOpen}/>
          </FormDialog>
          <AddCard onClick={toggleOpen}/>
        </div>
        <h3 className="text-xl my-5 font-bold">Renda Fixa</h3>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {data.fixedInterestList?.map(i => (
            <FixedInterestCard fixedInterest={i} key={i.id} />
          ))}
        </div>
        <Fab/>
      </PortfolioSelectedContext.Provider>
    </Container>
  );
};

export default withRouter(Dashboard);
