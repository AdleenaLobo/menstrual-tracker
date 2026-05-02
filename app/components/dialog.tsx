import * as Ariakit from "@ariakit/react";
import { ReactNode } from "react";

interface DialogProps {
  open: boolean;
  onClose: (open: boolean) => void;
  heading: string;
  className?: string;
  isDismiss?: boolean;
  children: ReactNode;
}

export default function Dialog({
  open,
  onClose,
  heading,
  className,
  isDismiss= false,
  children,
}: DialogProps) {
  return (
    <Ariakit.Dialog
      open={open}
      onClose={() => onClose(!open)}
      className={` fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-8 z-20 ${className}`}
    >
      
        {isDismiss ? <Ariakit.DialogDismiss className = "absolute top-2 right-2 text-xl font-bold p-1 rounded hover:bg-gray-200"> x </Ariakit.DialogDismiss> : ""}
      <Ariakit.DialogHeading className="text-3xl p-2">
        {heading}
      </Ariakit.DialogHeading>
      {children}
    </Ariakit.Dialog>
  );
}
