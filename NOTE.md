# NOTE

Subscription, interessante per LiveUX?

Resolver senza query type crasha
Query senza resolver è bene

Parent - e.g. l'oggetto che il DB ha restituito
Params - i params che ho passato
Context - uno per ogni query
Info - la query... (not interesting here)


Q: Get film list con parametri

```gql
{
  getFilmList(limit:10) {
    id
    title
    description
  }
}
```

Q: Get film con parametro complesso

```gql
{
  getFilmList(input:{page: 1, resultPerPage: 10}) {
    id
    title
    description
  }
}
```