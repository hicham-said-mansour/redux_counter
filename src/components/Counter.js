import { connect } from "react-redux";

function Counter(props) {
  const handleIncrease = () => {
    props.dispatch({
      type: "INCREMENT",
    });
  };
  const handleDecrease = () => {
    props.dispatch({
      type: "DECREMENT",
    });
  };

  return (
    <div>
      <h1> Counter </h1>
      <h1> {props.count} </h1>
      <button onClick={handleIncrease}> Increase </button>
      <button onClick={handleDecrease}> Decrease </button>
      {/* <button onClick={this.props.handleReset}> Reset </button>     */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Counter);
