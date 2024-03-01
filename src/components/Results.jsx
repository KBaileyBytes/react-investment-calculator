import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  const calculatedResults = results.map((result, i) => {
    return {
      totalInterest: results
        .slice(0, i + 1)
        .reduce((acc, val) => acc + val.interest, 0),
      ...result,
    };
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
      <tbody>
        {calculatedResults?.map((result, i) => {
          return (
            <tr key={i}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.totalInterest)}</td>
              <td>
                {formatter.format(result.valueEndOfYear - result.totalInterest)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
