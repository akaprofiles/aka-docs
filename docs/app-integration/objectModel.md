---
sidebar_position: 2
---

# Object Model

## Profiles

Description

A profile represents a user's pseudo identity and consist of badges. A user can have multiple profiles.

Attributes

- **Identifier:** String which uniquely identifies the profile. Always starts with "npub".
- **Display Name:** Profile name to display
- **Image:** Avatar image to display
- **Badges:** Badges awarded to this profile

## Badges

Description

A badge is defined by an issuer, and is awarded to a profile. Applications can check the awarded badges for a user's profile.

Attributes

- **Identifier:** Unique identifier for the badge. Always starts wtih "naddr".
- **Name:** The name of the badge.
- **Description:** Short description of the badge.
- **Image:** Image of the badge.
- **Issuer:** Pubkey of the issuer.
- **Award URL:** Link to issuer's web page where user can take action to be awarded the badge.
- **Data Fields:** When awarded, data associated with the badge award.

## Groups

Description

A group is defined by an application, and consists of one or more badges that determine the group's eligiblity criteria. Elibigle profiles are assigned group membership through the awarding of the group's badge.

Attributes

- **Identifier:** Unique identifier for the group. Always starts with "naddr".
- **Name** The name of the group.
- **Description:** Short description of the group.
- **Image:** Image of the group.
- **Owner:** Pubkey of the group owner.
- **Required Badges:** List of badges that determine the group's eligiblity criteria.
- **Redirect URL:** Application URL to redirect users after becoming a member.
