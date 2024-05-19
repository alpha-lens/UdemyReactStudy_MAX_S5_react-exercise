import { calculateInvestmentResults } from '../util/investment.jsx';
import Investment from './Investment.jsx';

export default ({ values }) => {
  // console.log(
  //   calculateInvestmentResults({
  //     initialInvestment: values.INITIAL_INVESTMENT,
  //     annualInvestment: values.ANUAL_INVESTMENT,
  //     expectedReturn: values.EXPECTED_RETURN,
  //     duration: values.DURATION,
  //   })
  // );

  const investmentResult = calculateInvestmentResults({
    initialInvestment: Number(values.INITIAL_INVESTMENT),
    annualInvestment: Number(values.ANUAL_INVESTMENT),
    expectedReturn: Number(values.EXPECTED_RETURN),
    duration: Number(values.DURATION),
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <Investment
        initialInvestment={values.INITIAL_INVESTMENT}
        values={investmentResult}
      />
    </table>
  );
};
