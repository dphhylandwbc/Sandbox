Notes: 


Dig into impact of RAR as it relates to Incremendal Authorisation and GM API standard

Need to get back to focus of POC - but also introduce the modular banking requirement. Modular banking just makes ABAC harder as a distrubuted architecture decouples the business rules in the back end from the Ux, and therefore more challenging for developers to know how the experience should behave. 

This is related to multi channel architecture - which force the distribution of the bus rules. 
Roles make the security architercture of an application easier, as a core set of requirements may applied to back and front ends, but when the access rights become dynamic, the ability to code a back and front end that work in harmony becomes harder (driving requirement here for common applciation policy?)

[Is there some work to here on policy design, which allows policy to cut across domain boundaries?]


Challenges:
- Policy Assertions across a distibuted architecture

# Examples

## Example Enterprise Policy:
- Masking of Critical Data elements
- Minimum Level of Authentication
- Signed tokens

## Example Domain Policy
- Payments: All requests must have been authenticated
- Payments: ...
- Digital: User must have authenticted
- Digital: User must have feature access 

## Example Application Policy Payments
- Amount does not exceed x
- sub must be an account authority


# Deployment Considerations for Policy

Modules need to include Enterprise, Domain and Application Policies. 
Application Policies are cross cutting and not domain specific. 
Application Policies allow consistency in Ux Behaviour to Back-end controls


# Considerations for Digital Authorisation

Public Clients, 