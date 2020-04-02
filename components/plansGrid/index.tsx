import { ReactElement } from 'react';
import { IPlan } from '../../shared/PlanInterface';
import PlanCard from '../planCard';
import { Grid } from './styles';

interface IPlansGrid {
  plans: IPlan[];
}

const PlansGrid = ({ plans }: IPlansGrid): ReactElement => (
  <Grid>
    {plans ? plans.map(plan => <PlanCard plan={plan} key={plan.name} />) : null}
  </Grid>
);

export default PlansGrid;
