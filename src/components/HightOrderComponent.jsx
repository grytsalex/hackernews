import React from "react";
import { Loading } from "./Loading";
import { Button } from "./Button";

const withLoading = (Component) => ({ isLoading, ...rest }) =>
  isLoading ? <Loading /> : <Component {...rest} />;

export const ButtonWithLoading = withLoading(Button);
