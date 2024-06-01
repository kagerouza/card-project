export const getLocalStorageData = () => {
    try {
      const localData = JSON.parse(localStorage.getItem("customerDataArray"));
      return localData && localData.length > 0 ? localData : null;
    } catch (error) {
      console.error("Xəta baş verdi", error);
      return null;
    }
  };
  
  export const updateLocalCustomerData = (updatedData) => {
    localStorage.setItem("customerDataArray", JSON.stringify(updatedData));
  };
  
  export const generateNewDebitCard = () => {
    return Math.floor(Math.random() * 1e16).toString().padStart(16, "0");
  };
  