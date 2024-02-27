---
sidebar_position: 3
---

# Authentication

Every API request requires your API KEY in the header.

```typescript
// return header with AKA_API_KEY authorization
const getAuthHeaders = () => {
  // api_key set from .env
  if (!api_key) {
    throw new Error("AKA_API_KEY not set.");
  }
  const authorization = `Bearer ${api_key}`;

  return {
    "Content-Type": "application/json",
    "Authorization": authorization,
  };
};

const response = await fetch(endpoint, {
  method: "POST",
  headers: getAuthHeaders(),
  body: JSON.stringify(postData),
});
```
