#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "proginn",
  boardId: "proginn-official",
  domain: "proginn.com",
  npmName: "zc-proginn-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
