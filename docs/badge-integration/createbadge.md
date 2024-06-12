---
sidebar_position: 2
---

# Auto Badges

Create a new auto badge in [Auto Badges](https://app.akaprofiles.com/creator/badges).

## CONFIG Section

### Badge Award Page

User are redirected to the badge award page when applying for the badge.

### Configuration Parameters

Configuration parameters are included inside the JSON web token requested by the badge award page.

It enables the same badge award page to award different badges based on these values.

## DATA Section

### Badge Data Fields

When awarding a badge, the badge award page can optionally include data.

Data Field

- name: unique identifer for the data field
- label: display label when data is being viewed
- description: description when data is being viewed

Note that any data included in badge award is public, and should not include private personally identifiable information.
