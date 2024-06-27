"use client";

import { ToastClose } from "./close";
import { ToastDescription } from "./description";
import ToastProvider from "./provider";
import { ToastTitle } from "./title";
import { Toast } from "./root";
import { useToast } from "./use-toast";
import { ToastViewport } from "./viewport";
import { AlertCircle, Check, Info, TriangleAlert, X } from "lucide-react";

export function Toaster() {
  const { toasts } = useToast();

  const seticon = (variant?: string) => {
    switch (variant) {
      case "success":
        return <Check className="text-success" />;
      case "error":
        return <X className="text-destructive" />;
      case "warning":
        return <TriangleAlert className="text-warning" />;
      default:
        return <Info />;
    }
  };

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            {seticon(props.variant)}
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>

            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
