import BasicBoard from "@/components/board/BasicBoard";
import LabelCalendar from "@/components/calendar/LabelCalendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      {/* header */}
      <header>
        <Input
          type="text"
          placeholder="Title"
          className="text-xl border-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <div>
          <span>0/10 completed</span>
          <Progress value={10} indicatorColor={"bg-green-500"} />
        </div>
        <div className="flex gap-2">
          <LabelCalendar label={"From"} readOnly={true} />
          <LabelCalendar label={"To"} readOnly={false} />

          <Button
            variant={"outline"}
            className="border-orange-500 bg-orange-400 text-white hover:bg-orange-400 hover:text-white ml-auto"
          >
            Add New Board
          </Button>
        </div>
      </header>
      {/* main */}
      <main>
        <div>
          <span>There is no board yet.</span>
          <span>Create a new board to get started.</span>
          <Button variant={"secondary"}>
            <Image src={"/images/plus.png"} alt="plus" width={16} height={16} />
          </Button>
        </div>
      </main>

      <BasicBoard />
    </div>
  );
}

export default page;
