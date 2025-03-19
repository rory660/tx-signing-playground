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
AABGAAgAAAAAAAAAAAEBQlagPqBLFOFXI4dkAFp8D2yZkjEfJNBemWSAfeBwhCi30H0cAAAAAAAAIM2KSG0DEctFw/gsvY6ejtXuYwrev8My5gj5cYJ5ToJmAA8ObGlmaS1sb2NhbC1hcGkACAAAAAAAAAAAAAgAAAAAAAAAAAAKCW1heWFuTUNUUAArKjB4MWV...
```

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

- `pnpm start`
