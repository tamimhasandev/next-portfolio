import Link from "next/link";

export default function Button({ children, icon, className, to, targetBlank }) {
  return (
    <Link
      href={to}
      target={targetBlank ? "_blank" : ""}
      className={`text-accent border border-accent border-b-4 overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group cursor-pointer font-semibold flex gap-1.5 items-center ${className}`}
    >
      <span
        className={`bg-accent shadow-accent absolute -top-[150%] left-0 w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]`}
      />
      {icon} {children}
    </Link>
  );
}
