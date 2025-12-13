---
{"dg-publish":true,"permalink":"/z-templates/template-location/","created":"2025-02-23T14:16:24.000-05:00","updated":"2025-03-13T20:23:57.760-04:00"}
---

>[!infobox]
>###### Groups Associated
> 
{ .block-language-dataview}
>###### NPCs Associated
  > 
{ .block-language-dataview}
> ###### Sessions Appeared
> ```dataview 
> LIST WITHOUT ID file.link  
> FROM "1-Session Journals"  
> WHERE contains(file.outlinks, this.file.link)  
> SORT file.name ASC