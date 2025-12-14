---
{"dg-publish":true,"permalink":"/z-templates/template-player/","tags":["player"],"created":"2025-02-19T20:56:05.000-05:00","updated":"2025-03-31T21:32:28.460-04:00"}
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
| ![[ImagePlaceholder.png\|cover hsmall]] | TemplatePlayer | Bob | Barbarian | Human | 8 |
