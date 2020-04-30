import React from "react";

export default class ProjCard extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  handleClick() {
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle("proj-card-clicked");
  }

  render() {
    return (
      <div
        ref={this.wrapperRef}
        className="proj-card"
        onClick={() => this.handleClick()}
      >
        <div className="">
          <h2 className="heading-secondary heading-secondary-light">
            {this.props.heading}
          </h2>
        </div>
        <div className="">
          <div className="">
            <h3 className="heading-tertiary">{this.props.subHeading}</h3>
            <img
              className=""
              src={this.props.image}
              alt="portfolio-items"
            ></img>
            <p className="paragraph">
              {this.props.body}
              <a href={`/projects/${this.props.link}`} className="inline-link">
                {this.props.linkTitle}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
