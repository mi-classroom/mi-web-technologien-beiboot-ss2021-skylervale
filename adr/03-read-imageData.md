# Read images metadata

## Status

Implemented

## Context

We need to implement an API to read images metadata.

## Decision

We will use [exifr](https://www.npmjs.com/package/exifr) to read images metadata when user select an image.

## Consequences

Exifr can read most important metadata of an image. Exifr can be implemented in frontend side and also backend side, i our use case we implemented it in server side.
