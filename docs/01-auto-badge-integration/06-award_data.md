---
sidebar_position: 6
---

# Award Data

Award data is optional.

A **Badge Award Page** can include data when [awarding a badge](/docs/01-auto-badge-integration/04-API%20Calls/02_awardBadge.md) to a user.

:::warning[Privacy Warning]
All award data is public, and should never include personal identifiable information, such a user's name, address, or phone number.
:::

:::info[Example Implementation]  
See [advanced badge example](https://github.com/neilck/aka-autobadge/tree/main/src/app/advanced) for an example implementation in Typescript.
:::

## Setting

Configuration parameters are set under Auto Badge - Data.
<img src="/img/badge-data.png" alt="drawing" width="500"/>

[view full size](/img/badge-data.png)

### Data Fields

- name: unique identifer for the data field
- label: display label when data is being viewed
- description: description when data is being viewed
