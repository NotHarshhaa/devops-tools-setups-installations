"use client";

import * as React from "react";

import {
  ControlGroup,
  ControlGroupItem,
} from "@/registry/new-york/ui/control-group";
import {
  InputBase,
  InputBaseControl,
  InputBaseInput,
} from "@/registry/new-york/ui/input-base";
import {
  PhoneInput,
  PhoneInputCountrySelect,
  PhoneInputCountrySelectContent,
  PhoneInputCountrySelectOptions,
  PhoneInputCountrySelectTrigger,
  PhoneInputCountrySelectValue,
} from "@/registry/new-york/ui/phone-input";
import * as PhoneInputPrimitive from "@/registry/new-york/ui/phone-input-primitive";

export default function PhoneInputDemo() {
  return (
    <PhoneInput>
      <ControlGroup>
        <PhoneInputCountrySelect>
          <ControlGroupItem>
            <PhoneInputCountrySelectTrigger>
              <PhoneInputCountrySelectValue />
            </PhoneInputCountrySelectTrigger>
          </ControlGroupItem>
          <PhoneInputCountrySelectContent>
            <PhoneInputCountrySelectOptions />
          </PhoneInputCountrySelectContent>
        </PhoneInputCountrySelect>
        <ControlGroupItem>
          <InputBase>
            <InputBaseControl>
              <PhoneInputPrimitive.Input asChild>
                <InputBaseInput />
              </PhoneInputPrimitive.Input>
            </InputBaseControl>
          </InputBase>
        </ControlGroupItem>
      </ControlGroup>
    </PhoneInput>
  );
}
