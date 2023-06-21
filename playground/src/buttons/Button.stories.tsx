import React from "react";

import type { Story, StoryDefault } from "@ladle/react";
import { GoPlus } from "react-icons/go";

import { Button, type ButtonProps } from "@namviet-fe/core-ui";
import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";
export default {
  title: "@nv-fe/core-ui/buttons/Button",
} satisfies StoryDefault<typeof Button>;

export const Default: Story<ButtonProps> = () => (
  <div style={{ float: "right" }}>
    <Button
      variant="default"
      size="base"
      rightIcon={GoPlus}
      content="Đọc thêm"
      link="https://www.google.com/"
    />
  </div>
);

export const Large: Story<ButtonProps> = () => (
  <div style={{ float: "right" }}>
    <Button
      variant="default"
      size="large"
      rightIcon={GoPlus}
      content="Đọc thêm"
      link="https://www.google.com/"
    />
  </div>
);

export const Small: Story<ButtonProps> = () => (
  <div style={{ float: "right" }}>
    <Button
      variant="default"
      size="small"
      rightIcon={GoPlus}
      content="Đọc thêm"
      link="https://www.google.com/"
    />
  </div>
);

export const LeftIcon: Story<ButtonProps> = () => (
  <div style={{ float: "right" }}>
    <Button
      variant="default"
      size="base"
      leftIcon={GoPlus}
      content="Đọc thêm"
      link="https://www.google.com/"
    />
  </div>
);

export const Loading: Story<ButtonProps> = () => (
  <div style={{ float: "right" }}>
    <Button
      variant="default"
      size="base"
      leftIcon={GoPlus}
      content="Đọc thêm"
      isLoading={true}
      link="https://www.google.com/"
    />
  </div>
);

export const Disabled: Story<ButtonProps> = () => (
  <div style={{ float: "right" }}>
    <Button
      variant="default"
      size="base"
      rightIcon={GoPlus}
      content="Đọc thêm"
      disabled={true}
      link="https://www.google.com/"
    />
  </div>
);
