import { Phone, Mail, MapPin, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ContactInfoItemProps {
  icon: LucideIcon;
  title: string;
  detail: string;
}

const CONTACT_DETAILS: ContactInfoItemProps[] = [
  {
    icon: User,
    title: "Role",
    detail: "Frontend Developer",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "09-666500045",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "kkaunghtetzanthar@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    detail: "Yangon, Myanmar",
  },
];

function ContactInfoItem({ icon: Icon, title, detail }: ContactInfoItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-800">
        <Icon className="h-5 w-5 text-blue-400" />
      </div>
      <div>
        <p className="text-sm text-zinc-400">{title}</p>
        <p className="text-sm font-medium text-zinc-100">{detail}</p>
      </div>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <div className="flex flex-col  gap-8">
      {CONTACT_DETAILS.map((item) => (
        <ContactInfoItem key={item.title} {...item} />
      ))}
    </div>
  );
}
