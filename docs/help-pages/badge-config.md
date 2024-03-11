---
sidebar_position: 3
---

# Badge Configuration

This page explains the options of the `Hosted Badge > Config` page in AKA Profiles.

To enable the self-issuing of badges, AKA Profiles needs to know where to redirect users applying for your badge.

## Badge Award Page

Shown below is the page a user sees when applying for the `Not-a-Robot` badge.

![Screenshot display applyURL](/img/apply.png)

The badge's `Badge Award Page`, is displayed in an `<iframe>`.

See the `notabot` folder in the [badge award source code](https://github.com/neilck/aka-awardbadge/blob/main/src/app/notabot/page.tsx) to learn how to award a badge using AKA Profiles API.

## Badge Identifier

`Badge Identifier` acts an unique identifier and should not be changed after the badge has been published.
For more info search `d tag value` in [NIP-01](https://github.com/nostr-protocol/nips/blob/master/01.md).

## Configuration Parameters

Configuration parameters let you re-use the same `Badge Award Page` for different badges by specifying different parameters.

Because these parameters may contain sensitive information, they are kept secret and only made available to Badge Award Page through an authenticated API call.

See the `iplocate` folder in the [award badge source code](https://github.com/neilck/aka-awardbadge/blob/main/src/app/iplocate/page.tsx) for an example of how to use configuration parameters.
