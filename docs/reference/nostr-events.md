---
sidebar_position: 1
---

# Nostr Events

Badge definitions and awards are based on Nostr events.

### Badge Definition event

AKA Profiles extends the Badge Definition Event (see [NIP-58](https://github.com/nostr-protocol/nips/blob/master/58.md)) with additional `type`, `field` and `a` tags.

Tags used by AKA Profiles:

- `d` tag with the unique name of the badge.
- `name` tag with a short name for the badge.
- `description` tag that describes the meaning behind the badge.
- `image` tag whose value is the URL of a high-resolution image representing the badge. Uploaded images resized to 1024x1024 pixels.
- `thumb` tag whose value is the URL of a smaller image representing the badge. Uploaded images resized to 128x128 pixels.
- `type` with the value set to either "BADGE" or "GROUP". Hints to the app on how to display this badge.
- zero or more `field` tags that define data that may be returned during badge award. The first value is the unique field name. The optional second value is the field label for display. The optional third value is the field description for display.
- one of more `a` tags which reference other Badge Definition events. Each referenced Badge Definition event must be awarded before this badge will be awarded.

### Badge Award event

AKA Profiles extends the Badge Award Event (see [NIP-58](https://github.com/nostr-protocol/nips/blob/master/58.md)) with additional `state` and `data` tags.

Tags used by AKA Profiles:

- `a` tag referencing a Badge Definition event.
- One `p` tag referencing the pubkey awarded.
- optional `state` tag which is set to the same arbitrary value passed to AKA Profiles by app that initiated the workflow. Similar to `state` field in OAuth, used by initating app to correlate badge award with original request.
- zero or more `data` tags for data returned by the badge issuer. First value is the field name, which should match a `field` tag's first value in the referenced Badge Definition event. The second value contains the data.
