import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'

// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://mainnet.helius-rpc.com/?api-key=40957510-6013-4235-996b-36da652db67f"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = '9dvqfdfdWFZc9iUcpV7zHf5FnhcizzJ6kX8475DxEJTE'

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'v2-play.gamba.so'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  // {
  //   mint: new PublicKey(""),
  //   symbol: '???',
  //   name: 'Custom SPL Token',
  //   decimals: 1e9,
  //   baseWager: 1,
  // }
]
