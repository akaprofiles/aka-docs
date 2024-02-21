---
sidebar_position: 3
---

# Workflow Integration

This is a desciption of the how to integrate an application.

### Setup

Some setup steps are required in Developer Dashboard before integration.

- Obtain an API key
- Create a group

### 1. Check Membership

Applications can check a user's permission to allow an action based on group membership.

```
checkMembership?profile=<profile>&group=<group>
```

- Call `checkMembership` endpoint with the profile's `identifier` and the group's `identifer`.
- The group `identifier` is returned when a new group is created in AKA Profiles Developer Dashboard.
- If the user does not yet have a profile, it will be created automatically in the following steps.

> **Note:** See [Nostr Notes](nostr-notes#checking-group-membership) for direct Nostr integration without API call

### 2. Redirect to AKA Profiles

Applications can direct users to obtain group membership by navigating users to:

```
https://akaprofiles.com/e/<group>?state=<state>&pubkey=<pubkey>
```

Parameters are optional.

### `state` parameter

If a `state` query parameter is appended

- value is added to group's badge award event as "state" tag
- value is returned as parameter on application redirect (similar to OAuth)

Allows an application to correlate group badge award with the intial request.

### `pubkey` parameter

Must be a valid 32-byte hex public key (not "npub...").

If a `pubkey` query parameter is appended

- used as the default public key the group badge is awarded to
- users can choose a different public key

Applications should include `pubkey` when it expects an award to an known user.

### 3. Redirect Back to Application

After membership is awarded or user cancels, user is redirected back to the application.

```
<redirectURL>?profile=<profile>&state=<state>
```

- Redirect URL specified during group creation in AKA PRofiles.
- Aplications should call `checkMembership` with returned profile to get result
