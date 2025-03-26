---
{"dg-publish":true,"permalink":"/z-templates/old-templates/new-character/","tags":["NPC"],"created":"2025-02-19T20:56:05.000-05:00","updated":"2025-02-24T20:34:09.668-05:00"}
---

<%*
const hasTitle = !tp.file.title.startsWith("NewChar");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter NPC Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

> [!column] Basic Details
>> [!info] Name
>> Home Location: `INPUT[suggester(optionQuery("2-World")):Location]` 
>> Titles:
>> Gender: `INPUT[suggester(optionQuery("#New Character^GenderSelect")):Gender]`
>> Race: `INPUT[suggester(optionQuery("2-World")):Race]`
>> Age: `INPUT[suggester(optionQuery("2-World")):Age]`
>> Height:
>> Weight:
>
>> [!note] Column 3
>> ![Pasted image 20240607151510.png|300](/img/user/z_Assets/Pasted%20image%2020240607151510.png)

| Sessions Appeared |
| ----------------- |

{ .block-language-dataview}

#### Description
`Enter textual description here`

> [!NOTE]- Relationships
> Parents:
> Partner:
> Children:
> Friends:
> Enemies:

> [!NOTE]- Role Details
> Occupation:

> [!NOTE]- Life Details
> Contents

> [!NOTE] Equipment and Belongings
> Contents


Place of Residence
Place of Origin
Place of Demise

Traits and Characteristics:
Unique/Unusual Features

Stats:

Equipment:
Wealth:
Known Skills:
Known Spells:

Known Languages:
Known Magical Teachings:
Known Technlogy/Science:

