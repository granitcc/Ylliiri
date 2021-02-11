import React, { Component } from "react";
class FrequentylyAsk extends Component {
  constructor() {
    super();
    this.state = {
      showHideFName: true,
      showHidefName: true,
      showHideAName: true,
      showHideBName: true,
      showHideCName: true,
    };

    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showHideCName":
        this.setState({ showHideCName: !this.state.showHideCName });
        break;
      case "showHidecName":
        this.setState({ showHidecName: !this.state.showHidecName });
        break;

      case "showHideBName":
        this.setState({ showHideBName: !this.state.showHideBName });
        break;
      case "showHidebName":
        this.setState({ showHidebName: !this.state.showHidebName });
        break;

      case "showHideFName":
        this.setState({ showHideFName: !this.state.showHideFName });
        break;
      case "showHideLName":
        this.setState({ showHideLName: !this.state.showHideLName });
        break;
      case "showHidefName":
        this.setState({ showHidefName: !this.state.showHidefName });
        break;

      case "showHideAName":
        this.setState({ showHideAName: !this.state.showHideAName });
        break;

      case "showHideaName":
        this.setState({ showHideaName: !this.state.showHideaName });
        break;

      case "showHidelName":
        this.setState({ showHidelName: !this.state.showHidelName });
        break;
      default:
    }
  }

  render() {
    const { showHideFName, showHideLName } = this.state;
    const { showHidefName, showHidelName } = this.state;

    const { showHideAName, showHideaName } = this.state;
    const { showHideBName, showHidebName } = this.state;
    const { showHideCName, showHidecName } = this.state;

    return (
      <div className="toki">
        <div className="column">
          <div className="row">
            <div className="on">
              {showHideCName && (
                <div>
                  <p className="bold">
                    {" "}
                    <span className="questions">?</span> How does it work ?
                  </p>
                </div>
              )}
              {showHidecName && (
                <p className="bold">
                  {" "}
                  <hr />
                  Answer:
                </p>
              )}
            </div>

            <div className="off">
              <td>
                <button
                  className="offi"
                  onClick={() => this.hideComponent("showHidecName")}
                >
                  +
                </button>
              </td>
            </div>
          </div>

          <div className="row">
            <div className="on">
              {showHideBName && (
                <p className="bold">
                  {" "}
                  <span className="questions">?</span> How we desgine an app for
                  your business{" "}
                </p>
              )}
              {showHidebName && (
                <p className="bold">
                  {" "}
                  <hr />
                  Answer:
                </p>
              )}
            </div>

            <div className="off">
              <td>
                <button
                  className="offi"
                  onClick={() => this.hideComponent("showHidebName")}
                >
                  +
                </button>
              </td>
            </div>
          </div>

          <div className="row">
            <div className="on">
              {showHideFName && (
                <p className="bold">
                  {" "}
                  <span className="questions">?</span> How much does it cost to
                  design an app like Ally ?
                </p>
              )}
              {showHideLName && (
                <p className="bold">
                  {" "}
                  <hr />
                  Answer:
                </p>
              )}
            </div>

            <div className="off">
              <td>
                <button
                  className="offi"
                  onClick={() => this.hideComponent("showHideLName")}
                >
                  +
                </button>
              </td>
            </div>
          </div>

          <div className="row">
            <div className="on">
              {showHideAName && (
                <p className="bold">
                  {" "}
                  <span className="questions">?</span> What affects the app
                  design cost?
                </p>
              )}
              {showHideaName && (
                <p className="bold">
                  {" "}
                  <hr />
                  Answer:
                </p>
              )}
            </div>

            <div className="off">
              <td>
                <button
                  className="offi"
                  onClick={() => this.hideComponent("showHideaName")}
                >
                  +
                </button>
              </td>
            </div>
          </div>

          <div className="row">
            <div className="on">
              {showHidefName && (
                <p className="bold">
                  {" "}
                  <span className="questions">?</span> Steps of mobile app UI/UX
                  process ?
                </p>
              )}
              {showHidelName && (
                <p className="bold">
                  {" "}
                  <hr />
                  Answer:
                </p>
              )}
            </div>

            <div className="off">
              <td>
                <button
                  className="offi"
                  onClick={() => this.hideComponent("showHidelName")}
                >
                  +
                </button>
              </td>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrequentylyAsk;
