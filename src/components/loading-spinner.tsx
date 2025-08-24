import { Loader2Icon } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export function LoadingSpinner({ size = "md", text, className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <Loader2Icon className={`${sizeClasses[size]} animate-spin text-primary`} />
      {text && (
        <p className="text-sm text-muted-foreground text-center">{text}</p>
      )}
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner size="lg" text="Loading DevOps Tools Hub..." />
    </div>
  );
}

export function SectionLoader() {
  return (
    <div className="py-12 flex items-center justify-center">
      <LoadingSpinner size="md" text="Loading content..." />
    </div>
  );
}
