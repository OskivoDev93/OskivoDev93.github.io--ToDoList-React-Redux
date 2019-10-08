import { connect } from "react-redux";
import { toggleTask } from "../actions";
import TaskList from "../components/taskList";
import { VisibilityFilters } from "../actions";

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return tasks;
    case VisibilityFilters.SHOW_COMPLETED:
      return tasks.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return tasks.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(toggleTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
