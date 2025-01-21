function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    section.style.display = 'none'; // Hide all sections
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'flex'; // Show the selected section
  }
}
