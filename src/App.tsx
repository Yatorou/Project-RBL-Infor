import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import NoPage from "./routes/NoPage";
import Todo_List from "./routes/Todo_List";
import Roadmap from "./routes/Roadmap";
import Account from "./routes/Account";
import Settings from "./routes/Settings";
import Information from "./routes/Information";

export default function App() {
  return (
    <Router>
      <div className=" h-screen w-full flex">
        <div className=" m-3 w-full bg-white flex rounded-lg">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <div className=" p-3 rounded-md bg-red">
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="roadmap" element={<Roadmap />} />
                  <Route path="todolist" element={<Todo_List />} />
                  <Route path="account" element={<Account />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="information" element={<Information />} />
                  <Route path="*" element={<NoPage />} />
                </Routes>
              </div>
              <label
                htmlFor="my-drawer"
                className="btn btn-primary drawer-button fixed right-6 bottom-6 shadow-md"
              >
                Dashboard
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              {/* Sidebar content here */}
              <ul className="menu p-2 min-h-full text-base-content bg-base-200 w-56 flex pb-3 pr-3">
                <li>
                  <h2 className="menu-title">Menu</h2>
                  <ul>
                    <Link to="/">
                      <li>
                        <a>Home</a>
                      </li>
                    </Link>
                    <Link to="todolist">
                      <li>
                        <a>Todo List</a>
                      </li>
                    </Link>
                    <Link to="roadmap">
                      <li>
                        <a>Roadmap</a>
                      </li>
                    </Link>
                  </ul>
                </li>
                <div className=" flex-1"></div>
                <li>
                  <h2 className="menu-title">App</h2>
                  <ul>
                    <Link to="account">
                      <li>
                        <a>Account</a>
                      </li>
                    </Link>
                    <Link to="settings">
                      <li>
                        <a>Settings</a>
                      </li>
                    </Link>
                    <Link to="information">
                      <li>
                        <a>Information</a>
                      </li>
                    </Link>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
