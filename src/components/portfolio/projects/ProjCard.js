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
          <img className="" src={this.props.image} alt="portfolio-items"></img>
          <div className="proj-card-deets">
            <h3 className="heading-tertiary">{this.props.subHeading}</h3>
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
