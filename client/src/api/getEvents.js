export const getEvents = async () => {
  const response = await fetch("/api/events");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};
