Relevant information can be found in `/src/lib/env.mjs`

Currently these envs are defined within this file;
One thing we could do, is use the env.mjs file to consolidate these flags with real environment variables. That would allow us to make the environment variables typesafe, and have the assurance of knowing the `.env` file has all the correct variables, otherwise the build would fail.

These variables would be accessible in server / client code.
