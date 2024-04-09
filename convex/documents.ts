import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

import { Doc, Id } from "./_generated/dataModel";

export const create = mutation({
  args: {
    title: v.string(),
    parentDocument: v.optional(v.id("documents")),
  },
  handler: async (context, args) => {
    const user = await context.auth.getUserIdentity();

    if (!user) throw new Error("Not Authenticated");

    const userId = user.subject;
    const document = await context.db.insert("documents", {
      title: args.title,
      parentDocument: args.parentDocument,
      userId,
      isArchived: false,
      isPublished: false,
    });

    return document;
  },
});

export const getDocument = query({
  handler: async (context) => {
    const user = await context.auth.getUserIdentity();
    if (!user) throw new Error("Not Authenticated");

    const document = await context.db.query("documents").collect();
    return document;
  },
});
