# Transaction Signing Playground
Sign abritrary web3 transactions

## Support 
- Just Sui right now
  
## Usage

- `pnpm install`
- Populate `config/.env` with your private key and target chain:
```
TARGET_CHAIN=sui
SUI_PRIVATE_KEY=123
```

- Add your calldata to `config/calldata.txt` in as a base64 string:
```
AABGAAgAAAAAAAAAAAEBQlagPqBLFOFXI4dkAFp8D2yZkjEfJN...
```git

You should have the following structure:
```
config
 | .env
 | .env.defaults
 | .env.schema
 | calldata.txt
src
package.json
...
```

- `pnpm start`
