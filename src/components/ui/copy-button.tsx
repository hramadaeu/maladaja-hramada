"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CopyButtonProps = {
  value: string;
  label: string;
  copiedLabel: string;
  className?: string;
};

export function CopyButton({ value, label, copiedLabel, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value.replace(/\s/g, ""));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("[copy-button] clipboard write failed", e);
      setCopied(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className={cn("gap-2", className)}
      onClick={handleCopy}
    >
      {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
      {copied ? copiedLabel : label}
    </Button>
  );
}
