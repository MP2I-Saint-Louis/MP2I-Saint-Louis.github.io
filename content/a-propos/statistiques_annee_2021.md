+++
title = "Statistiques sur la première édition de la filière MP2I"
description = "Spécialités, Mixité, Parcoursup... on essaye d'être exhaustif."
sort_by = "date"
paginate_by = 5
date = 2021-12-04
updated = 2022-08-31
weight = 25
[extra]
author = "T. Brillaud"
toc = true
+++

{{ outdated() }}

Pour cette première année pour la classe de MP2I, le lycée Saint-Louis accueille 48 élèves de toute la France. 
Ici sont rassemblées quelques statistiques sur la classe.

## Mixité

La gente féminine est représentée par 6 filles, pour une représentation de 12,5% sur l'ensemble de la classe.

Leur pouvoir est cependant assez grand car une place de délégué leur est réservée. De plus, une place leur est explicitement réservée également dans les différentes équipes de l'association sportive (AS), *notamment Volley et Ultimate*.

## Spécialités de Terminale

La majorité des étudiants proviennent d'une Terminale spécialité Mathématiques/Numérique et Science de l'Informatique (NSI) *près de 55% pour être plus précis*.
Mais également 45% d'étudiants avec un Bac général spécialité Mathématiques/Physique.

## Spécialités de Première

Dès lors que l'enseignement était proposé dans leur lycée, nos étudiants ont suivi l'enseignement de NSI en première et pour une majorité en Terminale également.

{% chart() %}
{
  "type": "Bar",
  "xLabel": "Spécialités étudiées en Première",
  "yLabel": "Nombre d'étudiants",
  "data": {
    "labels": ["Maths", "Physique", "NSI", "SI", "Arts", "LCA", "HLP", "LCE/LCR", "SVT", "SES", "Biologie"],
    "datasets": [
      {
        "data": [20, 17, 16, 2, 0, 0, 1, 1, 2, 1, 1]
      }
    ]
  },
  "options": {
    "yTickCount": 2,
    "dataColors": ["Red", "Blue", "Green", "Yellow", "Pink", "Orange", "Purple", "Cyan", "Magenta", "Lime"]
  }
}
{% end %}

{% note() %}
Ces résultats sont incomplets et ne représentent pas la totalité des étudiants de la MP2I Saint-Louis. Il
seront peut-être complétés l'an prochain.
{% end %}

## Mathématiques et ses 3 niveaux

Parmi nos étudiants de cette première année, une majorité d'entre eux a suivi l'option Mathématiques expertes.
Les réprésentants des enseignement Mathématiques (Spé) seule sont infimes (aux alentours de 10%). L'option Mathématiques complémentaire n'est pas représentée parmi les élèves de Saint Louis.

L'option Mathématiques expertes est très encouragée pour son atout pour vos dossiers Parcoursup mais également pour ne pas être en retard une fois dans le supérieur. En effet, il démontre votre sérieux et implication quant aux Mathématiques, qui est la matière prépodérante en classe préparatoire.

Plus d'information dans le post [Enseignements](@/a-propos/enseignements.md).

## Abandons

Au jour d'aujourd'hui, il n'y a eu que deux abandons en tout début d'année, dont un remplacé.
Ce chiffre devrait augmenter dans les mois à venir.

***EDIT***: Un abandon de plus au 13 décembre 2021. Nous lui souhaitons le meilleur pour la suite.  
***EDIT2***: Trois personnes nous ont également quitté à la fin de l'année, nous leur souhaitons également 
une bonne continuation dans leurs études.

{% chart() %}
{
  "type": "Line",
  "yLabel": "Compte",
  "data": {
    "labels": ["Pré-Rentrée", "Rentrée", "Septembre", "Octobre", "Novembre", "Décembre", "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet"],
    "datasets": [
      {
        "label": "Étudiants",
        "data": [48, 47, 47, 47, 47, 46, 46, 46, 46, 46, 46, 46, 43]
      },
      {
        "label": "Démissionaires",
        "data": [0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 6]
      }
    ]
  }
}
{% end %}


## Parcoursup 

En premier lieu, il est à noter que la filière MP2I du Lycée Saint-Louis figure parmi les formations avec le plus faible taux d'admission à la session Parcoursup 2021. 

>   Lycée Louis Le Grand (Paris) : 4,28%  
>   Lycée Saint-Louis (Paris) : 9,09%  
>   Lycée Hoche (Versailles) : 9,18%  
>
> ~ *D'après ParcourSup 2021 et [Prépas MP2I](https://prepas-mp2i.github.io/mp2i/)*

### Phase principale

Contrairement à d'autres filières et/ou lycées, la MP2I Saint Louis n'a adressé que 48 lettres d'admission le 27 mai 2021 (Jour d'ouverture de la Phase Principale), soit le nombre d'élèves dans le classe.

Le dernier appelé au 14 juillet 2021 (fin de la phase principale de ParcourSup 2021) était le 278ème.
La liste d'attente ne comptait plus que 74 personnes.

### Phase des désistements

À J-7 de la rentrée, le rang du dernier appelé était le 291ème.

### Après la rentrée

D'après les données à notre connaissance, le dernier appelé depuis la liste d'attente était ~350ème.
*Sous réserve de confirmation.*

### Évolution des listes d'attente au cours du temps (TODO)

{{ incomplete() }}

## Motivations d'entrée en MP2I (TODO)

{% chart() %}
{
  "type": "Radar",
  "xLabel": "Motivations",
  "yLabel": "Personne",
  "data": {
    "labels": ["Les Maths", "La Physique", "L'Informatique théorique", "L'informatique pratique", "Je faisais de l'Info depuis longtemps", "Pour éviter la Chimie", "Ne pas me professionnaliser", "Intégrer une\nGrande École d'Ingé", "Intégrer une Grande École", "Je voulais aller en MPSI originellement", "Je ne savais pas quoi faire d'autre"],
    "datasets": [
      {
        "data": [16, 9, 13, 13, 4, 5, 6, 7, 3, 2, 1]
      }
    ]
  },
  "options": {
    "showLabels": true
  }
}
{% end %}

*Ces données sont incomplètes et ne représentent pas l'intégralité de la classe.*

### Choix provisoires pour la seconde année

À ce jour, l'intégralité des étudiants ont continué l'Option Informatique au second semestre, leur permettant d'entrer en MPI/MPI*[^1] l'an prochain.

## Régime Interne/Interne-Exterbe/DP/Externe (TODO)

{{ incomplete() }}

## Logements (et transports) (TODO)

{{ incomplete() }}

## Provenance (TODO)

{{ incomplete() }}

<iframe width="100%" height="400px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/fr/map/provenancemp2isl-2022-01_705522?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"></iframe><p><a href="//umap.openstreetmap.fr/fr/map/provenancemp2isl-2022-01_705522">Voir en plein écran</a></p>

D'après les données de [Parcoursup 2021](https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?disjunctive.fili&refine.fili=CPGE&refine.form_lib_voe_acc=Classe%20pr%C3%A9paratoire%20scientifique&refine.fil_lib_voe_acc=MP2I&refine.g_ea_lib_vx=Lyc%C3%A9e%20Saint-Louis%20(6%C3%A8me)), 11% des intégrés étaient dans un lycée de l'académie de Paris et 46% étaient scolarisés dans un lycée d'Ile-de-France.

## Langues vivantes

### En Terminale

### En Première Année

Majoritairement Anglais en LV1. Quelques courageux font également une seconde langue comme Espagnol, Chinois ou encore Allemand.

On compte aussi parmi nous quelques LV1 Allemand et LV1 Espagnol.

## Résultats au baccalauréat

{{ incomplete() }}

Finalement, quelques statistiques sur les résultats au baccalauréat des étudiants de MP2I.

{% note() %}

Ces résultats sont à prendre avec du recul. On rappelle qu'il n'y a pas eu d'épreuve de spécialité, ni de français pour l'édition 2021. De plus, en règle générale, ces résultats ne suffisent pas à vous classer, sur les quelques 400 élèves sur quelques miliers de dossiers, qui se veront offrir une place à Saint-Louis, l'écart varie encore beaucoup.

{% end %}

D'après les données de [Parcoursup 2021](https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?disjunctive.fili&refine.fili=CPGE&refine.form_lib_voe_acc=Classe%20pr%C3%A9paratoire%20scientifique&refine.fil_lib_voe_acc=MP2I&refine.g_ea_lib_vx=Lyc%C3%A9e%20Saint-Louis%20(6%C3%A8me)), 91% des intégrés ont obtenu une mention Très Bien au baccalauréat générale, les 9% restant ont quant à eux obtenu la mention Bien.

* * *

[^1]: Est officielle l'ouverture d'une classe double MPI/MPI* à la rentrée 2022 au lycée Saint-Louis.

*Mis à jour le {{ last_update() }}*