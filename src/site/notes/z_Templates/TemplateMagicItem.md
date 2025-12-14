---
{"dg-publish":true,"permalink":"/z-templates/template-magic-item/","tags":["item"],"created":"2025-02-19T20:56:05.000-05:00","updated":"2025-03-22T12:15:20.380-04:00"}
---


<%*
const hasTitle = !tp.file.title.startsWith("NewMagicItem");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Item Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

> [!infobox]
> ##### TemplateMagicItem
>  ![ImagePlaceholder.png|cover hsmall](/img/user/z_Assets/Placeholder%20Images/ImagePlaceholder.png)
# TemplateMagicItem
*Melee Weapon, uncommon (requires attunement by a druid or ranger)*  

- **Damage**: 1d4 S
- **Properties**: [Light](/2-Mechanics/CLI/rules/item-properties.md#Light), Requires Attunement
- **Cost**: ⏤
- **Weight**: 2.0 lbs.

Description

*Source: SourceName*