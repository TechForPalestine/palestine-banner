import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button, ButtonProps } from "./button";

function CopyButton({
  children,
  onCopy,
  text,
  ...rest
}: { text: string; onCopy: () => void } & ButtonProps) {
  return (
    <CopyToClipboard text={text} onCopy={onCopy}>
      <Button {...rest}>{children}</Button>
    </CopyToClipboard>
  );
}

export { CopyButton };
