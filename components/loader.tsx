import Image from "next/image";

export const Loader = ({
  label = "Jarvis is thinking...",
}: {
  label?: string;
}) => {
  return (
    <div
      className="h-full w-full  bg-gray-800 rounded-lg mt-2
     p-8 flex flex-col gap-y-4 items-center justify-center"
    >
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="Logo" src="/mainlogo.png" fill />
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
