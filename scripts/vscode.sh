git fetch --prune

# Activate nvm
[ -s "${HOME}/.nvm/nvm.sh" ] && \. "${HOME}/.nvm/nvm.sh"
pnpm install
pnpm dev
