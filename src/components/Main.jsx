export default function Main(props) {
  const { data } = props;

  return (
    <div className="img-container">
      <img
        src={data?.hdurl}
        alt={data.title || "bg-image"}
        className="bg-image"
      />
      ;
    </div>
  );
}
