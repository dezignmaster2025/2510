
function LoadingIndicator({ label = "Loading..." }) {
  return (
    <div className="loading-indicator">
      <div className="spinner" />
      <span>{label}</span>
    </div>
  );
}

export default LoadingIndicator;
