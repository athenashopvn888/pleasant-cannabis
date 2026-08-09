import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const chat = await readFile(new URL("../app/delivery/PleasantWebChat.tsx", import.meta.url), "utf8");
const delivery = await readFile(new URL("../app/delivery/DeliveryContent.tsx", import.meta.url), "utf8");

for (const expected of [
  'storeId: "PC"',
  'sod-web-chat:PC',
  'smsConsent',
  'required type="checkbox"',
  'Reply YES to confirm',
  '/api/web-chat/session',
  '/api/web-chat/messages',
  '/api/web-chat/id-review',
  'NEW_CUSTOMER',
  'RETURNING_CUSTOMER',
]) assert.ok(chat.includes(expected), `Missing Web Chat contract: ${expected}`);

assert.ok(delivery.includes("<PleasantWebChat />"), "Delivery page must render Pleasant Cannabis Web Chat");
assert.ok(!chat.includes('storeId: "BLD"') && !chat.includes("sod-web-chat:BLD"), "Reference store identity must not remain");
console.log("Pleasant Cannabis consent Web Chat contract passed.");
