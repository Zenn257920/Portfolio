import {
  CallIcon,
  Mail01Icon,
  Location01Icon,
  UserIcon,
} from "hugeicons-react";

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
    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-800 sm:h-12 sm:w-12">
        <Icon size={20} className="text-blue-400" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm text-zinc-400">{title}</p>
        <p className="break-all text-sm font-medium text-zinc-100 sm:break-words">
          {detail}
        </p>
      </div>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
      {CONTACT_DETAILS.map((item) => (
        <ContactInfoItem key={item.title} {...item} />
      ))}
    </div>
  );
}
