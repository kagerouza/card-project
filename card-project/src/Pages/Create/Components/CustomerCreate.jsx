import "../Assets/stylesCreate.css";
import HandleForm from "../Utils/HandleForm";

const CustomerCreate = () => {
  const {
    formData: { Name, Surname, BirthDate, GSMNumber },
    handleSubmit,
    handleChange,
  } = HandleForm();

  return (
    <div className="create__customer">
      <div className="create__form-container">
        <h2>Yeni Müştəri Yarat</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="create__form-label">
              Ad
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              value={Name}
              placeholder="John"
              onInvalid={(name) =>
                name.target.setCustomValidity("Ad boş qoyula bilməz")
              }
              onChange={handleChange}
              required
              className="create__form-input"
            />
          </div>
          <div>
            <label htmlFor="surname" className="create__form-label">
              Soyad
            </label>
            <input
              type="text"
              id="surname"
              name="Surname"
              value={Surname}
              onInvalid={(sName) =>
                sName.target.setCustomValidity("Soyad boş qoyula bilməz")
              }
              placeholder="Danielson"
              onChange={handleChange}
              required
              className="create__form-input"
            />
          </div>
          <div>
            <label htmlFor="birthDate" className="create__form-label">
              Doğum Tarixi
            </label>
            <input
              type="date"
              id="birthDate"
              name="BirthDate"
              value={BirthDate}
              onInvalid={(sName) =>
                sName.target.setCustomValidity("Doğum Tarixi boş qoyula bilməz")
              }
              onChange={handleChange}
              required
              className="create__form-input"
            />
          </div>
          <div>
            <label htmlFor="gsmNumber" className="create__form-label">
              GSM Nömrəsi
            </label>
            <input
              type="text"
              id="gsmNumber"
              name="GSMNumber"
              value={GSMNumber}
              pattern="^\+994\d{9}$"
              onInvalid={(gsm) =>
                gsm.target.setCustomValidity(
                  "GSM nömrəsi +994 formatında olmalı və 9 rəqəmdən ibarət olmalıdır"
                )
              }
              onChange={handleChange}
              required
              className="create__form-input"
            />
          </div>
          <button type="submit" className="create__form-btn">
            Təsdiqlə
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerCreate;
