import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field";
import { contactSchema } from "./schema";
import type { ContactFormData } from "./schema";

const WEB3FORMS_KEY = "4396c30e-b78b-4f77-9ec0-9d2ed0b68248";

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
          from_name: `${data.firstName} ${data.lastName}`,
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <FormField label="First Name" error={errors.firstName?.message}>
          <Input placeholder="First Name" {...register("firstName")} />
        </FormField>
        <FormField label="Last Name" error={errors.lastName?.message}>
          <Input placeholder="Last Name" {...register("lastName")} />
        </FormField>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Email" error={errors.email?.message}>
          <Input
            type="email"
            placeholder="Email address"
            {...register("email")}
          />
        </FormField>
        <FormField label="Phone" error={errors.phone?.message}>
          <Input type="tel" placeholder="Phone number" {...register("phone")} />
        </FormField>
      </div>

      <FormField label="Message" error={errors.message?.message}>
        <Textarea
          placeholder="Type your message here..."
          className="min-h-[120px] resize-none"
          {...register("message")}
        />
      </FormField>

      <div className="flex items-center gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-emerald-500 px-6 text-zinc-950 hover:bg-emerald-400"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>

        {status === "success" && (
          <p className="text-sm text-emerald-400">
            ✓ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            ✕ Failed to send. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
