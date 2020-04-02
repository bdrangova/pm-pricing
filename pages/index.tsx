import { useState, ReactElement } from 'react';
import { IPlan } from '../shared/PlanInterface';
import { requestPlans } from '../services/getPlans';
import { buildPlans } from '../utils/plans';
import PlansGrid from '../components/plansGrid';
import { Container, Dropdowns } from '../styles';

interface IIndex {
  plans: IPlan[];
}
const Index = ({ plans }: IIndex): ReactElement => {
  const [plansState, setPlans] = useState<IPlan[]>(plans);
  const [currency, setCurrency] = useState<string>('EUR');
  const [cycle, setCycle] = useState<number>(1);

  const changeCurrency = async e => {
    const value = e.target.value;
    setCurrency(value);
    const plans = await requestPlans(value, cycle);
    setPlans(buildPlans(plans, value, cycle));
  };

  const changeCycle = async e => {
    const value = parseInt(e.target.value);
    setCycle(value);
    const plans = await requestPlans(currency, value);
    setPlans(buildPlans(plans, currency, value));
  };

  return (
    <Container>
      <h2>Plans & Prices</h2>
      <Dropdowns>
        <select name='cycle' onChange={changeCycle}>
          <option value='1'>Monthly</option>
          <option value='12'>Annually</option>
          <option value='24'>2 years</option>
        </select>
        <select name='currency' onChange={changeCurrency}>
          <option value='EUR'>&euro; Euro</option>
          <option value='USD'>&#36; Usd</option>
          <option value='CHF'>CHF</option>
        </select>
      </Dropdowns>
      <PlansGrid plans={plansState} />
    </Container>
  );
};

Index.getInitialProps = async function() {
  const plans = await requestPlans();

  return {
    plans: buildPlans(plans, 'EUR', 1),
  };
};

export default Index;
