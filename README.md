# Intro
This app provides a *service* for registering names associated to GPS coordinates, similar to how a DNS registrar provides a service for registering names that are associated to IP addresses. In the case of DNS, these names are called TLDs (top-level domains, or more commonly, just "domains").

In our app, these names are called **[name]**.

All **[names]** registered live in the same namesapce, are publicly accessible, and must be unique. That is, no two people can register `home`, just like no two people can register `example.com`.

However, different names can be made to point to the same GPS coordinate. The analogy with the DNS service is the same: there can be any number of domain names pointing to the same server (IP address), that is, anyone can register `<my_personal_domain>.com` and make it point to Google's servers. Likewise, different names registered by different people can point to the same coordinate.

# User Experience and Service Mechanics
Users can sign up for a free account to register **[name]**s and assign them coordinates. Thats it.

The syntax for referring to a registered **[name]** in the context of this service is via an underscore: `_home` would supposedly point to someone's home, and `_companyHQ` would supposedly point to that company's headquarters.

Developers wanting to integrate this service with their apps can query our RESTful interface. For example, developers working on a messaging app can look for occurances of the pattern `_<text>` in a user submitted string and query the API. If the API returns a succesful response, the developers can then turn that part of the string into a link to the corresponding coordinate on a map.

This service can also be integrated with ecommerce sites. Instead of having users enter their addresses into various fields (which is quite cumbersome), they may allow users to write a single **[name]** which will greatly speed up the checkout process.
```
Insert shipping info |vs.| Insert **[name]**: _myHouse
Addr Line1:            |
Addr Line2:            |
Zip Code:              |
etc...                 |
```

# Suggestion for Legacy
Implement an app (i.e. chat client, ecommerce site, other) that integrates this service.

# Technical Documentation
All the specs you need to succesfully complete Legacy are in this section

## Server Routes
