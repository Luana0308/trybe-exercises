import React from "react";
import './App.css'

class Pokemon extends React.Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
    } = this.props.Pokemon;
    return (
      <div className="box-pokemon">
        <div className="box-info-pokemon">
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {value} {measurementUnit}
          </p>
        </div>
        <div className="box-image">
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}

export default Pokemon;
