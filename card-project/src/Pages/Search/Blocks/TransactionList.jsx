const TransactionList = ({ transactions, customer }) => {
  return (
    <div className="search__customer-list">
      <h3>
        {customer.Name} {customer.Surname} əməliyyatları
      </h3>
      {transactions.length > 0 ? (
        <table className="search__table">
          <thead>
            <tr>
              <th>Əməliyyat ID</th>
              <th>Tarix</th>
              <th>Məbləğ</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => {
              const { TransactionID, TransactionDate, TransactionAmount } =
                transaction;
              return (
                <tr key={TransactionID}>
                  <td>{TransactionID}</td>
                  <td>{TransactionDate}</td>
                  <td>{TransactionAmount} AZN</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Bu hesab üçün əməliyyatlar tapılmadı.</p>
      )}
    </div>
  );
};

export default TransactionList;
