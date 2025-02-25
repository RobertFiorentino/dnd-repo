---
{"dg-publish":true,"permalink":"/z-templates/template-settlement/","tags":["Category/Settlement"],"created":"2025-02-19T20:56:05.000-05:00","updated":"2025-02-24T21:20:47.496-05:00"}
---


<%*
const hasTitle = !tp.file.title.startsWith("NewLocation");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Location Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

> [!infobox]
> # TemplateSettlement 
> ![MapPlaceholder.png|cover hsmall](/img/user/z_Assets/Placeholder%20Images/MapPlaceholder.png)
> ###### Geography
> Type |  Stat |
> ---|---|
> Type | `VIEW[{type}][text]` |
> Size | `VIEW[{size}][text]` |
> Region | `VIEW[{region}][text]` |
> ###### Travel (`VIEW[{Travel Calculator#HoursPerDay}][math]` hrs per day)
> ###### [[1-DM Toolkit/Travel Calculator\|Travel Calculator]]  / [[Exhaustion\|Exhaustion]]: `VIEW[{Travel Calculator#ExhaustionLevel}][math]`
> Destination |  Travel Days  |
> ---|---|
> [[Voonlar\|Voonlar]] | 🕓: `VIEW[round((88* {Travel Calculator#TravelCalc}) / 60 / {Travel Calculator#HoursPerDay}, 1)]`      |
> ###### Politics
> Type |  Stat |
> ---|---|
> Govt Type | `VIEW[{politics}][text]` |
> Ruler | `VIEW[{leader}][text]`|
> Defense | `VIEW[{defences}][text]`|
> ###### Society
> Type |  Stat |
> ---|---|
> Population | `VIEW[{population}][text]` |
> Races | `VIEW[{commonraces}][text]`|
> Temples | `VIEW[{religion}][text]` |
> ###### Commerce
> Type |  Stat |
> ---|---|
> Exports | `VIEW[{exports}][text]` |
> Imports | `VIEW[{imports}][text]` |
> ###### Organizations
> Type |  Stat |
> ---|---|
>  | Group | Leader |
> | ----- | ------ |
> 
{ .block-language-dataview}
> ###### Sessions Appeared
>  
{ .block-language-dataview}
# TemplateSettlement
## Overview
Placeholder

### Placeholder Map
![MapPlaceholder.png|Placeholder Map](/img/user/z_Assets/Placeholder%20Images/MapPlaceholder.png)

### Placeholder Picture
![ImagePlaceholder.png|Placeholder Picture](/img/user/z_Assets/Placeholder%20Images/ImagePlaceholder.png)

Placeholder

## Notable NPCs

{ .block-language-dataview}

## Profile
Placeholder

## Story
Placeholder

## Points of Interest
Placeholder

## Valuables
Placeholder

## Internal Relationships
Placeholder

## Outward Relationships
Placeholder

## Background
Placeholder

## Additional Details
Placeholder

