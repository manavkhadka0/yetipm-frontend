import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { BlogTag } from "@/types/blog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  // CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface TagInputProps {
  placeholder?: string;
  availableTags: BlogTag[];
  selectedTags: BlogTag[];
  onTagSelect: (tag: BlogTag) => void;
  onTagRemove: (tag: BlogTag) => void;
}

export function TagInput({
  placeholder = "Search tags...",
  availableTags = [],
  selectedTags = [],
  onTagSelect,
  onTagRemove,
}: TagInputProps) {
  // Ensure arrays are always defined
  const safeAvailableTags = React.useMemo(
    () => (Array.isArray(availableTags) ? availableTags : []),
    [availableTags]
  );
  const safeSelectedTags = React.useMemo(
    () => (Array.isArray(selectedTags) ? selectedTags : []),
    [selectedTags]
  );

  const [inputValue, setInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const filteredTags = React.useMemo(() => {
    if (!inputValue.trim()) {
      return safeAvailableTags.filter(
        (tag) => !safeSelectedTags.some((selected) => selected.id === tag.id)
      );
    }

    return safeAvailableTags.filter(
      (tag) =>
        !safeSelectedTags.some((selected) => selected.id === tag.id) &&
        tag.tag_name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [safeAvailableTags, safeSelectedTags, inputValue]);

  const handleInputClick = () => {
    setOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (!open) {
      setOpen(true);
    }
  };

  const handleTagSelect = (tag: BlogTag) => {
    onTagSelect(tag);
    setInputValue("");
    setOpen(false);
    // Refocus input after selection
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <div className="flex flex-wrap gap-2 p-2 border rounded-md min-h-[42px] focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
          {safeSelectedTags.map((tag) => (
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

          <PopoverTrigger asChild>
            <div className="flex-1 min-w-[100px]">
              <input
                ref={inputRef}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                onClick={handleInputClick}
                className="w-full bg-transparent border-0 outline-none placeholder:text-muted-foreground text-sm"
              />
            </div>
          </PopoverTrigger>
        </div>

        <PopoverContent
          className="w-full p-0"
          align="start"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <Command>
            <CommandList>
              {filteredTags.length === 0 ? (
                <CommandEmpty>
                  {inputValue ? "No tags found." : "No available tags."}
                </CommandEmpty>
              ) : (
                <CommandGroup>
                  {filteredTags.map((tag) => (
                    <CommandItem
                      key={tag.id}
                      onSelect={() => handleTagSelect(tag)}
                      className="cursor-pointer"
                    >
                      {tag.tag_name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
