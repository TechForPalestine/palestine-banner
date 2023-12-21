import { CodeSnippet } from "./ui/code-snippet";
import * as SDSelect from "./ui/select";
import { Label } from "./ui/label";
import { CopyButton } from "./ui/copy-button";
import { useToast } from "./ui/use-toast";
import { CopyIcon } from "lucide-react";
import { ConfigState, Theme } from "@/App";
import { Switch } from "./ui/switch";

function ConfigureSnippet({
  state,
  onChange,
}: {
  state: ConfigState;
  onChange: (state: ConfigState) => void;
}) {
  const { toast } = useToast();

  const { theme, fixed, base } = state;

  const snippet = `
<-- add this to the bottom of your html file -->
<script src="${base}/lib/banner.min.js"></script>
<script>
  window.PBanner.create({
    theme: "${theme}",
    fixed: ${fixed},
  });
</script>`;

  return (
    <div className="flex divide-x border rounded-md shadow-sm">
      <div className="w-full relative">
        <CopyButton
          onCopy={() =>
            toast({
              title: "Copied!",
              description:
                "The code snippet has been copied to your clipboard.",
            })
          }
          text={snippet}
          size="sm"
          variant="ghost"
          className="absolute right-4 top-4 gap-2"
        >
          <CopyIcon size={14} />
          Copy
        </CopyButton>
        <CodeSnippet className="text-sm p-4">{snippet}</CodeSnippet>
      </div>
      <div className="w-96 p-6 flex flex-col space-y-4">
        <fieldset className="space-y-1 flex gap-2 items-center">
          <Label>Fixed</Label>
          <Switch
            checked={fixed}
            onCheckedChange={(checked) =>
              onChange({ ...state, fixed: checked })
            }
          />
        </fieldset>
        <fieldset className="space-y-1">
          <Label>Theme</Label>
          <Select
            value={theme}
            onChange={(value) => onChange({ ...state, theme: value as Theme })}
            data={[
              {
                value: "dark",
                label: "Dark",
              },
              {
                value: "light",
                label: "Light",
              },
              {
                value: "system",
                label: "System",
              },
            ]}
          />
        </fieldset>
      </div>
    </div>
  );
}

function Select({
  data,
  onChange,
  ...rest
}: {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  data: {
    value: string;
    label: string;
  }[];
}) {
  return (
    <SDSelect.Select onValueChange={onChange} {...rest}>
      <SDSelect.SelectTrigger>
        <SDSelect.SelectValue placeholder="Select a fruit" />
      </SDSelect.SelectTrigger>
      <SDSelect.SelectContent>
        {data.map(({ value, label }) => (
          <SDSelect.SelectItem key={value} value={value}>
            {label}
          </SDSelect.SelectItem>
        ))}
      </SDSelect.SelectContent>
    </SDSelect.Select>
  );
}

export { ConfigureSnippet };
