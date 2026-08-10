import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const chat = await readFile(new URL("../app/delivery/PleasantWebChat.tsx", import.meta.url), "utf8");
const delivery = await readFile(new URL("../app/delivery/DeliveryContent.tsx", import.meta.url), "utf8");

for (const expected of [
  'storeId: "PC"',
  'sod-web-chat:PC',
  'smsConsent',
  'required type="checkbox"',
  'workflowVersion: "READY_V1"',
  'I agree to receive one READY delivery-link text for this order.',
  '/api/web-chat/session',
  '/api/web-chat/messages',
  '/api/web-chat/id-review',
  'NEW_CUSTOMER',
  'RETURNING_CUSTOMER',
  '/api/web-chat/phone',
  'phoneConfirmation: replacementPhoneConfirmation',
  'phoneVersion: conversation.phoneVersion',
  'START ANOTHER ORDER',
  '/api/web-chat/order-cycle',
  'requestId: crypto.randomUUID()',
  'securely retained for future identity and address verification',
]) assert.ok(chat.includes(expected), `Missing Web Chat contract: ${expected}`);

assert.ok(delivery.includes("<PleasantWebChat />"), "Delivery page must render Pleasant Cannabis Web Chat");
assert.ok(!chat.includes('storeId: "BLD"') && !chat.includes("sod-web-chat:BLD"), "Reference store identity must not remain");
assert.match(chat, /new URLSearchParams\(window\.location\.search\)\.get\("liveOrder"\) !== "1"/);
assert.match(chat, /window\.setTimeout\(\(\) => setOpen\(true\), 0\)/);
assert.doesNotMatch(`${chat}\n${delivery}`, /href=["'{`]sms:|DELIVERY TEXT NUMBER|Reply YES|YES confirmation/i);
console.log("Pleasant Cannabis consent Web Chat contract passed.");
