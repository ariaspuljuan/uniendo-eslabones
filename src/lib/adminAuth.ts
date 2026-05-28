export const adminSessionCookie = "ue_admin_session";

const sessionMaxAge = 60 * 60 * 8;

function getAdminUsername() {
  return process.env.ADMIN_USERNAME || "adminUE";
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "";
}

function getAdminSecret() {
  return process.env.ADMIN_SESSION_SECRET || "";
}

async function sha256Hex(value: string) {
  const encoded = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", encoded);

  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function getAdminCredentials() {
  return {
    username: getAdminUsername(),
    password: getAdminPassword(),
  };
}

export function getAdminSessionMaxAge() {
  return sessionMaxAge;
}

export async function createAdminSessionToken() {
  const username = getAdminUsername();
  const password = getAdminPassword();
  const secret = getAdminSecret();

  if (!password || !secret) {
    return "";
  }

  return sha256Hex(`${username}:${password}:${secret}`);
}

export async function verifyAdminSession(token?: string) {
  if (!token) {
    return false;
  }

  const expected = await createAdminSessionToken();
  return Boolean(expected) && token === expected;
}
