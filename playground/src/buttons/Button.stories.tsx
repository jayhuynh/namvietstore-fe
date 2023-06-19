import React from "react";

import type { Story, StoryDefault } from "@ladle/react";
import { GoPlus } from "react-icons/go";

import { Button } from "@namviet-fe/core-ui";
import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";
export default {
  title: "@nv-fe/core-ui/buttons/Button",
} satisfies StoryDefault<typeof Button>;

export const Default: Story = () => (
  <Button variant="default" size="base" rightIcon={GoPlus} content="Đọc thêm" />
);

export const Large: Story = () => (
  <Button
    variant="default"
    size="large"
    rightIcon={GoPlus}
    content="Đọc thêm"
  />
);

export const Small: Story = () => (
  <Button
    variant="default"
    size="small"
    rightIcon={GoPlus}
    content="Đọc thêm"
  />
);

export const LeftIcon: Story = () => (
  <Button variant="default" size="base" leftIcon={GoPlus} content="Đọc thêm" />
);

export const Loading: Story = () => (
  <Button
    variant="default"
    size="base"
    leftIcon={GoPlus}
    content="Đọc thêm"
    isLoading={true}
  />
);

export const Disabled: Story = () => (
  <Button
    variant="default"
    size="base"
    rightIcon={GoPlus}
    content="Đọc thêm"
    disabled={true}
  />
);
