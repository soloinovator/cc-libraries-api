---
keywords:
  - Creative Cloud
  - API Documentation
  - JavaScript
  - CC Libraries API
  - Creative Cloud Libraries API
title: Documentation—Creative Cloud Libraries API
description: Documentation top page for the Creative Cloud Libraries API. Get quick starts, tutorials, endpoint references, sample code, and more.
---

<SuperHero slots="image, heading, text" background="rgb(64, 34, 138)"/>

![Hero image](./illustration.png)

# Creative Cloud Libraries API documentation

Libraries are accessible across all of Adobe's tools and offer a powerful way to organize logos, colors, and other assets so they can be easily accessed and re-used. The Libraries API lets you bring Libraries to your products and services.

<Resources slots="heading, links"/>

#### Resources

- [Postman collection & raw API spec repo](https://github.com/AdobeDocs/cc-libraries-api-spec)
- [Code samples repo](https://github.com/AdobeDocs/cc-libraries-api-samples)
- [Documentation repo](https://github.com/AdobeDocs/cc-libraries-api)

<Fragment src="/overview/index.md" />

<Fragment src="/integrate/index.md" />

<Fragment src="/go-live/index.md" />

<Fragment src="/community/index.md" />

| Parameter     | Value                                                  | Required   | Description                                                         |
|---------------|--------------------------------------------------------|------------|---------------------------------------------------------------------|
| grant_type    | refresh_token                                          | yes        | The value must always be  &lt;span style="color:red"&gt;refresh_token&lt;/span&gt;. |
| client_id     | The ID obtained from the OAuth configuration page.     | yes        | Identifies the application.                                         |
| client_secret | The ID obtained from the OAuth configuration page.     | yes        | Authenticates the application.                                      |
| refresh_token | The refresh token received during the previous step.   | yes        |                                                                     | No|