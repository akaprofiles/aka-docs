---
sidebar_position: 5
---

# token

GET `https://api.akaprofiles.com/token?code=<code>`

Exchange `code` for a JSON Web token.

**Authorization**

Add your AKA_API_KEY into header as Bearer token.

```typescript
// return header with AKA_API_KEY authorization
const getHeader = (api_key: string) => {
  const authorization = `Bearer ${api_key}`;

  return {
    "Content-Type": "application/json",
    "Authorization": authorization,
  };
};

const response = await fetch(endpoint, {
  method: "GET",
  headers: getHeader(),
});
```

**Response**

If the call is successful returns a JSON Web Token (JWT) string.

```typescript

const text = await response.text();

// decode token
const decoded = jwt.verify(token, akaPublicKey);
const configParams = decoded.configParams;

// configParams:
// [
//   { "name": "string1", "value": "value1" },
//   { "name": "string2", "value": "value2" }
//    ... additional configuration parameters if specified
// ]
...
```

See [Configuration Parameters](/docs/help-pages/badge-config#configuration-parameters) for more information.

See function `token` in the [reference implementation](https://github.com/neilck/aka-awardbadge/blob/main/src/app/actions/akaActions.ts).
