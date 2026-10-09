# FaultPlane website visual assets

These are the generated decorative/technical visuals prepared for the FaultPlane website.

## Recommended placement

| Asset | Use | Recommended location | Suggested display |
|---|---|---|---|
| `hero-runtime-stack.webp` | Hero visual | Homepage hero, right side | 640×520, `object-fit: cover` |
| `control-loop-visual.webp` | How it works | Homepage control-loop section | 900×420 |
| `runtime-core.webp` | Runtime / Failure Lab | Failure Lab preview or runtime card | 520×520 |
| `network-topology.webp` | Architecture | Architecture page | 1200×600 |
| `ambient-brand-waves.webp` | Decorative background | Homepage section background | full-width, low opacity |
| `data-flow-waves.webp` | Decorative signal flow | Hero/architecture divider | full-width |
| `faultplane-chip.webp` | Runtime boundary visual | Architecture / Teams | 700×500 |

## Where to copy them

Copy the selected `.webp` files into:

`public/images/faultplane/`

Keep the existing logo separately at:

`public/logo/logo.png`

## Important

Do not use every image on the homepage. A premium infrastructure site should use a few strong visuals rather than a gallery.

Recommended homepage:
1. `hero-runtime-stack.webp`
2. `control-loop-visual.webp`
3. `runtime-core.webp` (Failure Lab preview)
4. `ambient-brand-waves.webp` as a very subtle background

Recommended architecture page:
- `network-topology.webp`
- `faultplane-chip.webp`

Use Lucide icons for small UI icons instead of image files.

## Image treatment

- Keep decorative images subtle.
- Use rounded corners and thin borders.
- Avoid putting text inside generated images when HTML text can do the job.
- Keep the white page background and use the logo's blue/green/yellow/red palette as accents.
