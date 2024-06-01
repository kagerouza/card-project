import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HandleForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Surname: "",
    BirthDate: "",
    GSMNumber: "+994",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const createDate = new Date().toString(); 

    let customerData = JSON.parse(localStorage.getItem("customerDataArray")) || [];

    const dataWithCreateDate = {
      ...formData,
      createDate,
    };
    customerData.push(dataWithCreateDate);
    localStorage.setItem("customerDataArray", JSON.stringify(customerData));
    navigate("/customer-details");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    e.target.setCustomValidity("");

    let isValid = true;
    if (name === "Name" || name === "Surname") {
      isValid = /^[a-zA-Z]*$/.test(value);
    } else if (name === "GSMNumber") {
      isValid = value.startsWith("+994") && /^\+994\d{0,9}$/.test(value);
    }

    if (isValid) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  return { formData, handleSubmit, handleChange };
};

export default HandleForm;
