---
sidebar_position: 2
---

# token

GET `https://api.akaprofiles.com/token?code=<code>`

:::tip[Typescript Example]
See token function in [akaActions.ts](https://github.com/neilck/aka-autobadge/blob/main/src/app/util/akaActions.ts).
:::

## Description

When AKA Profiles redirects to your badge award page, it will include a unique code as a `code` URL parameter.

e.g. `http://localhost/mybadgeawardpage?code=<code>&redirect=<url>`

To verify the request came from AKA Profiles and to make additional requests, you need to exchange the `code` for a JWT token by calling the `token` endpoint.

### Authorization

Your AKA Profiles API key must be included in the request's header as the Bearer token.

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

### Response

If the call is successful returns a JSON Web Token (JWT) string. Token will expire in 1 hour.

#### Token Verify and Decode

Token can be verified and decoded using AKA Profile's public key.

```typescript

const text = await response.text();

const akaPublicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxij5eYQKBiWppELmT5OY
6fkfaS61ZetXDuDOpGi5VJavbgNKkUzBK9msqwgEWC8Qsj259ZuwvEYrF5i/ir7v
hQ19p1N+VTx9LjNFKMKdUEDYswpae3oHKXAib871IzwY6LbaJlAIXMzH0XGZ6TaA
PDvq0W88JmCE+5VRisTVGRqMU5RXR8EddKgY4XvO6xQyEADceJKtlhc0MfMY9RAB
9hVTp69iyM11mIiEZupyzzGx1LL8evJT6xyD0D+Ao/qJmnRxVjWo7x2Q+4IJgVcA
XG75DqyKPdYgqv3aMb4gLzJC8I0ds7H85bWxmi4ggKIZmhKphH6riu6HDPwMmw1T
DwIDAQAB
-----END PUBLIC KEY-----
`;

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

#### Sample Token Payload

```typescript
{
  session: '7iLP6ZIjcTEwWWvrmadG',
  target: 'kAfAQ38mQ8WFsjheMFCj',
  owner: 'uDlPBaSx8lSkIxUJWleN',
  configParams: [
    { name: 'includeAlias', value: 'false' },
    { name: 'apikey', value: 'test123' }
  ],
  iat: 1718309565,
  exp: 1718313165
}
```

The token payload contains any configuration parameters you have configured on the badge.

See [Configuration Parameters](/docs/help-pages/badge-config#configuration-parameters) for more information.
