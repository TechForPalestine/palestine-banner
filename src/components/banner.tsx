import { VariantProps, cva } from "class-variance-authority";
import { Button } from "./ui/button";

const bannerVariants = cva(
  "banner w-full flex gap-4 flex-wrap justify-center items-center border-b py-2 px-4 text-sm text-center",
  {
    variants: {
      theme: {
        light: "bg-white text-zinc-900",
        dark: "bg-zinc-950 text-zinc-50",
        auto: "bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white",
      },
      fixed: {
        true: "fixed top-0 left-0",
        false: "",
      },
    },
    defaultVariants: {
      theme: "auto",
      fixed: false,
    },
  }
);

type BannerProps = VariantProps<typeof bannerVariants>;

function Banner({ theme, fixed }: BannerProps) {
  return (
    <div className={bannerVariants({ theme, fixed })}>
      🇵🇸 #FreePalestine: End the occupation now! 🇵🇸
      <Button size="sm" variant="green" asChild>
        <a href="https://ceasefiretoday.com/" target="_blank">
          Act Now
        </a>
      </Button>
    </div>
  );
}

export { Banner };
