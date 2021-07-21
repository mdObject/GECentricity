
Example Angular
===============

In this example we will create Angular 10+ application called eform.
```
npm install -g @angular/cli
ng new eform --legacyBrowsers=true --packageManager=npm --routing=false
cd eform
npm i @mdobject/mdobject
```
To open your Angular application in VS Code, open another terminal (or command prompt) and navigate to the eform folder
```
cd eform
```
and type
```
code .
```

Remove from index.html file:
```
<base href="/">
```
Insert into index.html file:
```
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta http-equiv="PRAGMA" content="NO-CACHE" />
  <meta http-equiv="CACHE-CONTROL" content="NO-CACHE" />
```
Change tsconfig.base.json:
```
    "target": "es5",
    "module": "es2015",
```
Add Material:
    ng add @angular/material

Add new component:
    ng generate component xyz
