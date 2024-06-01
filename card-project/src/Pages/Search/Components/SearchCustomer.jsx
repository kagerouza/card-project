import { useState, useEffect } from "react";
import CustomerList from "../Blocks/CustomerList";
import TransactionList from "../Blocks/TransactionList";
import "../Assets/stylesSearch.css";
import customerList from "../../../MockData/CustomerList.json";
import transactionList from "../../../MockData/TransactionList.json";
import SearchBar from "../Blocks/SearchBar";
import { filterCustomers } from "../Utils/Helpers";
import initialState from '../Constants'

const SearchCustomer = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const customerData = localStorage.getItem("customerDataArray");
    if (customerData) {
      setState((prevState) => ({
        ...prevState,
        customerDataArray: JSON.parse(customerData),
      }));
    }
  }, []);

  const handleSearch = () => {
    const filtered = filterCustomers(state.searchTerm, customerList, state.customerDataArray);

    setState((prevState) => ({
      ...prevState,
      filteredCustomers: filtered,
      selectedCustomer: null,
      transactions: [],
    }));
  };

  const handleTransactionClick = (customer) => {
    const customerTransactions = transactionList.filter(
      (transaction) => transaction.CustomerID === customer.CustomerID
    );
    setState((prevState) => ({
      ...prevState,
      selectedCustomer: customer,
      transactions: customerTransactions,
    }));
  };

  const handleInputChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      searchTerm: e.target.value,
    }));
  };

  return (
    <div className="search__container">
      <h2>Müştəri Axtar</h2>
      <SearchBar
        searchTerm={state.searchTerm}
        onInputChange={handleInputChange}
        onSearch={handleSearch}
      />

      {state.filteredCustomers.length > 0 && (
        <CustomerList
          customers={state.filteredCustomers}
          onTransactionClick={handleTransactionClick}
        />
      )}

      {state.selectedCustomer && (
        <TransactionList
          transactions={state.transactions}
          customer={state.selectedCustomer}
        />
      )}
    </div>
  );
};

export default SearchCustomer;
