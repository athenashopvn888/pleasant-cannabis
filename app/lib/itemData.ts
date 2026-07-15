export interface ItemEffects {
  effects: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
  consume: string;
}

export function getItemData(category: string, name: string): ItemEffects {
  const categoryLabel = category.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
  return {
    effects: [{ emoji: "", label: categoryLabel }, { emoji: "", label: "Package Details" }],
    description: `${name} is listed in the ${categoryLabel} category at Pleasant Cannabis. Check the current menu and product package for item details before visiting 758 Mt Pleasant Rd.`,
    metaDescription: `Browse ${name} in the ${categoryLabel} category at Pleasant Cannabis in Toronto. Check the current menu before visiting.`,
    consume: "Review the product label and package details before purchase.",
  };
}
