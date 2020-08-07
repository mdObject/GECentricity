
Example Angular
===============

In this example we will create Angular 10+ application called eform.
```
npm install -g @angular/cli
ng new eform --legacyBrowsers=true
cd eform
npm i @mdobject/mdobject
```

Remove from index.html file:
```
<base href="/">
```
Insert into index.html file:
```
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
```
