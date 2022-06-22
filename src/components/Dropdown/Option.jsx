import React from "react";
import PropTypes from "prop-types";

class Option extends React.Component {
  static propTypes = {
    option: PropTypes.object,
    onSelect: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e) {
    e.preventDefault();
    this.props.onSelect(this.props.option);
  }

  render() {
    return (
      <li>
        <a href="/" onClick={this.onSelect}>
          <h3>{this.props.option.title}</h3>
        </a>

        <ul className="lower">
          {this.props.option.value.map((cat) => {
            return (
              <a key={cat} href="/">
                <li>{cat}</li>
              </a>
            );
          })}
        </ul>
      </li>
    );
  }
}

export default Option;
