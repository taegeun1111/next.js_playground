import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";
import LabelCalendar from "../calendar/LabelCalendar";
import MarkdownDialog from "../dialog/MarkdownDialog";

function BasicBoard() {
  return (
    <div>
      <div>
        <div className="w-full flex items-center gap-2">
          <Checkbox />
          <span className="">Please enter a title for the board</span>

          <Button variant={"ghost"} className="ml-auto">
            <ChevronUp className="text-gray-400" />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LabelCalendar label="From" />
            <LabelCalendar label="To" />
          </div>
          <div className="">
            <Button
              variant={"ghost"}
              className="text-gray-400 hover:bg-green-50 hover:text-green-500 text-xs"
            >
              Duplicate
            </Button>
            <Button
              variant={"ghost"}
              className="text-gray-400 hover:bg-red-50 hover:text-red-500 text-xs"
            >
              Delete
            </Button>
          </div>
        </div>
        <div>
          <MarkdownDialog />
        </div>
      </div>
    </div>
  );
}

export default BasicBoard;
