import React from "react";
import ReactQuill from "react-quill-2";
import quillToolbarHandlers from "./RTE_Handlers";

export default class RTE extends React.Component {
  constructor() {
    super();
    this.state = {
      html: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    console.log("component Mounted");
  }

  componentDidUpdate() {
    // console.log("component did update", this.state);
  }

  componentWillUnmount() {
      //clean
  }
  handleChange(html) {
    if (this.state.hmtl !== html) this.setState({ html });
  }
  render() {
    return (
      <>
        <CustomToolbar />
        <ReactQuill modules={RTE.modules} onChange={this.handleChange} />
      </>
    );
  }
}

RTE.modules = {
  toolbar: {
    container: "#quill-toolbar",
    handlers: quillToolbarHandlers,
  },
};
function CustomToolbar() {
  return (
    <div id="quill-toolbar">
      <select className="ql-size" value="normal" readOnly>
        <option value="tiny">tiny</option>
        <option value="small">small</option>
        <option value="normal">normal</option>
        <option value="large">large</option>
        <option value="huge">huge</option>
      </select>
      {/* <select className="ql-align" defaultValue="">
      <option></option>
      <option value="center"></option>
      <option value="right"></option>
    </select> */}
      <button className="ql-bold">B</button>
    </div>
  );
}
