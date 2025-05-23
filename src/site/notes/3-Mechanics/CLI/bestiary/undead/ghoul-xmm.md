---
{"dg-publish":true,"permalink":"/3-mechanics/cli/bestiary/undead/ghoul-xmm/","tags":["ttrpg-cli/compendium/src/5e/xmm","ttrpg-cli/monster/cr/1","ttrpg-cli/monster/environment/swamp","ttrpg-cli/monster/environment/underdark","ttrpg-cli/monster/environment/urban","ttrpg-cli/monster/size/medium","ttrpg-cli/monster/type/undead"],"created":"2025-03-01T17:25:21.252-05:00","updated":"2025-03-25T22:27:48.485-04:00"}
---

# [Ghoul](3-Mechanics/CLI/bestiary/undead/ghoul-xmm.md)
*Source: Monster Manual (2024) p. 132*  

Ghouls rise from the bodies of cannibals and villains with depraved hungers. They form packs out of shared voracity.

## Ghouls

*Eaters of the Dead*

- **Habitat.** Swamp, Underdark, Urban  
- **Treasure.** Any  

Packs of ghouls haunt the rotten corners of the world, ravenously hunting for corpses and those soon to be corpses. These gaunt, animate cadavers with unnaturally long tongues dwell in catacombs and ruins where they devour the contents of graves and paralyze foes with vicious claws.

> [!quote]  
> 
> On a plain of teeth, in a temple of filth, the starving king wastes no morsel. Every coffin a banquet. Every slab a platter. Now is the time of feasting!


```statblock
"name": "Ghoul (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "13"
- !!int "15"
- !!int "10"
- !!int "7"
- !!int "10"
- !!int "6"
"speed": "30 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "1"
"actions":
- "desc": "The ghoul makes two Bite attacks."
  "name": "Multiattack"
- "desc": "Melee Attack: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage\
    \ plus 3 (1d6) Necrotic damage."
  "name": "Bite"
- "desc": "Melee Attack: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing damage.\
    \ If the target is a creature that isn't an Undead or elf, it is subjected to\
    \ the following effect. Constitution Saving Throw: DC 10. Failure: The target\
    \ has the [Paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed) condition\
    \ until the end of its next turn."
  "name": "Claw"
"source":
- "XMM"
```{ #statblock}


## Environment

swamp, underdark, urban