function normalizeUnits(manifest) {
  const normalizedManifest = { ...manifest };

  if (normalizedManifest.unit === "lb") {
    normalizedManifest.weight =
      normalizedManifest.weight * 0.45;
    normalizedManifest.unit = "kg";
  }

  return normalizedManifest;
}

function validateManifest(manifest) {
  const errors = {};

  // containerId
  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // destination
  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // weight
  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // unit
  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (
    manifest.unit !== "kg" &&
    manifest.unit !== "lb"
  ) {
    errors.unit = "Invalid";
  }

  // hazmat
  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const validationResult = validateManifest(manifest);

  if (Object.keys(validationResult).length === 0) {
    console.log(
      `Validation success: ${manifest.containerId}`
    );

    const normalized = normalizeUnits(manifest);

    console.log(
      `Total weight: ${normalized.weight} kg`
    );
  } else {
    console.log(
      `Validation error: ${manifest.containerId}`
    );

    console.log(validationResult);
  }
}
