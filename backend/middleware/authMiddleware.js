import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';

export const clerkMiddleware = ClerkExpressWithAuth();
// export const requireAuth = requireSession();
