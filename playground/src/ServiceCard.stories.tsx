import type { Story, StoryDefault } from "@ladle/react";

import React from "react";

import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

import { ServiceCard } from "@namviet-fe/core-ui";
import { ContentType } from "@namviet-fe/core-ui";

const content: ContentType = {
  icon: "",
  title: "Sản phẩm",
  description: "Đội ngũ giàu kinh nghiệm, có chuyên môn",
};

export default {
  title: "@nv/components/ServiceCard",
} satisfies StoryDefault<typeof ServiceCard>;

export const Default: Story = () => <ServiceCard content={content} />;

export const Dark: Story = () => (
  <ServiceCard content={content} variant="dark" />
);

export const Large: Story = () => (
  <ServiceCard content={content} size="large" />
);

export const Small: Story = () => (
  <ServiceCard content={content} size="small" />
);
