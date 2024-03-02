---
sidebar_position: 4
---

# Badge Data Fields

This page explains the options of the `Hosted Badge > Data` page in AKA Profiles.

If you have enabled the self-issuing of badges (see previous section), and want to return data when awarding your badge, you must specify the data fields here.

This data is public, and becomes part of the user's profile, so personally identifiable information should not be included.

The Label and Description fields are shown to users when viewing the awarded badge.

See the `iplocate` folder in the [award badge source code](https://github.com/neilck/aka-awardbadge/blob/main/src/app/iplocate/award/page.tsx) for an example of how to return data.
