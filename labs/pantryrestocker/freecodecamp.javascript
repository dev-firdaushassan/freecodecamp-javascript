const pantry = [
  { sku: "A101", name: "Rice", qty: 10, expires: "2027-01-01", zone: "general" },
  { sku: "B202", name: "Milk", qty: 5, expires: "2026-12-01", zone: "fridge" }
];

const rawData = [
  "A101|Rice|4|2027-01-01|general",
  "C303|Beans|8|2028-03-15|pantry",
  "D404|Yogurt|0|2026-08-01|fridge",
  "E505|Pasta|6|2028-05-20"
];

function parseShipment(rawData) {
  const shipment = [];
  const seen = new Set();

  for (const entry of rawData) {
    const [sku, name, qty, expires, zone] = entry.split("|");

    if (seen.has(sku)) continue;
    seen.add(sku);

    shipment.push({
      sku,
      name,
      qty: Number(qty),
      expires,
      zone: zone || "general"
    });
  }

  return shipment;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for (const item of shipment) {
    let type;

    if (item.qty <= 0) {
      type = "discard";
    } else if (pantry.some(p => p.sku === item.sku)) {
      type = "restock";
    } else {
      type = "donate";
    }

    actions.push({
      type,
      item
    });
  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  return pantry.map(item => ({ ...item }));
}

const pantryCopy = clonePantry(pantry);
const shipment = parseShipment(rawData);
const actions = planRestock(pantryCopy, shipment);
const grouped = groupByZone(actions);

console.log(grouped);
