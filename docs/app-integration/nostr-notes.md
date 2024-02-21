---
sidebar_position: 4
---

# Nostr Notes

Nostr clients can integrate without creating a dependency on AKA Profiles API

### Checking Group Membership

Applications can check a user's permission to allow an action based on group membership.

Groups are published to relays as [NIP-58 Badge Definition](https://github.com/nostr-protocol/nips/blob/master/58.md) events, with these addtional tags:

```
  ["type", "GROUP"],
  ["a", "30009:<issuer-pubkey>:<badge-d-tag-value>"]
```

- "type" tag provides hint to AKA Profiles to treat badge a group for display
- There are one or more "a" tags, each referencing a required badge by Badge Defintion event

Check for membership by filtering for Badge Award events associated with a group's Badge Definition event.

If the group was created in AKA Profiles:

- click "View raw event" under PUBLISH tab to get necessary Badge Definition event values for the filter
- Badge Award events are published to the same relays as the Badge Definition event, specified under Nostr Settings > RELAYS
