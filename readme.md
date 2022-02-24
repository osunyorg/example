# Osuny hugo template


## Hugo
Pour installer Hugo
```
brew install hugo
```
Mise à jour avec
```
brew upgrade hugo
```


## Install

Pour cloner avec le thème
```
git clone git@github.com:noesya/osuny-hugo-template.git --recurse-submodules
```
Pour récupérer le thème
```
git pull --recurse-submodules
```


## Launch

Pour lancer le site
```
yarn
yarn watch
```


Pour déployer le site avec Netlify, penser à ajouter la deploy key.


## Params

Dans configs/_default/params.yml
```
keycdn: https://osuny-1b4da.kxcdn.com
cookie_banner:
  enable: true
  blank: true
  page: https://gdpr.eu/cookies/
```
