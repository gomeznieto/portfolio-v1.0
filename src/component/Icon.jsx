function Icono({ iconContent, color }) {
  if (!iconContent) return null;

  return (
    <div
      className={color}
      dangerouslySetInnerHTML={{ __html: iconContent }}
    />
  );
}

export default Icono;
