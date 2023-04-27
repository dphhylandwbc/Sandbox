Working title: "This changes everyting" RAR and its impact on Ux development


Abstract: 


Overview:
The whitepaper exampines how RAR, GM API and potentially the Claims Aggregations and SSE - providing a deeper insight into what a user can do. 

The key focus of the paper will be how the adoption of RAR will disrupt how clients currently use coarse grained authorisation request, and with a richer representation of data from the AS the client can move away from Role Base experiences to experiences that render to the exact entitlements of the user. (note impact on approaches for incremental authorisations)

A topic for investigation is how this change also support a more modular architecture, allowing customised user journies without the need for SPA explosion - mirroring the role explosion consequence of the use of Role Based entitlement models. 

A point of contention is the use of the GM API and how this should be used - as a representation of what was consented to, or what can be done at the point in time, essentialy expressing what the RS can do at the time of the request. 

A question which the use or RAR raises is the requirement for GM API - Or how Incremental Authorisation will play into this

To demonstrate this topic, the current process and best practice for the use of OAuth2 in Ux development needs to be investigated and the current constraints on experience customisation etc examined. 

Then a candiate architure proposed using OAuth2 standards more extensively and the benefits this approach brings, resulting in simpler customised user experiences, supporting a more modular architecture and the benefits that that brings (e.g. API/component reuse) and also allowing for 

Finally look at other extensions that further leverage standardised patterns for Authorisation management, (e.g. SSE) and how to close the gap between Public and Condifencial clients.  (There is an arguement/discussion here relating to open standards relating to what can be done with a confidential client and how these same things can be adopted in Public Clients - including SSE, CLient Reg, etc.  )

Outline:



Introduction:





References: 

https://www.ietf.org/archive/id/draft-ietf-oauth-security-topics-22.html
https://www.ietf.org/archive/id/draft-ietf-oauth-browser-based-apps-13.html
https://datatracker.ietf.org/doc/html/draft-ietf-oauth-incremental-authz-04

Other
https://www.pingidentity.com/en/resources/blog/post/oauth2-access-token-multiple-resources-usage-strategies.html


Challenges with RAR.
Incremendal Authorisation will get hard, as the client request would need to send full payload and potentially trigger things again? (Token explosion)
Are there async issues with this?

Best Practice with Grant Management for clients - should Grant_Id be used for public clients? 