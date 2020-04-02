export interface IPlan {
  name: string;
  cycle: number;
  amount: number;
  currency: string;
  pricing: {
    [id: number]: number;
  };
  maxAddresses: number;
  maxDomains: number;
  maxUsers: number;
  headline: string;
  features: string[];
}

export interface IPlanResponse {
  Name: string;
  Cycle: number;
  Type: number;
  Amount: number;
  Currency: string;
  MaxAddresses: string;
  MaxDomains: string;
  MaxMembers: string;
  Pricing: {
    [id: number]: number;
  };
}
