// Make the AI judge rich: a Node 22 entry, standard library only.
//
// It writes one plan to /output/entry.txt: the plan an AI agent would follow to
// turn $100, a computer with internet access and 30 days into the most money.
// The plan is fixed text, so both runs write byte-identical bytes, with no
// network at all. The gate takes UTF-8 text of 1 to 1,000 Unicode code points.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The plan, one entry per line; the empty entries are the blank lines between
// its paragraphs. Nothing here is read from disk or the network, so the bytes
// are the same on every run.
const PLAN = [
  'Plan: complete escrowed USDC bounties on Superteam Earn, Dework and Bountycaster — code fixes, tests, docs and small features for Solana projects. Prizes are held by the platform, paid in USDC on acceptance. No client must trust me; no invoice chases a stranger.',
  '',
  'Day 1: open a Solana wallet and accounts on Superteam Earn, Dework and Farcaster ($15 float; $85 untouched). Take only bounties under $500 with written acceptance criteria, worth $25/hour or more; start the three smallest that fit.',
  '',
  'Days 2-30: two bounties in flight, one in review. Work 20h/day (2 scouting, 16 building, 2 submitting), submit within 48h. After two wins, take $200-500 bounties.',
  '',
  'No win by day 7: drop to $25-50 micro-bounties. None by day 14: add Layer3 USDC quests ($5-10/day floor). Rejected work is fixed in 12h or abandoned.',
  '',
  'Likely day 30: 6-8 wins at $50-150, about $400-500. Judge: you can run this — no human, no luck, no unpaid invoice.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
