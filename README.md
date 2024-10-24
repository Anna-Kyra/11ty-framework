# Justify your Tech-stack
Deze repo staat in het teken van je eigen tech-stack flow te onderzoeken en te experimenteren. Ik heb voor de volgende tech-stack gekozen.

- Framework: Heb na veel overweging gekozen om in sprint 15 voor het framework 11ty te kiezen.
- Templates: Heb over het algemeen het template file nunjucks gebruikt. Ook heb ik met html en een liquid file gewerkt.
- CMS: Het CMS systeem dat ik heb gebruikt voor deze repo is contentful.
- Deployer: Voor het deployen heb ik netlify gebruikt

## 11ty bevindingen
Het installeren en het builden van dit framework gaat ontzettend snel. Dit is ook mede hun verkoop middel. Het builden gebeurt meestal in 0.12 sec.
De logica achter dit framework is makkelijker om te begrijpen dan andere frameworks.
11ty genereerd gewone html code in de '_site' map  als default, ik heb dit de public map gemaakt. 
Wanneer je iets in een document verandert in je src map code kan je in de terminal precies zien waar die het heeft veranderd.
Het was leerzaam om te zien hoe de server site code eruit ziet en wordt gebuild wanneer je het project runned in de terminal.


11ty wordt veel gebruikt met het maken van blogs en niet voor grote websites. 
Ik had wel wat moeite met het goed runnen van de database in 11ty.

### Pros:
1. Het framework is ontzettend snel
2. Je kan een 100% lighthouse test krijgen met dit framework (wat je niet kan zeggen met andere populaire frameworks)
3. 11ty is gemaakt met JavaScript en NodeJs in gedachten, dus het is bekend voor de meeste FrontEnders
4. Kan met veel templates werken zoals: HTML, nunjucks, MarkDown, Liquid, etc.
5. Server site code wordt met pure html en css gegenereerd.
6. Collections zijn erg handig om pagina's te groeperen

### Cons:
1. Is meer gemaakt voor statische website's, dus daar draait de docs ook meer om.
2. Wordt meer voor personelijke projecten gebruikt

## Contentful bevindingen
Heb voor contentful gekozen, omdat het project al deze headless CMS gebruikte.
Ik heb er overegens geen goede ervaring hiermee gehad. 
Het helpt ook niet mee als er al veel mee gesleuteld is aan dit cms. 
De code van de vorige 2e jaars komt niet helemaal overeen met wat er in de paginatie van het cms te zien is.
Je moet ook toegang hebben voor meerdere dingen. 
11ty en contentful zijn allebij niet gemaakt met elkaar in gedachten, dus het was erg lastig om hier goede documentatie van te vinden op 1 na.

### Pros:
1. Veel documentatie
   
### Cons:
1.  Leerfase is veel hoger dan bij andere cms systemen
2.  Geen goede ervaring
3.  Het is overzichtelijk, maar ook weer niet
4.  Kost geld als je meer dan 5 users hebt ($300 per maand voor 20 users)

## Netlify bevindingen
De deploy link verbind snel. Heb hiervoor cyclic en onrender gebruikt. 


## Conclusie
### 11ty
Ik heb een prettige ervaring gehad met het 11ty framework. Alles werkt supper snel, hier staan ze ook bekent om. Dit framework genereert pure HTML, CSS in de server site. Dit betekent dat het een lightweight framework is die ook een 100% lighthouse test kan hebben. 

### Contentful
Vind contentful niet om aan te raden. In iedergeval niet voor wat kleinere bedrijven die grote websites willen maken. Dit CMS kan behoorlijk oplopen in verband met geld wanneer je meer dan 5 users wilt hebben.

### Netlify
1. 

## Bronnen
### Tutorials
> Tutorials die ik heb gevolgd.
- Kevin Powell tutorial: https://www.youtube.com/watch?v=4wD00RT6d-g&list=PLwhCq3ZFGOGgZDg_pnVh15gUfYqWnlWRs
- 11ty blog tutorial: https://www.youtube.com/watch?v=kzf9A9tkkl4

### Documentatie
- Getting started, 11ty docs: https://www.11ty.dev/docs/
- Frontmatter, 11ty docs: https://www.11ty.dev/docs/data-frontmatter/
- Contentful met 11ty, Contentful docs: https://www.contentful.com/blog/integrating-contentful-with-eleventy-create-static-sites/
- - > Uitleg over hoe je dynamische data van contentful in 11ty kan zetten.
- Contentful met 11ty, ianjmacintosh project: https://www.ianjmacintosh.com/articles/getting-content-from-contentful-into-eleventy/
- - > Dit project is gebaseerde op de andere contentful documentatie, maar met iets andere code/documentatie
