import React from "react";

export default class InfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  handleClick() {
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle("is-section-open");
  }

  render() {
    return (
      <div
        ref={this.wrapperRef}
        className="section-about"
        onClick={() => this.handleClick()}
      >
        <div className="">
          <h2 className="u-margin-bottom-medium heading-secondary heading-secondary-light">
            {this.props.cardHeading}
          </h2>
        </div>
        <div className="my-row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              {this.props.cardTitle}
            </h3>
            <p className="paragraph">
              {this.props.cardBody}
              <a href={this.props.link} className="inline-link">
                {this.props.linkTitle}
              </a>
              {this.props.cardBodyEnd}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
