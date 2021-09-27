# Search files

## Status

Implemented

## Context

We want to allow users to download the folders and its containt as a zip file.

## Decision

There many possible options to download any directory and zip it, our choice was for [archiver](https://www.npmjs.com/package/archiver) to archive a directory and download it as zip file

## Consequences

we used archiver because it designed to use native node as its data transport.
