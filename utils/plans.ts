import { IPlan, IPlanResponse } from '../shared/PlanInterface';

export const PLANS = ['plus', 'professional', 'visionary'];

const buildHeadline = (name: string): string => {
  switch (name) {
    case 'free':
      return 'The basics for private and secure communications';
    case 'plus':
      return 'Full-featured maibox with advanced protection';
    case 'professional':
      return 'ProtonMail for professionals and businesses';
    case 'visionary':
      return 'ProtonMail for families and small businesses';
  }
};

const buildFeatures = (name: string): string[] => {
  switch (name) {
    case 'free':
      return [];
    case 'plus':
      return [
        'Supports folders, labels, filters, auto-reply, IMAP/SMTP and more',
      ];
    case 'professional':
      return [
        'Catch all email, multi user managment, priority support and more',
      ];
    case 'visionary':
      return ['Includes all features', 'Priority support'];
  }
};

const buildObject = (plan: IPlanResponse): IPlan => {
  const newPlan = {
    name: plan.Name,
    cycle: plan.Cycle,
    amount: parseInt((plan.Pricing[plan.Cycle] / 100).toFixed(2)),
    currency: plan.Currency,
    pricing: plan.Pricing,
    maxAddresses: parseInt(plan.MaxAddresses),
    maxDomains: parseInt(plan.MaxDomains),
    maxUsers: parseInt(plan.MaxMembers),
    headline: buildHeadline(plan.Name),
    features: buildFeatures(plan.Name),
  };
  return newPlan;
};

const createFreePlan = (currency: string, cycle: number): IPlan => {
  const freePlan = {
    name: 'free',
    cycle: cycle,
    amount: 0,
    currency: currency,
    pricing: [],
    maxAddresses: 1,
    maxDomains: 0,
    maxUsers: 1,
    headline: buildHeadline('free'),
    features: buildFeatures('free'),
  };
  return freePlan;
};

export const buildPlans = (
  plans: IPlanResponse[],
  currency: string,
  cycle: number,
): IPlan[] => {
  const newPlans = plans
    .filter(item => item.Type === 1 && PLANS.includes(item.Name))
    .map(item => buildObject(item));

  return [createFreePlan(currency, cycle), ...newPlans];
};
