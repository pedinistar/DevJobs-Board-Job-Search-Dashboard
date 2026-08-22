const RemoteFilter = ({ isRemote, setIsRemote }) => {
  return (
    <div>
      <input
        value={isRemote}
        onChange={(e) => setIsRemote(e.target.checked)}
        id="remote"
        type="checkbox"
      />
      <label htmlFor="remote">Remote only</label>
    </div>
  );
};

export default RemoteFilter;
