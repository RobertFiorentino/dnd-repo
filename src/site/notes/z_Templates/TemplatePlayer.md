---
{"dg-publish":true,"permalink":"/z-templates/template-player/","tags":["player"],"created":"2025-02-19T20:56:05.000-05:00","updated":"2025-02-25T18:28:41.805-05:00"}
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
# TemplatePlayer

| Image                                   | Char Name         | Player Name    | Class         | Race         | Level         |
| --------------------------------------- | ----------------- | -------------- | ------------- | ------------ | ------------- |
| ![[ImagePlaceholder.png\|cover hsmall]] | TemplatePlayer | Bob | Barbarian | Human | 8 |

<div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Faction</span><span class="dataview small-text">6</span></th><th class="table-view-th"><span>Your Standing</span></th><th class="table-view-th"><span>Benefits</span></th><th class="table-view-th"><span>Primary Contact</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span>-</span></td><td>0</td><td><span>No benefits yet</span></td><td><span>No contact set</span></td></tr><tr><td><span>-</span></td><td>0</td><td><span>No benefits yet</span></td><td><span>No contact set</span></td></tr><tr><td><span>Harpers</span></td><td>0</td><td><span>No benefits yet</span></td><td><span><a data-tooltip-position="top" aria-label="Jasmine" data-href="Jasmine" href="Jasmine" class="internal-link" target="_blank" rel="noopener nofollow">Jasmine</a></span></td></tr><tr><td><span>Magicians</span></td><td>0</td><td><span>No benefits yet</span></td><td><span><a data-tooltip-position="top" aria-label="Wilma" data-href="Wilma" href="Wilma" class="internal-link" target="_blank" rel="noopener nofollow">Wilma</a></span></td></tr><tr><td><span>-</span></td><td>0</td><td><span>No benefits yet</span></td><td><span>No contact set</span></td></tr><tr><td><span>-</span></td><td>0</td><td><span>No benefits yet</span></td><td><span>No contact set</span></td></tr></tbody></table></div>

```custom-frames
frame: ConfigureInCustomFramesPlugin
```

