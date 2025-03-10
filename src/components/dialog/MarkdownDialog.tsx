import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import LabelCalendar from "../calendar/LabelCalendar";
import { Separator } from "../ui/separator";

function MarkdownDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className="text-gray-400 hover:bg-green-50 hover:text-green-500 text-xs"
        >
          Add Contents
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Checkbox />
            <Input />
          </DialogTitle>
          <div className="flex gap-2">
            <LabelCalendar label="from" />
            <LabelCalendar label="to" />
          </div>
          <Separator />
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant={"ghost"}
              className="font-normal text-gray-400 hover:bg-gray-50 hover:text-gray-500"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            variant={"ghost"}
            className="font-normal text-gray-400 hover:bg-gray-50 hover:text-gray-500"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default MarkdownDialog;
