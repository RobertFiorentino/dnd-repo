```dataview 
> LIST WITHOUT ID file.link  
> FROM "1-Session Journals"  
> WHERE contains(file.outlinks, this.file.link)  
> SORT file.name ASC
 >```