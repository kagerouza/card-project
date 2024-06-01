export const filterCustomers = (
  searchTerm,
  customerList,
  customerDataArray
) => {
  const filteredFromJson = customerList.filter(
    (customer) =>
      customer.Name.toLowerCase().includes(searchTerm) ||
      customer.Surname.toLowerCase().includes(searchTerm) ||
      customer.GSMNumber.includes(searchTerm) ||
      customer.CardNumber.includes(searchTerm)
  );

  const filteredFromLocalStorage = customerDataArray.filter(
    (customer) =>
      customer.Name.toLowerCase().includes(searchTerm) ||
      customer.Surname.toLowerCase().includes(searchTerm) ||
      customer.GSMNumber.includes(searchTerm) ||
      customer.CardNumber.includes(searchTerm)
  );

  return [...filteredFromJson, ...filteredFromLocalStorage];
};
