const CustomerInfo = ({
  customerData: { Name, Surname, BirthDate, GSMNumber },
  debitCard,
  onGenerateCard,
}) => {
  return (
    <div>
      <h2 className="details__title">Müştəri Məlumatları</h2>
      <div className="details__customer">
        <p>
          <strong>Ad:</strong> {Name}
        </p>
        <p>
          <strong>Soyad:</strong> {Surname}
        </p>
        <p>
          <strong>Doğum Tarixi:</strong> {BirthDate}
        </p>
        <p>
          <strong>GSM Nömrəsi:</strong> {GSMNumber}
        </p>
        <div className="details__card-container">
          <div className="details__card-number">
            {debitCard || "**** **** **** ****"}
          </div>
        </div>
        <button onClick={onGenerateCard}>Yeni Debit Kart Yarat</button>
      </div>
    </div>
  );
};

export default CustomerInfo;
