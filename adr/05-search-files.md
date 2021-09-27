# Search files

## Status

Implemented

## Context

We want to allow users to filter folder view using a search input.

## Decision

There many possible options to filter the folders/files structure, either in backend or frontend. Our choice was to filter using a filter function that will rewrite data according to the seached text in frontend side.

## Consequences

we used filter function in order to call data only once from the backend and use frontend side to filter the returned data according the keywords entred by the user.
