---
name: Psic. Camila Melissa
description: Landing page profissional — psicanálise em São Paulo
colors:
  primary: '#2B112C'
  secondary: '#B38B3E'
  muted: '#C8C1C8'
  neutral-bg: '#F9F8F9'
  neutral-text: '#4F4F4F'
  neutral-heading: '#2D2F30'
  neutral-ink: '#151617'
  neutral-gray: '#363940'
  neutral-mid: '#8B8C8C'
typography:
  display:
    fontFamily: '"Playfair Display", Georgia, serif'
    fontSize: clamp(2.75rem, 6.5vw, 5.625rem)
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: '"Playfair Display", Georgia, serif'
    fontSize: clamp(2rem, 4.5vw, 3rem)
    fontWeight: 700
    lineHeight: 1.33
  title:
    fontFamily: '"Playfair Display", Georgia, serif'
    fontSize: 1.375rem
    fontWeight: 700
    lineHeight: 1.58
  body:
    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif'
    fontSize: clamp(0.875rem, 1.5vw, 1.25rem)
    fontWeight: 400
    lineHeight: 1.58
  label:
    fontFamily: 'Poppins, system-ui, sans-serif'
    fontSize: 0.75rem
    fontWeight: 600
    letterSpacing: 0.125em
    textTransform: uppercase
rounded:
  sm: 8px
  md: 10px
  lg: 15px
  pill: 26.5px
spacing:
  section: 80px
  content: 32px
  stack: 24px
  inline: 16px
  tight: 8px
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '#FFFFFF'
    rounded: '{rounded.sm}'
    padding: 20px 32px
  button-whatsapp:
    backgroundColor: '{colors.primary}'
    textColor: '#FFFFFF'
    rounded: '{rounded.sm}'
    padding: 20px 32px
  card-default:
    backgroundColor: '#FFFFFF'
    rounded: '{rounded.sm}'
    padding: 24px
  input-default:
    backgroundColor: '#FFFFFF'
    rounded: '{rounded.md}'
    padding: 8px 16px
  navbar:
    backgroundColor: '{colors.primary}'
    rounded: '{rounded.lg}'
    padding: 0
---

# Design System: Psic. Camila Melissa

## 1. Overview

**Creative North Star: "O Espelho Profundo"**

The Deep Mirror. A design system that feels less like a website and more like walking into a well-appointed psychoanalysis office — serious without being cold, intellectual without being pretentious. The dark purple anchor (`#2B112C`) creates an atmosphere of depth and introspection; the gold accent (`#B38B3E`) adds refinement without flash. Every component is *táctil e convidativo* — buttons that beg to be clicked, forms that feel safe to fill out, cards that invite reading.

This system explicitly rejects the generic psychology-site look: no pastel blues, no stock photos of smiling people, no clip-art brains. It also rejects cold medical sterility on one side and juvenile trendiness on the other. The register is *intellectual, introspective, elegant* — a space that respects the visitor's intelligence while making psychoanalysis feel accessible.

**Key Characteristics:**
- Dark purple + gold as committed color strategy (one saturated color carries ~40% of surfaces)
- Playfair Display for reflective, literary headings; Plus Jakarta Sans for warm clarity in body text
- Generous whitespace and breathing room — therapy starts with space to think
- Tactile, weighty interaction (pulse-ring CTA, rounded corners, soft shadows)
- Mobile-first, single-column at narrow widths, asymmetric at desktop

## 2. Colors: A Palette of Depth

A committed palette anchored by a single saturated dark purple, supported by a warm gold accent and a restrained neutral family. The effect is introspective and refined — the color equivalent of a dimly lit study with brass details.

### Primary

- **Roxo Poético** (`#2B112C` / oklch(0.15 0.12 330)): The anchor color. Used for the navbar, footer, quote section background, primary buttons, and the hero badge accent. This color carries the emotional weight of the brand — depth, introspection, seriousness. It appears on ~40% of all surfaces.

### Secondary

- **Latão** (`#B38B3E` / oklch(0.62 0.12 85)): Warm brass. Used sparingly as an interactive accent — input focus rings, hover states, detail highlights. Its rarity is the point; gold calls attention precisely because it's not everywhere.

### Neutrals

- **Branco Pétala** (`#F9F8F9`): Near-white page background. Hero section and card backgrounds.
- **Lavanda Silenciosa** (`#C8C1C8`): Muted section backgrounds (about, articles) that contrast gently with pure white surfaces.
- **Chumbo Claro** (`#8B8C8C`): Secondary text, icons in quality list, subtle metadata.
- **Grafite** (`#4F4F4F`): Body text on light backgrounds. Readable, never harsh.
- **Ardósia** (`#363940`): Card headings and emphasized text.
- **Hematita** (`#2D2F30`): Section headings on light backgrounds.
- **Tinta** (`#151617`): Near-black for maximum contrast when needed.

### Named Rules

**The One Voice Rule.** Roxo Poético is the single voice. Latão is the counterpoint, never the melody. A detail that appears in gold more than 10% of the time loses its function — it stops calling attention and becomes decoration.

**The Warmth-From-Depth Rule.** The palette does not use warm pastels, beige, cream, or sand. Warmth comes from the purple's natural depth and the gold's glow, not from tinted whites. A lavender-gray muted section bg is as light as the palette goes; beyond that, pure white.

## 3. Typography

**Display Font:** Playfair Display (with Georgia, serif fallback)
**Body Font:** Plus Jakarta Sans (with system-ui, sans-serif fallback)
**Label Font:** Poppins (with system-ui, sans-serif fallback)

**Character:** A literary-intellectual pairing. Playfair Display brings the gravity of a psychoanalytic text — elegant, weighty, slightly dramatic in large sizes. Plus Jakarta Sans keeps the body text warm and approachable, a counterbalance that prevents the serif from becoming stuffy. Poppins provides tight, authoritative labels.

### Hierarchy

- **Display** (Playfair Display 700, `clamp(2.75rem, 6.5vw, 5.625rem)`, 1.1): Hero headline only. The single most prominent text on the page. `text-wrap: balance`.
- **Headline** (Playfair Display 700, `clamp(2rem, 4.5vw, 3rem)`, 1.33): Section headings. `text-wrap: balance`.
- **Title** (Playfair Display 700, 1.375rem, 1.58): Card titles, subtitles. `text-wrap: balance`.
- **Body** (Plus Jakarta Sans 400, `clamp(0.875rem, 1.5vw, 1.25rem)`, 1.58): All prose. Capped at 65–75ch per line. `text-wrap: pretty`.
- **Label** (Poppins 600, 0.75rem, 0.125em letter-spacing, uppercase): Navigation links, badge labels, button labels.

### Named Rules

**The Display-Only Rule.** The hero 90px Display size (Playfair Display 700) may only be used for the primary hero heading. No other heading uses it. Its scale is its distinction.

## 4. Elevation

The system uses soft, layered shadows to create gentle depth between stacked elements. The philosophy is *ambient depth* — surfaces appear to float with a barely perceptible lift, like papers on a desk. Shadows are never dramatic or high-contrast.

### Shadow Vocabulary

- **Card Shadow** (`0px 18px 58px 16px rgba(0, 0, 0, 0.06)`): Article cards, about cards. A diffuse, wide shadow that says "lifted, not floating."
- **Caption Shadow** (`0px 39px 100px 0px rgba(25, 62, 108, 0.12)`): The hero caption card. A longer, softer drop shadow for the most prominent card on the page.
- **Dark Shadow** (`0px 10px 20px 0px rgba(41, 41, 42, 0.07)`): Hover states, interactive elevation.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a structural indicator — cards, the hero caption, and hover states. A surface without a shadow is not missing anything.

## 5. Components

### Navbar

A top-aligned, full-width bar with rounded bottom corners (15px). Roxo Poético background with white text throughout. The logo (photo + name) is left-aligned; navigation links are right-aligned on desktop and hidden behind a hamburger on mobile with a scale-down animation.

- **Typography:** Poppins 600, 0.75rem, 0.125em tracking, uppercase — labels are confident and small.
- **States:** Hover → opacity 0.8; no underline, no background shift.
- **Mobile:** Hamburger icon (Lucide Menu/X) with a vertical accordion menu. Full transition-duration 500ms, ease-in-out.

### Primary Button (CTA)

- **Shape:** Gently rounded corners (8px).
- **Colors:** Roxo Poético background, white text, Latão is never used as a button bg.
- **Padding:** Comfortable — 20px top/bottom, 32px left/right.
- **States:** Hover → opacity 0.9. The hero WhatsApp button has a subtle `pulse-ring` animation (2s ease-out infinite, opaque ring that expands 30px outward).
- **Typography:** Plus Jakarta Sans 700, 1.375rem, white.

### Card

- **Shape:** Soft 8px radius.
- **Background:** White (Branco Pétala).
- **Shadow:** Card Shadow (`0px 18px 58px 16px rgba(0,0,0,0.06)`).
- **Padding:** 24px (stack spacing).
- **Border:** None. Shadows provide the edge definition.
- **Hover:** `hover:shadow-lg` transition on article cards (cursor pointer, opens PDF viewer).

### Article Card

- **Layout:** Flex column with image (h-72, object-cover) on top, content below.
- **Icon:** `SquareArrowOutUpRight` (Lucide) positioned bottom-right via `mt-auto self-end`.
- **Hover:** `hover:border-detail` color transition.
- **Accessibility:** `role="button"`, `tabindex="0"`, keyboard Enter/Space support.
- **Animation:** Staggered reveal with individual `IntersectionObserver`.

### About Card

- **Layout:** Flex column with logo (object-contain), title, subtitle, year, and body text.
- **Logo heights:** Configurable via `logoHeight` property (default: `max-h-12`).
- **Body text:** Always visible (no expansion animation).
- **Animation:** Staggered reveal with individual `IntersectionObserver`.

## 6. Animations

### Staggered Reveal (Entrada Sequencial)

Cards usam `IntersectionObserver` individual para animação de entrada. O observer observa cada card separadamente, garantindo que a animação só dispara quando o card entra no viewport.

- **Estado inicial:** `opacity-0 translate-y-8` (invisível, deslocado para baixo)
- **Transição:** `transition-all duration-[1700ms] ease-out`
- **Trigger:** `threshold: 0.15`, `rootMargin: '0px 0px -80px 0px'`
- **Acessibilidade:** `motion-reduce:transition-none` reseta animação para usuários com redução de movimento
- **Cleanup:** `unobserve()` após trigger, `disconnect()` no `disconnectedCallback()`
- **Overflow:** `overflow-hidden` na section para prevenir flash de conteúdo

### Mobile vs Desktop

- **Mobile (sem prefixo `lg:`):** Sem delays CSS — timing natural pelo scroll. Cards aparecem um por um conforme o usuário chega neles.
- **Desktop (`lg:delay-*`):** Delays escalonados para animação sequencial mesmo quando cards estão lado a lado.
  - About cards: `lg:delay-0`, `lg:delay-300`, `lg:delay-500`, `lg:delay-700`
  - Article cards: `lg:delay-0`, `lg:delay-300`

### Named Rules

**The Scroll-Reveal Rule.** Animações de entrada só disparam quando o card entra no viewport durante scroll. Não dispara em page load ou navbar click (exceto quando a seção já está visível). Observer desconecta após trigger — não re-dispara no scroll reverso.

**The Motion-Reduce Rule.** Toda animação deve ter `motion-reduce:transition-none` para respeitar preferências do sistema.

### Input / Textarea

- **Shape:** Rounded 10px input radius.
- **Background:** White.
- **Border:** Default daisyUI input border; focus replaces it with a 2px Latão focus ring.
- **Typography:** Plus Jakarta Sans, body-sm (14px).
- **States:** Disabled → opacity 0.5; error → standard alert-error red.
- **Label:** Poppins 600, 14px, white (on Roxo Poético footer background).

### Toast / Alert

- Uses daisyUI alert component. Success: Roxo Poético bg (`#2B112C`), white text. Error: deep red bg (`#991b1b`), white text.
- Auto-dismisses after 4 seconds.

### Quote Section

A full-width Roxo Poético band with centered text. No card, no shadow, no border — the color is the container.
- Quote text: Playfair Display 900, `clamp(1.75rem, 4vw, 3rem)`, white.
- Attribution: Poppins 500, 16–18px, white at 80% opacity.

### Badge / Tag

Inline pill shape (26.5px pill radius) with Roxo Poético text inside, on Lavanda Silenciosa background, or inverted (white text on Roxo Poético). Used only in the hero for the "Olhar" tagline. Transition-all over 3 seconds on page load.

## 7. Do's and Don'ts

### Do:

- **Do** use Roxo Poético (`#2B112C`) as the dominant surface color for navigation, footer, and the quote band. Its rarity in the broader web landscape *is* part of the identity.
- **Do** use Latão (`#B38B3E`) sparingly and deliberately — focus rings, hover accents, detail highlights only.
- **Do** keep body text at Grafite (`#4F4F4F`) or darker. Never use Chumbo Claro (`#8B8C8C`) for body copy; it fails contrast.
- **Do** use Playfair Display for all headings — it carries the literary-intellectual tone.
- **Do** use generous whitespace between sections (80px min). Therapy needs room to breathe.
- **Do** use `text-wrap: balance` on all h1–h3 headings and `text-wrap: pretty` on body prose.
- **Do** use staggered reveal animations with individual `IntersectionObserver` per card.
- **Do** use `motion-reduce:transition-none` on all animated elements.
- **Do** use `overflow-hidden` on sections with reveal animations to prevent flash.

### Don't:

- **Don't** use pastel blues, light blue gradients, or any "medical" color palette. The brand is Roxo Poético, not hospital blue.
- **Don't** use stock photos of smiling people or generic therapy imagery. The hero photo of Camila is the only portrait on the page.
- **Don't** use gradient text (`background-clip: text` with a gradient). Solid colors only.
- **Don't** use glassmorphism — decorative blur and transparency have no place here.
- **Don't** use tiny uppercase tracked labels ("SOBRE" "ARTIGOS" "CONTATO") above every section heading as a repeating scaffolding pattern. The navbar is the navigation; sections use their own heading hierarchy.
- **Don't** use side-stripe borders (border-left > 1px as colored accent on cards or callouts).
- **Don't** make cards identical in layout — vary the content structure (icon + text, logo + title + body, image + text).
- **Don't** use monospace fonts. The brand is not technical.
- **Don't** use large rounded-corner icons above every heading. Screams template.
- **Don't** make the design too informal or juvenile — no playful colors, trendy UI, or casual tone.
- **Don't** use numbered section markers (01 / 02 / 03) as default scaffolding.
- **Don't** animate all cards simultaneously on mobile — use per-card observers for scroll-reveal.
- **Don't** use CSS inline (`style=""`) for animations — use Tailwind classes only.
- **Don't** re-trigger animations on scroll reverso — observer must disconnect after first trigger.
