import React, { createRef } from "react";
import PropTypes from "prop-types";
import { RiArrowDropDownLine } from "react-icons/ri";

import Option from "./Option";
import "./dropdown.scss";

class Select extends React.Component {
  static propTypes = {
    options: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.onOpen = this.onOpen.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.catBox = createRef();
    this.btn = createRef();
    this.state = {
      selected: null,
      opened: false,
    };
  }

  onOpen() {
    this.setState({
      opened: !this.state.opened,
    });
  }

  onSelect(option) {
    this.setState(
      {
        selected: option,
        opened: false,
      },
      () => {
        //console.info(this.state);
      }
    );
  }

  onDocumentClick = (e) => {
    if (this.btn.current.contains(e.target)) {
      return;
    }
    if (!this.catBox.current.contains(e.target)) {
      this.setState({ opened: false });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.onDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onDocumentClick);
  }

  getOptions() {
    return this.props.options.map((o) => (
      <Option key={o.key} option={o} onSelect={this.onSelect} />
    ));
  }

  render() {
    let items = this.getOptions();
    let selected = "Shop by Category";
    let activeClass = this.state.opened ? "show" : "hide";
    let clicked = this.state.opened ? "active" : "";

    return (
      <div className={`select ${clicked}`} onClick={this.onOpen} ref={this.btn}>
        <div className="dp-title">
          <span>{selected}</span>
          <RiArrowDropDownLine size={40} />
        </div>
        <ul className={`upper ${activeClass}`} ref={this.catBox}>
          {items}
        </ul>
      </div>
    );
  }
}

export default Select;
