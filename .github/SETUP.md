# GitHub Actions & Vercel Setup Guide

## Step 1: Push to Your New Repository

First, make sure your code is pushed to your new GitHub repository:

```bash
# Verify remote is set correctly
git remote -v

# If you're on Dev branch (capital D), you might want to rename to dev (lowercase)
# First, push the current branch
git push origin Dev:dev

# Then locally rename it
git branch -m Dev dev

# Push to main as well
git checkout main
git push origin main
```

## Step 2: Set Up Vercel

1. **Install Vercel CLI** (optional, for local setup):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Link your project** (if not already linked):
   ```bash
   vercel link
   ```
   This will prompt you for:
   - Project name
   - Organization
   - Settings

4. **Get your Vercel credentials**:
   - Go to https://vercel.com/account/tokens
   - Create a new token (name it "GitHub Actions" or similar)
   - Copy the token

5. **Get your Organization ID**:
   - Go to https://vercel.com/teams/[your-team]/settings
   - The Org ID is in the URL or settings page

6. **Get your Project ID**:
   - Go to your project in Vercel
   - Settings → General
   - Copy the Project ID

## Step 3: Configure GitHub Secrets

1. Go to your repository: https://github.com/Sarvagyapradhan/Security_Council-Flivo.ai

2. Navigate to **Settings** → **Secrets and variables** → **Actions**

3. Click **New repository secret** and add:

   - **Name**: `VERCEL_TOKEN`
   - **Value**: Your Vercel API token from Step 2.4

   - **Name**: `VERCEL_ORG_ID`
   - **Value**: Your Organization ID from Step 2.5

   - **Name**: `VERCEL_PROJECT_ID`
   - **Value**: Your Project ID from Step 2.6

## Step 4: Configure Branch Protection (Recommended)

To ensure PRs can only be merged when CI passes:

1. Go to **Settings** → **Branches**
2. Add a branch protection rule for `main`
3. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - Select "CI Checks" in the required status checks

## Step 5: Test the Workflow

1. Make a change on the `dev` branch
2. Create a PR from `dev` to `main`
3. Verify that CI checks run
4. Once checks pass, merge the PR
5. Verify that deployment runs automatically

## Troubleshooting

### If Vercel deployment fails:
- Check that all three secrets are set correctly
- Verify the Vercel token has the right permissions
- Check the Actions logs for specific error messages

### If CI checks fail:
- Fix linting errors: `npm run lint`
- Fix TypeScript errors: `npx tsc --noEmit`
- Ensure build succeeds: `npm run build`
