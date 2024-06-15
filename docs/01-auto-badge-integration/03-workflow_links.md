---
sidebar_position: 3
---

# Workflow Links

## Create Auto Badge

If you have not already created a badge:

1. Login to [AKA Profiles app](https://app.akaprofiles.com).
2. Click Deveoper Mode, then Auto Badges.
3. Enter a name and click Add.

:::tip[Badges & Profiles]
When adding an auto badge, it is created based on the current profile (pubkey) selected in AKA Profiles.

Because we need to store a private key to award badges, it is recommended you create a seperate profile for your auto badges.

Add a new profile by clicking the avator icon in app bar.

:::

## Get and Set Links

The workflow navigates the user between AKA Profiles pages and integrated `Badge Award Pages`.

<img src="/img/workflow-detailed.png" alt="drawing" width="600"/>

[view full size](/img/workflow-detailed.png)

1. **Get Badge Link** displays the badge and starts the user workflow.
2. Workflow redirects the user to the **Badge Award Page**.
3. Your page redirects back to the workflow using **redirect url parameter**.

The workflow links for the auto badge are available at Auto Badge - Config page.

<img src="/img/badge-config-redirects.png" alt="drawing" width="500"/>

[view full size](/img/badge-config-redirects.png)

- Copy and link to the **Get Badge Link** to start the workflow process.
- Set the **Badge Award Page** URL for the workflow redirect to your page.
  - During development, you can set Badge Award Page to http://localhost
- **redirect url parameter** is provided as url parameter on **Badge Award Page** redirect
  - e.g. `http://localhost/mybadgeawardpage?code=<code>&redirect=<url>`

:::tip[NOSTR TIP]
You can append a `state` URL parameter when linking to the **Get Badge Link**.  
This value will be included to the Nostr Badge Award event in "state" tag.
This enables your app to find the matching badge award event when the user has created a new profile (pubkey) during the workflow.

e.g. https://get.akaprofiles.com/njump/naddr.../?state=12345
:::
