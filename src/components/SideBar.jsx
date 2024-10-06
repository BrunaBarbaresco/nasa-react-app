export default function SideBar(props) {
  const { handleToggleModal, data } = props;

  return (
    <div className="sidebar">
      <div className="bg-overlay" onClick={handleToggleModal}></div>
      <div className="sidebar-content">
        <h2>{data?.title}</h2>
        <div className="description-container">
          <p className="description-title">Description:</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
