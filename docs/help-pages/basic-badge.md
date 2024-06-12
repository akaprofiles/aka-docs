---
sidebar_position: 2
---

# Basic Badge Fields

This page explains the options of the `Auto Badges > Badge` page in AKA Profiles.

Badges in AKA Profiles are based on Nostr [NIP-58](https://github.com/nostr-protocol/nips/blob/master/58.md).

Every badge has

- a name
- a description
- an image

Uploaded images are automatically resized to 1024x1024 for the main image, and 128x128 for the thumbnail image.

A square ratio, transparent-backgound .png image is recommended.

## Sharing the badge

Once published, your badge can be viewed at:

`http://akaprofiles.com/njump/naddr...`

(Get your badge's `Apply for Badge link` on page `Auto Badges > Publish`)

![Screenshot displaying badge](/img/viewbadge.png)

The basic fields are added to the web page's meta tags, to enable SEO and link unfurling.

```html
<head>
  <title>{{Name}}</title>
  <meta name="description" content="{{Description}}" />
  <meta name="application-name" content="AKA Profiles" />
  <meta name="keywords" content="nostr,badge" />
  <meta property="og:title" content="{{Name}}" />
  <meta property="og:description" content="{{Description}}" />
  <meta property="og:image" content="{{1024x1024 resized image link}}" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@nostrprotocol" />
  <meta name="twitter:title" content="{{Name}}" />
  <meta name="twitter:description" content="{{Description}}" />
  <meta name="twitter:image" content="{{1024x1024 resized image link}}" />
</head>
```
