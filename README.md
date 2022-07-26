# Metabase Embed In React

## Node Backend

### Prerequisite

Replace TOKEN with Metabase Embedding Secret Key in `backend/app.js` line 7

### To run the local node server

``` 
cd backend
npm install
npm run dev
```

This will start the server on [localhost:8080](http://localhost:8080/)

It only has one api right now which is http://localhost:8080/question/`ID` where we replace `ID` with question's id we want to fetch.\
Please note that only published questions can be rendered

## React UI

### To run the local react server

```
cd ui
npm start
```

This will start the server on [localhost:3000](http://localhost:3000/)