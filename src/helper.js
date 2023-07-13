export const getFilteredEvents = (events, filter) => {
  return filter === "Both"
    ? events
    : events.filter(({ eventType }) => eventType === filter);
};

export const getSearchedEvents = (events, search) => {
  return search.trim().length === 0
    ? events
    : events.filter(
        (event) =>
          event.title.toLowerCase().includes(search.toLowerCase()) ||
          event.eventTags.some((tag) =>
            tag.toLowerCase().includes(search.toLowerCase())
          )
      );
};

export const getFormattedDate = (dateStr) => {
  const date = new Date(dateStr);

  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };

  return date.toLocaleString("en-US", options);
};
