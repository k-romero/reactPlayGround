import React from "react";

export default class Welcome extends React.Component {
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
            Kevin A. Romero
          </h2>
        </div>
        <div className="my-row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Developer & Designer
            </h3>
            <p className="paragraph">
              My story begins with a box and some paper. The paper was an old
              composition notebook whose pages were already discolored from age
              and the box contained a random assortment of whatever pens,
              pencils, highlighters and markers my grandmother collected over
              the years. With those tools I began my creative journey and
              developed a deep love of art & design. Lately I've been diving
              into all things development. My core focus these days is becoming
              a polygot developer. Visit my{" "}
              <a href="https://github.com/k-romero" className="inline-link">
                GitHub
              </a>{" "}
              to view my latest work.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
