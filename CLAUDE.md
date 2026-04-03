# Design System

## Contexte
Librairie de composants React générique, importable dans tous les projets.
Conçue pour être utilisée dans Fast Renamer, Wealthcome, et tout futur projet.

## Stack technique
- React + Vite
- Tailwind CSS v4
- shadcn/ui (Radix, preset Mira)
- Lucide React (icônes)
- Storybook (documentation et visualisation des composants)
- Chromatic (à connecter)

## Structure
- `src/components/` — composants shadcn customisés
- `src/lib/` — utilitaires
- `src/stories/` — stories Storybook
- `.storybook/` — config Storybook

## Commandes utiles
- `npm run storybook` — lance Storybook en local
- `npm run build` — build la librairie

## État actuel
- ✅ Stack installée : React + Vite + Tailwind + shadcn + Lucide
- ✅ Storybook fonctionnel
- 🔲 Premiers composants (en attente des maquettes)
- 🔲 Connexion Chromatic
- 🔲 Publication npm (pour import dans d'autres projets)

## Projets qui utilisent ce design system
- Fast Renamer : github.com/theotible-pro/figma-plugin
- Wealthcome (à venir)

## GitHub
github.com/theotible-pro/design-system