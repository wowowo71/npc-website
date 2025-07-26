async function loadMembers() {
  const response = await fetch('https://yourdomain.com/path/to/members.json'); // Replace with your real endpoint
  const data = await response.json();

  const container = document.getElementById('members-container');
  container.innerHTML = '';

  data.forEach(member => {
    const div = document.createElement('div');
    div.className = 'member-card';
    div.innerHTML = `<strong>${member.name}</strong><br/>${member.title}<br/>${member.organization}`;
    container.appendChild(div);
  });
}

loadMembers();
