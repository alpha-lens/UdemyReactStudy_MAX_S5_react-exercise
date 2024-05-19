import { formatter } from '../util/investment.jsx';

export default ({ values, initialInvestment }) => {
  initialInvestment = Number(initialInvestment);
  // let result = {
  //   ...value,
  //   interest: formatter(value.interest),
  //   valueEndOfYear: formatter(value.valueEndOfYear),
  //   annualInvestment: formatter(value.annualInvestment),
  // };

  console.log(values);

  function rebase(value) {
    const AnnualInvestment = value.annualInvestment;

    const Year = value.year;
    const InvestmentValue = value.valueEndOfYear;
    const Interest = value.interest;
    const TotalInterest =
      InvestmentValue - (Year * AnnualInvestment + initialInvestment);
    const InvestedCapital = InvestmentValue - TotalInterest;

    return [
      Year,
      formatter.format(InvestmentValue),
      formatter.format(Interest),
      formatter.format(TotalInterest),
      formatter.format(InvestedCapital),
    ];
  }

  const result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(values[i]);
  }

  return (
    <tbody>
      {values.map((value) => (
        <tr key={value.year}>
          <td>{rebase(value)[0]}</td>
          <td>{rebase(value)[1]}</td>
          <td>{rebase(value)[2]}</td>
          <td>{rebase(value)[3]}</td>
          <td>{rebase(value)[4]}</td>
        </tr>
      ))}
    </tbody>
  );

  // return (
  //   <tr>
  //     <td>{value.year}</td> {/* Year */}
  //     <td>{value.valueEndOfYear}</td> {/* Investment Value */}
  //     <td>{value.interest}</td> {/* Interest (Year) */}
  //     <td>
  //       {value.valueEndOfYear - (value.year * value.annualInvestment + initialInvestment)}
  //     </td>
  //     {/* Total Interest */}
  //     <td>{value.valueEndOfYear - value.annualInvestment}</td>
  //     {/* Invested Capital */}
  //   </tr>
  // );
};
// value.valueEndOfYear-(value.year * value.annualInvestment+initialInvestment)
// values.valueEndOfYear - value.annualInvestment
// const result = [Number(value.year), Number()]
