import { ClerkProvider } from "@clerk/nextjs";

interface Props {
  children: React.ReactNode;
}

export default function PlataformLayout({ children }: Props) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
