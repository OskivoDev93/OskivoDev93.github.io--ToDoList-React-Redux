import React from "react";
import Footer from "./Footer";
import AddTask from "../containers/addTask";
import VisibleTaskList from "../containers/visibleTaskList";

const App = () => (
  <div>
    <AddTask />
    <VisibleTaskList />
    <Footer />
  </div>
);

export default App;
