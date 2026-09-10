/**
 * whatsappOrder.js
 * -----------------------------------------------------------------------
 * Builds a pre-filled WhatsApp order message from the current cart, and
 * the wa.me link that opens WhatsApp with that message ready to send.
 * Frontend-only: no request is sent until the customer taps "Send" inside
 * WhatsApp themselves.
 * -----------------------------------------------------------------------
 */

export function buildOrderMessage({ brandName, lines, customerName, notes, subtotal }) {
  const itemLines = lines.map((line, index) => {
    const sizePart = line.sizeLabel ? ` (${line.sizeLabel})` : '';
    const lineTotal = line.unitPrice * line.quantity;
    return `${index + 1}. ${line.name}${sizePart} x${line.quantity} - ₹${lineTotal}`;
  });

  const messageParts = [
    `Hello ${brandName}! I'd like to place an order:`,
    '',
    ...itemLines,
    '',
    `Subtotal: ₹${subtotal}`,
  ];

  if (customerName && customerName.trim()) {
    messageParts.push('', `Name: ${customerName.trim()}`);
  }

  if (notes && notes.trim()) {
    messageParts.push(`Notes: ${notes.trim()}`);
  }

  messageParts.push('', 'Please confirm availability and total. Thank you!');

  return messageParts.join('\n');
}

export function buildWhatsAppLink({ whatsappNumber, ...messageArgs }) {
  const message = buildOrderMessage(messageArgs);
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
