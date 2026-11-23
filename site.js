const ideas = [
  ['Write a note that only you could write.', 'Tell someone exactly what they did and why it mattered to you.'],
  ['Thank the person who gets there first.', 'Think of who opens the doors, sets up breakfast, or gets the room ready. Tell them what their work makes possible.'],
  ['Make room at your table.', 'Invite someone who’s new to sit with you. Give them an easy out if they already have plans.'],
  ['Follow up on the little thing.', 'Remember something a colleague mentioned last week? Ask how it went, and give them time to answer.'],
  ['Notice the second try.', 'Tell a student exactly what you saw them improve after their first attempt. A quick private word can be enough.'],
  ['Send the thank-you you never sent.', 'Think of someone who helped you when they didn’t have to. Send a short message telling them you still remember it.'],
  ['Pick up one small task.', 'Ask a teammate if there’s one thing you can take off their plate today. Then do it.']
];

const button = document.querySelector('#shuffle');
if (button) {
  let current = 0;
  button.hidden = false;
  button.addEventListener('click', () => {
    const offset = 1 + Math.floor(Math.random() * (ideas.length - 1));
    current = (current + offset) % ideas.length;
    const [title, description] = ideas[current];
    document.querySelector('#idea-title').textContent = title;
    document.querySelector('#idea-text').textContent = description;
  });
}

document.querySelector('#print')?.addEventListener('click', () => window.print());
