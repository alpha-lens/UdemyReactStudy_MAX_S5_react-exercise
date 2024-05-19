export default (props) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="initial-investment">
          Initial investment
          <input
            type="number"
            id="initial-investment"
            defaultValue={0}
            onChange={(e) =>
              props.getValues('INITIAL_INVESTMENT', e.target.value)
            }
          />
        </label>
        <label htmlFor="anual-investment">
          anual investment
          <input
            type="number"
            id="anual-investment"
            defaultValue={0}
            onChange={(e) =>
              props.getValues('ANUAL_INVESTMENT', e.target.value)
            }
          />
        </label>

        <label htmlFor="expected-return">
          expected return
          <input
            type="number"
            id="expected-return"
            defaultValue={0}
            onChange={(e) => props.getValues('EXPECTED_RETURN', e.target.value)}
          />
        </label>
        <label htmlFor="duration">
          duration
          <input
            type="number"
            id="duration"
            defaultValue={0}
            onChange={(e) => props.getValues('DURATION', e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};
