---
sidebar_position: 2
---

# Workflow

![User Workflow Diagram](/img/workflow.svg)

#### 1. redirect the user to AKA Profiles

The app redirects the user to AKA Profiles to obtain the app's group badge

`https://app.akaprofiles.com/njump/naddr...?state=abc123&pubkey=0E12AC...`

- `naddr...` is the app's group badge identifier
- `state` is an optional parameter, returned in `state` tag of badge award and final redirect URL
- `pubkey` is an optional parameter, formatted as a hex public key

Apps can optionally use `state` to correlate the initial request with the badge award. `state` is included as a `state` tag in the badge award for the badge, as well as returned as a query parameter in the final redirect back to the app.

When the `pubkey` is omitted, users can choose any pubkey for the badge award. When included, only the specified public key can be used. Note that is a convenience, not a security feature, as the user can remove the pubkey from the URL.

#### 2. get required badges

AKA Profiles looks up all the required badges for the group page. Each required badge has a Badge Award page URL configured in AKA Profiles.

#### 3. to 6. display award pages & award badges

For each required badge, its Badge Award page is displayed to the user within a dialog (iframe). If eligible, the Badge Award page makes an API call to AKA Profiles to award the badge.

Awards are stored in the session, and events are not yet published to relays.

#### 7. get users public key

Once all required badges are awarded, AKA Profiles prompts the user to select which public key to save the badge awards to, unless `pukey` was specified on the original redirect.

In either case, AKA Profiles requires the user to prove public key ownership, by either sharing their private key or by signing an arbitrary event using a Nostr Signing Extension. nsecBunker is not yet supported.

#### 8. publish award events

All badge award events, including the group badge award event, are published to the relays specified in Nostr Settings.

#### 9. redirect the user to app

If the group badge is configured with a Redirect URL, the user is redirected back to the app.
If the `state` query parameter was included in the initial request, it will be appended to the redirect URL.

#### 10. verify awards

The app can verify the awards by querying the relays. This is also how an app gets any data included in a badge award.
