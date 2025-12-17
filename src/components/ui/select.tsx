"use client";

import * as React from "react";
import { cn } from "./utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
}

function Select({ children, value, onValueChange, className, ...props }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange?.(e.target.value)}
      className={cn(
        "h-9 w-full border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer appearance-none bg-no-repeat bg-right pr-10",
        className
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.5rem center',
        backgroundSize: '1.5em 1.5em',
      }}
      {...props}
    >
      {children}
    </select>
  );
}

function SelectTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  return <>{children}</>;
}

function SelectValue({ placeholder }: { placeholder?: string }) {
  return null;
}

function SelectContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  return <option value={value}>{children}</option>;
}

function SelectGroup({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function SelectLabel({ children }: { children: React.ReactNode }) {
  return <optgroup label={String(children)}>{children}</optgroup>;
}

function SelectSeparator() {
  return null;
}

function SelectScrollUpButton() {
  return null;
}

function SelectScrollDownButton() {
  return null;
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};