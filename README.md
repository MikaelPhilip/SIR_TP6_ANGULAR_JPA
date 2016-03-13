# TP6: AngularJS et Intégration avec JPA

Ce tp à pour but:
-D'utiliser les outils pour créer rapidement un projet.
-De faire un liens entre un webService Java (ici il s'agit de faire un lien avec Opower: https://github.com/MikaelPhilip/SIR_TPJ2EE )

Tp réalisé par PHILIP Mikael et JELASSI Seiffedine.

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Utilisation d'outil

Nous avons donc utiliser un ensemble d'outils pour avoir une structures rapidement:

Yeoman pour la generation de structures et l'import de l'ensemble des librairies/outils.
Npm pour récuperer des librairies côté serveur.
Bower pour récuperer des librairies côté client.
Grunt pour les builds et pour lancer le serveur.

Note: pour certaine tâches/url (notament sur des ports différent) on va deleguer des tâches à d'autres services (ici Opower JAVA sur le port 8080): il faut configurer un proxy dans le Gruntfile.js pour cela car sans le proxy une sécurité va empecher l'execution (car un serveur ne peux lire que du code qui vient de son serveur).

## Liens avec le serveur

Une fois la base de l'application construite nous avons fait quelques fonctions avec AngularJS qui vont manipuler le webService JAVA.Nous avons ici:

A l'url http://localhost:9000/dataHeater.html : la liste de Chauffages (appel avec un Get d'une url qui appelle une méthode dans le WebService JAVA pour avoir la liste en JSON)
A l'url http://localhost:9000/dataPerson.html : la liste de Personnes (appel avec un Get d'une url qui appelle une méthode dans le WebService JAVA pour avoir la liste en JSON)
A l'url http://localhost:9000/subscribe.html : un formulaire pour rajouter une personne (appel avec un POST (avec passage de paramêtre) d'une url qui appelle une méthode dans le WebService JAVA pour rajouter une personne)

Pour voir l'ensemble des notes de ce tp vous pouvez consulter le fichier NoteTp.txt
