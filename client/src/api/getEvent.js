export const getEvent = async (id) => {
  const response = await fetch(`/api/events/${id}`);
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};
