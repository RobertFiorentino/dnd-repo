---
{"dg-publish":true,"permalink":"/z-templates/template-settlement/","tags":["Category/Settlement"],"created":"2025-02-19T20:56:05.000-05:00","updated":"2025-03-30T00:00:52.971-04:00"}
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
> | |  |
> |---|---|
> |Type | Settlement |
> |Size | `=this.size` |
> |Region | `=this.region` |
> ###### Politics
> | |  |
> |---|---|
> |Govt Type | `=this.politics` |
> |Ruler | `=this.leader`|
> ###### Society
> | | |
> |---|---|
> |Population | `=this.population` |
> |Races | Humans|
> |Temples | `=this.religion` |
> ###### Commerce
> | | |
> |---|---|
> |Exports | `=this.exports` |
> |Imports | `=this.imports` |
> ###### Organizations
> | | |
> |---|---|
>  | Group | Leader |
> | ----- | ------ |
> 
{ .block-language-dataview}
> ###### Sessions Appeared
>  
{ .block-language-dataview}

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

