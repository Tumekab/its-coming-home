import React from "react";
class Loading extends React.Component {
  render() {
    const { children, loaded } = this.props;
    return loaded ? children : (
      <section>
        <div className="spinner-border text-danger" role="status">
        </div>
        <div className="loading-message">
            <h6 className="load-text">Been here a while? Looks like something might have gone wrong. <br/> Click the button to go to home.</h6>
        </div>
      </section>
    );
  }
}

export default Loading;