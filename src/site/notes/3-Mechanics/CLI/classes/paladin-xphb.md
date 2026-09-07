---
{"dg-publish":true,"permalink":"/3-mechanics/cli/classes/paladin-xphb/","tags":["ttrpg-cli/class/paladin","ttrpg-cli/compendium/src/5e/xphb"],"created":"2025-03-01T19:28:42.000-05:00","updated":"2025-03-01T19:28:42.000-05:00","dg-note-properties":{"obsidianUIMode":"preview","cssclasses":"json5e-class","tags":["ttrpg-cli/class/paladin","ttrpg-cli/compendium/src/5e/xphb"],"aliases":["Paladin"]}}
---

# Paladin
*Source: Player's Handbook (2024) p. 108*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='5'></th><th colspan='5'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class="level">Level</th><th class="pb">PB</th><th class="feature">Features</th><th class="value">Channel Divinity</th><th class="value">Prepared Spells</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th><th class="spellSlot">5th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class="level">1st</td><td class="pb">+2</td><td class="feature"><a href='#Lay%20on%20Hands%20(Level%201)'>Lay on Hands</a>, <a href='#Spellcasting%20(Level%201)'>Spellcasting</a>, <a href='#Weapon%20Mastery%20(Level%201)'>Weapon Mastery</a></td><td class="value">⏤</td><td class="value">2</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">2nd</td><td class="pb">+2</td><td class="feature"><a href='#Fighting%20Style%20(Level%202)'>Fighting Style</a>, <a href='#Paladin%27s%20Smite%20(Level%202)'>Paladin's Smite</a></td><td class="value">⏤</td><td class="value">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">3rd</td><td class="pb">+2</td><td class="feature"><a href='#Channel%20Divinity%20(Level%203)'>Channel Divinity</a>, <a href='#Paladin%20Subclass%20(Level%203)'>Paladin Subclass</a></td><td class="value">2</td><td class="value">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">4th</td><td class="pb">+2</td><td class="feature"><a href='#Ability%20Score%20Improvement%20(Level%204)'>Ability Score Improvement</a></td><td class="value">2</td><td class="value">5</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">5th</td><td class="pb">+3</td><td class="feature"><a href='#Extra%20Attack%20(Level%205)'>Extra Attack</a>, <a href='#Faithful%20Steed%20(Level%205)'>Faithful Steed</a></td><td class="value">2</td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">6th</td><td class="pb">+3</td><td class="feature"><a href='#Aura%20of%20Protection%20(Level%206)'>Aura of Protection</a></td><td class="value">2</td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">7th</td><td class="pb">+3</td><td class="feature"><a href='#Subclass%20Feature%20(Level%207)'>Subclass Feature</a></td><td class="value">2</td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">8th</td><td class="pb">+3</td><td class="feature"><a href='#Ability%20Score%20Improvement%20(Level%208)'>Ability Score Improvement</a></td><td class="value">2</td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">9th</td><td class="pb">+4</td><td class="feature"><a href='#Abjure%20Foes%20(Level%209)'>Abjure Foes</a></td><td class="value">2</td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">10th</td><td class="pb">+4</td><td class="feature"><a href='#Aura%20of%20Courage%20(Level%2010)'>Aura of Courage</a></td><td class="value">2</td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">11th</td><td class="pb">+4</td><td class="feature"><a href='#Radiant%20Strikes%20(Level%2011)'>Radiant Strikes</a></td><td class="value">3</td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">12th</td><td class="pb">+4</td><td class="feature"><a href='#Ability%20Score%20Improvement%20(Level%2012)'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">13th</td><td class="pb">+5</td><td class="feature"></td><td class="value">3</td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">14th</td><td class="pb">+5</td><td class="feature"><a href='#Restoring%20Touch%20(Level%2014)'>Restoring Touch</a></td><td class="value">3</td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">15th</td><td class="pb">+5</td><td class="feature"><a href='#Subclass%20Feature%20(Level%2015)'>Subclass Feature</a></td><td class="value">3</td><td class="value">12</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">16th</td><td class="pb">+5</td><td class="feature"><a href='#Ability%20Score%20Improvement%20(Level%2016)'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">12</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class="level">17th</td><td class="pb">+6</td><td class="feature"></td><td class="value">3</td><td class="value">14</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class="level">18th</td><td class="pb">+6</td><td class="feature"><a href='#Aura%20Expansion%20(Level%2018)'>Aura Expansion</a></td><td class="value">3</td><td class="value">14</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class="level">19th</td><td class="pb">+6</td><td class="feature"><a href='#Epic%20Boon%20(Level%2019)'>Epic Boon</a></td><td class="value">3</td><td class="value">15</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td></tr>
> <tr class="class-progression"><td class="level">20th</td><td class="pb">+6</td><td class="feature"><a href='#Subclass%20Feature%20(Level%2020)'>Subclass Feature</a></td><td class="value">3</td><td class="value">15</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td></tr>
> </tbody></table>{ #class-progession}


## Hit Points

- **Hit Dice**: 1d10 per Paladin level
- **Hit Points at First Level:** 10 + CON
- **Hit Points at Higher Levels:** add 6 OR 1d10 + CON  (minimum of 1)

## Starting Paladin

- **Saving Throw Proficiencies**: Charisma, Wisdom
- **Skill Proficiencies**: *Choose 2:* [[3-Mechanics/CLI/rules/skills#Athletics\|Athletics]], [[3-Mechanics/CLI/rules/skills#Insight\|Insight]], [[3-Mechanics/CLI/rules/skills#Intimidation\|Intimidation]], [[3-Mechanics/CLI/rules/skills#Medicine\|Medicine]], [[3-Mechanics/CLI/rules/skills#Persuasion\|Persuasion]], or [[3-Mechanics/CLI/rules/skills#Religion\|Religion]]
- **Weapon Proficiencies**: Simple weapons and Martial weapons
- **Armor Training**: [[3-Mechanics/CLI/rules/item-types#Light Armor\|Light armor]], [[3-Mechanics/CLI/rules/item-types#Medium Armor\|Medium armor]], [[3-Mechanics/CLI/rules/item-types#Heavy Armor\|Heavy armor]], and [[3-Mechanics/CLI/items/shield-xphb\|Shields]]

**Starting Equipment:** *Choose A or B:* (A) [[3-Mechanics/CLI/items/chain-mail-xphb\|Chain Mail]], [[3-Mechanics/CLI/items/shield-xphb\|Shield]], [[3-Mechanics/CLI/items/longsword-xphb\|Longsword]], 6 [[3-Mechanics/CLI/items/javelin-xphb\|Javelins]], [[3-Mechanics/CLI/items/holy-symbol-xphb\|Holy Symbol]], [[3-Mechanics/CLI/items/priests-pack-xphb\|Priest's Pack]], and 9 GP; or (B) 150 GP

## Multiclassing Paladin

- **Weapon Proficiencies**: Martial weapons
- **Armor Training**: [[3-Mechanics/CLI/rules/item-types#Light Armor\|Light armor]], [[3-Mechanics/CLI/rules/item-types#Medium Armor\|Medium armor]], [[3-Mechanics/CLI/items/shield-xphb\|Shields]]

## Paladin

Paladins are united by their oaths to stand against the forces of annihilation and corruption. Whether sworn before a god's altar, in a sacred glade before nature spirits, or in a moment of desperation and grief with the dead as the only witnesses, a Paladin's oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.

Paladins train to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the injured, smite their foes, and protect the helpless and those who fight at their side.

Almost by definition, the life of a Paladin is an adventuring life, for every Paladin lives on the front lines of the cosmic struggle against annihilation. Fighters are rare enough among the ranks of a world's armies, but even fewer people can claim the calling of a Paladin. When they do receive the call, these blessed folk turn from their former occupations and take up arms and magic.

## Class Features

### Lay on Hands (Level 1)

Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you finish a [[3-Mechanics/CLI/rules/variant-rules/long-rest-xphb\|Long Rest]]. With that pool, you can restore a total number of [[3-Mechanics/CLI/rules/variant-rules/hit-points-xphb\|Hit Points]] equal to five times your Paladin level.

As a [[3-Mechanics/CLI/rules/variant-rules/bonus-action-xphb\|Bonus Action]], you can touch a creature (which could be yourself) and draw power from the pool of healing to restore a number of [[3-Mechanics/CLI/rules/variant-rules/hit-points-xphb\|Hit Points]] to that creature, up to the maximum amount remaining in the pool.

You can also expend 5 [[3-Mechanics/CLI/rules/variant-rules/hit-points-xphb\|Hit Points]] from the pool of healing power to remove the [[3-Mechanics/CLI/rules/conditions#Poisoned\|Poisoned]] condition from the creature; those points don't also restore [[3-Mechanics/CLI/rules/variant-rules/hit-points-xphb\|Hit Points]] to the creature.

### Spellcasting (Level 1)

You have learned to cast spells through prayer and meditation. See "chapter 7" for the rules on spellcasting. The information below details how you use those rules with Paladin spells, which appear in the Paladin spell list later in the class's description.

#### Spell Slots

The Paladin Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a [[3-Mechanics/CLI/rules/variant-rules/long-rest-xphb\|Long Rest]].

#### Prepared Spells of Level 1+

You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Paladin spells. [[3-Mechanics/CLI/spells/heroism-xphb\|Heroism]] and [[3-Mechanics/CLI/spells/searing-smite-xphb\|Searing Smite]] are recommended.

The number of spells on your list increases as you gain Paladin levels, as shown in the Prepared Spells column of the Paladin Features table. Whenever that number increases, choose additional Paladin spells until the number of spells on your list matches the number in the Paladin Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 5 Paladin, your list of prepared spells can include six Paladin spells of level 1 or 2 in any combination.

If another Paladin feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Paladin spells for you.

#### Changing Your Prepared Spells

Whenever you finish a [[3-Mechanics/CLI/rules/variant-rules/long-rest-xphb\|Long Rest]], you can replace one spell on your list with another Paladin spell for which you have spell slots.

#### Spellcasting Ability

Charisma is your spellcasting ability for your Paladin spells.

#### Spellcasting Focus

You can use a [[3-Mechanics/CLI/items/holy-symbol-xphb\|Holy Symbol]] as a [[3-Mechanics/CLI/rules/variant-rules/spellcasting-focus-xphb\|Spellcasting Focus]] for your Paladin spells.

### Weapon Mastery (Level 1)

Your training with weapons allows you to use the [weapon mastery properties](3-Mechanics/CLI/rules/variant-rules/weapon-mastery-properties-xphb.md) of two kinds of weapons of your choice with which you have proficiency, such as [[3-Mechanics/CLI/items/longsword-xphb\|Longswords]] and [[3-Mechanics/CLI/items/javelin-xphb\|Javelins]].

Whenever you finish a [[3-Mechanics/CLI/rules/variant-rules/long-rest-xphb\|Long Rest]], you can change the kinds of weapons you chose. For example, you could switch to using the [weapon mastery properties](3-Mechanics/CLI/rules/variant-rules/weapon-mastery-properties-xphb.md) of [[3-Mechanics/CLI/items/halberd-xphb\|Halberds]] and [[3-Mechanics/CLI/items/flail-xphb\|Flails]].

### Fighting Style (Level 2)

You gain a Fighting Style feat of your choice. Instead of choosing one of those feats, you can choose the option below.

### Paladin's Smite (Level 2)

You always have the [[3-Mechanics/CLI/spells/divine-smite-xphb\|Divine Smite]] spell prepared. In addition, you can cast it without expending a spell slot, but you must finish a [[3-Mechanics/CLI/rules/variant-rules/long-rest-xphb\|Long Rest]] before you can cast it in this way again.

### Channel Divinity (Level 3)

You can channel divine energy directly from the Outer Planes, using it to fuel magical effects. You start with one such effect: Divine Sense, which is described below. Other Paladin features give additional Channel Divinity effect options. Each time you use this class's Channel Divinity, you choose which effect from this class to create.

You can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a [[3-Mechanics/CLI/rules/variant-rules/short-rest-xphb\|Short Rest]], and you regain all expended uses when you finish a [[3-Mechanics/CLI/rules/variant-rules/long-rest-xphb\|Long Rest]]. You gain an additional use when you reach Paladin level 11.

If a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature.

### Divine Sense (Level 3)

As a [[3-Mechanics/CLI/rules/variant-rules/bonus-action-xphb\|Bonus Action]], you can open your awareness to detect Celestials, Fiends, and Undead. For the next 10 minutes or until you have the [[3-Mechanics/CLI/rules/conditions#Incapacitated\|Incapacitated]] condition, you know the location of any creature of those types within 60 feet of yourself, and you know its creature type. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the [[3-Mechanics/CLI/spells/hallow-xphb\|Hallow]] spell.

### Paladin Subclass (Level 3)

You gain a Paladin subclass of your choice. A subclass is a specialization that grants you features at certain Paladin levels. For the rest of your career, you gain each of your subclass's features that are of your Paladin level or lower.

> [!note] Breaking Your Oath
> 
> A Paladin tries to hold to the highest standards of conduct, but even the most dedicated are fallible. Sometimes a Paladin transgresses their oath.
> 
> A Paladin who has broken a vow typically seeks absolution, spending an all-night vigil as a sign of penitence or undertaking a fast. After a rite of forgiveness, the Paladin starts fresh.
> 
> If your Paladin unrepentantly violates their oath, talk to your DM. Your Paladin should probably take a more appropriate subclass or even abandon the class and adopt another one.{ #breaking-your-oath}


### Ability Score Improvement (Level 4)

You gain the [[3-Mechanics/CLI/feats/ability-score-improvement-xphb\|Ability Score Improvement]] feat or another feat of your choice for which you qualify. You gain this feature again at Paladin levels 8, 12, and 16.

### Extra Attack (Level 5)

You can attack twice instead of once whenever you take the [[3-Mechanics/CLI/rules/actions#Attack\|Attack]] action on your turn.

### Faithful Steed (Level 5)

You can call on the aid of an otherworldly steed. You always have the [[3-Mechanics/CLI/spells/find-steed-xphb\|Find Steed]] spell prepared.

You can also cast the spell once without expending a spell slot, and you regain the ability to do so when you finish a [[3-Mechanics/CLI/rules/variant-rules/long-rest-xphb\|Long Rest]].

### Aura of Protection (Level 6)

You radiate a protective, unseeable aura in a 10-foot [Emanation [Area of Effect]](3-Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md) that originates from you. The aura is inactive while you have the [[3-Mechanics/CLI/rules/conditions#Incapacitated\|Incapacitated]] condition.

You and your allies in the aura gain a bonus to saving throws equal to your Charisma modifier (minimum bonus of +1).

If another Paladin is present, a creature can benefit from only one Aura of Protection at a time; the creature chooses which aura while in them.

### Subclass Feature (Level 7)

You gain a feature from your Paladin Subclass.

### Ability Score Improvement (Level 8)

You gain the [[3-Mechanics/CLI/feats/ability-score-improvement-xphb\|Ability Score Improvement]] Feat or another feat of your choice for which you qualify.

### Abjure Foes (Level 9)

As a [[3-Mechanics/CLI/rules/actions#Magic\|Magic]] action, you can expend one use of this class's Channel Divinity to overwhelm foes with awe. As you present your [[3-Mechanics/CLI/items/holy-symbol-xphb\|Holy Symbol]] or weapon, you can target a number of creatures equal to your Charisma modifier (minimum of one creature) that you can see within 60 feet of yourself. Each target must succeed on a Wisdom saving throw or have the [[3-Mechanics/CLI/rules/conditions#Frightened\|Frightened]] condition for 1 minute or until it takes any damage. While [[3-Mechanics/CLI/rules/conditions#Frightened\|Frightened]] in this way, a target can do only one of the following on its turns: move, take an action, or take a [[3-Mechanics/CLI/rules/variant-rules/bonus-action-xphb\|Bonus Action]].

### Aura of Courage (Level 10)

You and your allies have [[3-Mechanics/CLI/rules/variant-rules/immunity-xphb\|Immunity]] to the [[3-Mechanics/CLI/rules/conditions#Frightened\|Frightened]] condition while in your Aura of Protection. If a [[3-Mechanics/CLI/rules/conditions#Frightened\|Frightened]] ally enters the aura, that condition has no effect on that ally while there.

### Radiant Strikes (Level 11)

Your strikes now carry supernatural power. When you hit a target with an attack roll using a Melee weapon or an [[3-Mechanics/CLI/rules/variant-rules/unarmed-strike-xphb\|Unarmed Strike]], the target takes an extra `1d8` Radiant damage.

### Ability Score Improvement (Level 12)

You gain the [[3-Mechanics/CLI/feats/ability-score-improvement-xphb\|Ability Score Improvement]] Feat or another feat of your choice for which you qualify.

### Restoring Touch (Level 14)

When you use Lay On Hands on a creature, you can also remove one or more of the following conditions from the creature: [[3-Mechanics/CLI/rules/conditions#Blinded\|Blinded]], [[3-Mechanics/CLI/rules/conditions#Charmed\|Charmed]], [[3-Mechanics/CLI/rules/conditions#Deafened\|Deafened]], [[3-Mechanics/CLI/rules/conditions#Frightened\|Frightened]], [[3-Mechanics/CLI/rules/conditions#Paralyzed\|Paralyzed]], or [[3-Mechanics/CLI/rules/conditions#Stunned\|Stunned]]. You must expend 5 [[3-Mechanics/CLI/rules/variant-rules/hit-points-xphb\|Hit Points]] from the healing pool of Lay On Hands for each of these conditions you remove; those points don't also restore [[3-Mechanics/CLI/rules/variant-rules/hit-points-xphb\|Hit Points]] to the creature.

### Subclass Feature (Level 15)

You gain a feature from your Paladin Subclass.

### Ability Score Improvement (Level 16)

You gain the [[3-Mechanics/CLI/feats/ability-score-improvement-xphb\|Ability Score Improvement]] Feat or another feat of your choice for which you qualify.

### Aura Expansion (Level 18)

Your Aura of Protection is now a 30-foot [Emanation [Area of Effect]](3-Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md).

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. [[3-Mechanics/CLI/feats/boon-of-truesight-xphb\|Boon of Truesight]] is recommended.

### Subclass Feature (Level 20)

You gain a feature from your Paladin Subclass.