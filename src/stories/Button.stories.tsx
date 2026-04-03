import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "storybook/test"
import {
  ArrowRight,
  Download,
  Plus,
  Save,
  Trash2,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "destructive", "outline", "link"],
      description: "Visual style of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the button",
    },
    loading: {
      control: "boolean",
      description: "Show a loading spinner and disable interaction",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
    iconOnly: {
      control: "boolean",
      description: "Render as a square icon-only button",
    },
    children: {
      control: "text",
      description: "Button label",
    },
  },
  args: {
    onClick: fn(),
    children: "Button",
    variant: "primary",
    size: "md",
    loading: false,
    disabled: false,
    iconOnly: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// ---------------------------------------------------------------------------
// Playground (default, all controls available)
// ---------------------------------------------------------------------------

export const Playground: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
  },
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// States
// ---------------------------------------------------------------------------

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="ghost" disabled>Ghost</Button>
      <Button variant="destructive" disabled>Destructive</Button>
    </div>
  ),
}

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" loading>Saving…</Button>
      <Button variant="secondary" loading>Loading…</Button>
      <Button variant="ghost" loading>Ghost</Button>
      <Button variant="destructive" loading>Deleting…</Button>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Icon positions
// ---------------------------------------------------------------------------

export const WithIconLeft: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" iconLeft={<Plus />}>Create</Button>
      <Button variant="secondary" iconLeft={<Save />}>Save</Button>
      <Button variant="ghost" iconLeft={<Download />}>Download</Button>
      <Button variant="destructive" iconLeft={<Trash2 />}>Delete</Button>
    </div>
  ),
}

export const WithIconRight: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" iconRight={<ArrowRight />}>Continue</Button>
      <Button variant="secondary" iconRight={<ArrowRight />}>Next</Button>
      <Button variant="ghost" iconRight={<ArrowRight />}>Learn more</Button>
    </div>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" iconOnly iconLeft={<Plus />} aria-label="Add" />
      <Button variant="secondary" iconOnly iconLeft={<Save />} aria-label="Save" />
      <Button variant="ghost" iconOnly iconLeft={<Download />} aria-label="Download" />
      <Button variant="destructive" iconOnly iconLeft={<Trash2 />} aria-label="Delete" />
    </div>
  ),
}

export const IconOnlySizes: Story = {
  name: "Icon Only — Sizes",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" iconOnly size="sm" iconLeft={<Plus />} aria-label="Add (small)" />
      <Button variant="primary" iconOnly size="md" iconLeft={<Plus />} aria-label="Add (medium)" />
      <Button variant="primary" iconOnly size="lg" iconLeft={<Plus />} aria-label="Add (large)" />
    </div>
  ),
}

export const IconOnlyLoading: Story = {
  name: "Icon Only — Loading",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" iconOnly loading aria-label="Loading" />
      <Button variant="secondary" iconOnly loading aria-label="Loading" />
      <Button variant="ghost" iconOnly loading aria-label="Loading" />
      <Button variant="destructive" iconOnly loading aria-label="Loading" />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Full matrix
// ---------------------------------------------------------------------------

export const Matrix: Story = {
  name: "Matrix — All variants × sizes",
  parameters: { layout: "padded" },
  render: () => {
    const variants = ["primary", "secondary", "ghost", "destructive"] as const
    const sizes = ["sm", "md", "lg"] as const

    return (
      <div className="space-y-6">
        {sizes.map((size) => (
          <div key={size} className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              {size}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {variants.map((variant) => (
                <Button key={variant} variant={variant} size={size}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {variants.map((variant) => (
                <Button key={variant} variant={variant} size={size} iconLeft={<Plus />}>
                  With icon
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {variants.map((variant) => (
                <Button key={variant} variant={variant} size={size} disabled>
                  Disabled
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {variants.map((variant) => (
                <Button key={variant} variant={variant} size={size} loading>
                  Loading
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
}
