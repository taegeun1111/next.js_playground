"use client";

import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

function SideNavigation() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-96 h-full pt-4 pl-4">
      <div className="w-full flex gap-1">
        <Input
          type="text"
          placeholder="Search"
          className="focus-visible:ring-0 flex-1"
        />
        <Button className="aspect-square" variant="outline" size="icon">
          <Search className="" />
        </Button>
      </div>

      <Button
        className="mt-2 w-full bg-transparent text-orange-500 border-orange-400 hover:bg-orange-400 hover:text-white"
        variant="outline"
        onClick={() => router.push("/create")}
      >
        Add New Page
      </Button>

      <div className="mt-2">
        <span>Your Todo</span>
      </div>
    </div>
  );
}

export default SideNavigation;
