import { ReactElement } from 'react';
import { IPlan } from '../../shared/PlanInterface';
import {
  handleCycleLine,
  handleCurrencyLine,
  handleAddressesLine,
  handleDomainLine,
  handleStorageLine,
} from './helpers';
import {
  CardWrapper,
  TitleWrapper,
  BodyWrapper,
  Price,
  ButtonWrapper,
  Headline,
  PriceRow,
  PopularLine,
} from './styles';

interface IPlanCard {
  plan: IPlan;
}

const PlanCard = ({ plan }: IPlanCard): ReactElement => {
  const { name, currency, amount, cycle, maxUsers, features, headline } = plan;
  return (
    <CardWrapper>
      {name === 'plus' ? <PopularLine>MOST POPULAR</PopularLine> : ''}
      <TitleWrapper>
        <h3>{name.toUpperCase()}</h3>
        <PriceRow>
          {handleCurrencyLine(currency)} <Price>{amount}</Price>/
          {handleCycleLine(cycle)}
        </PriceRow>
        <Headline>{headline}</Headline>
      </TitleWrapper>
      <BodyWrapper>
        <ul>
          <li>
            {maxUsers} user{maxUsers > 1 ? 's' : ''}
          </li>
          <li>{handleStorageLine(name)}</li>
          <li>{handleAddressesLine(plan)}</li>
          <li>{handleDomainLine(plan)}</li>
          {features ? features.map(item => <li key={item}>{item}</li>) : ''}
          <li>ProtonVPN (optional) *</li>
        </ul>
      </BodyWrapper>
      <ButtonWrapper>
        <button>Select</button>
      </ButtonWrapper>
    </CardWrapper>
  );
};

export default PlanCard;
