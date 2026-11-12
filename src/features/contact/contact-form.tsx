import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field";
import { contactSchema } from "./schema";
import type { ContactFormData } from "./schema";

const WEB3FORMS_KEY = "71e9a54f-fb28-453c-ab6e-1a8f49ea73eb";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: data.name,
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-w-0 space-y-5"
    >
      <FormField label="Organization Name" error={errors.name?.message}>
        <Input
          placeholder="Organization Name"
          className="w-full min-w-0"
          {...register("name")}
        />
      </FormField>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Email" error={errors.email?.message}>
          <Input
            type="email"
            placeholder="Email address"
            className="w-full min-w-0"
            {...register("email")}
          />
        </FormField>

        <FormField label="Phone" error={errors.phone?.message}>
          <Input
            type="tel"
            placeholder="Phone number"
            className="w-full min-w-0"
            {...register("phone")}
          />
        </FormField>
      </div>

      <FormField label="Message" error={errors.message?.message}>
        <Textarea
          placeholder="Type your message here..."
          className="min-h-[140px] w-full min-w-0 resize-none"
          {...register("message")}
        />
      </FormField>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-blue-400 px-6 text-zinc-950 hover:bg-blue-500 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>

        {status === "success" && (
          <p className="text-sm text-emerald-400">Message sent successfully!</p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-400">
            Failed to send. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
