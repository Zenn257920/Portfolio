import { CallIcon, Mail01Icon, Location01Icon, UserIcon } from "hugeicons-react";

interface ContactInfoItemProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  detail: string;
}

const CONTACT_DETAILS: ContactInfoItemProps[] = [
  {
    icon: UserIcon,
    title: "Role",
    detail: "Frontend Developer",
  },
  {
    icon: CallIcon,
    title: "Phone",
    detail: "09-666500045",
  },
  {
    icon: Mail01Icon,
    title: "Email",
    detail: "kkaunghtetzanthar@gmail.com",
  },
  {
    icon: Location01Icon,
    title: "Address",
    detail: "Yangon, Myanmar",
  },
];

function ContactInfoItem({ icon: Icon, title, detail }: ContactInfoItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-800">
        <Icon size={20} className="text-blue-400" />
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
    <div className="flex flex-col justify-center gap-8">
      {CONTACT_DETAILS.map((item) => (
        <ContactInfoItem key={item.title} {...item} />
      ))}
    </div>
  );
}
