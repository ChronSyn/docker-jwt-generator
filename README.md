### Why make this?

There didn't exist a decent solution for generating JWT tokens via Terraform. The solutions on offer either didn't work on some platforms (e.g. M1 Macs), or didn't provide any documentation.

There were some docker solutions out there which could generate a JWT, but they would enforce some of their own properties (such as issuer) onto the token.

By generating the token to stdout, it allows the value to be used inside terraform via github.com/matti/terraform-shell-resource

The original use-case for this library was for automating deployment of the Supabase stack via Terraform.

**Uses packages:**

- jsonwebtoken: ^8.5.1,
- yargs: ^17.3.1
- Node: 14.17.0

### Usage example (outside Docker/Standalone)

`node index.js --role="anon" --secret="a-very-long-strong-that-is-at-least-thirty-two-characters-in-length" --issuer="supabase"`

### Usage example (via Docker)

`docker run --rm ghcr.io/chronsyn/docker-jwt-generator:master -e --role="anon" --secret="a-very-long-strong-that-is-at-least-thirty-two-characters-in-length" --issuer="supabase"`

This will:

- Run the chronsyn/docker-jwt-generator image as a container
- Pass these variables to the running container:
  - role: "anon"
  - secret: "a-very-long-strong-that-is-at-least-thirty-two-characters-in-length"
  - issuer: "some_issuer"
- Print the generated JWT to stdout
- Exit the container and remove it

The generated JWT has the following properties preset on it:

- "iat": Math.floor(new Date().getTime() / 1000)
- "exp": 4903804800

The expiry equates to 'Fri, 25 May 2125 00:00:00 GMT'
