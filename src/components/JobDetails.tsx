import { GoArrowUpRight } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa6";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Field, FieldGroup } from "./ui/field";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";

export default function JobDetails() {
  return (
    <Dialog>
      {/* To Open */}
      <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />

      {/* Content */}
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Job Title</DialogTitle>
          <p>
            <strong>Company Name</strong>
          </p>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            optio non, veniam corporis atque porro!
          </DialogDescription>
        </DialogHeader>

        <div>
          <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            Remote
          </Badge>

          <Button variant="link">
            Visit Website
            <GoArrowUpRight data-icon="inline-end" />
          </Button>
        </div>

        <DialogFooter className="flex items-center">
          <Button>Apply</Button>
          <Button variant="outline">
            <FaRegBookmark />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
