// Minimal concert filtering - no animations, minimal DOM manipulation
(function() {
  // Restore filters from sessionStorage or use default
  let activeSeries = sessionStorage.getItem('kork-filter-series') || 'all';
  let activeMonth = sessionStorage.getItem('kork-filter-month') || 'all';

  const filterGroups = document.querySelectorAll('.filter-group');
  const concerts = document.querySelectorAll('.concert-card');

  // Restore active filter buttons on page load
  restoreActiveButtons();

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
        sessionStorage.setItem('kork-filter-series', filter);
      } else {
        activeMonth = filter;
        sessionStorage.setItem('kork-filter-month', filter);
      }

      // Filter concerts
      filterConcerts();
    });
  });

  function restoreActiveButtons() {
    // Restore series filter button
    filterGroups[0].querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('filter-btn--active');
      if (btn.dataset.filter === activeSeries) {
        btn.classList.add('filter-btn--active');
      }
    });

    // Restore month filter button
    if (filterGroups[1]) {
      filterGroups[1].querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('filter-btn--active');
        if (btn.dataset.filter === activeMonth) {
          btn.classList.add('filter-btn--active');
        }
      });
    }

    // Apply the restored filters
    filterConcerts();
  }

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
