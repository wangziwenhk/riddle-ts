export const MODIFIER_TYPE = [
    "static",
    "override",
    "public",
    "private",
    "protected",
]

export type ModifierType = typeof MODIFIER_TYPE[number];

export class ModifierList extends Set<ModifierType>{
}