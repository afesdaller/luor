"use client";

import React, { useState, useRef } from "react";
import { Search, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/lib/i18n/navigation";

export default function SearchBar() {
  const tHeader = useTranslations("Header");
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/catalog?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleClear = () => {
    setQuery("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`group bg-coffee/10 relative flex h-9 items-center rounded-full border backdrop-blur-md transition-all duration-300 ease-out sm:h-10 ${
        isFocused
          ? "border-peach/85 w-48 shadow-[0_0_15px_rgba(255,203,163,0.15)] sm:w-64"
          : "border-light-blue w-36 sm:w-48"
      }`}
    >
      {/* Search Icon */}
      <button
        type="submit"
        className="text-shadow-light-blue hover:text-peach group-hover:text-light-blue/70 group-focus-within:text-peach flex cursor-pointer items-center justify-center pl-3 transition-colors duration-300"
        aria-label={tHeader("search")}
      >
        <Search className="size-4 stroke-[1.5] transition-transform duration-300 group-focus-within:scale-110 sm:size-5" />
      </button>

      {/* Input Field */}
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={tHeader("search")}
        className="text-light-blue placeholder-light-blue/30 font-montserrat h-full w-full bg-transparent px-2.5 text-xs font-light focus:outline-none sm:text-sm"
      />

      {/* Clear Button */}
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="text-light-blue/40 hover:text-peach flex items-center justify-center pr-3 transition-colors duration-200"
          aria-label="Clear search"
        >
          <X className="size-3.5 stroke-[1.5] sm:size-4" />
        </button>
      )}

      {/* Decorative inner light reflection (glassmorphic touch) */}
      <div className="group-focus-within:border-peach/10 pointer-events-none absolute inset-0 rounded-full border border-white/5 transition-colors duration-300" />
    </form>
  );
}
