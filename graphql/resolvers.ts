import prisma from "../lib/prisma";

export const resolvers = {
  Query: {
    tasks: async (ctx: { prisma: { task: { findMany: () => any } } }) => {
      return await ctx.prisma.task.findMany();
    },
  },
};
