import React from "react";

import Select from "@/components/buttons/Select";
import {
  ButtonSize,
  ButtonVariant,
  OptionType,
} from "@/components/buttons/Select";

import enFlag from "@/icons/enflag.svg";
import vnFlag from "@/icons/vnflag.svg";

const options: OptionType[] = [
  {
    icon: enFlag,
    label: "English",
    key: "en",
  },
  {
    icon: vnFlag,
    label: "Tiếng Việt",
    key: "vn",
  },
];

type LanguageSelectType = {
  rightIcon?: boolean;
  size?: (typeof ButtonSize)[number];
  variant?: (typeof ButtonVariant)[number];
};

const LanguageSelect = React.forwardRef<HTMLButtonElement, LanguageSelectType>(
  ({ rightIcon, size, variant }, ref) => {
    return (
      <Select
        ref={ref}
        options={options}
        rightIcon={rightIcon}
        size={size}
        variant={variant}
      />
    );
  }
);

export default LanguageSelect;
