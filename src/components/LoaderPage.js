import React from "react";
import Loader from "react-loader-spinner";
class Loaderpage extends React.Component {
  //other logic
  render() {
    return (
      <div>
        <Loader
          type="Circles"
          color="#0029FF"
          height={70}
          width={70}
          timeout={70000}
        />
      </div>
    );
  }
}
export default Loaderpage;
