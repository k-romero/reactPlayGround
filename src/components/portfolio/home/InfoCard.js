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
        className="info-card"
        onClick={() => this.handleClick()}
      >
        <div className="">
          <h2 className="u-margin-bottom-medium heading-secondary-alt">
            {this.props.cardHeading}
          </h2>
        </div>
        <div className="">
          <div className="">
            <h3 className="heading-tertiary u-margin-bottom-small">
              {this.props.cardTitle}
            </h3>
            <p className="paragraph not-show">
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
