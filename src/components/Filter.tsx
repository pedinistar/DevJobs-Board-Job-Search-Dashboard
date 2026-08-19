import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";

const locations = [
  { label: "Select a location", value: null },
  { label: "Berlin", value: "Berlin" },
  { label: "Hamburg", value: "hamburg" },
  { label: "Heidelberg", value: "heidelberg" },
  { label: "Munich", value: "munich" },
  { label: "Stuttgart", value: "stuttgart" },
];

export default function Filter() {
  return (
    <aside className="m-4">
      <strong>Filters</strong>
      <Separator className="mt-2" />

      {/* Location */}
      <Select items={locations}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Locations</SelectLabel>
            {locations.map((location) => (
              <SelectItem key={location.value} value={location.value}>
                {location.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Separator className="my-3" />

      {/* Job Type */}
      <Label htmlFor="remote-checkbox mb-4">Job Type</Label>
      <FieldGroup className="mx-auto w-56">
        <Field orientation="horizontal">
          <Checkbox id="remote-checkbox" name="remote-checkbox" />
          <FieldLabel htmlFor="remote-checkbox">Full-time</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="remote-checkbox" name="remote-checkbox" />
          <FieldLabel htmlFor="remote-checkbox">Part-time</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="remote-checkbox" name="remote-checkbox" />
          <FieldLabel htmlFor="remote-checkbox">Intership</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="remote-checkbox" name="remote-checkbox" />
          <FieldLabel htmlFor="remote-checkbox">Student</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="remote-checkbox" name="remote-checkbox" />
          <FieldLabel htmlFor="remote-checkbox">Contract</FieldLabel>
        </Field>
      </FieldGroup>

      <Separator className="my-3" />

      {/* Remote */}
      <FieldGroup className="mx-auto w-56">
        <Field orientation="horizontal">
          <Checkbox id="remote-checkbox" name="remote-checkbox" />
          <FieldLabel htmlFor="remote-checkbox">Remote Only</FieldLabel>
        </Field>
      </FieldGroup>

      <Separator className="my-3" />

      {/* Buttons */}
      <Button className="w-full" size="lg">
        Apply Filter
      </Button>
      <Button className="w-full mt-2" variant="outline" size="lg">
        Clear Filters
      </Button>
    </aside>
  );
}
