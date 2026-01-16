# Security Council - Flivo.ai

A React + TypeScript + Vite application for Security Council.

## Branch Strategy

This project uses a two-branch workflow:

- **`dev`**: Development branch where all feature work happens
- **`main`**: Production branch that automatically deploys to Vercel

### Workflow

1. **Development**: Work on the `dev` branch and push your changes
   ```bash
   git checkout dev
   git add .
   git commit -m "Your changes"
   git push origin dev
   ```

2. **Pull Request**: Create a PR from `dev` to `main` when ready to deploy
   - The CI pipeline will automatically run:
     - Linter checks
     - TypeScript type checking
     - Build verification
   - **Merge is only allowed if all checks pass**

3. **Deployment**: Once the PR is merged to `main`:
   - All CI checks run again
   - The application is automatically deployed to Vercel production

## Setup

### Prerequisites
- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
# Frontend only
npm run dev

# Full stack (frontend + server)
npm run dev:full
```

### Build

```bash
npm run build
```

The production build will be in the `dist` directory.

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/ci-cd.yml`) handles:

1. **CI Checks** (on PRs to main):
   - ESLint linting
   - TypeScript type checking
   - Production build verification

2. **Deployment** (on merge to main):
   - All CI checks
   - Automatic deployment to Vercel

### Required GitHub Secrets

For Vercel deployment, you need to set these secrets in your GitHub repository settings:

- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

To get these:
1. Go to Vercel Dashboard → Settings → Tokens
2. Create a new token for GitHub Actions
3. Get your Org ID from Vercel team settings
4. Get your Project ID from Vercel project settings

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Backend**: Express.js
- **Deployment**: Vercel

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run dev:full` - Run both frontend and backend servers
