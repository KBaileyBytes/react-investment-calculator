export default function UserInput({ userInputs, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInputs.initialInvestment}
            onChange={onChange}
            required
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInputs.annualInvestment}
            onChange={onChange}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={userInputs.expectedReturn}
            onChange={onChange}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            value={userInputs.duration}
            onChange={onChange}
            required
          />
        </p>
      </div>
    </section>
  );
}
