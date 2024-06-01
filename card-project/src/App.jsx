import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CustomerCreate from "./Pages/Create/Components/CustomerCreate";
import SearchCustomer from "./Pages/Search/Components/SearchCustomer";
import CustomerDetails from "./Pages/Create/Components/CustomerDetails";
import RemoveCustomer from "./Pages/Search/Components/RemoveCustomer";
import Audit from "./Pages/Audit/Audit";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">
            <img
              src={`https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Azercell-logo-3.svg/2560px-Azercell-logo-3.svg.png`}
              alt="Logo"
              className="navbar-logo"
            />
          </Link>
          <ul>
            <li>
              <Link to="/">Yeni Müştəri Yarat</Link>
            </li>
            <li>
              <Link to="/search">Müştəri Axtar</Link>
            </li>
            <li>
              <Link to="/audit">Audit</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" Component={CustomerCreate} />
          <Route path="/customer-details" Component={CustomerDetails} />
          <Route path="/search" Component={SearchCustomer} />
          <Route path="/audit" Component={Audit} />
          <Route path="/remove/:cardNumber" Component={RemoveCustomer} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
