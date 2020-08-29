export const filterNames = (arr) => {
  const filtered = arr.reduce((acc, cur) => {
    if (!acc.includes(cur.vendorName || cur.vendorName !== undefined)) {
      acc.push(cur.vendorName);
    }
    return acc;
  }, []);

  return filtered;
};

// YEAR-MONTH-DAY
export const formatDate = (date) => {
  const months = {
    "01": "Jan.",
    "02": "Feb.",
    "03": "Mar.",
    "04": "Apr.",
    "05": "May",
    "06": "Jun.",
    "07": "Jul.",
    "08": "Aug.",
    "09": "Sep.",
    "10": "Oct.",
    "11": "Nov.",
    "12": "Dec.",
  };
  const [year, month, day] = date.split("-");
  return `${months[month]} ${day}, ${year}`;
};
