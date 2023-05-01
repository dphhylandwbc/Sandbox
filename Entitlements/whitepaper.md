# Working title: "This changes everyting" RAR and its impact on Ux development


## Abstract: 


## Overview:
The whitepaper exampines how RAR, GM API and potentially the Claims Aggregations and SSE - providing a deeper insight into what a user can do. 

The key focus of the paper will be how the adoption of RAR will disrupt how clients currently use coarse grained authorisation request, and with a richer representation of data from the AS the client can move away from Role Base experiences to experiences that render to the exact entitlements of the user. (note impact on approaches for incremental authorisations)

A topic for investigation is how this change also support a more modular architecture, allowing customised user journies without the need for SPA explosion - mirroring the role explosion consequence of the use of Role Based entitlement models. 

A point of contention is the use of the GM API and how this should be used - as a representation of what was consented to, or what can be done at the point in time, essentialy expressing what the RS can do at the time of the request. 

A question which the use or RAR raises is the requirement for GM API - Or how Incremental Authorisation will play into this

To demonstrate this topic, the current process and best practice for the use of OAuth2 in Ux development needs to be investigated and the current constraints on experience customisation etc examined. 

Then a candiate architure proposed using OAuth2 standards more extensively and the benefits this approach brings, resulting in simpler customised user experiences, supporting a more modular architecture and the benefits that that brings (e.g. API/component reuse) and also allowing for 

Finally look at other extensions that further leverage standardised patterns for Authorisation management, (e.g. SSE) and how to close the gap between Public and Condifencial clients.  (There is an arguement/discussion here relating to open standards relating to what can be done with a confidential client and how these same things can be adopted in Public Clients - including SSE, CLient Reg, etc.  )

## Outline:



## Introduction:


## How it works today
Back Ends Trust Front Ends

Roles Keep it simple but limit modular and result in API explosion due to trust concerns

Role based security limits modular - build once and support many journeys - role based limit that

Dynamic Authorisation means more complexity - the front end needs to do more work to understand what the back end might to. 

Currently there are a few elements that drive user experience - and inconsitency in the sources of attributes use to drive experience (check this with John)

the use of OAuth2 is not pervasice through the experience, much is based on session profile attributes. (meaning its session based) 

## What's new

Modular

OAuth2

RAR

CIBA

GMAPI

Consent based grants

New Open Security standards now support Fine Grained Access control, this allows the scopeing and communication of exactly what resources a user has to the client, while still following the principle of least privilege. 

## How does it work


## What are the challenges

To date, OAuth and role based security is typically static, slowly changing. There are rules that execute in the logic of the application the return errors or adapt control, but the security tokens shared with the experience are coarse grained, with much of the informatin and logic used to render the experience taken from session profile. With Dynamic policy and fine grained acccess the decision that is applied to the API Access is dynamic, and what is or may be represented in the token wont necessarily be what is enforced by policy. 

We are in the process of evolution of security access, moving from a state where security protocols operate at the coarse grained level, to a state where the security protocols operate at the fine grained level. This is a significant change in the way that security is managed, and will have a significant impact on the way that applications are designed and built. It will allow developers to source the information required to render the experience from the AS, and not from the session profile. However further changes are required to standards and the patterns used to implement them to allow for this. 

The use of Grant Management API to refresh the Access token. The GM API standard was written to support the needs of Open Banking Schemes, such as Australia's Consumer Data Right, and the UK's Open Banking, it assumes that the client is a confidential client, and that the client is a trusted component of the ecosystem. This is not the case for Public Clients, and the GM API standard does not support the needs of Public Clients. However, the GM API standard does provide a mechanism for the client to refresh the access token, and this mechanism can be used by Public Clients to refresh the access token. Additonally the information returned by the GM API is not a representation of what the user has consented to, but rather a representation of what the user can do at the time of the request. This is a subtle but important difference, and one that is not well understood. Although not intended by the authors, the GM API acts like an introspection endpoint, and can be used to determine what the user can do at the time of the request.

Internet Banking websites are often designed around the caching of resource ownership in session state, which is then used by the front end to render the experience. This is a common pattern, and one that is used to improve performance. However, policy based dynamic access control in a distributed ecosystem does not support this pattern, and the front end needs to source the information required to render the experience across the domains it interacts with, and not from session state. This is a significant change in the way that applications are designed and built, and will require a change in technologies and patterns used to build applications, and how and where information required by policy is sourced.

Policy design - definition 

A change in data caching patterns -
Policy design for a distrbuted modular ecosystem will drive how information is cached. Currently session state is used to cache information, but in a sateless, modular, distributed environment, using session state to cache information will only increase the complexity of the solution. Using OAuth2 security architecture to support fine grained access control across a modular, distrbuted ecosystem will require a change to the caching strategy used by organisations. It will require a move away from the use of session state, to a model which caches pointers to resources across the domains it interacts with, and has cache sources closely located to the Policy Decision point used by the Authorisation Server. 

A ldap renesance - 
Transition away from a Session State based architecture to a stateless architecture will require a change in the way that information is sourced. Currently session state is used to cache information, but in a sateless, modular, distributed environment, using session state to cache information will only increase the complexity of the solution. Using OAuth2 security architecture to support fine grained access control across a modular, distrbuted ecosystem will require a change to the caching strategy used by organisations. It will require a move away from the use of session state, to a model which caches pointers to resources across the domains it interacts with, and has cache sources closely located to the Policy Decision point used by the Authorisation Server.

LDAP databases were designed to provide a high performance response to enquiry on resources across a distributed network. They are designed to be highly available, and to provide a high performance response to queries. This is perfectly suited to the needs of a distributed, modular, stateless ecosystem, and will provide a high performance response to queries on resources across the domains it interacts with, from both within an organisation but also from external organisations, through schemes such as Open Banking.




Authorisation Performance


Transition Design


## What are the benefits


## What can you do?

Resource ownership and consent delegation 

Grant change events

## References: 

https://www.ietf.org/archive/id/draft-ietf-oauth-security-topics-22.html
https://www.ietf.org/archive/id/draft-ietf-oauth-browser-based-apps-13.html
https://datatracker.ietf.org/doc/html/draft-ietf-oauth-incremental-authz-04

Other
https://www.pingidentity.com/en/resources/blog/post/oauth2-access-token-multiple-resources-usage-strategies.html


Challenges with RAR.
Incremendal Authorisation will get hard, as the client request would need to send full payload and potentially trigger things again? (Token explosion)
Are there async issues with this?

Best Practice with Grant Management for clients - should Grant_Id be used for public clients? 