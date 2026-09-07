---
{"dg-publish":true,"permalink":"/z-templates/template-player/","tags":["player"],"created":"2025-03-31T21:32:28.000-04:00","updated":"2026-08-01T19:37:53.708-04:00","dg-note-properties":{"NoteIcon":"player","aliases":null,"tags":["player"],"Player":null,"Role":"Player","Class":null,"Race":null,"level":1,"hp":10,"ac":16,"modifier":2,"Passive":11,"Status":"Active","PlayerKnownLanguages":["Common"],"faction_standing":{"Faction Name 1":1,"Faction Name 3":3}}}
---


<%*
const hasTitle = !tp.file.title.startsWith("NewPlayer");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Player Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

| Image                                   | Char Name         | Player Name    | Class         | Race         | Level         |
| --------------------------------------- | ----------------- | -------------- | ------------- | ------------ | ------------- |
| ![ImagePlaceholder.png\|cover hsmall](/img/user/z_Assets/Placeholder%20Images/ImagePlaceholder.png) | TemplatePlayer | `=this.Player` | `=this.Class` | `=this.Race` | 1 |
