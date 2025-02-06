import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { BlogTag } from "@/types/blog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

interface TagInputProps {
  placeholder?: string;
  availableTags: BlogTag[];
  selectedTags: BlogTag[];
  onTagSelect: (tag: BlogTag) => void;
  onTagRemove: (tag: BlogTag) => void;
}

export function TagInput({
  placeholder,
  availableTags,
  selectedTags,
  onTagSelect,
  onTagRemove,
}: TagInputProps) {
  const [inputValue, setInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const filteredTags = availableTags.filter(
    (tag) =>
      !selectedTags.some((selected) => selected.id === tag.id) &&
      tag.tag_name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <div className="flex flex-wrap gap-2 p-2 border rounded-md">
        {selectedTags.map((tag) => (
          <Badge key={tag.id} variant="secondary" className="px-2 py-1">
            {tag.tag_name}
            <button
              type="button"
              onClick={() => onTagRemove(tag)}
              className="ml-2 hover:text-destructive"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
        <Command className="w-full">
          <CommandInput
            placeholder={placeholder}
            value={inputValue}
            onValueChange={(value) => {
              setInputValue(value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            className="border-0 p-0 placeholder:text-muted-foreground focus-visible:ring-0"
          />
          {open && (
            <div className="absolute z-10 w-full mt-2 bg-background border rounded-md shadow-md">
              <CommandEmpty>No tags found.</CommandEmpty>
              <CommandGroup className="max-h-[200px] overflow-y-auto">
                {filteredTags.map((tag: BlogTag) => (
                  <CommandItem
                    key={tag.id}
                    onSelect={() => {
                      onTagSelect(tag);
                      setInputValue("");
                      setOpen(false);
                    }}
                    className="cursor-pointer"
                  >
                    {tag.tag_name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>
          )}
        </Command>
      </div>
    </div>
  );
}
