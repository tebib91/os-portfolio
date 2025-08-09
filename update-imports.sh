#!/bin/bash

# Navigate to the project directory
cd /Users/ahmedtabib/Documents/Code/portfolio/os-portfolio

# Find all TypeScript files in the frontend app
find apps/frontend/src -name "*.ts" -type f | while read -r file; do
  # Replace absolute imports with path aliases
  sed -i '' "s|import { \(.*\) } from 'apps/frontend/src/app/core/\(.*\)'|import { \1 } from '@core/\2'|g" "$file"
  sed -i '' "s|import { \(.*\) } from 'apps/frontend/src/app/shared/\(.*\)'|import { \1 } from '@shared/\2'|g" "$file"
  sed -i '' "s|import { \(.*\) } from 'apps/frontend/src/app/features/\(.*\)'|import { \1 } from '@features/\2'|g" "$file"
  sed -i '' "s|import { \(.*\) } from 'apps/frontend/src/app/\(.*\)'|import { \1 } from '@app/\2'|g" "$file"
  sed -i '' "s|import { \(.*\) } from 'apps/frontend/src/environments/\(.*\)'|import { \1 } from '@env/\2'|g" "$file"
  
  # Handle imports without curly braces
  sed -i '' "s|import \([^ {]*\) from 'apps/frontend/src/app/core/\(.*\)'|import \1 from '@core/\2'|g" "$file"
  sed -i '' "s|import \([^ {]*\) from 'apps/frontend/src/app/shared/\(.*\)'|import \1 from '@shared/\2'|g" "$file"
  sed -i '' "s|import \([^ {]*\) from 'apps/frontend/src/app/features/\(.*\)'|import \1 from '@features/\2'|g" "$file"
  sed -i '' "s|import \([^ {]*\) from 'apps/frontend/src/app/\(.*\)'|import \1 from '@app/\2'|g" "$file"
  sed -i '' "s|import \([^ {]*\) from 'apps/frontend/src/environments/\(.*\)'|import \1 from '@env/\2'|g" "$file"
done

echo "Import paths have been updated to use path aliases."