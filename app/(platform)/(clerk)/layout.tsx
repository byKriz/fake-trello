interface Props {
  children: React.ReactNode;
}

export default function ClerkLayout({ children }: Props) {
  return (
    <main className="w-full h-full flex items-center justify-center bg-slate-200">
      {children}
    </main>
  );
}
