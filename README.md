# Angupex

Petit projet pour découvrir Angular...

## Récupèration du projet

Pour récupèrer, on utilise Git. On s'assure d'être dans le bon dossier avant :

```
cd C:\Users\Administrateur\Code
git clone https://github.com/SmagaMichael/Angupex.git
```

On n'oublie pas d'installer les dépendances du projet :

```
cd Angupex
npm install
```

Et voilà, on peut lancer le serveur (`http://localhost:4200/`) :

```
ng serve
```

N'oublions pas de lancer l'API :

```
npm install -g json-server
json-server --watch db.json
```

Par la suite, s'il y a des modifications, on peut simplement faire :

```
cd Angupex
git pull
```

## Commandes utiles

Pour générer un composant :

```
ng generate component angupex-list
```