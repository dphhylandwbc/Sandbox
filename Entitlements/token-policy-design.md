# Token and Policy Design in a modular distributed ecosystem

## Introduction

Movng from a monolithic architecture to a distributed architecture introduces a number of challenges for the design of the token and policy architecture.

The OAuth2 security architecture is designed to support the needs of a distributed ecosystem, and is the defacto standard for the design of security architecture for distributed ecosystems. In the past OAuth2 security architecture was designed to support coarse grained access control, and does not support the needs of fine grained access control, however, with the introduction of Rich Authorisation Requests, and the introduction of the Grant Management API, OAuth2 security architecture now supports the needs of fine grained access control.

New patterns and technologies are required to support this change, and this document describes the patterns and technologies required to support the needs of fine grained access control in a distributed ecosystem.

## What's new

Rcih Authorisation Requests (RAR) and the Grant Management API (GM API) are new patterns and technologies that have been introduced to support the needs of fine grained access control in a distributed ecosystem. RAR is a game changer, as it allows the client to request access to specific resources, and brings fine grained infomration to the client that can then be used to make decisions about the user experience. The GM API compliments RAR, but providing an API that the client can use to enquire and manage the status of the authorisation requests and the status of the access tokens. Combinded, these technolgies provide the client with the information required to make decisions about the user experience, and the abilty for the client to move away from the use of session state and role based access controls, to better support the goals of modualr ecosystem development. 

## Policy Design



## Token Exchange   


## Token Design
