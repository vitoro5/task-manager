import React from "react";

import { FullWidthButton, CommonButton } from "./styles";

function Button(props) {
  if (props.fullwidth) {
    return <FullWidthButton {...props}>{props.children}</FullWidthButton>;
  } else {
    return <CommonButton {...props}>{props.children}</CommonButton>;
  }
}

export default Button;
