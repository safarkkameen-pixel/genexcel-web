import type { NextAuthConfig } from 'next-auth';

// Edge-safe base config: no providers, no Prisma/bcrypt imports.
// Used directly by middleware.ts (which runs on the Edge runtime) and
// extended with the Credentials provider in auth.ts for everywhere else.
export const authConfig: NextAuthConfig = {
  providers: [],
  session: { strategy: 'jwt' },
  pages: { signIn: '/admin/login' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as Record<string, unknown>).id;
        token.role = (user as Record<string, unknown>).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as unknown as Record<string, unknown>).id = token.id as string;
        (session.user as unknown as Record<string, unknown>).role = token.role;
      }
      return session;
    },
  },
};
