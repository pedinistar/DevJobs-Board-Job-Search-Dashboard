import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";

export default function Search() {
  return (
    <InputGroup className="w-70">
      <InputGroupInput placeholder="Search Jobs..." />
      <InputGroupButton>
        <Button>
          <SearchIcon />
        </Button>
      </InputGroupButton>
    </InputGroup>
  );
}
