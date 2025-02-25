---
{"dg-publish":true,"permalink":"/z-templates/template-quest/","tags":["quest"],"created":"2025-02-19T20:56:05.000-05:00","updated":"2025-02-24T20:34:44.787-05:00"}
---


<%*
const hasTitle = !tp.file.title.startsWith("NewQuest");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Quest Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>
# TemplateQuest

> [!infobox]+
> # TemplateQuest
> ## Quest Details
> Type |  Stat |
> ---|---|
> Date Obtained | `INPUT[datePicker:questObtained]` |
> Status | `INPUT[inlineSelect(option(Not Started), option(In Progress), option(Complete)):questStatus]` |
> Quest Giver | `INPUT[suggester(optionQuery(#npc)):questGiver]` |
> Quest Location | `INPUT[suggester(optionQuery(#Category/Settlement)):questLocationObtained]` |
> Session Obtained | `INPUT[suggester(optionQuery(#journal)):questSessionObtained]` |
> Available Loot | `INPUT[suggester(optionQuery(#item)):questLootAvail]` |
> Acquired Loot | `INPUT[suggester(optionQuery(#item)):questLookEarned]` |

Describe the quest here. 

### Quest Objective

- List the objectives here.

### Rewards

- List the rewards here.
