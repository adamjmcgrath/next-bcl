import auth0 from '../../../auth0';

const authHandler = auth0.handleAuth();

export const GET = authHandler;
export const POST = authHandler;
