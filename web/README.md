# NXR
This is the http server for NXR, it is based on actionHero, a nodejs api server.

## Quick Start
First of all install
`npm`, `node` and `bower` on your system.
and deploy dependencies,
```
$ npm install
$ bower install
$ git submodule update
```
then run,
```$ npm start```
And then open http://localhost:8080/
Currently there should be a ace editor running there.

## Frontend Development
### static files
public/ serves all static files.
### extra frontend components
If you need extra components, add it by
`bower` if possible. You could manually modify
`bower.json` and then run
```
$ bower install
```
or you could simply do
```
$ bower install --save [component_name]
```

If bower does not work out, you could manually download
extra js lib to `/public/extra`.

After that, modify `public/config_requirejs.js` for the new
component. Then you can introduce compoents via RequireJS in
your javascript file. `public/js/editor.js` could be a
quick reference of how to use RequireJS.

Components added via bower does not need to be added to git repo.
## Backend Development
Add new actions in `actions/`, and then add rules
in `routes.js`.
