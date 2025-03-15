export default function SeriesItem({ serie, onChange }) {
  return (
    <div className="series-item">
      <img src={serie.image_thumbnail_path} alt="Dizi afişi" />
      <div>
        <h3>{serie.name}</h3>
        <button onClick={onChange}>İncele</button>
      </div>
    </div>
  );
}
