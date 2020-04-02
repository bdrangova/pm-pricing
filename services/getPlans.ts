import fetch from 'isomorphic-unfetch';

const requestPlans = async (currency = 'EUR', cycle = 1) => {
  const myInit = <any>{
    mode: 'cors',
    cache: 'default',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'x-pm-appversion': 'Other',
      'x-pm-apiversion': '3',
      Accept: 'application/vnd.protonmail.v1+json',
    },
  };

  const response = await fetch(
    `https://api.protonmail.ch/payments/plans?Currency=${currency}&Cycle=${cycle}`,
    myInit,
  );
  const result = await response.json();

  return result.Plans;
};

export { requestPlans };
