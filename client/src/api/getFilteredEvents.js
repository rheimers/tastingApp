export const getFilteredEvents = async (query) => {
  const response = await fetch(`/api/events?title_like=${query}`);
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  console.log(result);
  return result;
};
