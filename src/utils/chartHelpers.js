export const getChartData = (transactions, type) => {
  const filtered = transactions.filter(t => t.type === type);
  const categories = [...new Set(filtered.map(t => t.category))];

  const data = categories.map(cat => {
    const total = filtered
      .filter(t => t.category === cat)
      .reduce((sum, t) => sum + parseFloat(t.amount), 0);
    return total;
  });

  return {
    labels: categories,
    datasets: [
      {
        label: `${type.charAt(0).toUpperCase() + type.slice(1)} by Category`,
        data: data,
        backgroundColor: [
          "#4caf50", "#81c784", "#f44336", "#e57373", "#2196f3", "#64b5f6"
        ],
      },
    ],
  };
};
