const formatMoney = (value) => {
  return (
    "R$ " + (parseInt(Number(value) * 100) / 100).toFixed(2).replace(".", ",")
  );
};

export { formatMoney };
