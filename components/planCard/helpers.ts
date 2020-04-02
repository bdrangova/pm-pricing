import { IPlan } from '../../shared/PlanInterface';

export const handleCycleLine = (cycle: number): string => {
  switch (cycle) {
    case 1:
      return 'mo';
    case 12:
      return 'year';
    case 24:
      return '2 years';
  }
};

export const handleCurrencyLine = (currency: string): string => {
  switch (currency) {
    case 'EUR':
      return '\u20AC';
    case 'USD':
      return '\u0024';
    case 'CHF':
      return 'fr';
  }
};

export const handleStorageLine = (name: string): string => {
  switch (name) {
    case 'free':
      return '500 MB storage';
    case 'plus':
      return '5 GB storage *';
    case 'professional':
      return '5 GB storage per user^*';
    case 'visionary':
      return '20 GB storage';
  }
};

export const handleAddressesLine = (plan: IPlan) => {
  switch (plan.name) {
    case 'free':
      return `${plan.maxAddresses} address`;
    case 'plus':
      return `${plan.maxAddresses} addresses *`;
    case 'professional':
      return `${plan.maxAddresses} addresses per user *`;
    case 'visionary':
      return `${plan.maxAddresses} addresses`;
  }
};

export const handleDomainLine = (plan: IPlan) => {
  switch (plan.name) {
    case 'free':
      return `No domain support`;
    case 'plus':
    case 'professional':
    case 'visionary':
      return `Supports ${plan.maxDomains} domain${
        plan.maxDomains > 1 ? 's' : ''
      } *`;
  }
};
