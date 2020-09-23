import React, { Component } from "react";
import EdiText from "react-editext";

class AddEdiText extends Component {
  onSave = (val) => {
    console.log("Edited Value -> ", typeof val);

    this.props.handleChange(val);
  };

  render() {
    return (
      <EdiText
        showButtonsOnHover
        type="textarea"
        inputProps={{
          className: "textarea",
          placeholder: "Type your content here",
          style: {
            outline: "none",
            width: "890px",
            resize: "none",
            textAlign: "left",
          },
          rows: 4,
        }}
        value="How do you define real? If you're talking about what you can feel, what you can smell,\
        what you can taste and see, then real is simply electrical signals interpreted by your brain"
        onSave={this.onSave}
      />
    );
  }
}

export default AddEdiText;
