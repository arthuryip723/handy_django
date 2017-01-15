export const fetchWorkers = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/workers',
    success
  });
};