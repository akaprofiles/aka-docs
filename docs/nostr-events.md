---
sidebar_position: 2
---

# Nostr Events

### Badge Definition event

AKA Profiles extends the Badge Definition Event (see [NIP-58](https://github.com/nostr-protocol/nips/blob/master/58.md)) with additional `type`, `field` and `a` tags.

Tags used by AKA Profiles:

- `d` tag with unique name of badge.
- `name` tag with a short name for the badge.
- `description` tag that describes the meaning behind the badge.
- `image` tag whose value is the URL of a high-resolution image representing the badge. Uploaded images resized to 1024x1024 pixels.
- `thumb` tag whose value is the URL of a smaller image representing the badge. Uploaded images resized to 128x128 pixels.
- `type` with value set to either "BADGE" or "GROUP". Hints to app how to display this badge.
- zero or more `field` tags that define data that may be returned during badge award. First value is the field label. Optional second value is the field description.
- one of more `a` tags which reference other Badge Definition events. Each referenced Badge Definition event must be awarded before this badge will be awarded.

### Badge Award event

AKA Profiles extends the Badge Award Event (see [NIP-58](https://github.com/nostr-protocol/nips/blob/master/58.md)) with additional `state` and `data` tags.

Tags used by AKA Profiles:

- `a` tag referencing a Badge Definition event.
- One `p` tag referencing the pubkey awarded.
- optional `state` tag which is set to the same arbitrary value passed to AKA Profiles by app that initiated the workflow. Similar to `state` field in OAuth, used by initating app to correlate badge award with original request.
- zero or more `data` tags for data returned by badge issuer. First value is field label, which should match a `field` tag's first value in the referenced Badge Definition event. The second value contains the data.
