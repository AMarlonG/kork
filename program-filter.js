// Minimal concert filtering - no animations, minimal DOM manipulation
(function() {
  let activeSeries = 'all';
  let activeMonth = 'all';

  const filterGroups = document.querySelectorAll('.filter-group');
  const concerts = document.querySelectorAll('.concert-card');

  // Event delegation for filter buttons
  filterGroups.forEach((group, index) => {
    group.addEventListener('click', function(e) {
      if (!e.target.classList.contains('filter-btn')) return;

      const filter = e.target.dataset.filter;

      // Update active button in this group
      group.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('filter-btn--active');
      });
      e.target.classList.add('filter-btn--active');

      // Update active filters
      if (index === 0) {
        activeSeries = filter;
      } else {
        activeMonth = filter;
      }

      // Filter concerts
      filterConcerts();
    });
  });

  function filterConcerts() {
    concerts.forEach(concert => {
      const series = concert.dataset.series;
      const month = concert.dataset.month;

      const seriesMatch = activeSeries === 'all' || series === activeSeries;
      const monthMatch = activeMonth === 'all' || month === activeMonth;

      concert.style.display = (seriesMatch && monthMatch) ? '' : 'none';
    });
  }
})();
