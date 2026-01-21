// Demo: por ahora solo “simula” búsqueda.
// Luego lo conectamos a JSON o a un endpoint.
document.getElementById("btnSearch")?.addEventListener("click", () => {
  const q = document.getElementById("hubSearch")?.value?.trim();
  if (!q) return alert("Escribe algo para buscar 🙂");
  alert(`Búsqueda demo: "${q}" (luego lo conectamos a data real)`);
});

// Atajo tipo ⌘K / Ctrl+K
window.addEventListener("keydown", (e) => {
  const isK = (e.key || "").toLowerCase() === "k";
  if ((e.ctrlKey || e.metaKey) && isK) {
    e.preventDefault();
    document.getElementById("hubSearch")?.focus();
  }
});
