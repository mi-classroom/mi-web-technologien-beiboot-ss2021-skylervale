# Write images metadata

## Status

Implemented

## Context

We need to implement an API to right images metadata.

## Decision

We will use [exiftool-vendored](https://www.npmjs.com/package/exiftool-vendored) to update images metadata.

## Consequences

exiftool-vendored is excelent for writing tags, you only need to undertand and have an idea about the exif tags, here a [list](https://exiftool.org/TagNames/EXIF.html) of different tags names.
