
Example Angular
===============

In this example we will create Angular 10+ application called eform.
```
npm install -g @angular/cli
ng new eform --legacyBrowsers=true
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
```
