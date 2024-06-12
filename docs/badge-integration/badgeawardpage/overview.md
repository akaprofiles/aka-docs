---
sidebar_position: 1
---

# Overview

Users are redirected to a badge award page when applying for an auto badge.
See previous article for setting this URL for a badge.

Sample code

- [Sample Badge Award Page](https://github.com/neilck/aka-autobadge)
- [AKA Profiles Badges](https://github.com/neilck/aka-awardbadge)

### Session Header

Display the badge/group/offer being applied for.

![AKA Header](/img/header.png)

1. add a div to the top of the page `<div id="akaprofiles-header"></div>`
2. include .js `https://badges.akaprofiles.com/embed/akaprofiles-header.js`
3. link .css `https://badges.akaprofiles.com/embed/akaprofiles-header.css`

Example using Typescript component:

```typescript
"use client";

import { useEffect } from "react";

export default function AkaProfilesHeader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://badges.akaprofiles.com/embed/akaprofiles-header.js";
    script.defer = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://badges.akaprofiles.com/embed/akaprofiles-header.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return <div id="akaprofiles-header"></div>;
}
```

### URL Parameters

When a user is redirected, the URL will contain parameters `https://<path>?code=...&redirect=...`

- Exchange the `code` parameter for a JSON Web Token
- Redirect to url in `redirect` when badge awarded or user cancels
