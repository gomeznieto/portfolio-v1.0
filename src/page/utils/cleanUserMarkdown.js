function cleanUserMarkdown(md) {
  return md
    .replace(/\n/g, "  \n")                  // salto de línea → <br>
    .replace(/ \*\*/g, "**")                 // quitar espacio antes **
    .replace(/\*\* /g, "**")                 // quitar espacio después **
    .replace(/ \*/g, "*")                    // quitar espacio antes *
    .replace(/\* /g, "*")                    // quitar espacio después *
    .replace(/\[ /g, "[")                    // espacio antes [
    .replace(/ \]/g, "]");                   // espacio después ]
}

export default cleanUserMarkdown;