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


## Install

Pour lancer le site
```
yarn
hugo server
```


Pour déployer le site avec Netlify, penser à ajouter la deploy key.


## Params

Dans config.yml
```
params:
```

### Cookie banner

```
cookie_banner:
  enable: true
  blank: true
  page: https://gdpr.eu/cookies/
```
