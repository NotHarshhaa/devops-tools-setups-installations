"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { parsePhoneNumber } from "react-phone-number-input";
import { codeToHtml } from "shiki";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  PhoneInput,
  PhoneInputInput,
  Value,
} from "@/registry/new-york/ui/phone-input";

// Based on https://github.com/colinhacks/zod/issues/3378#issuecomment-2067591844.
const zPhoneNumber = z.custom<Value>().transform((value, ctx) => {
  const phoneNumber = parsePhoneNumber(value);

  if (!phoneNumber?.isValid()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Invalid phone number",
    });
    return z.NEVER;
  }

  return phoneNumber.number;
});

const FormSchema = z.object({
  phoneNumber: zPhoneNumber,
});

export default function PhoneInputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const html = await codeToHtml(
      JSON.stringify(
        {
          ...data,
          parsed: parsePhoneNumber(data.phoneNumber),
        },
        null,
        2,
      ),
      {
        lang: "json",
        theme: "github-dark-dimmed",
        colorReplacements: {
          "#22272e": "var(--color-zinc-900)",
        },
      },
    );

    toast("You submitted the following values:", {
      classNames: { content: "w-full" },
      description: (
        <div
          className="mt-2 [&>pre]:rounded-md [&>pre]:p-4 [&>pre]:shadow-[0_1.5px_2px_0_theme(colors.black/32%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/4%)]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <PhoneInput value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <PhoneInputInput placeholder="Phone number" />
                </FormControl>
              </PhoneInput>
              <FormDescription>
                Your phone number is used to contact you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
