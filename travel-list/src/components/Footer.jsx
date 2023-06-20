const Footer = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Add Something to pack</em>
      </p>
    );
  const itemsNums = items.length;
  const numbPakceds = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((numbPakceds / itemsNums) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "All Ready To Go ✈"
          : `💼 You have ${itemsNums} Items In your list and ${numbPakceds} Items
          Pakced (${packedPercent ? packedPercent : 0} %)`}
      </em>
    </footer>
  );
};

export default Footer